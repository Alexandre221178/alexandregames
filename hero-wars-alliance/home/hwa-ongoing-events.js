(function(){
  // Active Ascendant Glory guides shown below the main calendar carousel.
  var slides = [
    {
      link: "/hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/roads-unlocked-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/roads-unlocked-400px.webp",
      alt: "Roads Unlocked Event Guide for Hero Wars Alliance",
      title: "Roads Unlocked Event Guide for Hero Wars Alliance",
      strong: "Guide: Roads Unlocked Best Tower Strategy to Push for 25 Chests - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/trade-routes-caravan-hall-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/caravan-hall-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/caravan-hall-400px.webp",
      alt: "Caravan Hall Shop Guide for Hero Wars Alliance",
      title: "Caravan Hall Shop Guide for Hero Wars Alliance",
      strong: "Guide: Caravan Hall Shop - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/trade-routes-event-group-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/trade-routes-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/trade-routes-400px.webp",
      alt: "Trade Routes Event Group Guide for Hero Wars Alliance",
      title: "Trade Routes Event Group Guide for Hero Wars Alliance",
      strong: "Guide: Trade Routes Event Group - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/guide/talisman-guide-hwa-en.html",
      src500: "/hero-wars-alliance/images/guides/talisman-hwa/talisman-guide-hwa-500px.webp",
      src400: "/hero-wars-alliance/images/guides/talisman-hwa/talisman-guide-hwa-400px.webp",
      alt: "All Talisman Guides for Hero Wars Alliance",
      title: "Talisman Guide for Hero Wars Alliance",
      strong: "Guide: All Talisman - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/bountiful-roads-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/bountiful-roads-400px.webp",
      alt: "Bountiful Roads Event Guide for Hero Wars Alliance",
      title: "Bountiful Roads Event Guide for Hero Wars Alliance",
      strong: "Guide: Bountiful Roads Event Guide - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/grand-caravan-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/grand-caravan-400px.webp",
      alt: "Grand Caravan Event Guide for Hero Wars Alliance",
      title: "Grand Caravan Event Guide for Hero Wars Alliance",
      strong: "Guide: Grand Caravan Event Guide - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    

   

    
    
    
    
    
  ];

  var headingByLang = {
  en: 'Ongoing events',
  pt: 'Eventos em andamento',
  es: 'Eventos en curso',
  fr: 'Événements en cours',
  de: 'Laufende Events',
  ja: '開催中のイベント'
};

  function getShared(){
    return window.hwaCarouselShared || null;
  }

  function createMount(){
    var mount = document.querySelector('.hwa-ongoing-events-mount');
    if(mount) return mount;

    mount = document.createElement('div');
    mount.className = 'hwa-ongoing-events-mount';

    // Render exactly where the ongoing-events script is placed in the calendar.
    var scriptTag = document.currentScript || document.querySelector('script[src*="hwa-ongoing-events.js"]');
    if(scriptTag && scriptTag.parentNode){
      scriptTag.parentNode.insertBefore(mount, scriptTag.nextSibling);
      return mount;
    }

    var adPlaceholder = document.getElementById('ad-placeholder');
    if(adPlaceholder && adPlaceholder.parentNode){
      adPlaceholder.parentNode.insertBefore(mount, adPlaceholder.nextSibling);
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

  function initOngoingCarouselControls(root){
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
    initOngoingCarouselControls(mount);
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

/* Anciente Awakening - Evento de titans

{
      link: "/hero-wars-alliance/event-hwa/ancient-awakening-main-event.html",
      src500: "/hero-wars-alliance/images/events/ancient-awakening/ancient-awakening-500px.webp",
      src400: "/hero-wars-alliance/images/events/ancient-awakening/ancient-awakening-400px.webp",
      alt: "Ancient Awakening Guide for Hero Wars Alliance",
      title: "Ancient Awakening Guide for Hero Wars Alliance",
      strong: "Guide: Ancient Awakening - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ancient-awakening-firstborn-force.html",
      src500: "/hero-wars-alliance/images/events/ancient-awakening/events-firstborn-force-500px.webp",
      src400: "/hero-wars-alliance/images/events/ancient-awakening/events-firstborn-force-400px.webp",
      alt: "Firstborn Force Guide for Hero Wars Alliance",
      title: "Firstborn Force Guide for Hero Wars Alliance",
      strong: "Guide: Firstborn Force - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ancient-awakening-unstable-equilibrium.html",
      src500: "/hero-wars-alliance/images/events/ancient-awakening/events-unstable-equilibrium-500px.webp",
      src400: "/hero-wars-alliance/images/events/ancient-awakening/events-unstable-equilibrium-400px.webp",
      alt: "Unstable Equilibrium Guide for Hero Wars Alliance",
      title: "Unstable Equilibrium Guide for Hero Wars Alliance",
      strong: "Guide: Unstable Equilibrium - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/titans-events-tips/pallant-shop-ancient-awakening-en.html",
      src500: "/hero-wars-alliance/images/titans-events-tips/pallant-shop-ancient-awakening/pallant-shop-ancient-awakening-500px.webp",
      src400: "/hero-wars-alliance/images/titans-events-tips/pallant-shop-ancient-awakening/pallant-shop-ancient-awakening-400px.webp",
      alt: "Pallant Shop Guide for Hero Wars Alliance",
      title: "Pallant Shop Guide for Hero Wars Alliance",
      strong: "Guide: Pallant Shop - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },

*/

/* Trade Routes Events - Evento de Talismans

{
      link: "/hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/roads-unlocked-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/roads-unlocked-400px.webp",
      alt: "Roads Unlocked Event Guide for Hero Wars Alliance",
      title: "Roads Unlocked Event Guide for Hero Wars Alliance",
      strong: "Guide: Roads Unlocked Best Tower Strategy to Push for 25 Chests - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
{
      link: "/hero-wars-alliance/event-hwa/trade-routes-caravan-hall-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/caravan-hall-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/caravan-hall-400px.webp",
      alt: "Caravan Hall Shop Guide for Hero Wars Alliance",
      title: "Caravan Hall Shop Guide for Hero Wars Alliance",
      strong: "Guide: Caravan Hall Shop - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    }, 

    {
      link: "/hero-wars-alliance/event-hwa/trade-routes-event-group-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/trade-routes-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/trade-routes-400px.webp",
      alt: "Trade Routes Event Group Guide for Hero Wars Alliance",
      title: "Trade Routes Event Group Guide for Hero Wars Alliance",
      strong: "Guide: Trade Routes Event Group - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/guide/talisman-guide-hwa-en.html",
      src500: "/hero-wars-alliance/images/guides/talisman-hwa/talisman-guide-hwa-500px.webp",
      src400: "/hero-wars-alliance/images/guides/talisman-hwa/talisman-guide-hwa-400px.webp",
      alt: "All Talisman Guides for Hero Wars Alliance",
      title: "Talisman Guide for Hero Wars Alliance",
      strong: "Guide: All Talisman - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/bountiful-roads-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/bountiful-roads-400px.webp",
      alt: "Bountiful Roads Event Guide for Hero Wars Alliance",
      title: "Bountiful Roads Event Guide for Hero Wars Alliance",
      strong: "Guide: Bountiful Roads Event Guide - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html",
      src500: "/hero-wars-alliance/images/events/trade-routes/grand-caravan-500px.webp",
      src400: "/hero-wars-alliance/images/events/trade-routes/grand-caravan-400px.webp",
      alt: "Grand Caravan Event Guide for Hero Wars Alliance",
      title: "Grand Caravan Event Guide for Hero Wars Alliance",
      strong: "Guide: Grand Caravan Event Guide - Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },
       

*/

/* Ascendant Glory Events - Evento de Skin+

{
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-champions-gallery-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/champions-gallery-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/champions-gallery-400px.webp",
      alt: "Champion's Gallery Shop Guide for Hero Wars Alliance",
      title: "Champion's Gallery Shop Guide for Hero Wars Alliance",
      strong: "Kendle - Champion's Gallery Shop Guide",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-400px.webp",
      alt: "Ascendant Glory Event Group Guide for Hero Wars Alliance",
      title: "Ascendant Glory Event Group Guide for Hero Wars Alliance",
      strong: "Ascendant Glory Event Group Guide",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/rising-legend-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/rising-legend-400px.webp",
      alt: "Rising Legend Event Guide for Hero Wars Alliance",
      title: "Rising Legend Event Guide for Hero Wars Alliance",
      strong: "Rising Legend Event Guide",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/spark-glory-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/spark-glory-400px.webp",
      alt: "Spark of Glory Skin Plus Event Guide for Hero Wars Alliance",
      title: "Spark of Glory Skin Plus Event Guide for Hero Wars Alliance",
      strong: "Spark of Glory Skin+ Event Guide",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legends-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/trial-of-legends-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/trial-of-legends-400px.webp",
      alt: "Trial of Legends Event Guide for Hero Wars Alliance",
      title: "Trial of Legends Event Guide for Hero Wars Alliance",
      strong: "Trial of Legends Event Guide",
      updated: "Updated: September, 2026."
    },
    

*/

/* Lords of the Elements - Evento de 

{
      link: "/hero-wars-alliance/events-tips-hwa/lords-of-the-elements-shop-en.html",
      src500: "/hero-wars-alliance/images/events-tips-hwa/lords-of-the-elements-shop/lords-of-the-elements-shop-500px.webp",
      src400: "/hero-wars-alliance/images/events-tips-hwa/lords-of-the-elements-shop/lords-of-the-elements-shop-400px.webp",
      alt: "Lords of the Elements Shop Guide for Hero Wars Alliance",
      title: "Lords of the Elements Shop Guide for Hero Wars Alliance",
      strong: "Lords of the Elements Shop Guide",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/lords-of-the-elements-event-group-en.html",
      src500: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-elements-event-group-500px.webp",
      src400: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-elements-event-group-400px.webp",
      alt: "Lords of the Elements event group Guide for Hero Wars Alliance",
      title: "Lords of the Elements event group Guide for Hero Wars Alliance",
      strong: "Lords of the Elements event group Guide",
      updated: "Updated: September, 2026."
    },
     {
      link: "/hero-wars-alliance/event-hwa/lords-of-the-elements-ki1-titans-roar-en.html",
      src500: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki1-titans-roar-500px.webp",
      src400: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki1-titans-roar-400px.webp",
      alt: "Lords of the Elements event group: Titan's Roar Guide for Hero Wars Alliance",
      title: "Lords of the Elements: Titan's Roar Guide for Hero Wars Alliance",
      strong: "Lords of the Elements: Titan's Roar Guide",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/lords-of-the-elements-ki2-elemental-tempest-en.html",
      src500: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki2-elemental-tempest-500px.webp",
      src400: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki2-elemental-tempest-400px.webp",
      alt: "Lords of the Elements: Elemental Tempest Guide for Hero Wars Alliance",
      title: "Lords of the Elements: Elemental Tempest Guide for Hero Wars Alliance",
      strong: "Lords of the Elements: Elemental Tempest Guide",
      updated: "Updated: September, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/lords-of-the-elements-ki3-united-by-power-en.html",
      src500: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki3-united-by-power-500px.webp",
      src400: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki3-united-by-power-400px.webp",
      alt: "Lords of the Elements: United by Power Guide for Hero Wars Alliance",
      title: "Lords of the Elements: United by Power Guide for Hero Wars Alliance",
      strong: "Lords of the Elements: United by Power Guide",
      updated: "Updated: September, 2026."
    },

*/

/* Balance of Power - Grupo do Evento 

{
  link: "/hero-wars-alliance/events-tips-hwa/sanctum-of-balance-shop-en.html",
  src500: "/hero-wars-alliance/images/events-tips-hwa/sanctum-of-balance-shop/sanctum-of-balance-shop-500px.webp",
  src400: "/hero-wars-alliance/images/events-tips-hwa/sanctum-of-balance-shop/sanctum-of-balance-shop-400px.webp",
  alt: "Sanctum of Balance Shop Guide for Hero Wars Alliance",
  title: "Sanctum of Balance Shop for Hero Wars Alliance",
  strong: "Guide: Sanctum of Balance- Xe'sha Shop - Hero Wars Alliance",
  updated: "Updated: September, 2026."
},
{
  link: "/hero-wars-alliance/event-hwa/balance-of-power-event-group-en.html",
  src500: "/hero-wars-alliance/images/events/balance-of-power/balance-of-power-event-group-500px.webp",
  src400: "/hero-wars-alliance/images/events/balance-of-power/balance-of-power-event-group-400px.webp",
  alt: "Balance of Power Guide for Hero Wars Alliance",
  title: "Balance of Power Event Group for Hero Wars Alliance",
  strong: "Guide: Balance of Power Event Group- Hero Wars Alliance",
  updated: "Updated: September, 2026."
},
{
  link: "/hero-wars-alliance/event-hwa/balance-of-power-defiant-edge-en.html",
  src500: "/hero-wars-alliance/images/events/balance-of-power/defiant-edge-500px.webp",
  src400: "/hero-wars-alliance/images/events/balance-of-power/defiant-edge-400px.webp",
  alt: "Defiant Edge Guide for Hero Wars Alliance",
  title: "Defiant Edge Guide for Hero Wars Alliance",
  strong: "Guide: Defiant Edge - Hero Wars Alliance",
 updated: "Updated: September, 2026."
},
{
  link: "/hero-wars-alliance/event-hwa/balance-of-power-gear-and-glory-en.html",
  src500: "/hero-wars-alliance/images/events/balance-of-power/gear-and-glory-500px.webp",
  src400: "/hero-wars-alliance/images/events/balance-of-power/gear-and-glory-400px.webp",
  alt: "Gear and Glory Guide for Hero Wars Alliance",
  title: "Gear and Glory Guide for Hero Wars Alliance",
  strong: "Guide: Gear and Glory - Hero Wars Alliance",
  updated: "Updated: September, 2026."
},
{
  link: "/hero-wars-alliance/event-hwa/balance-of-power-unbroken-bond-en.html",
  src500: "/hero-wars-alliance/images/events/balance-of-power/unbroken-bond-500px.webp",
  src400: "/hero-wars-alliance/images/events/balance-of-power/unbroken-bond-400px.webp",
  alt: "Unbroken Bond Guide for Hero Wars Alliance",
  title: "Unbroken Bond Guide for Hero Wars Alliance",
  strong: "Guide: Unbroken Bond - Hero Wars Alliance",
  updated: "Updated: September, 2026."
},

*/