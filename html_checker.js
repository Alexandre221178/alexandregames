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

        // Verificar <title>
        const titleText = $('title').text().trim();
        if (!$('title').length || !titleText) {
            issues.push('Faltando ou vazio: <title>');
        } else if (titleText.length > 75) {
            issues.push(`Title muito longo: ${titleText.length} caracteres (máximo 75)`);
        }

        // Verificar <h1>
        if (!$('h1').length) {
            issues.push('Faltando: <h1>');
        }

        // Detectar script de nav para determinar idiomas esperados
        let expectedLangs = EXPECTED_LANGS_GLOBAL; // padrão
        const navScripts = [];
        $('script[src]').each((i, elem) => {
            const src = $(elem).attr('src');
            if (src && src.includes('nav')) {
                navScripts.push(src);
            }
        });
        if (navScripts.some(src => src.includes('nav13-en-v27.js'))) {
            expectedLangs = EXPECTED_LANGS_ENGLISH_ONLY;
        } else if (navScripts.some(src => src.includes('nav13-en-v2.js') || src.includes('nav13-pt-v2.js'))) {
            expectedLangs = EXPECTED_LANGS_BILINGUAL;
        } else if (navScripts.some(src => src.includes('nav13-global') || src.includes('nav12-global'))) {
            expectedLangs = EXPECTED_LANGS_GLOBAL;
        } else if (navScripts.some(src => src.includes('nav07z'))) {
            expectedLangs = EXPECTED_LANGS_BILINGUAL;
        }

        // Verificar hreflang
        const hreflangs = new Set();
        $('link[rel="alternate"]').each((i, elem) => {
            const hreflang = $(elem).attr('hreflang');
            if (hreflang) hreflangs.add(hreflang);
        });
        const missingLangs = [...expectedLangs].filter(lang => !hreflangs.has(lang));
        if (missingLangs.length) {
            issues.push(`Hreflang faltando: ${missingLangs.join(', ')}`);
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