const fs = require('fs');
const path = require('path');
// atualizar sempre com grock - verificar erros: node html_checker.js
// npm run update-
//Ex: npm run update-calendar-hwa
//Ex: npm run update-electra-hwde
//Ex: npm run update-hwde-hwde
//Ex: npm run update-calendar-hwde
// Receber o prefixo como argumento (ex.: electra-brawls)
const prefix = process.argv[2];
if (!prefix) {
  console.error('Uso: node update-data-menu-hwde.js <prefixo>');
  console.error('Exemplo: node update-data-menu-hwde.js electra-brawls');
  process.exit(1);
}

// Caminho base para hero-wars-dominion-era
const baseDir = __dirname;

// Encontrar a pasta que contém os arquivos com o prefixo
let menuDir = null;
const folders = fs.readdirSync(baseDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

for (const folder of folders) {
  const dirPath = path.join(baseDir, folder);
  const files = fs.readdirSync(dirPath).filter(file => file.startsWith(`${prefix}-`) && file.endsWith('.html'));
  if (files.length > 0) {
    menuDir = dirPath;
    break;
  }
}

if (!menuDir) {
  console.error(`Nenhuma pasta encontrada contendo arquivos com o prefixo: ${prefix}`);
  process.exit(1);
}

// Arquivo de dados (ex.: calendar-hwa-data.js)
// const dataFile = path.join(menuDir, `${prefix}-data.js`);

// Caminho para o sitemap.xml (agora sitemap-hwde.xml na raiz)
const sitemapFile = path.join(__dirname, '..', 'sitemap-hwde.xml');

// Função para obter a data atual em formato ISO com GMT-3
function getCurrentDateISO() {
  const now = new Date();
  // Ajustar para GMT-3 (-03:00)
  const offset = -3 * 60; // minutos
  const localTime = new Date(now.getTime() + (offset * 60 * 1000));
  return localTime.toISOString().replace('T', 'T').replace(/\.\d{3}Z$/, '-03:00');
}

// Atualizar article:modified_time em um arquivo HTML
function updateModifiedTime(filePath, newDate) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Substituir todas as ocorrências de article:modified_time
  content = content.replace(/<meta property="article:modified_time" content="[^"]*"/g, `<meta property="article:modified_time" content="${newDate}"`);
  fs.writeFileSync(filePath, content, 'utf8');
}

// Atualizar o arquivo de dados com a nova data
// function updateDataFile(newDate) {
//   let dataContent = fs.readFileSync(dataFile, 'utf8');
//   const newFirstLine = `/* ${prefix} data for Alexandre Games - Last updated: ${newDate}\n`;
//   dataContent = dataContent.replace(new RegExp(`^/\\* ${prefix} data for Alexandre Games[\\s\\S]*?\\*/`, 'm'), newFirstLine + '   - Keep links per language empty when you want to fill them manually\n   - Image and paths are relative to the page that includes the calendar\n*/');
//   fs.writeFileSync(dataFile, dataContent, 'utf8');
// }

// Atualizar o sitemap.xml com a nova data para as URLs do prefixo
function updateSitemap(newDate) {
  if (!fs.existsSync(sitemapFile)) {
    console.log('Sitemap não encontrado, pulando atualização.');
    return;
  }
  let sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
  // Para cada página, substituir o lastmod da URL correspondente
  const folderPath = path.relative(__dirname, menuDir);
  pages.forEach(page => {
    const url = `https://alexandregames.com/hero-wars-dominion-era/${folderPath}/${page}`;
    // Regex para encontrar <lastmod> após a <loc> específica
    const regex = new RegExp(`(<loc>${url}</loc>\\s*<lastmod>)[^<]*(</lastmod>)`, 'g');
    sitemapContent = sitemapContent.replace(regex, `$1${newDate}$2`);
  });
  fs.writeFileSync(sitemapFile, sitemapContent, 'utf8');
}

// Executar atualização
const currentDate = getCurrentDateISO();
const folderName = path.basename(menuDir);
console.log(`Atualizando ${prefix} em ${folderName} com a data: ${currentDate}`);

// Encontrar todas as páginas com o prefixo (ex.: calendar-hwa-*.html)
const pages = fs.readdirSync(menuDir).filter(file => file.startsWith(`${prefix}-`) && file.endsWith('.html'));

if (pages.length === 0) {
  console.log(`Nenhuma página encontrada para o prefixo: ${prefix} em ${folder}`);
} else {
  pages.forEach(page => {
    const filePath = path.join(menuDir, page);
    updateModifiedTime(filePath, currentDate);
    console.log(`Atualizado: ${page}`);
  });
}

// Atualizar o data.js se existir
// if (fs.existsSync(dataFile)) {
//   updateDataFile(currentDate);
//   console.log(`Atualizado: ${prefix}-data.js`);
// } else {
//   console.log(`Arquivo de dados não encontrado: ${prefix}-data.js`);
// }

// Atualizar o sitemap.xml
updateSitemap(currentDate);
console.log('Atualizado: sitemap-hwde.xml');