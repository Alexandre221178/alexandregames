/* gifts-hwa-component.js
   Renders daily gifts from window.HWA_GIFTS (flat array).
   Contains reward presets, multi-language UI, and rendering logic.
   Data format: see gifts-hwa-data.js header for templates.
*/
(function () {

  // ─── BASE PATH (auto-detect root vs subdirectory) ────────
  var BASE = (function () {
    var p = window.location.pathname;
    return p.indexOf('/ag-daily-gifts-hwa/') !== -1 ? '../..' : '.';
  })();

  var IMG = BASE + '/hero-wars-alliance/images/events/shared/';

  // ─── REWARD PRESETS ──────────────────────────────────────
  var PRESETS = {
    'large-skin-stone-chest': {
      img: 'large-skin-stone-chest.webp', alt: 'Large Skin Stone Chest',
      titles: { en:'Large Skin Stone Chest', pt:'Ba\u00fa Grande de Pedras de Skin', de:'Gro\u00dfe Skin-Stein-Truhe', es:'Cofre Grande de Piedras de Apariencia', fr:"Grand Coffre de Pierres d'Apparence", ja:'\u30b9\u30ad\u30f3\u30b9\u30c8\u30fc\u30f3\u5927\u30c1\u30a7\u30b9\u30c8' }
    },
    energy: {
      img: 'energy.webp', alt: 'Energy',
      titles: { en:'Energy', pt:'Energia', de:'Energie', es:'Energ\u00eda', fr:'\u00c9nergie', ja:'\u30a8\u30cd\u30eb\u30ae\u30fc' }
    },
    'adventure-coin': {
      img: 'adventure-coin.webp', alt: 'Adventure Coin',
      titles: { en:'Adventure Coin', pt:'Moeda de Aventura', de:'Abenteuer\u00admünze', es:'Moneda de Aventura', fr:"Pi\u00e8ce d'Aventure", ja:'\u30a2\u30c9\u30d9\u30f3\u30c1\u30e3\u30fc\u30b3\u30a4\u30f3' }
    },
    'adventure-energy': {
      img: 'adventure-energy.webp', alt: 'Adventure Energy',
      titles: { en:'Adventure Energy', pt:'Energia de Aventura', de:'Abenteuerenergie', es:'Energ\u00eda de Aventura', fr:"\u00c9nergie d'Aventure", ja:'\u30a2\u30c9\u30d9\u30f3\u30c1\u30e3\u30fc\u30a8\u30cd\u30eb\u30ae\u30fc' }
    },
    'silver-casket': {
      img: 'silver-casket.webp', alt: 'Silver Casket',
      titles: { en:'Silver Casket', pt:'Caix\u00e3o de Prata', de:'Silbertruhe', es:'Cofre de Plata', fr:"Coffret d'Argent", ja:'\u30b7\u30eb\u30d0\u30fc\u30ab\u30b9\u30b1\u30c3\u30c8' }
    },
    'realm-casket': {
      img: 'realm-casket.webp', alt: 'Realm Casket',
      titles: { en:'Realm Casket', pt:'Caix\u00e3o do Reino', de:'Reichtruhe', es:'Cofre del Reino', fr:'Coffret du Royaume', ja:'\u30ec\u30eb\u30e0\u30ab\u30b9\u30b1\u30c3\u30c8' }
    },
    'artifact-chest-key': {
      img: 'artifact-chest-key.webp', alt: 'Artifact Chest Key',
      titles: { en:'Artifact Chest Key', pt:'Chave do Ba\u00fa de Artefato', de:'Artefakttruhen-Schl\u00fcssel', es:'Llave del Cofre de Artefacto', fr:"Cl\u00e9 du Coffre d'Artefact", ja:'\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u30c1\u30a7\u30b9\u30c8\u30ad\u30fc' }
    },
    'rune-stone': {
      img: 'rune-stone.webp', alt: 'Rune Stone',
      titles: { en:'Rune Stone', pt:'Pedra R\u00fanica', de:'Runenstein', es:'Piedra R\u00fanica', fr:'Pierre Runique', ja:'\u30eb\u30fc\u30f3\u30b9\u30c8\u30fc\u30f3' }
    },
    'random-resources-chest-1k': {
      img: 'random-resources-chest-100k.webp', alt: '1k Random Resources Chest',
      titles: { en:'1k Random Resources Chest', pt:'Ba\u00fa de Recursos Aleat\u00f3rios 1k', de:'1k Zuf\u00e4llige Ressourcen-Truhe', es:'Cofre de Recursos Aleatorios 1k', fr:'Coffre de Ressources Al\u00e9atoires 1k', ja:'1k\u30e9\u30f3\u30c0\u30e0\u30ea\u30bd\u30fc\u30b9\u30c1\u30a7\u30b9\u30c8' }
    },
    '1h-general-speedup': {
      img: '1h-general-speedup.webp', alt: '1h General Speedup',
      titles: { en:'1h General Speedup', pt:'Acelera\u00e7\u00e3o Geral de 1h', de:'1h Allgemeine Beschleunigung', es:'Aceleraci\u00f3n General de 1h', fr:'Acc\u00e9l\u00e9ration G\u00e9n\u00e9rale de 1h', ja:'1\u6642\u9593\u6c4e\u7528\u52a0\u901f' }
    },
    'world-energy': {
      img: 'world-energy.webp', alt: 'World Energy',
      titles: { en:'World Energy', pt:'Energia Mundial', de:'Weltenergie', es:'Energ\u00eda Mundial', fr:'\u00c9nergie du Monde', ja:'\u30ef\u30fc\u30eb\u30c9\u30a8\u30cd\u30eb\u30ae\u30fc' }
    },
    'strength-skin-stone': {
      img: 'strength-skin-stone.webp', alt: 'Strength Skin Stone',
      titles: { en:'Strength Skin Stone', pt:'Pedra de Skin de For\u00e7a', de:'St\u00e4rke-Skin-Stein', es:'Piedra de Apariencia de Fuerza', fr:"Pierre d'Apparence de Force", ja:'\u30b9\u30c8\u30ec\u30f3\u30b0\u30b9\u30b9\u30ad\u30f3\u30b9\u30c8\u30fc\u30f3' }
    },
    'intelligence-skin-stone': {
      img: 'intelligence-skin-stones.webp', alt: 'Intelligence Skin Stone',
      titles: { en:'Intelligence Skin Stone', pt:'Pedra de Skin de Intelig\u00eancia', de:'Intelligenz-Skin-Stein', es:'Piedra de Apariencia de Inteligencia', fr:"Pierre d'Apparence d'Intelligence", ja:'\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u30b9\u30ad\u30f3\u30b9\u30c8\u30fc\u30f3' }
    },
    'agility-skin-stone': {
      img: 'agility-skin-stone.webp', alt: 'Agility Skin Stone',
      titles: { en:'Agility Skin Stone', pt:'Pedra de Skin de Agilidade', de:'Agilit\u00e4t-Skin-Stein', es:'Piedra de Apariencia de Agilidad', fr:"Pierre d'Apparence d'Agilit\u00e9", ja:'\u30a2\u30b8\u30ea\u30c6\u30a3\u30b9\u30ad\u30f3\u30b9\u30c8\u30fc\u30f3' }
    },
    'seers-orb': {
      img: 'seers-orb.webp', alt: "Seer's Orb",
      titles: { en:"Seer's Orb", pt:'Orbe do Vidente', de:'Seher-Kugel', es:'Orbe del Vidente', fr:'Orbe du Voyant', ja:'\u5360\u3044\u5e2b\u306e\u30aa\u30fc\u30d6' }
    },
    'boxys-gift': {
      img: 'boxys-gift.webp', alt: "Boxy's Gift",
      titles: { en:"Boxy's Gift", pt:'Presente do Boxy', de:'Boxys Geschenk', es:'Regalo de Boxy', fr:'Cadeau de Boxy', ja:'\u30dc\u30af\u30b7\u30fc\u306e\u30ae\u30d5\u30c8' }
    },
    'realm-gift': {
      img: 'realm-gift.webp', alt: 'Realm Gift',
      titles: { en:'Realm Gift', pt:'Presente do Reino', de:'Reich-Geschenk', es:'Regalo del Reino', fr:'Cadeau du Royaume', ja:'\u30ec\u30eb\u30e0\u30ae\u30d5\u30c8' }
    },
    'summoning-sphere': {
      img: 'summoning-sphere.webp', alt: 'Summoning Sphere',
      titles: { en:'Summoning Sphere', pt:'Esfera de Invoca\u00e7\u00e3o', de:'Beschw\u00f6rungssph\u00e4re', es:'Esfera de Invocaci\u00f3n', fr:"Sph\u00e8re d\u2019Invocation", ja:'\u53ec\u559a\u306e\u7403' }
    },
    gold: {
      img: 'gold.webp', alt: 'Gold',
      titles: { en:'Gold', pt:'Ouro', de:'Gold', es:'Oro', fr:'Or', ja:'\u30b4\u30fc\u30eb\u30c9' }
    }
  };

  // ─── PAGE TITLE ──────────────────────────────────────────
  var PAGE_TITLE = {
    en: 'Daily Gifts for Hero Wars Alliance 2026 - Alexandre Games',
    pt: 'Presentes Di\u00e1rios para Hero Wars Alliance 2026 - Alexandre Games',
    de: 'T\u00e4gliche Geschenke f\u00fcr Hero Wars Alliance 2026 - Alexandre Games',
    es: 'Regalos Diarios para Hero Wars Alliance 2026 - Alexandre Games',
    fr: 'Cadeaux Quotidiens pour Hero Wars Alliance 2026 - Alexandre Games',
    ja: '\u30d2\u30fc\u30ed\u30fc\u30a6\u30a9\u30fc\u30ba\u30fb\u30a2\u30e9\u30a4\u30a2\u30f3\u30b9 2026 \u30c7\u30a4\u30ea\u30fc\u30ae\u30d5\u30c8 - Alexandre Games'
  };

  var GAME_NAME = {
    en: 'Hero Wars Alliance',
    pt: 'Hero Wars Alliance',
    de: 'Hero Wars Alliance',
    es: 'Hero Wars Alliance',
    fr: 'Hero Wars Alliance',
    ja: '\u30d2\u30fc\u30ed\u30fc\u30a6\u30a9\u30fc\u30ba\u30fb\u30a2\u30e9\u30a4\u30a2\u30f3\u30b9'
  };

  // ─── UI TRANSLATIONS ────────────────────────────────────
  var UI = {
    en: {
      date: 'Date', gift: 'Gift',
      hubCode: 'Special HUB Gifts Code:',
      specialMission: 'Special Mission',
      specialTaskMission: 'Special Task Mission',
      dailyMission: 'Daily Mission',
      hubCaption: 'Table: Redeem your Hero Wars Alliance HUB Gifts',
      specialCaption: 'Table: Redeem your Special Gifts',
      dailyCaption: 'Table: Redeem your Daily Gifts',
      expired: '(expired)',
      hubHow: 'How to Redeem the Code in the HWA Hub',
      hubStep1: 'Click the link:',
      hubStep2: 'Go to the <strong>Bonuses</strong> section',
      hubStep3: 'Enter the promo code and redeem your rewards',
      hubExpiry24h: 'The gift is available until (not defined or 24hs)',
      hubExpiryUntil: 'The gift is available until {date}.',
      noteUntil: 'Note: The reward works until {date}.',
      noteUntilLevel: 'Note: The reward works until {date}.\nAvailable for all {level}+ level players!',
      noteDaily: 'Note: Available to all Level {level}+ players. The gift is only active for 24 hours since the official publication!'
    },
    pt: {
      date: 'Data', gift: 'Presente',
      hubCode: 'C\u00f3digo Especial HUB:',
      specialMission: 'Miss\u00e3o Especial',
      specialTaskMission: 'Miss\u00e3o Especial',
      dailyMission: 'Miss\u00e3o Di\u00e1ria',
      hubCaption: 'Tabela: Resgate seus Presentes do HUB Hero Wars Alliance',
      specialCaption: 'Tabela: Resgate seus Presentes Especiais',
      dailyCaption: 'Tabela: Resgate seus Presentes Di\u00e1rios',
      expired: '(expirado)',
      hubHow: 'Como Resgatar o C\u00f3digo no HUB HWA',
      hubStep1: 'Clique no link:',
      hubStep2: 'V\u00e1 para a se\u00e7\u00e3o <strong>B\u00f4nus</strong>',
      hubStep3: 'Insira o c\u00f3digo promocional e resgate suas recompensas',
      hubExpiry24h: 'O presente est\u00e1 dispon\u00edvel por 24 horas',
      hubExpiryUntil: 'O presente est\u00e1 dispon\u00edvel at\u00e9 {date}.',
      noteUntil: 'Nota: A recompensa funciona at\u00e9 {date}.',
      noteUntilLevel: 'Nota: A recompensa funciona at\u00e9 {date}.\nDispon\u00edvel para todos os jogadores n\u00edvel {level}+!',
      noteDaily: 'Nota: Dispon\u00edvel para todos os jogadores n\u00edvel {level}+. O presente fica ativo apenas por 24 horas desde a publica\u00e7\u00e3o oficial!'
    },
    de: {
      date: 'Datum', gift: 'Geschenk',
      hubCode: 'Spezieller HUB-Geschenkcode:',
      specialMission: 'Spezielle Mission',
      specialTaskMission: 'Spezielle Aufgaben-Mission',
      dailyMission: 'T\u00e4gliche Mission',
      hubCaption: 'Tabelle: HUB-Geschenke f\u00fcr Hero Wars Alliance einl\u00f6sen',
      specialCaption: 'Tabelle: Spezielle Geschenke einl\u00f6sen',
      dailyCaption: 'Tabelle: T\u00e4gliche Geschenke einl\u00f6sen',
      expired: '(abgelaufen)',
      hubHow: 'So l\u00f6sen Sie den Code im HWA Hub ein',
      hubStep1: 'Klicken Sie auf den Link:',
      hubStep2: 'Gehen Sie zum Abschnitt <strong>Boni</strong>',
      hubStep3: 'Geben Sie den Aktionscode ein und l\u00f6sen Sie Ihre Belohnungen ein',
      hubExpiry24h: 'Das Geschenk ist f\u00fcr 24 Stunden verf\u00fcgbar',
      hubExpiryUntil: 'Das Geschenk ist verf\u00fcgbar bis {date}.',
      noteUntil: 'Hinweis: Die Belohnung gilt bis {date}.',
      noteUntilLevel: 'Hinweis: Die Belohnung gilt bis {date}.\nVerf\u00fcgbar f\u00fcr alle Spieler ab Stufe {level}!',
      noteDaily: 'Hinweis: Verf\u00fcgbar f\u00fcr alle Spieler ab Stufe {level}. Das Geschenk ist nur 24 Stunden nach der offiziellen Ver\u00f6ffentlichung aktiv!'
    },
    es: {
      date: 'Fecha', gift: 'Regalo',
      hubCode: 'C\u00f3digo Especial HUB:',
      specialMission: 'Misi\u00f3n Especial',
      specialTaskMission: 'Misi\u00f3n de Tarea Especial',
      dailyMission: 'Misi\u00f3n Diaria',
      hubCaption: 'Tabla: Canjea tus Regalos del HUB de Hero Wars Alliance',
      specialCaption: 'Tabla: Canjea tus Regalos Especiales',
      dailyCaption: 'Tabla: Canjea tus Regalos Diarios',
      expired: '(expirado)',
      hubHow: 'C\u00f3mo Canjear el C\u00f3digo en el HUB HWA',
      hubStep1: 'Haz clic en el enlace:',
      hubStep2: 'Ve a la secci\u00f3n <strong>Bonos</strong>',
      hubStep3: 'Ingresa el c\u00f3digo promocional y canjea tus recompensas',
      hubExpiry24h: 'El regalo est\u00e1 disponible por 24 horas',
      hubExpiryUntil: 'El regalo est\u00e1 disponible hasta {date}.',
      noteUntil: 'Nota: La recompensa funciona hasta {date}.',
      noteUntilLevel: 'Nota: La recompensa funciona hasta {date}.\n\u00a1Disponible para todos los jugadores de nivel {level}+!',
      noteDaily: 'Nota: Disponible para todos los jugadores de nivel {level}+. El regalo solo est\u00e1 activo por 24 horas desde la publicaci\u00f3n oficial!'
    },
    fr: {
      date: 'Date', gift: 'Cadeau',
      hubCode: 'Code Sp\u00e9cial HUB :',
      specialMission: 'Mission Sp\u00e9ciale',
      specialTaskMission: 'Mission de T\u00e2che Sp\u00e9ciale',
      dailyMission: 'Mission Quotidienne',
      hubCaption: 'Tableau : \u00c9changez vos Cadeaux du HUB Hero Wars Alliance',
      specialCaption: 'Tableau : \u00c9changez vos Cadeaux Sp\u00e9ciaux',
      dailyCaption: 'Tableau : \u00c9changez vos Cadeaux Quotidiens',
      expired: '(expir\u00e9)',
      hubHow: 'Comment \u00c9changer le Code dans le HUB HWA',
      hubStep1: 'Cliquez sur le lien :',
      hubStep2: 'Allez dans la section <strong>Bonus</strong>',
      hubStep3: 'Entrez le code promotionnel et r\u00e9cup\u00e9rez vos r\u00e9compenses',
      hubExpiry24h: 'Le cadeau est disponible pendant 24 heures',
      hubExpiryUntil: "Le cadeau est disponible jusqu'au {date}.",
      noteUntil: "Note : La r\u00e9compense est valable jusqu'au {date}.",
      noteUntilLevel: "Note : La r\u00e9compense est valable jusqu'au {date}.\nDisponible pour tous les joueurs de niveau {level}+ !",
      noteDaily: 'Note : Disponible pour tous les joueurs de niveau {level}+. Le cadeau est actif seulement 24 heures apr\u00e8s la publication officielle !'
    },
    ja: {
      date: '\u65e5\u4ed8', gift: '\u30ae\u30d5\u30c8',
      hubCode: '\u7279\u5225HUB\u30ae\u30d5\u30c8\u30b3\u30fc\u30c9\uff1a',
      specialMission: '\u30b9\u30da\u30b7\u30e3\u30eb\u30df\u30c3\u30b7\u30e7\u30f3',
      specialTaskMission: '\u30b9\u30da\u30b7\u30e3\u30eb\u30bf\u30b9\u30af\u30df\u30c3\u30b7\u30e7\u30f3',
      dailyMission: '\u30c7\u30a4\u30ea\u30fc\u30df\u30c3\u30b7\u30e7\u30f3',
      hubCaption: '\u30d2\u30fc\u30ed\u30fc\u30a6\u30a9\u30fc\u30ba\u30fb\u30a2\u30e9\u30a4\u30a2\u30f3\u30b9 HUB\u30ae\u30d5\u30c8\u3092\u53d7\u3051\u53d6\u308b',
      specialCaption: '\u30b9\u30da\u30b7\u30e3\u30eb\u30ae\u30d5\u30c8\u3092\u53d7\u3051\u53d6\u308b',
      dailyCaption: '\u30c7\u30a4\u30ea\u30fc\u30ae\u30d5\u30c8\u3092\u53d7\u3051\u53d6\u308b',
      expired: '\uff08\u671f\u9650\u5207\u308c\uff09',
      hubHow: 'HWA Hub\u3067\u30b3\u30fc\u30c9\u3092\u5f15\u304d\u63db\u3048\u308b\u65b9\u6cd5',
      hubStep1: '\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\uff1a',
      hubStep2: '<strong>\u30dc\u30fc\u30ca\u30b9</strong>\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u79fb\u52d5',
      hubStep3: '\u30d7\u30ed\u30e2\u30b3\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u5831\u916c\u3092\u53d7\u3051\u53d6\u308b',
      hubExpiry24h: '\u30ae\u30d5\u30c8\u306f24\u6642\u9593\u5229\u7528\u53ef\u80fd\u3067\u3059',
      hubExpiryUntil: '\u30ae\u30d5\u30c8\u306f{date}\u307e\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002',
      noteUntil: '\u6ce8\u610f\uff1a\u5831\u916c\u306f{date}\u307e\u3067\u6709\u52b9\u3067\u3059\u3002',
      noteUntilLevel: '\u6ce8\u610f\uff1a\u5831\u916c\u306f{date}\u307e\u3067\u6709\u52b9\u3067\u3059\u3002\n\u30ec\u30d9\u30eb{level}\u4ee5\u4e0a\u306e\u3059\u3079\u3066\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u5bfe\u8c61\uff01',
      noteDaily: '\u6ce8\u610f\uff1a\u30ec\u30d9\u30eb{level}\u4ee5\u4e0a\u306e\u3059\u3079\u3066\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u5bfe\u8c61\u3002\u30ae\u30d5\u30c8\u306f\u516c\u5f0f\u767a\u8868\u304b\u308924\u6642\u9593\u306e\u307f\u6709\u52b9\u3067\u3059\uff01'
    }
  };

  var LOCALES = { en:'en-US', pt:'pt-BR', de:'de-DE', es:'es-ES', fr:'fr-FR', ja:'ja-JP' };

  // ─── UTILITY FUNCTIONS ───────────────────────────────────

  function getLang() {
    var raw = (document.documentElement.lang || 'en').toLowerCase();
    return UI[raw.substring(0, 2)] ? raw.substring(0, 2) : 'en';
  }

  function escapeHtml(v) {
    return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function t(map, lang) {
    if (!map) return '';
    return map[lang] || map.en || '';
  }

  function formatDate(date, lang) {
    return new Date(date + 'T12:00:00').toLocaleDateString(LOCALES[lang] || LOCALES.en, { month: 'long', day: 'numeric' });
  }

  function formatDateTime(dt, lang) {
    var d = new Date(dt);
    return d.toLocaleDateString(LOCALES[lang] || LOCALES.en, { month: 'long', day: 'numeric' }) +
      ', ' + d.toLocaleTimeString(LOCALES[lang] || LOCALES.en, { hour: 'numeric', minute: '2-digit', timeZone: 'UTC', timeZoneName: 'short' });
  }

  // ─── PARSERS ─────────────────────────────────────────────

  function parseReward(raw) {
    if (typeof raw === 'object') return raw;
    var m = raw.match(/^(.+)\s+x(\d+)$/);
    if (m) return { preset: m[1], qty: parseInt(m[2], 10) };
    var i = raw.lastIndexOf(' ');
    if (i === -1) return { preset: raw, qty: 1 };
    return { preset: raw.substring(0, i), qtyText: raw.substring(i + 1) };
  }

  function parseNote(entry) {
    var n = entry.note || 'hub24h';
    if (n === 'hub24h') return { type: 'hub24h' };
    if (n === 'custom') return { type: 'custom', text: entry.customNote || {} };
    var p = n.split('|');
    if (p[0] === 'hubUntil') return { type: 'hubUntil', until: p[1] };
    if (p[0] === 'until') return { type: 'until', until: p[1] };
    if (p[0] === 'untilLevel') return { type: 'untilLevel', until: p[1], level: p[2] };
    if (p[0] === 'daily') return { type: 'daily', level: p[1] };
    return { type: 'hub24h' };
  }

  // ─── RENDER HELPERS ──────────────────────────────────────

  function resolveReward(raw) {
    var r = parseReward(raw);
    if (r.preset && PRESETS[r.preset]) {
      var p = PRESETS[r.preset];
      return { image: IMG + p.img, alt: p.alt, titles: p.titles, qty: r.qty, qtyText: r.qtyText };
    }
    return r;
  }

  function renderRewardCell(raw, lang) {
    var c = resolveReward(raw);
    var title = t(c.titles, lang);
    var qtySuffix = c.qtyText ? c.qtyText : 'x' + c.qty;
    var label = title + ' ' + qtySuffix;
    var gameName = GAME_NAME[lang] || GAME_NAME.en;
    return '<td><div class="reward-cell">' +
      '<img src="' + escapeHtml(c.image) + '" alt="' + escapeHtml(c.alt || title) + '" title="' + escapeHtml(title) + ' - ' + escapeHtml(gameName) + '" loading="lazy">' +
      '<span>' + escapeHtml(label) + '</span>' +
      '</div></td>';
  }

  function renderNote(entry, txt, lang) {
    var note = parseNote(entry);
    if (note.type === 'custom') return escapeHtml(t(note.text, lang)).replace(/\n/g, '<br>');
    if (note.type === 'hub24h') return escapeHtml(txt.hubExpiry24h);
    if (note.type === 'hubUntil') return escapeHtml(txt.hubExpiryUntil.replace('{date}', formatDateTime(note.until, lang)));
    if (note.type === 'until') return escapeHtml(txt.noteUntil.replace('{date}', formatDateTime(note.until, lang)));
    if (note.type === 'untilLevel') return escapeHtml(txt.noteUntilLevel.replace('{date}', formatDateTime(note.until, lang)).replace('{level}', note.level)).replace(/\n/g, '<br>');
    if (note.type === 'daily') return escapeHtml(txt.noteDaily.replace('{level}', note.level));
    return '';
  }

  function renderHubInstructions(entry, txt, lang) {
    return '<div style="font-size:14px; font-style:italic;"><ul>' +
      '<li>\ud83d\udc9d <strong>' + txt.hubHow + '</strong></li>' +
      '<li>1\ufe0f\u20e3 ' + txt.hubStep1 + ' <a href="https://hwa.nexters.com/c/ALEXANDREGAMES" target="_blank">https://hwa.nexters.com/c/ALEXANDREGAMES</a> \u2b05\ufe0f</li>' +
      '<li>2\ufe0f\u20e3 ' + txt.hubStep2 + '</li>' +
      '<li>3\ufe0f\u20e3 ' + txt.hubStep3 + '</li>' +
      '<li>\u23f3 ' + renderNote(entry, txt, lang) + '</li>' +
      '</ul></div>';
  }

  function getHeaderKey(type) {
    if (type === 'hub') return 'hubCode';
    if (type === 'specialTask') return 'specialTaskMission';
    if (type === 'daily') return 'dailyMission';
    return 'specialMission';
  }

  function getCaptionKey(type) {
    if (type === 'hub') return 'hubCaption';
    if (type === 'daily') return 'dailyCaption';
    return 'specialCaption';
  }

  function renderEntry(entry, txt, lang) {
    var captionKey = getCaptionKey(entry.type);
    var headerKey = getHeaderKey(entry.type);
    var codeOrMission = entry.type === 'hub' ? entry.code : entry.mission;
    var rewardHeaders = '';
    var rewardCells = '';
    var i;

    for (i = 0; i < entry.rewards.length; i++) {
      rewardHeaders += '<th>' + escapeHtml(txt.gift) + ' ' + (i + 1) + '</th>';
      rewardCells += renderRewardCell(entry.rewards[i], lang);
    }

    var displayCode;
    if (entry.type === 'hub' && entry.expired) {
      displayCode = escapeHtml(entry.code) + '<br>' + escapeHtml(txt.expired);
    } else {
      displayCode = escapeHtml(codeOrMission);
    }

    return '<div class="content-wrapper">' +
      '<table class="event-table">' +
      '<caption>' + escapeHtml(txt[captionKey]) + '</caption>' +
      '<thead><tr>' +
      '<th>' + escapeHtml(txt.date) + '</th>' +
      '<th>' + escapeHtml(txt[headerKey]) + '</th>' +
      rewardHeaders +
      '</tr></thead>' +
      '<tbody><tr>' +
      '<td style="text-align:center;">' + escapeHtml(formatDate(entry.date, lang)) + '</td>' +
      '<td style="text-align:center;">' + displayCode + '</td>' +
      rewardCells +
      '</tr></tbody>' +
      '</table>' +
      (entry.type === 'hub'
        ? renderHubInstructions(entry, txt, lang)
        : '<p style="font-size:14px; font-style:italic;">' + renderNote(entry, txt, lang) + '</p>') +
      '</div><hr>';
  }

  // ─── MAIN RENDER ─────────────────────────────────────────

  function renderAll(container) {
    var lang = getLang();
    var txt = UI[lang] || UI.en;
    var data = window.HWA_GIFTS || [];
    var html = '<h2>' + escapeHtml(t(PAGE_TITLE, lang)) + '</h2>';
    var i;

    for (i = 0; i < data.length; i++) {
      html += renderEntry(data[i], txt, lang);
    }

    container.innerHTML = html;
  }

  // ─── INIT ────────────────────────────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('gifts-container');
    if (!container) return;
    renderAll(container);
  });
})();
