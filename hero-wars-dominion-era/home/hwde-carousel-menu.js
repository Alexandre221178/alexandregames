(function(){
  // Carousel multi-language injector (HWDE specific copy)
  const slides = [
    {
      link: "../../hero-wars-dominion-era/characters/mushy-and-shroom-en.html",
      src500: "../../hero-wars-dominion-era/images/hero/mushy-and-shroom/mushy-and-shroom-500px.webp",
      src400: "../../hero-wars-dominion-era/images/hero/mushy-and-shroom/mushy-and-shroom-400px.webp",
      alt: "Mushy and Shroom Guide for Hero Wars: Dominion Era",
      title: "Mushy and Shroom Guide for Hero Wars: Dominion Era.",
      strong: "Mushy and Shroom Guide - Hero Wars: Dominion Era",
      updated: "Updated: March, 2026."
    },
{
      link: "../../hero-wars-dominion-era/characters/byrna-en.html",
      src500: "../../hero-wars-dominion-era/images/hero/byrna/byrna-500px.webp",
      src400: "../../hero-wars-dominion-era/images/hero/byrna/byrna-400px.webp",
      alt: "Byrna Guide for Hero Wars: Dominion Era",
      title: "Byrna Guide for Hero Wars: Dominion Era.",
      strong: "Byrna Guide - Hero Wars: Dominion Era(English Guide)",
      updated: "Updated: March, 2026."
    },

    {
      link: "../../hero-wars-dominion-era/guide/meta-teams-and-combos-hwde-en.html",
      src500: "../../hero-wars-dominion-era/images/guides/meta-teams-and-combos-hwde/meta-teams-and-combos-hwde-500px.webp",
      src400: "../../hero-wars-dominion-era/images/guides/meta-teams-and-combos-hwde/meta-teams-and-combos-hwde-400px.webp",
      alt: "Best Meta Teams and Combos - Hero Wars: Dominion Era 2026",
      title: "Best Meta Teams and Combos - Hero Wars: Dominion Era 2026",
      strong: "Best Meta Teams and Combos - Hero Wars: Dominion Era 2026",
      updated: "Updated: March, 2026."
    },
    
    {
      link: "../../hero-wars-dominion-era/characters/kayla-en.html",
      src500: "../../hero-wars-dominion-era/images/hero/kayla/kayla-500px.webp",
      src400: "../../hero-wars-dominion-era/images/hero/kayla/kayla-400px.webp",
      alt: "Kayla Guide for Hero Wars: Dominion Era",
      title: "Kayla Guide for Hero Wars: Dominion Era.",
      strong: "Kayla Guide - Hero Wars: Dominion Era",
      updated: "Updated: March, 2026."
    },
    {
      link: "../../hero-wars-dominion-era/characters/galahad-en.html",
      src500: "../../hero-wars-dominion-era/images/hero/galahad/galahad-500px.webp",
      src400: "../../hero-wars-dominion-era/images/hero/galahad/galahad-400px.webp",
      alt: "Galahad Guide for Hero Wars: Dominion Era",
      title: "Galahad Guide for Hero Wars: Dominion Era.",
      strong: "Galahad Guide - Hero Wars: Dominion Era",
      updated: "Updated: March, 2026."
    },
    {
      link: "../../hero-wars-dominion-era/titans/tidus-en.html",
      src500: "../../hero-wars-dominion-era/images/titans-hwde/tidus/tidus-500px.webp",
      src400: "../../hero-wars-dominion-era/images/titans-hwde/tidus/tidus-400px.webp",
      alt: "Tidus for Hero Wars: Dominion Era",
      title: "Tidus for Hero Wars: Dominion Era.",
      strong: "Tidus - Hero Wars: Dominion Era",
      updated: "Updated: February, 2026."
    },
    
        
    {
      link: "../../hero-wars-dominion-era/menu/calendar-hwde-en.html",
      src500: "../../hero-wars-dominion-era/images/events/calendar/calendar-hwde-500px.webp",
      src400: "../../hero-wars-dominion-era/images/events/calendar/calendar-hwde-400px.webp",
      alt: "Calendar for Hero Wars: Dominion Era",
      title: "Calendar for Hero Wars: Dominion Era.",
      strong: "Calendar - Hero Wars: Dominion Era",
      updated: "Updated: February, 2026."
    },
    {
      link: "../../hero-wars-dominion-era/characters/fluffy-en.html",
      src500: "../../hero-wars-dominion-era/images/hero/fluffy/fluffy-500px.webp",
      src400: "../../hero-wars-dominion-era/images/hero/fluffy/fluffy-400px.webp",
      alt: "Fluffy for Hero Wars: Dominion Era",
      title: "Fluffy for Hero Wars: Dominion Era.",
      strong: "Fluffy - Hero Wars: Dominion Era",
      updated: "Updated: February, 2026."
    },
    {
      link: "../../hero-wars-dominion-era/titans/ignis-en.html",
      src500: "../../hero-wars-dominion-era/images/titans-hwde/ignis/ignis-500px.webp",
      src400: "../../hero-wars-dominion-era/images/titans-hwde/ignis/ignis-400px.webp",
      alt: "Ignis for Hero Wars: Dominion Era",
      title: "Ignis for Hero Wars: Dominion Era.",
      strong: "Ignis - Hero Wars: Dominion Era",
      updated: "Updated: February, 2026."
    },
    
    {
      link: "../../hero-wars-dominion-era/characters/aidan-en.html",
      src500: "../../hero-wars-dominion-era/images/hero/aidan/aidan-500px.webp",
      src400: "../../hero-wars-dominion-era/images/hero/aidan/aidan-400px.webp",
      alt: "Aidan Guide for Hero Wars: Dominion Era",
      title: "Aidan Guide for Hero Wars: Dominion Era.",
      strong: "Aidan Guide - Hero Wars: Dominion Era",
      updated: "Updated: January, 2026."
    },
    
    
  ];

  const translations = {
    en: {updatedPrefix: 'Updated:', map: {}},
    pt: {updatedPrefix: 'Atualizado:', map: {'Guide':'Guia','Best Teams':'Melhores Equipes','Stay updated':'Fique atualizado','Redeem your Daily Gifts':'Resgate seus Presentes Diários','Event':'Evento',
      'Best Meta Teams and Combos':'Melhores Times e Combos',
      'Mushy and Shroom':'Cogu e Mélio',
      'Mushy & Shroom':'Cogu e Mélio',
    }},
    es: {updatedPrefix: 'Actualizado:', map: {'Guide':'Guía','Best Teams':'Mejores Equipos','Stay updated':'Mantente al día','Redeem your Daily Gifts':'Canjea tus Regalos Diarios','Event':'Evento',
      'Best Meta Teams and Combos':'Mejores Equipos y Combos',
      'Mushy and Shroom':'Mushy y Shroom',
      'Mushy & Shroom':'Mushy y Shroom',
    }},
    fr: {updatedPrefix: 'Mis à jour:', map: {'Guide':'Guide','Best Teams':'Meilleures équipes','Stay updated':'Restez informé','Redeem your Daily Gifts':'Échangez vos Cadeaux Quotidiens','Event':'Événement',
      'Best Meta Teams and Combos':'Meilleures Équipes et Combos',
      'Mushy and Shroom':'Champi et Gnon',
      'Mushy & Shroom':'Champi et Gnon',
    }},
    ja: {updatedPrefix: '更新:', map: {'Guide':'ガイド','Best Teams':'ベストチーム','Stay updated':'最新情報をチェック','Redeem your Daily Gifts':'毎日のギフトを受け取る','Event':'イベント',
      'Best Meta Teams and Combos':'ベストメタチームとコンボ',
      'Mushy and Shroom':'マッシーとシュルーム',
      'Mushy & Shroom':'マッシーとシュルーム'
    }},
    de: {updatedPrefix: 'Aktualisiert:', map: {'Guide':'Leitfaden','Best Teams':'Beste Teams','Stay updated':'Bleiben Sie informiert','Redeem your Daily Gifts':'Löse deine täglichen Geschenke ein','Event':'Event',
      'Best Meta Teams and Combos':'Beste Meta-Teams und Combos',
      'Mushy and Shroom':'Champi und Gnon',
      'Mushy & Shroom':'Champi und Gnon',
    }}
  };

  function escapeRegExp(text){
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function detectLang(){
    try{
      // 1) Prefer <html lang="xx"> when present and valid
      if(document.documentElement && document.documentElement.lang){
        var h = document.documentElement.lang.slice(0,2).toLowerCase();
        if(h && translations[h]) return h;
      }
      // 2) Fallback to pathname pattern (page file names like page-pt.html)
      var m2 = location.pathname.match(/-([a-z]{2})\.html$/i);
      if(m2 && translations[m2[1].toLowerCase()]) return m2[1].toLowerCase();
      // 3) Last resort: small hidden language-link (but only if it actually points to a valid code)
      var langLink = document.querySelector('.language-link');
      if(langLink && langLink.href){
        var m = langLink.href.match(/-([a-z]{2})\.html$/i);
        if(m && translations[m[1].toLowerCase()]) return m[1].toLowerCase();
      }
    }catch(e){}
    return 'en';
  }

  function applyTranslations(text, lang){
    if(lang==='en') return text;
    const map = translations[lang] && translations[lang].map || {};
    let out = text;
    Object.keys(map).sort(function(a, b){ return b.length - a.length; }).forEach(k=>{
      var pattern = /[^A-Za-z0-9_& ]/.test(k)
        ? new RegExp(escapeRegExp(k), 'gi')
        : new RegExp('\\b' + escapeRegExp(k) + '\\b', 'gi');
      out = out.replace(pattern, map[k]);
    });
    return out;
  }

  function translateUpdated(updated, lang){
    if(!updated) return updated;
    const parts = updated.split(':');
    if(parts.length<2) return updated;
    const rest = parts.slice(1).join(':').trim();
    const prefix = translations[lang] ? translations[lang].updatedPrefix : translations.en.updatedPrefix;
    return prefix + ' ' + rest;
  }

  var localizedLinkAvailability = {};

  function getLocalizedLink(baseLink, lang){
    if(lang === 'en') return baseLink;
    return baseLink.replace(/-en\.html$/,'-' + lang + '.html');
  }

  function checkLinkExists(url, callback){
    if(!url || typeof callback !== 'function') return;
    if(Object.prototype.hasOwnProperty.call(localizedLinkAvailability, url)){
      callback(localizedLinkAvailability[url]);
      return;
    }

    function finish(exists){
      localizedLinkAvailability[url] = !!exists;
      callback(!!exists);
    }

    if(window.fetch){
      fetch(url, { method: 'HEAD' })
        .then(function(response){
          if(response && response.ok){
            finish(true);
            return;
          }
          return fetch(url, { method: 'GET' }).then(function(getResponse){
            finish(!!(getResponse && getResponse.ok));
          }).catch(function(){ finish(false); });
        })
        .catch(function(){
          fetch(url, { method: 'GET' })
            .then(function(response){ finish(!!(response && response.ok)); })
            .catch(function(){ finish(false); });
        });
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        finish(xhr.status >= 200 && xhr.status < 300);
      }
    };
    xhr.onerror = function(){ finish(false); };
    try{ xhr.send(); }catch(e){ finish(false); }
  }

  function resolveLocalizedCarouselLinks(){
    var lang = detectLang();
    if(lang === 'en') return;

    var anchors = document.querySelectorAll('.carousel-slide a[data-base-link]');
    for(var i = 0; i < anchors.length; i++){
      (function(anchor){
        var baseLink = anchor.getAttribute('data-base-link');
        if(!baseLink) return;
        var localizedLink = getLocalizedLink(baseLink, lang);
        if(localizedLink === baseLink) return;

        checkLinkExists(localizedLink, function(exists){
          anchor.href = exists ? localizedLink : baseLink;
        });
      })(anchors[i]);
    }
  }

  function buildSlideHTML(s){
    const lang = detectLang();
    const localizedLink = getLocalizedLink(s.link, lang);
    const targetLink = lang === 'en' ? s.link : s.link;
    const altText = applyTranslations(s.alt, lang);
    const titleText = applyTranslations(s.title, lang);
    const strongText = applyTranslations(s.strong, lang);
    const updatedText = translateUpdated(s.updated, lang);

    return `\n<figure class="carousel-slide">\n  <a href="${targetLink}" data-base-link="${s.link}" data-localized-link="${localizedLink}">\n    <picture>\n      <source media="(min-width: 769px)" srcset="${s.src500}">\n      <img src="${s.src400}" alt="${altText}" title="${titleText}" loading="lazy">\n        <strong>${strongText}</strong>\n        <i>${updatedText}</i>\n  </a>\n</figure>`;
  }

  function inject(){
    const track = document.querySelector('.carousel-track');
    if(!track) return;
    const html = slides.map(buildSlideHTML).join('\n');
    track.innerHTML = html;
    resolveLocalizedCarouselLinks();
  }

  function initCarouselControls(){
    var track = document.querySelector('.carousel-track');
    if(!track) return;
    var prev = document.querySelector('.carousel-btn.prev');
    var next = document.querySelector('.carousel-btn.next');
    function getScrollAmount(){
      var first = track.querySelector('figure');
      if(first){
        return Math.round(first.getBoundingClientRect().width);
      }
      return Math.round(track.clientWidth * 0.9);
    }
    if(prev){
      prev.addEventListener('click', function(e){
        e.preventDefault();
        try{ track.scrollBy({left: -getScrollAmount(), behavior: 'smooth'}); }catch(err){ track.scrollLeft -= getScrollAmount(); }
      });
    }
    if(next){
      next.addEventListener('click', function(e){
        e.preventDefault();
        try{ track.scrollBy({left: getScrollAmount(), behavior: 'smooth'}); }catch(err){ track.scrollLeft += getScrollAmount(); }
      });
    }
    // allow keyboard arrows when focus inside carousel
    track.tabIndex = track.tabIndex || 0;
    track.addEventListener('keydown', function(e){
      if(e.key === 'ArrowLeft') { e.preventDefault(); track.scrollLeft -= getScrollAmount(); }
      if(e.key === 'ArrowRight') { e.preventDefault(); track.scrollLeft += getScrollAmount(); }
    });
  }
  
  // merge loaded JSON terms into the in-memory translations map
  function mergeTermsIntoTranslations(json){
    if(!json) return;
    try{
      Object.keys(json).forEach(function(k){
        var entry = json[k];
        if(!entry || typeof entry !== 'object') return;
        Object.keys(translations).forEach(function(langCode){
          try{
            if(entry[langCode] && typeof entry[langCode] === 'string'){
              translations[langCode] = translations[langCode] || {updatedPrefix: translations.en.updatedPrefix, map: {}};
              translations[langCode].map = translations[langCode].map || {};
              translations[langCode].map[k] = entry[langCode];
            }
          }catch(e){}
        });
      });
    }catch(e){}
  }

  // merge heroes list JSON into translations map
  function mergeHeroesIntoTranslations(json){
    if(!json) return;
    try{
      var list = json.heroes || json;
      if(Array.isArray(list)){
        for(var i=0;i<list.length;i++){
          var h = list[i];
          if(!h || !h.en) continue;
          var key = h.en;
          Object.keys(translations).forEach(function(langCode){
            try{
              var val = h[langCode] || h.en;
              translations[langCode] = translations[langCode] || {updatedPrefix: translations.en.updatedPrefix, map: {}};
              translations[langCode].map = translations[langCode].map || {};
              translations[langCode].map[key] = val;
            }catch(e){}
          });
        }
      }
    }catch(e){}
  }

  function fetchHeroesJSON(callback){
    var prefixes = ['../data/','../../data/','./data/','/hero-wars-dominion-era/data/'];
    var tried = 0;
    function tryNext(){
      if(tried>=prefixes.length){ if(callback) callback(null); return; }
      var url = prefixes[tried] + 'hwde-heroes-localization.json';
      tried++;
      if(window.fetch){
        fetch(url).then(function(r){ if(!r.ok) throw new Error('no'); return r.json(); }).then(function(j){ try{ mergeHeroesIntoTranslations(j); }catch(e){} if(callback) callback(j); }).catch(function(){ tryNext(); });
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function(){
          if(xhr.readyState===4){
            if(xhr.status>=200 && xhr.status<300){
              try{ var j = JSON.parse(xhr.responseText); try{ mergeHeroesIntoTranslations(j); }catch(e){} if(callback) callback(j); }
              catch(e){ tryNext(); }
            } else tryNext();
          }
        };
        try{ xhr.send(); }catch(e){ tryNext(); }
      }
    }
    tryNext();
  }

  function updateSlideTexts(){
    try{
      var lang = detectLang();
      var elems = document.querySelectorAll('.carousel-slide strong');
      for(var i=0;i<elems.length;i++){
        var el = elems[i];
        if(!el || !el.textContent) continue;
        el.textContent = applyTranslations(el.textContent, lang);
      }
      var images = document.querySelectorAll('.carousel-slide img');
      for(var j=0;j<images.length;j++){
        var img = images[j];
        if(img.alt) img.alt = applyTranslations(img.alt, lang);
        var title = img.getAttribute('title');
        if(title) img.setAttribute('title', applyTranslations(title, lang));
      }
    }catch(e){}
  }

  // Titans JSON (some names like Mairi are in titans file)
  function mergeTitansIntoTranslations(json){
    if(!json) return;
    try{
      var list = json.titans || json;
      if(Array.isArray(list)){
        for(var i=0;i<list.length;i++){
          var h = list[i];
          if(!h || !h.en) continue;
          var key = h.en;
          Object.keys(translations).forEach(function(langCode){
            try{
              var val = h[langCode] || h.en;
              translations[langCode] = translations[langCode] || {updatedPrefix: translations.en.updatedPrefix, map: {}};
              translations[langCode].map = translations[langCode].map || {};
              translations[langCode].map[key] = val;
            }catch(e){}
          });
        }
      }
    }catch(e){}
  }

  function fetchTitansJSON(callback){
    var prefixes = ['../data/','../../data/','./data/','/hero-wars-dominion-era/data/'];
    var tried = 0;
    function tryNext(){
      if(tried>=prefixes.length){ if(callback) callback(null); return; }
      var url = prefixes[tried] + 'hwde-titans-localization.json';
      tried++;
      if(window.fetch){
        fetch(url).then(function(r){ if(!r.ok) throw new Error('no'); return r.json(); }).then(function(j){ try{ mergeTitansIntoTranslations(j); }catch(e){} if(callback) callback(j); }).catch(function(){ tryNext(); });
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function(){
          if(xhr.readyState===4){
            if(xhr.status>=200 && xhr.status<300){
              try{ var j = JSON.parse(xhr.responseText); try{ mergeTitansIntoTranslations(j); }catch(e){} if(callback) callback(j); }
              catch(e){ tryNext(); }
            } else tryNext();
          }
        };
        try{ xhr.send(); }catch(e){ tryNext(); }
      }
    }
    tryNext();
  }
  // terms localization (months etc.) — try load JSON from common relative paths
  var hwdeTermsLocalization = null;
  function fetchTermsJSON(callback){
    var prefixes = ['../data/','../../data/','./data/','/hero-wars-dominion-era/data/'];
    var tried = 0;
    function tryNext(){
      if(tried>=prefixes.length){ if(callback) callback(null); return; }
      var url = prefixes[tried] + 'hwde-terms-localization.json';
      tried++;
      if(window.fetch){
        fetch(url).then(function(r){ if(!r.ok) throw new Error('no'); return r.json(); }).then(function(j){ hwdeTermsLocalization = j; try{ mergeTermsIntoTranslations(j); }catch(e){} if(callback) callback(j); }).catch(function(){ tryNext(); });
      }else{
        // fallback XHR
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function(){
          if(xhr.readyState===4){
            if(xhr.status>=200 && xhr.status<300){
              try{ hwdeTermsLocalization = JSON.parse(xhr.responseText); try{ mergeTermsIntoTranslations(hwdeTermsLocalization); }catch(e){} if(callback) callback(hwdeTermsLocalization); }
              catch(e){ tryNext(); }
            } else tryNext();
          }
        };
        try{ xhr.send(); }catch(e){ tryNext(); }
      }
    }
    tryNext();
  }

  function translateUpdated(updated, lang){
    if(!updated) return updated;
    var parts = updated.split(':');
    if(parts.length<2) return updated;
    var rest = parts.slice(1).join(':').trim();
    var prefix = translations[lang] ? translations[lang].updatedPrefix : translations.en.updatedPrefix;
    // replace English month names with localized if we have terms JSON
    if(hwdeTermsLocalization){
      try{
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        for(var i=0;i<months.length;i++){
          var m = months[i];
          if(rest.indexOf(m)!==-1){
            var loc = (hwdeTermsLocalization[m] && hwdeTermsLocalization[m][lang]) || hwdeTermsLocalization[m] && hwdeTermsLocalization[m]['en'];
            if(loc){ rest = rest.replace(m, loc); break; }
          }
        }
      }catch(e){}
    }
    // Trim trailing punctuation (like a dot) before applying general term translations
    var trailing = '';
    var m = rest.match(/([\.!?）\)]\s*)$/);
    if(m){ trailing = m[0]; rest = rest.slice(0, -trailing.length).trim(); }
    try{ rest = applyTranslations(rest, lang); }catch(e){}
    return prefix + ' ' + (rest + (trailing || ''));
  }

  function updateAllUpdatedElements(){
    try{
      var lang = detectLang();
      // Find elements with Updated: text (common selectors)
      var nodes = document.querySelectorAll('i, .updated, .date, time');
      for(var j=0;j<nodes.length;j++){
        var n = nodes[j];
        if(!n || !n.textContent) continue;
        var txt = n.textContent.trim();
        if(txt.indexOf('Updated:')===0 || txt.indexOf('Last updated:')===0 || txt.indexOf('Updated')===0){
          n.textContent = translateUpdated(txt, lang);
        }
      }
      // Also update carousel slide i elements specifically
      var slidesI = document.querySelectorAll('.carousel-slide i');
      for(var k=0;k<slidesI.length;k++){
        var el = slidesI[k];
        var t = el.textContent.trim();
        if(t){ el.textContent = translateUpdated(t, detectLang()); }
      }
    }catch(e){}
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', function(){
    inject(); initCarouselControls();
    fetchTermsJSON(function(){ updateAllUpdatedElements(); updateSlideTexts(); });
    fetchHeroesJSON(function(){ updateSlideTexts(); updateAllUpdatedElements(); });
    fetchTitansJSON(function(){ updateSlideTexts(); updateAllUpdatedElements(); });
  });
  else {
    inject(); initCarouselControls();
    fetchTermsJSON(function(){ updateAllUpdatedElements(); updateSlideTexts(); });
    fetchHeroesJSON(function(){ updateSlideTexts(); updateAllUpdatedElements(); });
    fetchTitansJSON(function(){ updateSlideTexts(); updateAllUpdatedElements(); });
  }
})();
