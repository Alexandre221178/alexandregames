/* gifts-hwde-component.js
   Renders daily gifts from window.HWDE_GIFTS (flat array).
   Types: 'link' (Web + Facebook buttons) | 'code' (promo code box)
   Platform-split rewards: { web:'item-key xN', fb:'fb-item-key xN' }
   Data format: see gifts-hwde-data.js header for templates.
*/
(function () {

  // ─── BASE PATH (auto-detect root vs subdirectory) ────────
  var BASE = (function () {
    var p = window.location.pathname;
    return p.indexOf('/ag-daily-gifts-hwde/') !== -1 ? '../..' : '.';
  })();

  var IMG = BASE + '/hero-wars-dominion-era/images/events/shared/';
  var ALEXANDREGAMES_LOGO = IMG + 'logo-alexandregames-100px.webp';

  var WEB_GIFT_BASE = 'https://www.hero-wars.com/?nx_source=group_posting_boxweb&gift_id=';
  var FB_GAME_BASE  = 'https://www.facebook.com/gaming/play/1701433570146040/?context_type=SOLO&source=fb_gg_url&payload=';

  // ─── REWARD PRESETS ──────────────────────────────────────
  var PRESETS = {
    'energy': {
      img: 'energy.webp', alt: 'Energy',
      titles: { en:'Energy', pt:'Energia', de:'Energie', es:'Energía', fr:'Énergie', ja:'エネルギー' }
    },
    'platinum-box': {
      img: 'platinum-box.webp', alt: 'Web - Platinum Box',
      titles: { en:'Web - Platinum Box', pt:'Web - Caixa de Platina', de:'Web - Platin-Box', es:'Web - Caja de Platino', fr:'Web - Boîte Platine', ja:'ウェブ版プラチナボックス' }
    },
    'fb-platinum-box': {
      img: 'fb-platinum-box.webp', alt: 'Facebook - Platinum Box',
      titles: { en:'Facebook - Platinum Box', pt:'Facebook - Caixa de Platina', de:'Facebook - Platin-Box', es:'Facebook - Caja de Platino', fr:'Facebook - Boîte Platine', ja:'フェイスブック版プラチナボックス' }
    },
    'titan-artifact-sphere': {
      img: 'titan-artifact-sphere.webp', alt: 'Titan Artifact Sphere',
      titles: { en:'Titan Artifact Sphere', pt:'Esfera de Artefato Titã', de:'Titan-Artefakt-Sphäre', es:'Esfera de Artefacto Titán', fr:"Sphère d'Artefact Titan", ja:'タイタンアーティファクトスフィア' }
    },
    'energy-crystal': {
      img: 'energy-crystal.webp', alt: 'Energy Crystal',
      titles: { en:'Energy Crystal', pt:'Cristal de Energia', de:'Energiekristall', es:'Cristal de Energía', fr:"Cristal d'Énergie", ja:'エネルギークリスタル' }
    },
    'valor-coin': {
      img: 'valor-coin.webp', alt: 'Valor Coin',
      titles: { en:'Valor Coin', pt:'Moeda de Valor', de:'Tapferkeitsmünze', es:'Moneda de Valor', fr:'Pièce de Valeur', ja:'バロアコイン' }
    },
    'sapphire-medallion': {
      img: 'sapphire-medallion.webp', alt: 'Sapphire Medallion',
      titles: { en:'Sapphire Medallion', pt:'Medalha de Safira', de:'Saphir-Medaille', es:'Medallón de Zafiro', fr:'Médaillon de Saphir', ja:'サファイアメダリオン' }
    },
    'large-skin-stone-chest': {
      img: 'large-skin-stone-chest.webp', alt: 'Large Skin Stone Chest',
      titles: { en:'Large Skin Stone Chest', pt:'Baú Grande de Pedras de Skin', de:'Große Skin-Stein-Truhe', es:'Cofre Grande de Piedras de Skin', fr:'Grand Coffre de Pierres de Skin', ja:'スキンストーン大チェスト' }
    },
    'small-skin-stone-chest': {
      img: 'small-skin-stone-chest.webp', alt: 'Small Skin Stone Chest',
      titles: { en:'Small Skin Stone Chest', pt:'Baú Pequeno de Pedras de Skin', de:'Kleine Skin-Stein-Truhe', es:'Cofre Pequeño de Piedras de Skin', fr:'Petit Coffre de Pierres de Skin', ja:'スキンストーン小チェスト' }
    },
    'friendship-chip': {
      img: 'friendship-chip.webp', alt: 'Friendship Chip',
      titles: { en:'Friendship Chip', pt:'Ficha de Amizade', de:'Freundschafts-Chip', es:'Ficha de Amistad', fr:"Jeton d'Amitié", ja:'フレンドシップチップ' }
    },
    'gold': {
      img: 'gold.webp', alt: 'Gold',
      titles: { en:'Gold', pt:'Ouro', de:'Gold', es:'Oro', fr:'Or', ja:'ゴールド' }
    },
    'soul-crystal': {
      img: 'soul-crystal.webp', alt: 'Soul Crystal',
      titles: { en:'Soul Crystal', pt:'Cristal de Alma', de:'Seelenkristall', es:'Cristal de Alma', fr:"Cristal d'Âme", ja:'ソウルクリスタル' }
    },
    'easter-key': {
      img: 'easter-key.webp', alt: 'Easter Key',
      titles: { en:'Easter Key', pt:'Chave de Páscoa', de:'Osterschlüssel', es:'Llave de Pascua', fr:'Clé de Pâques', ja:'イースターキー' }
    },
    'bottled-energy': {
      img: 'bottled-energy.webp', alt: 'Bottled Energy',
      titles: { en:'Bottled Energy', pt:'Energia Engarrafada', de:'Abgefüllte Energie', es:'Energía Embotellada', fr:"Énergie en Bouteille", ja:'ボトルエネルギー' }
    },
    'portal-charge': {
      img: 'portal-charge.webp', alt: 'Portal Charge',
      titles: { en:'Portal Charge', pt:'Carga do Portal', de:'Portalladung', es:'Carga de Portal', fr:'Charge de Portail', ja:'ポータルチャージ' }
    },
    'summoning-sphere': {
      img: 'summoning-sphere.webp', alt: 'Summoning Sphere',
      titles: { en:'Summoning Sphere', pt:'Esfera de Invocação', de:'Beschwörungssphäre', es:'Esfera de Invocación', fr:"Sphère d'Invocation", ja:'召喚の球' }
    },
    'artifact-coin': {
      img: 'artifact-coin.webp', alt: 'Artifact Coin',
      titles: { en:'Artifact Coin', pt:'Moeda de Artefato', de:'Artefakt-Münze', es:'Moneda de Artefacto', fr:"Pièce d'Artefact", ja:'アーティファクトコイン' }
    },
    'artifact-chest-key': {
      img: 'artifact-chest-key.webp', alt: 'Artifact Chest Key',
      titles: { en:'Artifact Chest Key', pt:'Chave do Baú de Artefato', de:'Artefakttruhen-Schlüssel', es:'Llave del Cofre de Artefacto', fr:"Clé du Coffre d'Artefact", ja:'アーティファクトチェストキー' }
    },
    'emerald': {
      img: 'emerald.webp', alt: 'Emerald',
      titles: { en:'Emerald', pt:'Esmeralda', de:'Smaragd', es:'Esmeralda', fr:'Émeraude', ja:'エメラルド' }
    },
    'emeralds': {
      img: 'emeralds.webp', alt: 'Emeralds',
      titles: { en:'Emeralds', pt:'Esmeraldas', de:'Smaragde', es:'Esmeraldas', fr:'Émeraudes', ja:'エメラルド' }
    },
    'titan-potion': {
      img: 'titan-potion.webp', alt: 'Titan Potion',
      titles: { en:'Titan Potion', pt:'Poção de Titã', de:'Titan-Trank', es:'Poción de Titán', fr:'Potion de Titan', ja:'タイタンポーション' }
    },
    'titan-brawl-coin': {
      img: 'titan-brawl-coin.webp', alt: 'Titan Brawl Coin',
      titles: { en:'Titan Brawl Coin', pt:'Moeda de Briga de Titãs', de:'Titan-Raufmünze', es:'Moneda de Pelea de Titanes', fr:'Pièce de Combat de Titan', ja:'タイタンブロールコイン' }
    },
    'strength-skin-stone': {
      img: 'strength-skin-stone.webp', alt: 'Strength Skin Stone',
      titles: { en:'Strength Skin Stone', pt:'Pedra de Skin de Força', de:'Stärke-Skin-Stein', es:'Piedra de Skin de Fuerza', fr:'Pierre de Skin de Force', ja:'ストレングススキンストーン' }
    },
    'agility-skin-stone': {
      img: 'agility-skin-stone.webp', alt: 'Agility Skin Stone',
      titles: { en:'Agility Skin Stone', pt:'Pedra de Skin de Agilidade', de:'Agilität-Skin-Stein', es:'Piedra de Skin de Agilidad', fr:"Pierre de Skin d'Agilité", ja:'アジリティスキンストーン' }
    },
    'intelligence-skin-stone': {
      img: 'intelligence-skin-stones.webp', alt: 'Intelligence Skin Stone',
      titles: { en:'Intelligence Skin Stone', pt:'Pedra de Skin de Inteligência', de:'Intelligenz-Skin-Stein', es:'Piedra de Skin de Inteligencia', fr:"Pierre de Skin d'Intelligence", ja:'インテリジェンススキンストーン' }
    },
    'pet-potion': {
      img: 'pet-potion.webp', alt: 'Pet Potion',
      titles: { en:'Pet Potion', pt:'Poção de Pet', de:'Haustier-Trank', es:'Poción de Mascota', fr:"Potion d'Animal", ja:'ペットポーション' }
    },
    'pet-summoning-egg': {
      img: 'pet-summoning-egg.webp', alt: 'Pet Summoning Egg',
      titles: { en:'Pet Summoning Egg', pt:'Ovo de Invocação de Pet', de:'Haustier-Beschwörungsei', es:'Huevo de Invocación de Mascota', fr:"Œuf d'Invocation d'Animal", ja:'ペット召喚エッグ' }
    },
    'radiant-crystal': {
      img: 'radiant-crystal.webp', alt: 'Radiant Crystal',
      titles: { en:'Radiant Crystal', pt:'Cristal Radiante', de:'Strahlender Kristall', es:'Cristal Radiante', fr:'Cristal Radiant', ja:'ラジアントクリスタル' }
    },
    'star-mana': {
      img: 'star-mana.webp', alt: 'Star Mana',
      titles: { en:'Star Mana', pt:'Mana Estelar', de:'Sternenmana', es:'Maná Estelar', fr:'Mana Étoile', ja:'スターマナ' }
    },
    'outland-coin': {
      img: 'outland-coin.webp', alt: 'Outland Coin',
      titles: { en:'Outland Coin', pt:'Moeda das Terras Externas', de:'Außenland-Münze', es:'Moneda del Territorio Exterior', fr:'Pièce des Contrées Lointaines', ja:'アウトランドコイン' }
    },
    'hero-resource-chest': {
      img: 'hero-resource-chest.webp', alt: 'Hero Resource Chest',
      titles: { en:'Hero Resource Chest', pt:'Baú de Recursos de Herói', de:'Helden-Ressourcentruhe', es:'Cofre de Recursos de Héroe', fr:'Coffre de Ressources Héros', ja:'ヒーローリソースチェスト' }
    },
    'war-flag-chest': {
      img: 'war-flag-chest.webp', alt: 'War Flag Chest',
      titles: { en:'War Flag Chest', pt:'Baú de Bandeiras de Guerra', de:'Kriegsflaggen-Truhe', es:'Cofre de Banderas de Guerra', fr:'Coffre de Drapeaux de Guerre', ja:'ウォーフラッグチェスト' }
    },
    'equipment-fragment-chest': {
      img: 'equipment-fragment-chest.webp', alt: 'Equipment Fragment Chest',
      titles: { en:'Equipment Fragment Chest', pt:'Baú de Fragmentos de Equipamento', de:'Ausrüstungsfragment-Truhe', es:'Cofre de Fragmentos de Equipo', fr:"Coffre de Fragments d'Équipement", ja:'装備フラグメントチェスト' }
    },
    'gift-of-dominion': {
      img: 'gift-of-dominion.webp', alt: 'Gift of Dominion',
      titles: { en:'Gift of Dominion', pt:'Presente do Domínio', de:'Geschenk der Herrschaft', es:'Regalo del Dominio', fr:'Cadeau de la Domination', ja:'ドミニオンの贈り物' }
    },
    'legendary-gift-of-dominion': {
      img: 'legendary-gift-of-dominion.webp', alt: 'Legendary Gift of Dominion',
      titles: { en:'Legendary Gift of Dominion', pt:'Presente Lendário do Domínio', de:'Legendäres Geschenk der Herrschaft', es:'Regalo Legendario del Dominio', fr:'Cadeau Légendaire de la Domination', ja:'伝説のドミニオンの贈り物' }
    },
    'chaos-core': {
      img: 'chaos-core.webp', alt: 'Chaos Core',
      titles: { en:'Chaos Core', pt:'Núcleo do Caos', de:'Chaos-Kern', es:'Núcleo del Caos', fr:'Noyau du Chaos', ja:'カオスコア' }
    },
    'chaos-particle': {
      img: 'chaos-particle.webp', alt: 'Chaos Particle',
      titles: { en:'Chaos Particle', pt:'Partícula do Caos', de:'Chaos-Teilchen', es:'Partícula del Caos', fr:'Particule du Chaos', ja:'カオスパーティクル' }
    },
    'seers-coin': {
      img: 'seers-coin.webp', alt: "Seer's Coin",
      titles: { en:"Seer's Coin", pt:'Moeda do Vidente', de:'Seher-Münze', es:'Moneda del Vidente', fr:'Pièce du Voyant', ja:'占い師のコイン' }
    },
    'elemental-sphere': {
      img: 'elemental-sphere.webp', alt: 'Elemental Sphere',
      titles: { en:'Elemental Sphere', pt:'Esfera Elemental', de:'Elementar-Sphäre', es:'Esfera Elemental', fr:'Sphère Élémentaire', ja:'エレメンタルスフィア' }
    },
    'titan-resource-chest': {
      img: 'titan-resource-chest.webp', alt: 'Titan Resource Chest',
      titles: { en:'Titan Resource Chest', pt:'Baú de Recursos de Titã', de:'Titan-Ressourcentruhe', es:'Cofre de Recursos de Titán', fr:'Coffre de Ressources Titan', ja:'タイタンリソースチェスト' }
    }
  };

  // ─── PAGE HEADING ────────────────────────────────────────
  var PAGE_TITLE = {
    en: 'Daily Gifts - Hero Wars: Dominion Era 2026',
    pt: 'Presentes Diários - Hero Wars: Dominion Era 2026',
    de: 'Tägliche Geschenke - Hero Wars: Dominion Era 2026',
    es: 'Regalos Diarios - Hero Wars: Dominion Era 2026',
    fr: 'Cadeaux Quotidiens - Hero Wars: Dominion Era 2026',
    ja: 'デイリーギフト - ヒーローウォーズ：ドミニオン・エラ 2026'
  };

  var GAME_NAME = {
    en: 'Hero Wars: Dominion Era',
    pt: 'Hero Wars: Dominion Era',
    de: 'Hero Wars: Dominion Era',
    es: 'Hero Wars: Dominion Era',
    fr: 'Hero Wars: Dominion Era',
    ja: 'ヒーローウォーズ：ドミニオン・エラ'
  };

  // ─── UI TRANSLATIONS ────────────────────────────────────
  var UI = {
    en: {
      date: 'Date',
      gift: 'Gift',
      linkCaption: 'Table: Daily Gifts - Hero Wars: Dominion Era',
      codeCaption: 'Table: Code Gifts - Hero Wars: Dominion Era',
      expired: '(expired)',
      webBtn: '🎁 Redeem your Hero Wars Web - Gift',
      fbBtn: '🎁 Redeem your Hero Wars Facebook gift',
      codeLabel: '🎁 Code:',
      noteUntil: 'Note: The link works until {date}.',
      noteLevel: 'Note: The link works 24 hours and the type of Boxes depends on your Team Level!',
      note24h: 'Note: The link works 24 hours.',
      codeUntil: 'Note: The code works until {date}.'
    },
    pt: {
      date: 'Data',
      gift: 'Presente',
      linkCaption: 'Tabela: Presentes Diários - Hero Wars: Dominion Era',
      codeCaption: 'Tabela: Presentes de Código - Hero Wars: Dominion Era',
      expired: '(expirado)',
      webBtn: '🎁 Resgatar presente Web Hero Wars',
      fbBtn: '🎁 Resgatar presente Facebook Hero Wars',
      codeLabel: '🎁 Código:',
      noteUntil: 'Nota: O link funciona até {date}.',
      noteLevel: 'Nota: O link funciona por 24 horas e o tipo de Caixas depende do Nível da sua Equipe!',
      note24h: 'Nota: O link funciona por 24 horas.',
      codeUntil: 'Nota: O código funciona até {date}.'
    },
    de: {
      date: 'Datum',
      gift: 'Geschenk',
      linkCaption: 'Tabelle: Tägliche Geschenke - Hero Wars: Dominion Era',
      codeCaption: 'Tabelle: Code-Geschenke - Hero Wars: Dominion Era',
      expired: '(abgelaufen)',
      webBtn: '🎁 Hero Wars Web-Geschenk einlösen',
      fbBtn: '🎁 Hero Wars Facebook-Geschenk einlösen',
      codeLabel: '🎁 Code:',
      noteUntil: 'Hinweis: Der Link gilt bis {date}.',
      noteLevel: 'Hinweis: Der Link gilt 24 Stunden und der Boxtyp hängt von Ihrem Teamlevel ab!',
      note24h: 'Hinweis: Der Link gilt 24 Stunden.',
      codeUntil: 'Hinweis: Der Code gilt bis {date}.'
    },
    es: {
      date: 'Fecha',
      gift: 'Regalo',
      linkCaption: 'Tabla: Regalos Diarios - Hero Wars: Dominion Era',
      codeCaption: 'Tabla: Regalos de Código - Hero Wars: Dominion Era',
      expired: '(expirado)',
      webBtn: '🎁 Canjear regalo Web Hero Wars',
      fbBtn: '🎁 Canjear regalo Facebook Hero Wars',
      codeLabel: '🎁 Código:',
      noteUntil: 'Nota: El enlace funciona hasta {date}.',
      noteLevel: 'Nota: El enlace funciona 24 horas y el tipo de Cajas depende de tu Nivel de Equipo!',
      note24h: 'Nota: El enlace funciona 24 horas.',
      codeUntil: 'Nota: El código funciona hasta {date}.'
    },
    fr: {
      date: 'Date',
      gift: 'Cadeau',
      linkCaption: 'Tableau : Cadeaux Quotidiens - Hero Wars: Dominion Era',
      codeCaption: 'Tableau : Cadeaux de Code - Hero Wars: Dominion Era',
      expired: '(expiré)',
      webBtn: '🎁 Récupérer votre cadeau Web Hero Wars',
      fbBtn: '🎁 Récupérer votre cadeau Facebook Hero Wars',
      codeLabel: '🎁 Code :',
      noteUntil: "Note : Le lien fonctionne jusqu'au {date}.",
      noteLevel: "Note : Le lien fonctionne 24 heures et le type de Boîtes dépend de votre Niveau d'Équipe !",
      note24h: 'Note : Le lien fonctionne 24 heures.',
      codeUntil: "Note : Le code fonctionne jusqu'au {date}."
    },
    ja: {
      date: '日付',
      gift: 'ギフト',
      linkCaption: '表：デイリーギフト - ヒーローウォーズ：ドミニオン・エラ',
      codeCaption: '表：コードギフト - ヒーローウォーズ：ドミニオン・エラ',
      expired: '（期限切れ）',
      webBtn: '🎁 ウェブ版ギフトを受け取る',
      fbBtn: '🎁 フェイスブック版ギフトを受け取る',
      codeLabel: '🎁 コード：',
      noteUntil: '注意：リンクは{date}まで有効です。',
      noteLevel: '注意：リンクは24時間有効で、ボックスの種類はチームレベルによって異なります！',
      note24h: '注意：リンクは24時間有効です。',
      codeUntil: '注意：コードは{date}まで有効です。'
    }
  };

  var LOCALES = { en:'en-US', pt:'pt-BR', de:'de-DE', es:'es-ES', fr:'fr-FR', ja:'ja-JP' };

  // ─── UTILITIES ───────────────────────────────────────────

  function getLang() {
    var raw = (document.documentElement.lang || 'en').toLowerCase();
    return UI[raw.substring(0, 2)] ? raw.substring(0, 2) : 'en';
  }

  function escapeHtml(v) {
    return String(v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function t(map, lang) {
    if (!map) return '';
    return map[lang] || map.en || '';
  }

  function titleCaseFromSlug(value) {
    return String(value || '')
      .replace(/\.[^.]+$/, '')
      .split('-')
      .filter(Boolean)
      .map(function (part) {
        if (/^\d+[a-z]*$/i.test(part)) return part;
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join(' ');
  }

  function formatDate(date, lang) {
    return new Date(date + 'T12:00:00').toLocaleDateString(LOCALES[lang] || LOCALES.en, { month: 'long', day: 'numeric' });
  }

  function formatDateTime(dt, lang) {
    var d = new Date(dt);
    return d.toLocaleDateString(LOCALES[lang] || LOCALES.en, { month: 'long', day: 'numeric', timeZone: 'UTC' }) +
      ', ' + d.toLocaleTimeString(LOCALES[lang] || LOCALES.en, { hour: 'numeric', minute: '2-digit', timeZone: 'UTC', timeZoneName: 'short' });
  }

  // ─── PARSERS ─────────────────────────────────────────────

  function isPlatformSplit(raw) {
    return typeof raw === 'object' && raw !== null && 'web' in raw && 'fb' in raw;
  }

  function parseReward(raw) {
    if (typeof raw === 'object') return raw;
    var m = raw.match(/^(.+)\s+x(\d+)$/);
    if (m) return { preset: m[1], qty: parseInt(m[2], 10) };
    var i = raw.lastIndexOf(' ');
    if (i === -1) return { preset: raw, qty: 1 };
    return { preset: raw.substring(0, i), qtyText: raw.substring(i + 1) };
  }

  function resolveReward(raw) {
    var r = parseReward(raw);
    if (r.preset && PRESETS[r.preset]) {
      var p = PRESETS[r.preset];
      return { image: IMG + p.img, alt: p.alt, titles: p.titles, qty: r.qty, qtyText: r.qtyText };
    }
    if (r.preset && /^alexandre\s*games/i.test(r.preset)) {
      var label = r.preset.replace(/^alexandre\s*games\s*/i, '').trim();
      return { image: ALEXANDREGAMES_LOGO, alt: 'Alexandre Games', titles: { en: label }, qty: r.qty, qtyText: r.qtyText };
    }
    if (r.preset) {
      var fallbackTitle = titleCaseFromSlug(r.preset);
      return { image: IMG + r.preset + '.webp', alt: fallbackTitle, titles: { en: fallbackTitle }, qty: r.qty, qtyText: r.qtyText };
    }
    return r;
  }

  function renderSingleRewardCell(raw, lang) {
    var c = resolveReward(raw);
    var title = t(c.titles, lang) || c.alt || '';
    var qtySuffix = c.qtyText ? c.qtyText : 'x' + (c.qty || 1);
    var label = title + ' ' + qtySuffix;
    var gameName = GAME_NAME[lang] || GAME_NAME.en;
    var imageAlt = title || c.alt || '';
    return '<div class="reward-cell">' +
      '<img src="' + escapeHtml(c.image || '') + '"' +
      ' alt="' + escapeHtml(imageAlt) + '"' +
      ' title="' + escapeHtml(title) + ' - ' + escapeHtml(gameName) + '"' +
      ' loading="lazy">' +
      '<span>' + escapeHtml(label) + '</span>' +
      '</div>';
  }

  function renderRewardCell(raw, lang) {
    if (isPlatformSplit(raw)) {
      return '<td style="text-align:center;">' +
        '<div style="display:flex;justify-content:center;align-items:center;gap:10px;flex-wrap:wrap;">' +
        renderSingleRewardCell(raw.web, lang) +
        renderSingleRewardCell(raw.fb, lang) +
        '</div></td>';
    }
    return '<td>' + renderSingleRewardCell(raw, lang) + '</td>';
  }

  // ─── URL BUILDERS ─────────────────────────────────────────

  function buildWebUrl(giftId) {
    return WEB_GIFT_BASE + encodeURIComponent(giftId);
  }

  function buildFbUrl(giftId) {
    if (!giftId) return '';
    var payload = '{"nx_source":"group_posting","gift_id":"' + giftId.replace(/"/g, '\\"') + '"}';
    return FB_GAME_BASE + encodeURIComponent(payload);
  }

  function getLinkTargets(entry) {
    var directWebLink = entry.giftLinkWeb || entry.giftLink;
    if (directWebLink) {
      return { webUrl: directWebLink, fbUrl: '' };
    }
    return {
      webUrl: entry.giftId ? buildWebUrl(entry.giftId) : '',
      fbUrl: buildFbUrl(entry.giftId)
    };
  }

  // ─── NOTE RENDERER ────────────────────────────────────────

  function renderNote(entry, txt, lang) {
    var n = entry.note || '24h';
    if (n === 'level') return escapeHtml(txt.noteLevel);
    if (n === '24h')   return escapeHtml(txt.note24h);
    if (n === 'custom') return escapeHtml(t(entry.customNote || {}, lang)).replace(/\n/g, '<br>');
    var parts = n.split('|');
    if (parts[0] === 'until') {
      var noteKey = entry.type === 'code' ? 'codeUntil' : 'noteUntil';
      return escapeHtml((txt[noteKey] || txt.noteUntil).replace('{date}', formatDateTime(parts[1], lang)));
    }
    return escapeHtml(txt.note24h);
  }

  // ─── BUTTON / CODE ROWS ───────────────────────────────────

  function renderLinkButtons(entry, txt, colCount) {
    var cs = colCount + 1; // date column + reward columns
    var links = getLinkTargets(entry);
    var rows = '';

    if (links.webUrl) {
      rows += '<tr><td colspan="' + cs + '" style="text-align:center;padding:7px;">' +
        '<div style="border:2px solid #d4af37;border-radius:10px;background-color:#fff8dc;display:inline-block;min-width:250px;">' +
          '<a href="' + escapeHtml(links.webUrl) + '" target="_blank" rel="noopener noreferrer"' +
          ' style="display:inline-block;background-color:#ffd700;color:#000;padding:3px 7px;border-radius:8px;text-decoration:none;font-weight:bold;">' +
          escapeHtml(txt.webBtn) + '</a>' +
        '</div>' +
      '</td></tr>';
    }

    if (links.fbUrl) {
      rows += '<tr><td colspan="' + cs + '" style="text-align:center;padding:7px;">' +
        '<div style="border:2px solid #1877f2;border-radius:10px;background-color:#e7f0ff;display:inline-block;min-width:250px;">' +
          '<a href="' + escapeHtml(links.fbUrl) + '" target="_blank" rel="noopener noreferrer"' +
          ' style="display:inline-block;background-color:#1877f2;color:#fff;padding:3px 3px;border-radius:8px;text-decoration:none;font-weight:bold;">' +
          escapeHtml(txt.fbBtn) + '</a>' +
        '</div>' +
      '</td></tr>';
    }

    return rows;
  }

  function renderCodeBox(entry, txt, colCount) {
    var cs = colCount + 1;
    var displayCode = entry.expired
      ? escapeHtml(entry.code) + '<br><em>' + escapeHtml(txt.expired) + '</em>'
      : '<b>' + escapeHtml(entry.code) + '</b>';
    return (
      '<tr><td colspan="' + cs + '" style="text-align:center;padding:7px;">' +
        '<div style="border:2px solid #d4af37;border-radius:10px;background-color:#fff8dc;display:inline-block;min-width:250px;padding:6px 12px;">' +
          escapeHtml(txt.codeLabel) + ' ' + displayCode +
        '</div>' +
      '</td></tr>'
    );
  }

  // ─── ENTRY RENDERER ──────────────────────────────────────

  function renderEntry(entry, txt, lang) {
    var rewards = entry.rewards || [];
    var rewardHeaders = '';
    var rewardCells   = '';
    var i;

    for (i = 0; i < rewards.length; i++) {
      rewardHeaders += '<th>' + escapeHtml(txt.gift) + ' ' + (i + 1) + '</th>';
      rewardCells   += renderRewardCell(rewards[i], lang);
    }

    var caption = entry.type === 'code' ? txt.codeCaption : txt.linkCaption;
    var actionRows = entry.type === 'code'
      ? renderCodeBox(entry, txt, rewards.length)
      : renderLinkButtons(entry, txt, rewards.length);

    return (
      '<div class="content-wrapper">' +
        '<table class="event-table" style="margin-bottom:0 !important;">' +
          '<caption>' + escapeHtml(caption) + '</caption>' +
          '<thead><tr>' +
            '<th>' + escapeHtml(txt.date) + '</th>' +
            rewardHeaders +
          '</tr></thead>' +
          '<tbody>' +
            '<tr>' +
              '<td style="text-align:center;">' + escapeHtml(formatDate(entry.date, lang)) + '</td>' +
              rewardCells +
            '</tr>' +
            actionRows +
          '</tbody>' +
        '</table>' +
      '</div>' +
      '<p style="font-size:14px;font-style:italic;">' + renderNote(entry, txt, lang) + '</p>' +
      '<hr>'
    );
  }

  // ─── MAIN RENDER ─────────────────────────────────────────

  function renderAll(container) {
    var lang = getLang();
    var txt  = UI[lang] || UI.en;
    var data = window.HWDE_GIFTS || [];
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
