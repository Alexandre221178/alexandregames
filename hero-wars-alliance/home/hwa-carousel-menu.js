(function(){
  // Carousel multi-language injector (HWA specific copy)
  const slides = [
    {
      link: "../../hero-wars-alliance/titans-guide/umbra-en.html",
      src500: "../../hero-wars-alliance/images/titans/umbra/umbra-500px.webp",
      src400: "../../hero-wars-alliance/images/titans/umbra/umbra-400px.webp",
      alt: "Umbra Titan Guide for Hero Wars Alliance",
      title: "Umbra Titan Guide for Hero Wars Alliance",
      strong: "Umbra Titan Guide: Master the Light Summoner for Hero Wars Alliance",
      updated: "Updated: February, 2026."
    },
    {
      link: "../../hero-wars-alliance/characters-guide/dante-en.html",
      src500: "../../hero-wars-alliance/images/hero/dante/dante-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/dante/dante-400px.webp",
      alt: "Dante Legendary Skills Guide for Hero Wars Alliance",
      title: "Dante Guide for Hero Wars Alliance",
      strong: "Dante Complete Legendary Skills Guide for Hero Wars Alliance",
      updated: "Updated: January, 2026."
    },
    {
      link: "../../hero-wars-alliance/characters-guide/drayne-en.html",
      src500: "../../hero-wars-alliance/images/hero/drayne/drayne-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/drayne/drayne-400px.webp",
      alt: "Drayne Guide for Hero Wars Alliance",
      title: "Drayne Guide for Hero Wars Alliance",
      strong: "Drayne Complete Guide for Hero Wars Alliance",
      updated: "Updated: January, 2026."
    },
    {
      link: "../../hero-wars-alliance/characters-guide/yasmine-en.html",
      src500: "../../hero-wars-alliance/images/hero/yasmine/yasmine-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/yasmine/yasmine-400px.webp",
      alt: "Yasmine Guide for Hero Wars Alliance",
      title: "Yasmine Guide for Hero Wars Alliance",
      strong: "Yasmine Legendary Relic Complete Guide for Hero Wars Alliance",
      updated: "Updated: January, 2026."
    },
    {
      link: "../../hero-wars-alliance/characters-guide/byrna-en.html",
      src500: "../../hero-wars-alliance/images/hero/byrna/byrna-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/byrna/byrna-400px.webp",
      alt: "Byrna Guide for Hero Wars Alliance",
      title: "Byrna Guide for Hero Wars Alliance",
      strong: "Byrna Guide: Unleash the Healer Bear Spirit in Hero Wars: Alliance",
      updated: "Updated: February, 2026."
    },
    {
      link: "../../y-m-gifts-hwa-en.html",
      src500: "../../hero-wars-alliance/images/daily-gifts/gifts-hwa-500px.webp",
      src400: "../../hero-wars-alliance/images/daily-gifts/gifts-hwa-400px.webp",
      alt: "Redeem your Daily Gifts for Hero Wars Alliance",
      title: "Redeem your Daily Gifts for Hero Wars Alliance",
      strong: "Redeem your Daily Gifts for Hero Wars Alliance",
      updated: "Updated: Everyday."
    }
  ];

  const translations = {
    en: {updatedPrefix: 'Updated:', map: {}},
    pt: {updatedPrefix: 'Atualizado:', map: {'Guide':'Guia','Complete':'Completo','Best Teams':'Melhores Equipes','Stay updated':'Fique atualizado','Redeem your Daily Gifts':'Resgate seus Presentes Diários','Legendary':'Lendário','Skills':'Habilidades','Unleash the Healer Bear Spirit in':'Liberte o Espírito do Urso Curador em','Master the Light Summoner':'Domine o Invocador de Luz','Titan':'Titã','Relic':'Relíquia','Everyday':'Diariamente'}},
    es: {updatedPrefix: 'Actualizado:', map: {'Guide':'Guía','Complete':'Completa','Best Teams':'Mejores Equipos','Stay updated':'Mantente al día','Redeem your Daily Gifts':'Canjea tus Regalos Diarios','Legendary':'Legendario','Skills':'Habilidades','Unleash the Healer Bear Spirit in':'Libera el Espíritu del Oso Sanador en','Master the Light Summoner':'Domina al Invocador de Luz','Titan':'Titán','Relic':'Reliquia','Everyday':'Diariamente'}},
    fr: {updatedPrefix: 'Mis à jour:', map: {'Guide':'Guide','Complete':'Complet','Best Teams':'Meilleures équipes','Stay updated':'Restez informé','Redeem your Daily Gifts':'Échangez vos Cadeaux Quotidiens','Legendary':'Légendaire','Skills':'Compétences','Unleash the Healer Bear Spirit in':'Libérez l\'Esprit de l\'Ours Guérisseur dans','Master the Light Summoner':'Maîtrisez l\'Invocateur de Lumière','Titan':'Titan','Relic':'Relique','Everyday':'Quotidiennement'}},
    ja: {updatedPrefix: '更新:', map: {'Guide':'ガイド','Complete':'完全','Best Teams':'ベストチーム','Stay updated':'最新情報をチェック','Redeem your Daily Gifts':'毎日のギフトを受け取る','Legendary':'レジェンダリー','Skills':'スキル','Unleash the Healer Bear Spirit in':'ヒーラーベアスピリットを解放','Master the Light Summoner':'光の召喚師をマスター','Titan':'タイタン','Relic':'レリック','Everyday':'毎日'}},
    de: {updatedPrefix: 'Aktualisiert:', map: {'Guide':'Leitfaden','Complete':'Vollständig','Best Teams':'Beste Teams','Stay updated':'Bleiben Sie informiert','Redeem your Daily Gifts':'Löse deine täglichen Geschenke ein','Legendary':'Legendär','Skills':'Fähigkeiten','Unleash the Healer Bear Spirit in':'Entfessle den Heiler-Bärengeist in','Master the Light Summoner':'Meistere den Lichtbeschwörer','Titan':'Titan','Relic':'Relikt','Everyday':'Täglich'}}
  };

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
      // 3) Last resort: small hidden language-link
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
    // Sort keys by length descending to replace longer phrases first
    var keys = Object.keys(map).sort(function(a,b){ return b.length - a.length; });
    keys.forEach(function(k){
      out = out.replace(new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'), map[k]);
    });
    return out;
  }

  function translateUpdated(updated, lang){
    if(!updated) return updated;
    var parts = updated.split(':');
    if(parts.length<2) return updated;
    var rest = parts.slice(1).join(':').trim();
    var prefix = translations[lang] ? translations[lang].updatedPrefix : translations.en.updatedPrefix;
    // replace English month names with localized if we have terms JSON
    if(hwaTermsLocalization){
      try{
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        for(var i=0;i<months.length;i++){
          var m = months[i];
          if(rest.indexOf(m)!==-1){
            var loc = (hwaTermsLocalization[m] && hwaTermsLocalization[m][lang]) || (hwaTermsLocalization[m] && hwaTermsLocalization[m]['en']);
            if(loc){ rest = rest.replace(m, loc); break; }
          }
        }
      }catch(e){}
    }
    // Trim trailing punctuation before applying general term translations
    var trailing = '';
    var mt = rest.match(/([\.!?）\)]\s*)$/);
    if(mt){ trailing = mt[0]; rest = rest.slice(0, -trailing.length).trim(); }
    try{ rest = applyTranslations(rest, lang); }catch(e){}
    return prefix + ' ' + (rest + (trailing || ''));
  }

  function buildSlideHTML(s){
    const lang = detectLang();
    // Daily gifts page only exists in EN, so don't change its link
    var targetLink;
    if(s.link.indexOf('y-m-gifts-hwa') !== -1){
      targetLink = s.link; // keep EN link for gifts
    } else {
      targetLink = lang==='en' ? s.link : s.link.replace(/-en\.html$/,'-' + lang + '.html');
    }
    const strongText = applyTranslations(s.strong, lang);
    const updatedText = translateUpdated(s.updated, lang);

    return '\n<figure class="carousel-slide">\n  <a href="' + targetLink + '">\n    <picture>\n      <source media="(min-width: 769px)" srcset="' + s.src500 + '">\n      <img src="' + s.src400 + '" alt="' + s.alt + '" Title="' + s.title + '" loading="lazy">\n        <strong>' + strongText + '</strong>\n        <i>' + updatedText + '</i>\n  </a>\n</figure>';
  }

  function inject(){
    const track = document.querySelector('.carousel-track');
    if(!track) return;
    const html = slides.map(buildSlideHTML).join('\n');
    track.innerHTML = html;
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

  // merge heroes object (HWA format: {name: {en, de, es, ...}}) into translations map
  function mergeHeroesIntoTranslations(data){
    if(!data) return;
    try{
      // HWA format: object keyed by hero name
      var keys = Object.keys(data);
      for(var i=0;i<keys.length;i++){
        var heroName = keys[i];
        var h = data[heroName];
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
    }catch(e){}
  }

  // merge titans object (HWA format: {name: {en, de, es, ...}}) into translations map
  function mergeTitansIntoTranslations(data){
    if(!data) return;
    try{
      var keys = Object.keys(data);
      for(var i=0;i<keys.length;i++){
        var titanName = keys[i];
        var h = data[titanName];
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
    }catch(e){}
  }

  // Try to load HWA heroes localization from global variable or dynamic script
  function loadHeroesLocalization(callback){
    // Check if already loaded as global variable
    if(typeof hwaHeroesLocalization !== 'undefined'){
      try{ mergeHeroesIntoTranslations(hwaHeroesLocalization); }catch(e){}
      if(callback) callback(hwaHeroesLocalization);
      return;
    }
    // Try to dynamically load the JS file
    var paths = ['../data/hwa-heroes-localization.js','../../hero-wars-alliance/data/hwa-heroes-localization.js','./data/hwa-heroes-localization.js'];
    var tried = 0;
    function tryNext(){
      if(tried >= paths.length){ if(callback) callback(null); return; }
      var script = document.createElement('script');
      script.src = paths[tried];
      tried++;
      script.onload = function(){
        try{
          if(typeof hwaHeroesLocalization !== 'undefined'){
            mergeHeroesIntoTranslations(hwaHeroesLocalization);
            if(callback) callback(hwaHeroesLocalization);
          } else { tryNext(); }
        }catch(e){ tryNext(); }
      };
      script.onerror = function(){ tryNext(); };
      document.head.appendChild(script);
    }
    tryNext();
  }

  // Try to load HWA titans localization from global variable or dynamic script
  function loadTitansLocalization(callback){
    // Check if already loaded as global variable
    if(typeof hwaTitansLocalization !== 'undefined'){
      try{ mergeTitansIntoTranslations(hwaTitansLocalization); }catch(e){}
      if(callback) callback(hwaTitansLocalization);
      return;
    }
    // Try to dynamically load the JS file
    var paths = ['../data/hwa-titans-localization.js','../../hero-wars-alliance/data/hwa-titans-localization.js','./data/hwa-titans-localization.js'];
    var tried = 0;
    function tryNext(){
      if(tried >= paths.length){ if(callback) callback(null); return; }
      var script = document.createElement('script');
      script.src = paths[tried];
      tried++;
      script.onload = function(){
        try{
          if(typeof hwaTitansLocalization !== 'undefined'){
            mergeTitansIntoTranslations(hwaTitansLocalization);
            if(callback) callback(hwaTitansLocalization);
          } else { tryNext(); }
        }catch(e){ tryNext(); }
      };
      script.onerror = function(){ tryNext(); };
      document.head.appendChild(script);
    }
    tryNext();
  }

  // terms localization — try load JSON from common relative paths
  var hwaTermsLocalization = null;
  function fetchTermsJSON(callback){
    var prefixes = ['../data/','../../hero-wars-alliance/data/','../../data/hwa/','./data/'];
    var tried = 0;
    function tryNext(){
      if(tried>=prefixes.length){ if(callback) callback(null); return; }
      var url = prefixes[tried] + 'terms-localization.json';
      tried++;
      if(window.fetch){
        fetch(url).then(function(r){ if(!r.ok) throw new Error('no'); return r.json(); }).then(function(j){ hwaTermsLocalization = j; try{ mergeTermsIntoTranslations(j); }catch(e){} if(callback) callback(j); }).catch(function(){ tryNext(); });
      }else{
        // fallback XHR
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function(){
          if(xhr.readyState===4){
            if(xhr.status>=200 && xhr.status<300){
              try{ hwaTermsLocalization = JSON.parse(xhr.responseText); try{ mergeTermsIntoTranslations(hwaTermsLocalization); }catch(e){} if(callback) callback(hwaTermsLocalization); }
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
    }catch(e){}
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

  function init(){
    inject();
    initCarouselControls();
    fetchTermsJSON(function(){ updateAllUpdatedElements(); updateSlideTexts(); });
    loadHeroesLocalization(function(){ updateSlideTexts(); updateAllUpdatedElements(); });
    loadTitansLocalization(function(){ updateSlideTexts(); updateAllUpdatedElements(); });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
