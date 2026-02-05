const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT_DIR = __dirname;
const EXPECTED_LANGS_GLOBAL = new Set(['en', 'pt', 'ja', 'es', 'fr', 'de', 'x-default']);
const EXPECTED_LANGS_BILINGUAL = new Set(['en', 'pt', 'x-default']);
const EXPECTED_LANGS_ENGLISH_ONLY = new Set(['en', 'x-default']);

function findHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(findHtmlFiles(filePath));
        } else if (file.endsWith('.html')) {
            results.push(filePath);
        }
    });
    return results;
}

function checkFile(filePath) {
    const issues = [];
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const $ = cheerio.load(content);

        // Pular páginas de redirecionamento
        const titleText = $('title').text().trim();
        if (titleText === 'Redirecting...' || titleText === 'Redirecionando...') {
            return issues; // sem issues
        }

        // Páginas que não devem ter anúncios (páginas legais, contato, etc.)
        const noAdsPages = [
            'Política de Privacidade', 'Privacy Policy', 'Termos de Uso', 'Terms of Use',
            'Contato', 'Contact', 'Sobre', 'About', 'Disclaimer', 'Aviso Legal',
            'Legal Notice', 'Sobre Nós', 'About Us'
        ];
        const isNoAdsPage = noAdsPages.some(noAdsTitle => titleText.includes(noAdsTitle)) ||
                            filePath.includes('404.html') ||
                            filePath.includes('calendar-hwa') ||
                            filePath.includes('Documentos\\') && (
                                filePath.includes('about.html') ||
                                filePath.includes('aviso-legal.html') ||
                                filePath.includes('Contact.html') ||
                                filePath.includes('Contato.html') ||
                                filePath.includes('disclaimer.html') ||
                                filePath.includes('Política de privacidade.html') ||
                                filePath.includes('PrivacyPolicy.html') ||
                                filePath.includes('Sobre.html') ||
                                filePath.includes('Termos de uso.html') ||
                                filePath.includes('TermsofUse.html')
                            );

        // Verificar <title>
        const titleElements = $('title');
        if (titleElements.length === 0) {
            issues.push('Faltando: <title>');
        } else if (titleElements.length > 1) {
            issues.push(`<title> duplicado: ${titleElements.length} elementos`);
        } else if (!titleText) {
            issues.push('Vazio: <title>');
        } else {
            const lang = $('html').attr('lang') || 'en';
            let titleMax = 70; // default for EN, PT, ES
            if (['de', 'fr'].includes(lang)) {
                titleMax = 75;
            } else if (lang === 'ja') {
                titleMax = 35;
            }
            if (titleText.length > titleMax) {
                issues.push(`Title muito longo: ${titleText.length} caracteres (máximo ${titleMax})`);
            }
        }

        // Verificar <h1>
        const h1Elements = $('h1');
        if (h1Elements.length === 0) {
            issues.push('Faltando: <h1>');
        } else if (h1Elements.length > 1) {
            issues.push(`<h1> duplicado: ${h1Elements.length} elementos`);
        } else {
            const h1Text = h1Elements.first().text().trim();
            if (h1Text.length > 85) {
                issues.push(`H1 muito longo: ${h1Text.length} caracteres (máximo 85)`);
            }
        }

        // Verificar <meta name="robots">
        const robotsMeta = $('meta[name="robots"]');
        if (robotsMeta.length) {
            const content = robotsMeta.attr('content');
            if (content && content.includes('noindex')) {
                issues.push('Página com noindex (verificar se é redirecionamento)');
            }
        }

        // Verificar <meta name="description">
        const descMeta = $('meta[name="description"]');
        if (descMeta.length > 0) {
            const descContent = descMeta.attr('content') || '';
            const lang = $('html').attr('lang') || 'en';
            let minDesc = 120;
            let maxDesc = 160;
            if (['de', 'fr'].includes(lang)) {
                maxDesc = 165;
            } else if (lang === 'ja') {
                minDesc = 70;
                maxDesc = 120;
            }
            if (descContent.length < minDesc) {
                issues.push(`Descrição muito curta: ${descContent.length} caracteres (mínimo ${minDesc})`);
            } else if (descContent.length > maxDesc) {
                issues.push(`Descrição muito longa: ${descContent.length} caracteres (máximo ${maxDesc})`);
            }
        } else {
            issues.push('Faltando: <meta name="description">');
        }

        // Detectar script de nav para determinar idiomas esperados
        let expectedLangs = null; // null significa não verificar hreflang
        const navScripts = [];
        $('script[src]').each((i, elem) => {
            const src = $(elem).attr('src');
            if (src && src.includes('nav')) {
                navScripts.push(src);
            }
        });
        const hasNav = navScripts.length > 0;
        if (hasNav && navScripts.some(src => src.includes('nav13-global'))) {
            expectedLangs = EXPECTED_LANGS_GLOBAL;
        } else if (hasNav && (navScripts.some(src => src.includes('nav13-en-v2.js') || src.includes('nav13-pt-v2.js')))) {
            expectedLangs = EXPECTED_LANGS_BILINGUAL;
        } else if (hasNav && navScripts.some(src => src.includes('nav13-en-v27.js'))) {
            expectedLangs = EXPECTED_LANGS_ENGLISH_ONLY;
        } else if (hasNav && navScripts.some(src => src.includes('nav07z'))) {
            expectedLangs = EXPECTED_LANGS_BILINGUAL;
        } else if (!hasNav) {
            // Para páginas sem nav, verificar se usa estilo2024.css, mas não verificar hreflang (páginas antigas)
            const cssLinks = $('link[rel="stylesheet"][href*="estilo2024.css"]');
            if (cssLinks.length === 0) {
                // Caso contrário, definir baseado nos hreflangs presentes
                const hreflangsPresent = new Set();
                $('link[rel="alternate"]').each((i, elem) => {
                    const hreflang = $(elem).attr('hreflang');
                    if (hreflang) hreflangsPresent.add(hreflang);
                });
                expectedLangs = hreflangsPresent;
            }
        }

        // Verificar hreflang
        if (expectedLangs) {
            const hreflangs = new Set();
            $('link[rel="alternate"]').each((i, elem) => {
                const hreflang = $(elem).attr('hreflang');
                if (hreflang) hreflangs.add(hreflang);
            });
            const missingLangs = [...expectedLangs].filter(lang => !hreflangs.has(lang));
            if (missingLangs.length) {
                issues.push(`Hreflang faltando: ${missingLangs.join(', ')}`);
            }
        }

        // Verificar canonical e hreflangs apenas para páginas com nav13-global
        if (hasNav && navScripts.some(src => src.includes('nav13-global'))) {
            // Verificar canonical
            const canonical = $('link[rel="canonical"]');
            if (canonical.length === 0) {
                issues.push('Faltando: canonical link');
            } else if (canonical.length > 1) {
                issues.push('Canonical duplicado');
            } else {
                const href = canonical.attr('href');
                if (!href || !href.startsWith('https://alexandregames.com/')) {
                    issues.push('Canonical inválido ou não absoluto');
                } else {
                    // Verificar se o caminho do canonical corresponde ao arquivo
                    const relativePath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
                    const expectedCanonical = `https://alexandregames.com/${relativePath}`;
                    if (href !== expectedCanonical) {
                        issues.push(`Canonical não corresponde ao caminho: esperado ${expectedCanonical}, encontrado ${href}`);
                    }
                }
            }

            // Verificar hreflangs válidos
            $('link[rel="alternate"]').each((i, elem) => {
                const hreflang = $(elem).attr('hreflang');
                const href = $(elem).attr('href');
                if (hreflang && href) {
                    if (!href.startsWith('https://alexandregames.com/')) {
                        issues.push(`Hreflang ${hreflang} não é absoluto: ${href}`);
                    }
                    // Verificar se hreflang é válido (ex: en, pt, etc.)
                    const validLangs = ['en', 'pt', 'de', 'es', 'fr', 'ja', 'x-default'];
                    if (!validLangs.includes(hreflang)) {
                        issues.push(`Hreflang inválido: ${hreflang}`);
                    }
                }
            });
        }

        // Verificar links internos quebrados
        $('a[href]').each((i, elem) => {
            const href = $(elem).attr('href');
            if (href && (href.startsWith('../') || href.startsWith('./') || (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')))) {
                // Ignorar âncoras como #
                if (href !== '#') {
                    const fullPath = href.startsWith('/') ? path.resolve(ROOT_DIR, href.slice(1)) : path.resolve(path.dirname(filePath), href);
                    if (!fs.existsSync(fullPath)) {
                        issues.push(`Link quebrado interno: ${href}`);
                    }
                }
            }
        });

        // Verificar imagens quebradas
        $('img[src]').each((i, elem) => {
            const src = $(elem).attr('src');
            if (src && !src.startsWith('http') && !src.startsWith('#') && !src.startsWith('mailto:')) {
                const fullPath = src.startsWith('/') ? path.resolve(ROOT_DIR, src.slice(1)) : path.resolve(path.dirname(filePath), src);
                if (!fs.existsSync(fullPath)) {
                    issues.push(`Imagem quebrada: ${src}`);
                }
            }
        });

        // Verificar links de stylesheet e outros
        $('link[href]').each((i, elem) => {
            const href = $(elem).attr('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                const fullPath = href.startsWith('/') ? path.resolve(ROOT_DIR, href.slice(1)) : path.resolve(path.dirname(filePath), href);
                if (!fs.existsSync(fullPath)) {
                    issues.push(`Link quebrado (link): ${href}`);
                }
            }
        });

        // Verificar scripts quebrados
        $('script[src]').each((i, elem) => {
            const src = $(elem).attr('src');
            if (src && !src.startsWith('http') && !src.startsWith('#') && !src.startsWith('mailto:')) {
                const fullPath = src.startsWith('/') ? path.resolve(ROOT_DIR, src.slice(1)) : path.resolve(path.dirname(filePath), src);
                if (!fs.existsSync(fullPath)) {
                    issues.push(`Script quebrado: ${src}`);
                }
            }
        });

        // Verificar anúncios (ads)
        if (!isNoAdsPage) {
            // Coletar todos os elementos no documento em ordem
            const allElements = [];
            $('html *').each((i, elem) => {
                allElements.push($(elem));
            });
            // Encontrar índices dos anúncios (script com src adsbygoogle no head como automático, ins com class adsbygoogle no body como manuais)
            const adIndices = [];
            allElements.forEach((elem, index) => {
                const tag = elem.prop('tagName').toLowerCase();
                if (tag === 'ins' && elem.attr('class') && elem.attr('class').includes('adsbygoogle')) {
                    adIndices.push(index);
                } else if (tag === 'script' && elem.attr('src') && elem.attr('src').includes('adsbygoogle')) {
                    // Apenas o primeiro (no head) é automático
                    if (adIndices.length === 0) {
                        adIndices.push(index);
                    }
                }
            });
            // Verificar presença de anúncios
            if (adIndices.length === 0) {
                issues.push('Faltando anúncios (adsbygoogle)');
            } else {
                // O primeiro anúncio é automático (no head), os demais manuais no body
                // Verificar distância mínima de 350px (18 linhas a 20px) entre anúncios manuais
                const manualAdIndices = adIndices.slice(1);
                for (let i = 1; i < manualAdIndices.length; i++) {
                    const prevIndex = manualAdIndices[i - 1];
                    const currIndex = manualAdIndices[i];
                    // Contar elementos entre os anúncios (excluindo os anúncios)
                    const elementsBetweenCount = currIndex - prevIndex - 1;
                    let estimatedLines = 0;
                    for (let j = prevIndex + 1; j < currIndex; j++) {
                        const elem = allElements[j];
                        const tag = elem.prop('tagName').toLowerCase();
                        const classes = elem.attr('class') || '';
                        if (tag === 'p') {
                            estimatedLines += 3.5; // média 3-4
                        } else if (['h2', 'h3', 'h4'].includes(tag)) {
                            estimatedLines += 4;
                        } else if (tag === 'table') {
                            estimatedLines += 8; // média 6-10
                        } else if (tag === 'figure') {
                            if (classes.includes('img-banner')) {
                                estimatedLines += 14;
                            } else if (classes.includes('img-review')) {
                                estimatedLines += 12.5; // 250px estimados (12.5 linhas a 20px)
                            } else {
                                estimatedLines += 9; // média 6-12
                            }
                        } else if (tag === 'li') {
                            estimatedLines += 2; // 2 linhas
                        } else if (tag === 'div' && elem.attr('id') === 'mysterious-island-content') {
                            estimatedLines += 17.55; // 351px estimados (17.55 linhas a 20px) para espaço de anúncio
                        } else {
                            estimatedLines += 1; // outros elementos
                        }
                    }
                    if (estimatedLines < 18) { // Menos de 350px estimados (18 linhas a 20px)
                        issues.push(`Anúncio manual ${i} está muito próximo do anterior (menos de 350px estimados, ${estimatedLines.toFixed(1)} linhas entre anúncios)`);
                    }
                }
            }
        }

    } catch (e) {
        issues.push(`Erro ao processar arquivo: ${e.message}`);
    }
    return issues;
}

function main() {
    console.log('Iniciando verificação...');
    const htmlFiles = findHtmlFiles(ROOT_DIR);
    console.log(`Encontrados ${htmlFiles.length} arquivos HTML.`);
    const report = {};
    htmlFiles.forEach(filePath => {
        const issues = checkFile(filePath);
        if (issues.length) {
            const relativePath = path.relative(ROOT_DIR, filePath);
            report[relativePath] = issues;
        }
    });

    if (Object.keys(report).length) {
        console.log('Relatório de Problemas:');
        Object.entries(report).forEach(([file, issues]) => {
            console.log(`\nArquivo: ${file}`);
            issues.forEach(issue => console.log(`  - ${issue}`));
        });
    } else {
        console.log('Nenhum problema encontrado!');
    }
}

main();