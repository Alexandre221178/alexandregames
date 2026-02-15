const fs = require('fs');
const path = require('path');

// Função para obter a data atual em formato ISO com GMT-3
function getCurrentDateISO() {
  const now = new Date();
  // Ajustar para GMT-3 (-03:00)
  const offset = -3 * 60; // minutos
  const localTime = new Date(now.getTime() + (offset * 60 * 1000));
  return localTime.toISOString().replace('T', 'T').replace(/\.\d{3}Z$/, '-03:00');
}

// Atualizar o sitemap-index.xml com a nova data para o sitemap-hwa.xml
function updateSitemapIndex(newDate) {
  const sitemapIndexFile = path.join(__dirname, 'sitemap-index.xml');
  if (!fs.existsSync(sitemapIndexFile)) {
    console.log('Sitemap index não encontrado, pulando atualização.');
    return;
  }
  let content = fs.readFileSync(sitemapIndexFile, 'utf8');
  const url = 'https://alexandregames.com/sitemap-hwa.xml';
  // Regex para encontrar <lastmod> após a <loc> específica
  const regex = new RegExp(`(<loc>${url}</loc>\\s*<lastmod>)[^<]*(</lastmod>)`, 'g');
  content = content.replace(regex, `$1${newDate}$2`);
  fs.writeFileSync(sitemapIndexFile, content, 'utf8');
}

// Executar atualização
const currentDate = getCurrentDateISO();
console.log(`Atualizando sitemap-index.xml para HWA com a data: ${currentDate}`);
updateSitemapIndex(currentDate);
console.log('Atualizado: sitemap-index.xml');