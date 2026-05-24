(function(){
  // =====================================================
  // SUBMENU SLIDES — adicione/remova itens aqui livremente
  // Mesmo formato do carousel: link, src500, src400, alt, title, strong, updated
  // Quando tirar do carousel, cole aqui.
  // =====================================================
  var slides = [
    
    
    {
      link: "../../hero-wars-alliance/event-special-hwa/kendle-season-adventure-guide-en.html",
      src500: "../../hero-wars-alliance/images/events-special-hwa/kendle-adventure-shop/kendle-adventure-shop-500px.webp",
      src400: "../../hero-wars-alliance/images/events-special-hwa/kendle-adventure-shop/kendle-adventure-shop-400px.webp",
      alt: "Kendle Adventure and Shop Guide for Hero Wars Alliance",
      title: "Kendle Adventure and Shop Guide for Hero Wars Alliance",
      strong: "Guide: Kendle Adventure and Shop f2p Strategy for Hero Wars Alliance",
      updated: "Updated: May, 2026."
    },
    
    {
      link: "/hero-wars-alliance/characters-guide/kendle-en.html",
      src500: "/hero-wars-alliance/images/hero/kendle/kendle-500px.webp",
      src400: "/hero-wars-alliance/images/hero/kendle/kendle-400px.webp",
      alt: "Kendle Legendary Skills Guide for Hero Wars Alliance",
      title: "Kendle Guide for Hero Wars Alliance",
      strong: "Guide: Kendle Legendary Skills for Hero Wars Alliance",
      updated: "Updated: May, 2026."
    },
    {
      link: "../../hero-wars-alliance/ag-daily-gifts-hwa/gifts-hwa-en.html",
      src500: "../../hero-wars-alliance/images/daily-gifts/gifts-hwa-500px.webp",
      src400: "../../hero-wars-alliance/images/daily-gifts/gifts-hwa-400px.webp",
      alt: "Redeem your Daily Gifts for Hero Wars Alliance",
      title: "Redeem your Daily Gifts for Hero Wars Alliance",
      strong: "Redeem your Daily Gifts for Hero Wars Alliance",
      updated: "Updated: Everyday."
    },
  ];

  var headingByLang = {
  en: 'Recent Season Event Guides',
  pt: 'Guias de Eventos de Temporada Recentes',
  es: 'Guías de Eventos de Temporada Recientes',
  fr: 'Guides des événements de saison récents',
  de: 'Anleitungen zu aktuellen Saison-Events',
  ja: '最近のシーズンイベントガイド'
};

  function getShared(){
    return window.hwaCarouselShared || null;
  }

  function findBlock3Comment(){
    try{
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_COMMENT, null);
      var current;
      var lastMatch = null;
      while((current = walker.nextNode())){
        if(current.nodeValue && current.nodeValue.indexOf('BLOCO 3') !== -1){
          lastMatch = current;
        }
      }
      return lastMatch;
    }catch(e){
      return null;
    }
  }

  function createMount(){
    var mount = document.querySelector('.hwa-submenu-mount');
    if(mount) return mount;

    mount = document.createElement('div');
    mount.className = 'hwa-submenu-mount';

    // Primary target: render exactly where this script tag is placed in HTML.
    var scriptTag = document.currentScript || document.querySelector('script[src*="hwa-submenu-calendar.js"]');
    if(scriptTag && scriptTag.parentNode){
      scriptTag.parentNode.insertBefore(mount, scriptTag.nextSibling);
      return mount;
    }

    var block3Comment = findBlock3Comment();
    if(block3Comment && block3Comment.parentNode){
      block3Comment.parentNode.insertBefore(mount, block3Comment.nextSibling);
      return mount;
    }

    // Prefer a visible container. Some calendar pages keep #second-half hidden.
    var secondHalf = document.querySelector('#second-half');
    var fallback = document.querySelector('.container');
    if(secondHalf && !secondHalf.classList.contains('hidden')){
      fallback = secondHalf;
    }
    if(fallback){
      fallback.appendChild(mount);
    }
    return mount;
  }

  function buildFigure(slide, shared, lang){
    var englishLink = slide.link;
    var targetLink = shared.buildLocalizedLink(englishLink, lang);

    var figure = document.createElement('figure');
    figure.className = 'carousel-slide';

    var anchor = document.createElement('a');
    anchor.href = targetLink;
    anchor.setAttribute('data-en-link', englishLink);
    anchor.setAttribute('data-localized-link', targetLink);
    anchor.setAttribute('data-lang', lang);

    var picture = document.createElement('picture');

    var source = document.createElement('source');
    source.media = '(min-width: 769px)';
    source.srcset = slide.src500;

    var img = document.createElement('img');
    img.src = slide.src400;
    img.alt = shared.localizeText(slide.alt, lang);
    img.title = shared.localizeText(slide.title, lang);
    img.loading = 'lazy';

    picture.appendChild(source);
    picture.appendChild(img);

    var strong = document.createElement('strong');
    strong.textContent = shared.localizeText(slide.strong, lang);

    var italic = document.createElement('i');
    italic.textContent = shared.translateUpdated(slide.updated, lang);

    anchor.appendChild(picture);
    anchor.appendChild(strong);
    anchor.appendChild(italic);
    figure.appendChild(anchor);
    return figure;
  }

  function initSubmenuCarouselControls(root){
    if(!root) return;
    var track = root.querySelector('.carousel-track');
    if(!track) return;
    var prev = root.querySelector('.carousel-btn.prev');
    var next = root.querySelector('.carousel-btn.next');

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

    track.tabIndex = track.tabIndex || 0;
    track.addEventListener('keydown', function(e){
      if(e.key === 'ArrowLeft') { e.preventDefault(); track.scrollLeft -= getScrollAmount(); }
      if(e.key === 'ArrowRight') { e.preventDefault(); track.scrollLeft += getScrollAmount(); }
    });
  }

  function render(){
    var shared = getShared();
    if(!shared) return;
    if(!slides.length) return;

    var lang = shared.detectLang ? shared.detectLang() : 'en';

    var mount = createMount();
    if(!mount) return;

    var h2 = document.createElement('h2');
    h2.textContent = headingByLang[lang] || headingByLang.en;

    var main = document.createElement('main');
    var container = document.createElement('div');
    container.className = 'carousel-container';
    var track = document.createElement('div');
    track.className = 'carousel-track';

    for(var i = 0; i < slides.length; i++){
      var figure = buildFigure(slides[i], shared, lang);
      track.appendChild(figure);
      if(typeof shared.resolveLink === 'function'){
        try{
          var anchor = figure.querySelector('a[data-en-link]');
          if(anchor) shared.resolveLink(anchor);
        }catch(e){}
      }
    }

    var prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-btn prev';
    prevBtn.innerHTML = '&#10094;';
    prevBtn.setAttribute('aria-label', 'Previous slides');

    var nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-btn next';
    nextBtn.innerHTML = '&#10095;';
    nextBtn.setAttribute('aria-label', 'Next slides');

    container.appendChild(track);
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);
    main.appendChild(container);
    mount.innerHTML = '';
    mount.appendChild(h2);
    mount.appendChild(main);
    initSubmenuCarouselControls(mount);
  }

  function renderWhenReady(attempt){
    var tryCount = typeof attempt === 'number' ? attempt : 0;
    if(getShared()){
      render();
      return;
    }
    if(tryCount >= 20) return;
    window.setTimeout(function(){
      renderWhenReady(tryCount + 1);
    }, 120);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ renderWhenReady(0); });
  } else {
    renderWhenReady(0);
  }

  document.addEventListener('hwaCarouselSharedReady', function(){
    renderWhenReady(0);
  });
})();