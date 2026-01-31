const fs = require('fs');

const filePath = 'calendar-hwde-data.js';
let content = fs.readFileSync(filePath, 'utf8');

// Eventos que devem ter link #section (COM seção explicativa na página)
const eventsWithSections = [
  { name: 'Demon Dolls', section: '#section1' },
  { name: 'Emerald Waterfalls', section: '#section2' },
  { name: 'Secret Wealth', section: '#section3' },
  { name: 'Piggy Bank', section: '#section4' },
  { name: 'Emeralds Sale x4', section: '#section5' },
  { name: 'Emeralds Sale x5', section: '#section5' }
];

// Para cada evento que deve ter link, substituir labelOnly por links
eventsWithSections.forEach(event => {
  // Padrão para encontrar o evento com labelOnly
  // Exemplo: titles: { en: "Demon Dolls", ... },\n        labelOnly: true
  const regex = new RegExp(
    `(titles:\\s*\\{[^}]*en:\\s*"${event.name.replace(/([+*?^${}()|[\]\\])/g, '\\$1')}"[^}]*\\}),\\s*\\n\\s*labelOnly:\\s*true`,
    'g'
  );
  
  const replacement = `$1,\n        links: { en: "${event.section}", pt: "${event.section}", de: "${event.section}", es: "${event.section}", fr: "${event.section}", ja: "${event.section}" }`;
  
  content = content.replace(regex, replacement);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Arquivo corrigido!');
console.log('Eventos com link #section: Demon Dolls, Emerald Waterfalls, Secret Wealth, Piggy Bank, Emeralds Sale');
console.log('Eventos brancos (labelOnly): Fluffy Preorder, Fluffy Event, Happy New Year');
