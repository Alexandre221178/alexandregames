const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT_DIR = path.resolve(__dirname);
// const TARGET_DIR = path.join(ROOT_DIR, 'mobile-legends'); // Para todo o site
const TARGET_DIR = ROOT_DIR;

// Função para encontrar todos os arquivos HTML recursivamente
function findHtmlFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { // Ignorar .git, etc.
            files = files.concat(findHtmlFiles(fullPath));
        } else if (item.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
}

// Função para verificar se um arquivo existe
function fileExists(filePath) {
    try {
        fs.accessSync(filePath, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

// Função para corrigir links automaticamente
function autoFixFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(content);
    let changed = false;

    // Corrigir links href
    $('a[href]').each((i, elem) => {
        const href = $(elem).attr('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('http')) {
            let resolvedPath;
            if (href.startsWith('/')) {
                resolvedPath = path.resolve(ROOT_DIR, href.slice(1));
            } else {
                resolvedPath = path.resolve(path.dirname(filePath), href);
            }
            if (!fileExists(resolvedPath)) {
                // Tentar corrigir para -en.html se for um link para página que não existe
                const ext = path.extname(href);
                const base = href.replace(ext, '');
                if (base.endsWith('-pt') || base.endsWith('-de') || base.endsWith('-es') || base.endsWith('-fr') || base.endsWith('-ja')) {
                    const enVersion = base.replace(/-pt$|-de$|-es$|-fr$|-ja$/, '-en') + ext;
                    let enResolved;
                    if (enVersion.startsWith('/')) {
                        enResolved = path.resolve(ROOT_DIR, enVersion.slice(1));
                    } else {
                        enResolved = path.resolve(path.dirname(filePath), enVersion);
                    }
                    if (fileExists(enResolved)) {
                        $(elem).attr('href', enVersion);
                        changed = true;
                        console.log(`Corrigido link em ${filePath}: ${href} -> ${enVersion}`);
                    }
                }
            }
        }
    });

    // Corrigir imagens src
    $('img[src]').each((i, elem) => {
        const src = $(elem).attr('src');
        if (src && !src.startsWith('http')) {
            let resolvedPath;
            if (src.startsWith('/')) {
                resolvedPath = path.resolve(ROOT_DIR, src.slice(1));
            } else {
                resolvedPath = path.resolve(path.dirname(filePath), src);
            }
            if (!fileExists(resolvedPath)) {
                // Tentar corrigir caminhos comuns, como ../../../hero-wars-alliance/ para ../../hero-wars-dominion-era/
                if (src.includes('../../../hero-wars-alliance/')) {
                    const corrected = src.replace('../../../hero-wars-alliance/', '../../hero-wars-dominion-era/');
                    let correctedResolved;
                    if (corrected.startsWith('/')) {
                        correctedResolved = path.resolve(ROOT_DIR, corrected.slice(1));
                    } else {
                        correctedResolved = path.resolve(path.dirname(filePath), corrected);
                    }
                    if (fileExists(correctedResolved)) {
                        $(elem).attr('src', corrected);
                        changed = true;
                        console.log(`Corrigido imagem em ${filePath}: ${src} -> ${corrected}`);
                    }
                }
                // Outras correções possíveis
                if (src.includes('../hero-wars-alliance/')) {
                    const corrected = src.replace('../hero-wars-alliance/', '../hero-wars-dominion-era/');
                    let correctedResolved;
                    if (corrected.startsWith('/')) {
                        correctedResolved = path.resolve(ROOT_DIR, corrected.slice(1));
                    } else {
                        correctedResolved = path.resolve(path.dirname(filePath), corrected);
                    }
                    if (fileExists(correctedResolved)) {
                        $(elem).attr('src', corrected);
                        changed = true;
                        console.log(`Corrigido imagem em ${filePath}: ${src} -> ${corrected}`);
                    }
                }
            }
        }
    });

    // Corrigir scripts src - tentar corrigir para versões existentes
    $('script[src]').each((i, elem) => {
        const src = $(elem).attr('src');
        if (src && !src.startsWith('http')) {
            let resolvedPath;
            if (src.startsWith('/')) {
                resolvedPath = path.resolve(ROOT_DIR, src.slice(1));
            } else {
                resolvedPath = path.resolve(path.dirname(filePath), src);
            }
            if (!fileExists(resolvedPath)) {
                // Tentar corrigir nav scripts
                if (src.includes('nav13-pt-v2.js')) {
                    const corrected = src.replace('nav13-pt-v2.js', 'nav13-pt.js');
                    let correctedResolved;
                    if (corrected.startsWith('/')) {
                        correctedResolved = path.resolve(ROOT_DIR, corrected.slice(1));
                    } else {
                        correctedResolved = path.resolve(path.dirname(filePath), corrected);
                    }
                    if (fileExists(correctedResolved)) {
                        $(elem).attr('src', corrected);
                        changed = true;
                        console.log(`Corrigido script em ${filePath}: ${src} -> ${corrected}`);
                    }
                }
                // Outras correções para nav
                if (src.includes('nav13-en-v2.js')) {
                    const corrected = src.replace('nav13-en-v2.js', 'nav13-en.js');
                    let correctedResolved;
                    if (corrected.startsWith('/')) {
                        correctedResolved = path.resolve(ROOT_DIR, corrected.slice(1));
                    } else {
                        correctedResolved = path.resolve(path.dirname(filePath), corrected);
                    }
                    if (fileExists(correctedResolved)) {
                        $(elem).attr('src', corrected);
                        changed = true;
                        console.log(`Corrigido script em ${filePath}: ${src} -> ${corrected}`);
                    }
                }
            }
        }
    });

    if (changed) {
        fs.writeFileSync(filePath, $.html(), 'utf-8');
        console.log(`Arquivo ${filePath} corrigido.`);
    }
}

// Executar para todos os arquivos HTML no site
const htmlFiles = findHtmlFiles(TARGET_DIR);
console.log(`Encontrados ${htmlFiles.length} arquivos HTML no site.`);
htmlFiles.forEach(autoFixFile);
console.log('Correção automática concluída.');