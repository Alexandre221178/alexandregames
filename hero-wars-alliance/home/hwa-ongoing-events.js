(function(){
  // Active Ascendant Glory guides shown below the main calendar carousel.
  var slides = [
     {
      link: "/hero-wars-alliance/event-hwa/lords-of-the-elements-ki1-titans-roar-en.html",
      src500: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki1-titans-roar-500px.webp",
      src400: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki1-titans-roar-400px.webp",
      alt: "Lords of the Elements: Titan's Roar Guide for Hero Wars Alliance",
      title: "Lords of the Elements: Titan's Roar Guide for Hero Wars Alliance",
      strong: "Lords of the Elements: Titan's Roar Guide",
      updated: "Updated: July 29, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/lords-of-the-elements-ki2-elemental-tempest-en.html",
      src500: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki2-elemental-tempest-500px.webp",
      src400: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki2-elemental-tempest-400px.webp",
      alt: "Lords of the Elements: Elemental Tempest Guide for Hero Wars Alliance",
      title: "Lords of the Elements: Elemental Tempest Guide for Hero Wars Alliance",
      strong: "Lords of the Elements: Elemental Tempest Guide",
      updated: "Updated: July 29, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/lords-of-the-elements-ki3-united-by-power-en.html",
      src500: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki3-united-by-power-500px.webp",
      src400: "/hero-wars-alliance/images/events/lords-of-the-elements/lords-of-the-elements-ki3-united-by-power-400px.webp",
      alt: "Lords of the Elements: United by Power Guide for Hero Wars Alliance",
      title: "Lords of the Elements: United by Power Guide for Hero Wars Alliance",
      strong: "LLords of the Elements: United by Power Guide",
      updated: "Updated: July 29, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-400px.webp",
      alt: "Ascendant Glory Event Group Guide for Hero Wars Alliance",
      title: "Ascendant Glory Event Group Guide for Hero Wars Alliance",
      strong: "Ascendant Glory Event Group Guide",
      updated: "Updated: July 23, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/rising-legend-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/rising-legend-400px.webp",
      alt: "Rising Legend Event Guide for Hero Wars Alliance",
      title: "Rising Legend Event Guide for Hero Wars Alliance",
      strong: "Rising Legend Event Guide",
      updated: "Updated: July 23, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/spark-glory-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/spark-glory-400px.webp",
      alt: "Spark of Glory Skin Plus Event Guide for Hero Wars Alliance",
      title: "Spark of Glory Skin Plus Event Guide for Hero Wars Alliance",
      strong: "Spark of Glory Skin+ Event Guide",
      updated: "Updated: July 23, 2026."
    },
    {
      link: "/hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legend-en.html",
      src500: "/hero-wars-alliance/images/events/ascendant-glory/trial-of-legends-500px.webp",
      src400: "/hero-wars-alliance/images/events/ascendant-glory/trial-of-legends-400px.webp",
      alt: "Trial of Legends Event Guide for Hero Wars Alliance",
      title: "Trial of Legends Event Guide for Hero Wars Alliance",
      strong: "Trial of Legends Event Guide",
      updated: "Updated: July 23, 2026."
    },
    {
      link: "/hero-wars-alliance/events-tips-hwa/guus-champions-gallery-en.html",
      src500: "/hero-wars-alliance/images/events-tips-hwa/champions-gallery/champions-gallery-500px-1.webp",
      src400: "/hero-wars-alliance/images/events-tips-hwa/champions-gallery/champions-gallery-400px-1.webp",
      alt: "Guus Champion's Gallery Shop Guide for Hero Wars Alliance",
      title: "Guus Champion's Gallery Shop Guide for Hero Wars Alliance",
      strong: "Champion's Gallery Shop Guide",
      updated: "Updated: July 23, 2026."
    }
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
