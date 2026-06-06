(function(){
  // =====================================================
  // SUBMENU SLIDES — adicione/remova itens aqui livremente
  // Mesmo formato do carousel: link, src500, src400, alt, title, strong, updated
  // Quando tirar do carousel, cole aqui.
  // Este submenu fica na pag. home para eventos passados, mas que são recentes.
  // =====================================================
  var slides = [
    {
      link: "/hero-wars-alliance/guide/how-to-play-hero-wars-on-pc-and-mac-en.html",
      src500: "/hero-wars-alliance/img-hero-wars-alliance/guide-img/how-to-play-hero-wars-on-desktop/how-to-play-hero-wars-on-pc-and-mac-500px.webp",
      src400: "/hero-wars-alliance/img-hero-wars-alliance/guide-img/how-to-play-hero-wars-on-desktop/how-to-play-hero-wars-on-pc-and-mac-400px.webp",
      alt: "How to Play Hero Wars Alliance on PC and Mac",
      title: "How to Play Hero Wars Alliance on PC and Mac",
      strong: "How to Play Hero Wars Alliance - PC and Mac",
      updated: "Updated: April, 2026."
    }, 
    
    {
      link: "../../hero-wars-alliance/guide/realm-pve-best-teams-en.html",
      src500: "../../hero-wars-alliance/images/guides/realm-pve-best-teams/realm-pve-best-teams-500px.webp",
      src400: "../../hero-wars-alliance/images/guides/realm-pve-best-teams/realm-pve-best-teams-400px.webp",
      alt: "Best PvE Realm Teams – Beat Boss Rally & Monster LV25 for Hero Wars Alliance",
      title: "Best PvE Realm Teams – Beat Boss Rally & Monster LV25 for Hero Wars Alliance",
      strong: "Best PvE Realm Teams – Beat Boss Rally & Monster LV25 for Hero Wars Alliance",
      updated: "Updated: April, 2026."
    },
      
    

    {
      link: "../../hero-wars-alliance/guide/books-of-boosters-en.html",
      src500: "../../hero-wars-alliance/images/guides/book-of-boosters/boosters-500px.webp",
      src400: "../../hero-wars-alliance/images/guides/book-of-boosters/boosters-400px.webp",
      alt: "Boosters Guide: EXP, Skill & Evolution Books – Hero Wars Alliance",
      title: "Boosters Guide: EXP, Skill & Evolution Books – Hero Wars Alliance",
      strong: "Complete Boosters Guide: EXP, Skill & Evolution Books – Hero Wars Alliance",
      updated: "Updated: April, 2026."
    },
    {
      link: "/hero-wars-alliance/characters-guide/phobos-en.html",
      src500: "/hero-wars-alliance/images/hero/phobos/phobos-500px.webp",
      src400: "/hero-wars-alliance/images/hero/phobos/phobos-400px.webp",
      alt: "Phobos Legendary Skills Guide for Hero Wars Alliance",
      title: "Phobos Guide for Hero Wars Alliance",
      strong: "Guide: Phobos Legendary Skills for Hero Wars Alliance",
      updated: "Updated: March, 2026."
    },
    
    {
      link: "../../hero-wars-alliance/titans-guide/alecto-en.html",
      src500: "../../hero-wars-alliance/images/titans/alecto/alecto-500px.webp",
      src400: "../../hero-wars-alliance/images/titans/alecto/alecto-400px.webp",
      alt: "Alecto Legendary Skills Guide for Hero Wars Alliance",
      title: "Titan Alecto Guide for Hero Wars Alliance",
      strong: "Guide: Titan Alecto for Hero Wars Alliance",
      updated: "Updated: April, 2026."
    },   
    {
      link: "../../hero-wars-alliance/tier-list-hwa/realm-tier-list-en.html",
      src500: "../../hero-wars-alliance/images/tier-list-hwa-img/realm/realm-tier-list-500px.webp",
      src400: "../../hero-wars-alliance/images/tier-list-hwa-img/realm/realm-tier-list-400px.webp",
      alt: "Realm Tier List Guide for Hero Wars Alliance",
      title: "Realm Tier List Guide for Hero Wars Alliance",
      strong: "Realm Tier List Guide for Hero Wars Alliance",
      updated: "Updated: March, 2026."
    },
    {
      link: "../../hero-wars-alliance/guide/realm-en.html",
      src500: "../../hero-wars-alliance/images/guides/realm/realm-guide-500px.webp",
      src400: "../../hero-wars-alliance/images/guides/realm/realm-guide-400px.webp",
      alt: "Realm Mode Guide for Hero Wars Alliance",
      title: "Realm Mode Guide for Hero Wars Alliance",
      strong: "Complete Realm Mode Guide for Hero Wars Alliance",
      updated: "Updated: March, 2026."
    },
    
    {
      link: "../../hero-wars-alliance/guide/meta-teams-and-combos-en.html",
      src500: "../../hero-wars-alliance/images/guides/meta-teams-and-combos/meta-teams-and-combos-500px.webp",
      src400: "../../hero-wars-alliance/images/guides/meta-teams-and-combos/meta-teams-and-combos-400px.webp",
      alt: "Meta Teams and Combos Guide for Hero Wars Alliance",
      title: "Meta Teams and Combos Guide for Hero Wars Alliance",
      strong: "Complete Meta Teams and Combos 2026 Guide for Hero Wars Alliance",
      updated: "Updated: March, 2026."
    }, 
    {
      link: "../../hero-wars-alliance/characters-guide/electra-en.html",
      src500: "../../hero-wars-alliance/images/hero/electra/electra-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/electra/electra-400px.webp",
      alt: "Electra Legendary Skills Guide for Hero Wars Alliance",
      title: "Electra Guide for Hero Wars Alliance",
      strong: "Guide Skin+: Electra Legendary Skills for Hero Wars Alliance",
      updated: "Updated: May, 2026."
    },
    {
      link: "../../hero-wars-alliance/characters-guide/drayne-en.html",
      src500: "../../hero-wars-alliance/images/hero/drayne/drayne-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/drayne/drayne-400px.webp",
      alt: "Drayne Legendary Skills Guide for Hero Wars Alliance",
      title: "Drayne Guide for Hero Wars Alliance",
      strong: "Guide Skin Jade Flame: Drayne Legendary Skills for Hero Wars Alliance",
      updated: "Updated: May, 2026."
    },
    {
      link: "../../hero-wars-alliance/characters-guide/folio-en.html",
      src500: "../../hero-wars-alliance/images/hero/folio/folio-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/folio/folio-400px.webp",
      alt: "Folio Legendary Skills Guide for Hero Wars Alliance",
      title: "Folio Guide for Hero Wars Alliance",
      strong: "Folio: New Skin - Legendary Skills Guide for Hero Wars Alliance",
      updated: "Updated: April, 2026."
    },   
    {
      link: "../../hero-wars-alliance/characters-guide/miu-en.html",
      src500: "../../hero-wars-alliance/images/hero/miu/miu-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/miu/miu-400px.webp",
      alt: "Miu Legendary Skills Guide for Hero Wars Alliance",
      title: "Miu Guide for Hero Wars Alliance",
      strong: "Miu Legendary Guide Skills for Hero Wars Alliance",
      updated: "Updated: March, 2026."
    },
    {
  link: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html",
  src500: "../../hero-wars-alliance/images/guides/talisman-hwa/talisman-guide-hwa-500px.webp",
  src400: "../../hero-wars-alliance/images/guides/talisman-hwa/talisman-guide-hwa-400px.webp",
  alt: "Talisman Guide for Hero Wars Alliance",
  title: "Talisman Guide for Hero Wars Alliance",
  strong: "Complete Talisman Guide 2026 - Which is better? Hero Wars Alliance",
  updated: "Updated: April, 2026."
},
    {
      link: "../../hero-wars-alliance/characters-guide/drayne-en.html",
      src500: "../../hero-wars-alliance/images/hero/drayne/drayne-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/drayne/drayne-400px.webp",
      alt: "Drayne Legendary Skills Guide for Hero Wars Alliance",
      title: "Drayne Guide for Hero Wars Alliance",
      strong: "Guide: Drayne Legendary Skills for Hero Wars Alliance",
      updated: "Updated: April  , 2026."
    },
    
    {
      link: "../../hero-wars-alliance/characters-guide/somna-en.html",
      src500: "../../hero-wars-alliance/images/hero/somna/somna-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/somna/somna-400px.webp",
      alt: "Somna Legendary Skills Guide for Hero Wars Alliance",
      title: "Somna Guide for Hero Wars Alliance",
      strong: "Somna: New Skin+ - Legendary Skills Guide for Hero Wars Alliance",
      updated: "Updated: April, 2026."
    },
    {
      link: "../../hero-wars-alliance/characters-guide/lian-en.html",
      src500: "../../hero-wars-alliance/images/hero/lian/lian-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/lian/lian-400px.webp",
      alt: "Lian Legendary Skills Guide for Hero Wars Alliance",
      title: "Lian Guide for Hero Wars Alliance",
      strong: "Lian: New Skin+ - Legendary Skills Guide for Hero Wars Alliance",
      updated: "Updated: April, 2026."
    },
    {
      link: "../../hero-wars-alliance/characters-guide/byrna-en.html",
      src500: "../../hero-wars-alliance/images/hero/byrna/byrna-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/byrna/byrna-400px.webp",
      alt: "Byrna Legendary Skills Guide for Hero Wars Alliance",
      title: "Byrna Guide for Hero Wars Alliance",
      strong: "Byrna Legendary Guide Skills Guide for Hero Wars Alliance (skin+)",
      updated: "Updated(skin+): March, 2026."
    },
    
     {
      link: "../../hero-wars-alliance/characters-guide/leonel-en.html",
      src500: "../../hero-wars-alliance/images/hero/leonel/leonel-500px.webp",
      src400: "../../hero-wars-alliance/images/hero/leonel/leonel-400px.webp",
      alt: "Leonel Legendary Skills Guide for Hero Wars Alliance",
      title: "Leonel Guide for Hero Wars Alliance",
      strong: "Leonel Legendary Guide Skills Guide for Hero Wars Alliance",
      updated: "Updated: February, 2026."
    },    
  ];

  var headingByLang = {
  en: 'Featured Guides (Recent Events - Ended) - Hero Wars Alliance',
  pt: 'Guias de Eventos Recentes (Encerrados) - Hero Wars Alliance',
  es: 'Guías de Eventos Recientes (Finalizados) - Hero Wars Alliance',
  fr: 'Guides d’Événements Récents (Terminés) - Hero Wars Alliance',
  de: 'Guides zu Kürzlichen (Abgeschlossenen) Events - Hero Wars Alliance',
  ja: '最近のイベント（終了）ガイド - Hero Wars Alliance'
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

    var block3Comment = findBlock3Comment();
    if(block3Comment && block3Comment.parentNode){
      block3Comment.parentNode.insertBefore(mount, block3Comment.nextSibling);
      return mount;
    }

    var fallback = document.querySelector('#second-half') || document.querySelector('.container');
    if(fallback){
      fallback.appendChild(mount);
    }
    return mount;
  }

  function buildFigure(slide, shared, lang){
    var englishLink = slide.link;
    var targetLink = shared.buildLocalizedLink(englishLink, lang);

    var figure = document.createElement('figure');
    figure.className = 'img-embed';

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
    var wrapper = document.createElement('div');

    for(var i = 0; i < slides.length; i++){
      var figure = buildFigure(slides[i], shared, lang);
      wrapper.appendChild(figure);
      if(typeof shared.resolveLink === 'function'){
        try{ shared.resolveLink(figure); }catch(e){}
      }
    }

    main.appendChild(wrapper);
    mount.innerHTML = '';
    mount.appendChild(h2);
    mount.appendChild(main);
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