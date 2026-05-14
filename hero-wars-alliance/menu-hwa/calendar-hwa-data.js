/*Abaixo para simular um espaço vazio - npm run update-calendar-hwa
{// Dentro de extra[] de um evento:
 titles: { en: "\u00A0", pt: "\u00A0", de: "\u00A0", es: "\u00A0", fr: "\u00A0", ja: "\u00A0" },
  labelOnly: true
}, 
{
  titles: { en: "", pt: "", de: "", es: "", fr: "", ja: "" },
  labelOnly: true
},  
{
  titles: { en: "", pt: "", de: "", es: "", fr: "", ja: "" },
  links: { en: "../../", pt: "../../", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  


{
    weekday: "Sunday",
    date: "",
    image: "../../imagens/image-shared/kendle-300px.webp",
    alt: "Kendle Guide",
  titles: {
  en: "New Hero: Kendle Guide", 
 de: "Neuer Held: Kendle Leitfaden",
 es: "Nuevo Héroe: Guía de Kendle",
 fr: "Nouveau Héros : Guide de Kendle",
 pt: "Novo Herói: Guia de Kendle",
 ja: "新しいヒーロー：ケンドルガイド"
},
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true,
  extra: []
  },

*/
// Não esquecer de trocar o mes e as img 1200px,500px,400px!
// img-HWM/events-img/herowarsalliance-calendar-1200px.webp?v=2026-0#
// Título do mês do calendário (npm run update-calendar-hwa)
window.CALENDAR_MONTH_HEADER = {
  en: "Kendle's Season Calendar!",
pt: "Calendário da Temporada da Kendle!",
es: "¡Calendario de la Temporada de Kendle!",
fr: "Calendrier de la Saison de Kendle !",
de: "Kendles Saisonkalender!",
ja: "ケンドルのシーズンカレンダー！"
};
window.CALENDAR_DATA = [
{
    weekday: "Sunday",
    date: "",
    image: "../../imagens/image-shared/kendle-300px.webp",
    alt: "Kendle Guide",
  titles: {
  en: "New Hero: Kendle Guide", 
 de: "Neuer Held: Kendle Leitfaden",
 es: "Nuevo Héroe: Guía de Kendle",
 fr: "Nouveau Héros : Guide de Kendle",
 pt: "Novo Herói: Guia de Kendle",
 ja: "新しいヒーロー：ケンドルガイド"
},
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true,
  extra: []
  },
  
{
  weekday: "Monday",
  date: "May, 11",
    image: "../../img-HWM/events-img/outland-splendor-img/outland-splendor-200px.webp",
    alt: "Abyss Splendor",
    titles: { en: "🌌 Abyss Splendor Event", de: "🌌 Glanz des Außenlands Leitfaden", es: "🌌 Esplendor del Territorio Guía", fr: "🌌 Splendeur de l’Outreterre Guide", pt: "🌌 Esplendor da Fronteira Guia", ja: "🌌 アウトランド・スプレンダー ガイド" },
    links: { en: "/hero-wars-alliance/event-hwa/abyss-splendor-en.html", pt: "/hero-wars-alliance/event-hwa/abyss-splendor-pt.html", de: "/hero-wars-alliance/event-hwa/abyss-splendor-de.html", es: "/hero-wars-alliance/event-hwa/abyss-splendor-es.html", fr: "/hero-wars-alliance/event-hwa/abyss-splendor-fr.html", ja: "/hero-wars-alliance/event-hwa/abyss-splendor-ja.html" },
    extra: [     
        {
  titles: { en: "Dorian Guide", pt: "Guia do Dorian", de: "Dorian Leitfaden", es: "Guía de Dorian", fr: "Guide de Dorian",  ja: "ドリアンガイド" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Dorian - English.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Dorian Rework", pt: "Reformulação do Dorian", de: "Dorian Überarbeitung", es: "Revisión de Dorian", fr: "Refonte de Dorian", ja: "ドリアンのリワーク" },
  labelOnly: true
},  
      
    ]
  },
  {
    weekday: "Tuesday",
    date: "May, 12",
     image: "../../img-HWM/events-img/outland-splendor-img/outland-splendor-200px.webp",
    alt: "Abyss Splendor",
    titles: { en: "🌌 Abyss Splendor Event", de: "🌌 Glanz des Außenlands Leitfaden", es: "🌌 Esplendor del Territorio Guía", fr: "🌌 Splendeur de l’Outreterre Guide", pt: "🌌 Esplendor da Fronteira Guia", ja: "🌌 アウトランド・スプレンダー ガイド" },
    links: { en: "/hero-wars-alliance/event-hwa/abyss-splendor-en.html", pt: "/hero-wars-alliance/event-hwa/abyss-splendor-pt.html", de: "/hero-wars-alliance/event-hwa/abyss-splendor-de.html", es: "/hero-wars-alliance/event-hwa/abyss-splendor-es.html", fr: "/hero-wars-alliance/event-hwa/abyss-splendor-fr.html", ja: "/hero-wars-alliance/event-hwa/abyss-splendor-ja.html" },
    extra: [     
        {
  titles: { en: "Dorian Guide", pt: "Guia do Dorian", de: "Dorian Leitfaden", es: "Guía de Dorian", fr: "Guide de Dorian",  ja: "ドリアンガイド" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Dorian - English.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Dorian Rework", pt: "Reformulação do Dorian", de: "Dorian Überarbeitung", es: "Revisión de Dorian", fr: "Refonte de Dorian", ja: "ドリアンのリワーク" },
  labelOnly: true
},  
      
    ]
  },
{
  weekday: "Wednesday",
  date: "May, 13",
     image: "../../img-HWM/events-img/outland-splendor-img/outland-splendor-200px.webp",
    alt: "Abyss Splendor",
    titles: { en: "🌌 Abyss Splendor Event", de: "🌌 Glanz des Außenlands Leitfaden", es: "🌌 Esplendor del Territorio Guía", fr: "🌌 Splendeur de l’Outreterre Guide", pt: "🌌 Esplendor da Fronteira Guia", ja: "🌌 アウトランド・スプレンダー ガイド" },
    links: { en: "/hero-wars-alliance/event-hwa/abyss-splendor-en.html", pt: "/hero-wars-alliance/event-hwa/abyss-splendor-pt.html", de: "/hero-wars-alliance/event-hwa/abyss-splendor-de.html", es: "/hero-wars-alliance/event-hwa/abyss-splendor-es.html", fr: "/hero-wars-alliance/event-hwa/abyss-splendor-fr.html", ja: "/hero-wars-alliance/event-hwa/abyss-splendor-ja.html" },
    extra: [     
        {
  titles: { en: "Dorian Guide", pt: "Guia do Dorian", de: "Dorian Leitfaden", es: "Guía de Dorian", fr: "Guide de Dorian",  ja: "ドリアンガイド" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Dorian - English.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Dorian Rework", pt: "Reformulação do Dorian", de: "Dorian Überarbeitung", es: "Revisión de Dorian", fr: "Refonte de Dorian", ja: "ドリアンのリワーク" },
  labelOnly: true
},  
      
    ]
  },
  {
    weekday: "Thursday",
    date: "May, 14",
    image: "../../imagens/image-shared/miu-300px.webp",
     alt: "Miu Guide",
   titles: { 
 en: "Miu Guide", de: "Miu Leitfaden", es: "Guía de Miu", fr: "Guide de Miu", pt: "Guia de Miu", ja: "ミウガイド"
},    links: { en: "../../hero-wars-alliance/characters-guide/miu-en.html", de: "../../hero-wars-alliance/characters-guide/miu-de.html", es: "../../hero-wars-alliance/characters-guide/miu-es.html", fr: "../../hero-wars-alliance/characters-guide/miu-fr.html", pt: "../../hero-wars-alliance/characters-guide/miu-pt.html", ja: "../../hero-wars-alliance/characters-guide/miu-ja.html" },
  extra: [       
      {
  titles: { en: "Path to Perfection - Miu Event", de: "", es: "", fr: "", pt: "", ja: "" },
  links: { en: "../../hero-wars-alliance/event-hwa/path-to-perfection-en.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
    ]
  },
  {
    weekday: "Friday",
    date: "May, 15",
     image: "../../imagens/image-shared/miu-300px.webp",
     alt: "Miu Guide",
   titles: { 
 en: "Miu Guide", de: "Miu Leitfaden", es: "Guía de Miu", fr: "Guide de Miu", pt: "Guia de Miu", ja: "ミウガイド"
},    links: { en: "../../hero-wars-alliance/characters-guide/miu-en.html", de: "../../hero-wars-alliance/characters-guide/miu-de.html", es: "../../hero-wars-alliance/characters-guide/miu-es.html", fr: "../../hero-wars-alliance/characters-guide/miu-fr.html", pt: "../../hero-wars-alliance/characters-guide/miu-pt.html", ja: "../../hero-wars-alliance/characters-guide/miu-ja.html" },
  extra: [       
      {
  titles: { en: "Path to Perfection - Miu Event", de: "", es: "", fr: "", pt: "", ja: "" },
  links: { en: "../../hero-wars-alliance/event-hwa/path-to-perfection-en.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
    ]
  },
  {
    weekday: "Saturday",
    date: "May, 16",
   image: "../../imagens/image-shared/miu-300px.webp",
     alt: "Miu Guide",
   titles: { 
 en: "Miu Guide", de: "Miu Leitfaden", es: "Guía de Miu", fr: "Guide de Miu", pt: "Guia de Miu", ja: "ミウガイド"
},    links: { en: "../../hero-wars-alliance/characters-guide/miu-en.html", de: "../../hero-wars-alliance/characters-guide/miu-de.html", es: "../../hero-wars-alliance/characters-guide/miu-es.html", fr: "../../hero-wars-alliance/characters-guide/miu-fr.html", pt: "../../hero-wars-alliance/characters-guide/miu-pt.html", ja: "../../hero-wars-alliance/characters-guide/miu-ja.html" },
  extra: [       
      {
  titles: { en: "Path to Perfection - Miu Event", de: "", es: "", fr: "", pt: "", ja: "" },
  links: { en: "../../hero-wars-alliance/event-hwa/path-to-perfection-en.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
    ]
  },
{
  weekday: "Sunday",
  date: "May, 17",
     image: "../../imagens/image-shared/miu-300px.webp",
     alt: "Miu Guide",
   titles: { 
 en: "Miu Guide", de: "Miu Leitfaden", es: "Guía de Miu", fr: "Guide de Miu", pt: "Guia de Miu", ja: "ミウガイド"
},    links: { en: "../../hero-wars-alliance/characters-guide/miu-en.html", de: "../../hero-wars-alliance/characters-guide/miu-de.html", es: "../../hero-wars-alliance/characters-guide/miu-es.html", fr: "../../hero-wars-alliance/characters-guide/miu-fr.html", pt: "../../hero-wars-alliance/characters-guide/miu-pt.html", ja: "../../hero-wars-alliance/characters-guide/miu-ja.html" },
  extra: [       
      {
  titles: { en: "Path to Perfection Event(old)", de: "", es: "", fr: "", pt: "", ja: "" },
  links: { en: "../../hero-wars-alliance/events-tips-hwa/drayne-path-to-perfection-en.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
    ]
  },

  {
    weekday: "Monday",
    date: "May, 18",
    image: "../../img-HWM/events-img/way-of-chaos/way-of-chaos-200px.webp",
    alt: "Tips for Dorian - Way of Chaos Event",
    titles: { en: "Tips for Dorian - Way of Chaos Event", de: "Tipps für Dorian - Chaos des Weges Event", es: "Consejos para Dorian - Evento Camino del Caos", fr: "Conseils pour Dorian - Événement Voie du Chaos", pt: "Dicas para Dorian no Evento Caminho do Caos", ja: "ドリアンの混沌の道イベントのヒント" },
    links: { en: "../../hero-wars-alliance/event-hwa/way-of-chaos-hwa-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/way-of-chaos-hwa-pt.html", ja: "" },
    extra: [     
      {
        titles: { en: "Dorian - Relic Event", de: "Dorian - Relikt-Ereignis", es: "Dorian - Evento de Reliquia", fr: "Dorian - Événement des Reliques", pt: "Dorian - Evento de Relíquia", ja: "ドリアン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "Dorian Guide", pt: "Guia do Dorian", de: "Dorian Leitfaden", es: "Guía de Dorian", fr: "Guide de Dorian",  ja: "ドリアンガイド" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Dorian - English.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
    ]
  },

  {
    weekday: "Tuesday",
    date: "May, 19",
     image: "../../img-HWM/events-img/way-of-chaos/way-of-chaos-200px.webp",
    alt: "Tips for Dorian - Way of Chaos Event",
    titles: { en: "Tips for Dorian - Way of Chaos Event", de: "Tipps für Dorian - Chaos des Weges Event", es: "Consejos para Dorian - Evento Camino del Caos", fr: "Conseils pour Dorian - Événement Voie du Chaos", pt: "Dicas para Dorian no Evento Caminho do Caos", ja: "ドリアンの混沌の道イベントのヒント" },
    links: { en: "../../hero-wars-alliance/event-hwa/way-of-chaos-hwa-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/way-of-chaos-hwa-pt.html", ja: "" },
    extra: [     
      {
        titles: { en: "Dorian - Relic Event", de: "Dorian - Relikt-Ereignis", es: "Dorian - Evento de Reliquia", fr: "Dorian - Événement des Reliques", pt: "Dorian - Evento de Relíquia", ja: "ドリアン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "Dorian Guide", pt: "Guia do Dorian", de: "Dorian Leitfaden", es: "Guía de Dorian", fr: "Guide de Dorian",  ja: "ドリアンガイド" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Dorian - English.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
    ]
  },

  {
    weekday: "Wednesday",
    date: "May, 20",
      image: "../../img-HWM/events-img/way-of-chaos/way-of-chaos-200px.webp",
    alt: "Tips for Dorian - Way of Chaos Event",
    titles: { en: "Tips for Dorian - Way of Chaos Event", de: "Tipps für Dorian - Chaos des Weges Event", es: "Consejos para Dorian - Evento Camino del Caos", fr: "Conseils pour Dorian - Événement Voie du Chaos", pt: "Dicas para Dorian no Evento Caminho do Caos", ja: "ドリアンの混沌の道イベントのヒント" },
    links: { en: "../../hero-wars-alliance/event-hwa/way-of-chaos-hwa-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/way-of-chaos-hwa-pt.html", ja: "" },
    extra: [     
      {
        titles: { en: "Dorian - Relic Event", de: "Dorian - Relikt-Ereignis", es: "Dorian - Evento de Reliquia", fr: "Dorian - Événement des Reliques", pt: "Dorian - Evento de Relíquia", ja: "ドリアン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "Dorian Guide", pt: "Guia do Dorian", de: "Dorian Leitfaden", es: "Guía de Dorian", fr: "Guide de Dorian",  ja: "ドリアンガイド" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Dorian - English.html", de: "", es: "", fr: "", pt: "../../", ja: "" },       
  noStrip: true
},  
    ]
  },

  {
    weekday: "Thursday",
    date: "May, 21",
    image: "../../hero-wars-alliance/images/events/talisman-fever/talisman-fever-150px.webp",
    alt: "📿 Shards of the Past",
    titles: { en: "📿 Shards of the Past", de: "📿 Fragmente der Vergangenheit", es: "📿 Fragmentos del Pasado", fr: "📿 Fragments du Passé", pt: "📿 Fragmentos do Passado", ja: "📿 過去の破片" },
    links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" },
    extra: [     
      {
        titles: { en: "Dorian - Relic Event", de: "Dorian - Relikt-Ereignis", es: "Dorian - Evento de Reliquia", fr: "Dorian - Événement des Reliques", pt: "Dorian - Evento de Relíquia", ja: "ドリアン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
        {
  titles: { en: "All Talisman Guides", de: "Alle Talisman Guides", es: "Guía de Todos los Talismanes", fr: "Tous les Guides des Talismans", pt: "Guia de Todos os Talismãs", ja: "すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  
      
    ]
  },
  {
    weekday: "Friday",
    date: "May, 22",
    image: "../../hero-wars-alliance/images/events/talisman-fever/talisman-fever-150px.webp",
    alt: "📿 Shards of the Past",
    titles: { en: "📿 Shards of the Past", de: "📿 Fragmente der Vergangenheit", es: "📿 Fragmentos del Pasado", fr: "📿 Fragments du Passé", pt: "📿 Fragmentos do Passado", ja: "📿 過去の破片" },
    links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" },
    extra: [     
      {
        titles: { en: "Dorian - Relic Event", de: "Dorian - Relikt-Ereignis", es: "Dorian - Evento de Reliquia", fr: "Dorian - Événement des Reliques", pt: "Dorian - Evento de Relíquia", ja: "ドリアン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
        {
  titles: { en: "All Talisman Guides", de: "Alle Talisman Guides", es: "Guía de Todos los Talismanes", fr: "Tous les Guides des Talismans", pt: "Guia de Todos os Talismãs", ja: "すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  
      
    ]
  },
  {
    weekday: "Saturday",
    date: "May, 23",
    image: "../../hero-wars-alliance/images/events/talisman-fever/talisman-fever-150px.webp",
    alt: "📿 Shards of the Past",
    titles: { en: "📿 Shards of the Past", de: "📿 Fragmente der Vergangenheit", es: "📿 Fragmentos del Pasado", fr: "📿 Fragments du Passé", pt: "📿 Fragmentos do Passado", ja: "📿 過去の破片" },
    links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" },
    extra: [     
      {
        titles: { en: "Dorian - Relic Event", de: "Dorian - Relikt-Ereignis", es: "Dorian - Evento de Reliquia", fr: "Dorian - Événement des Reliques", pt: "Dorian - Evento de Relíquia", ja: "ドリアン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
        {
  titles: { en: "All Talisman Guides", de: "Alle Talisman Guides", es: "Guía de Todos los Talismanes", fr: "Tous les Guides des Talismans", pt: "Guia de Todos os Talismãs", ja: "すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  
      
    ]
  },
  
{
  weekday: "Sunday",
  date: "May, 24",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "" },
    extra: [
      {
        titles: { en: "Dorian - Relic Event", de: "Dorian - Relikt-Ereignis", es: "Dorian - Evento de Reliquia", fr: "Dorian - Événement des Reliques", pt: "Dorian - Evento de Relíquia", ja: "ドリアン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
     
       {
 titles: { en: "Skin+", pt: "Skin+", de: "Skin+", es: "Skin+", fr: "Skin+", ja: "スキン+" },
  labelOnly: true
},     
       
    ]
  },

{
  weekday: "Monday",
  date: "May, 25",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "" },
    extra: [
      
      {
 titles: { en: "Skin+", pt: "Skin+", de: "Skin+", es: "Skin+", fr: "Skin+", ja: "スキン+" },
  labelOnly: true
},     
             
    ]
  },
  {
    weekday: "Tuesday",
    date: "May, 26",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "" },
    extra: [
       {
 titles: { en: "Skin+", pt: "Skin+", de: "Skin+", es: "Skin+", fr: "Skin+", ja: "スキン+" },
  labelOnly: true
},       
    ]
  },

{
  weekday: "Thursday",
  date: "May, 27",
   image: "../../hero-wars-alliance/images/events/runic-millstone/runic-event-250px.webp",
    alt: "Rune Storm Event",
    titles: { en: "Rune Storm Event", de: "Runensturm-Event", es: "Evento Tormenta de Runas", fr: "Événement Tempête de Runes", pt: "Evento Tempestade de Runas", ja: "ルーンストームイベント" },
    links: { en: "#section3", pt: "#section3", de: "#section3", es: "#section3", fr: "#section3", ja: "#section3" },
    extra: [
          ]
  },
  {
    weekday: "Friday",
    date: "May, 28",
    image: "../../hero-wars-alliance/images/events/runic-millstone/runic-event-250px.webp",
    alt: "Rune Storm Event",
    titles: { en: "Rune Storm Event", de: "Runensturm-Event", es: "Evento Tormenta de Runas", fr: "Événement Tempête de Runes", pt: "Evento Tempestade de Runas", ja: "ルーンストームイベント" },
    links: { en: "#section3", pt: "#section3", de: "#section3", es: "#section3", fr: "#section3", ja: "#section3" },
    extra: [
          ]
  },
  {
    weekday: "Friday",
    date: "May, 29",
    image: "../../hero-wars-alliance/images/events/runic-millstone/runic-event-250px.webp",
    alt: "Rune Storm Event",
    titles: { en: "Rune Storm Event", de: "Runensturm-Event", es: "Evento Tormenta de Runas", fr: "Événement Tempête de Runes", pt: "Evento Tempestade de Runas", ja: "ルーンストームイベント" },
    links: { en: "#section3", pt: "#section3", de: "#section3", es: "#section3", fr: "#section3", ja: "#section3" },
    extra: [
          ]
  },

  {
    weekday: "Saturday",
    date: "May, 30",
    image: "../../hero-wars-alliance/images/events/skinplus-event/skinplus-event-500px.webp",
    alt: "Skin+ Event",
    titles: { en: "Skin+ Event", de: "Skin+ Event", es: "Evento Skin+", fr: "Événement Skin+", pt: "Evento Skin+", ja: "スキン+ イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/skinplus-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/skinplus-event-pt.html", ja: "" },
    extra: [
           
 
{
 titles: { en: "Dorian Blazing Skin+", pt: "Dorian Blazing Skin+", de: "Dorian Blazing Skin+", es: "Dorian Blazing Skin+", fr: "Dorian Blazing Skin+", ja: "ドリアン・ブレイジングスキン+" },
  labelOnly: true
},     

             
    ]
  },
  {
    weekday: "Sunday",
    date: "May, 31",
    image: "../../hero-wars-alliance/images/events/skinplus-event/skinplus-event-500px.webp",
    alt: "Skin+ Event",
    titles: { en: "Skin+ Event", de: "Skin+ Event", es: "Evento Skin+", fr: "Événement Skin+", pt: "Evento Skin+", ja: "スキン+ イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/skinplus-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/skinplus-event-pt.html", ja: "" },
    extra: [
      {
 titles: { en: "Dorian Blazing Skin+", pt: "Dorian Blazing Skin+", de: "Dorian Blazing Skin+", es: "Dorian Blazing Skin+", fr: "Dorian Blazing Skin+", ja: "ドリアン・ブレイジングスキン+" },
  labelOnly: true
},     


             
    ]
  },
  {
    weekday: "Monday",
    date: "June, 1",
    image: "../../hero-wars-alliance/images/events/skinplus-event/skinplus-event-500px.webp",
    alt: "Skin+ Event",
    titles: { en: "Skin+ Event", de: "Skin+ Event", es: "Evento Skin+", fr: "Événement Skin+", pt: "Evento Skin+", ja: "スキン+ イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/skinplus-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/skinplus-event-pt.html", ja: "" },
    extra: [
     {
 titles: { en: "Dorian Blazing Skin+", pt: "Dorian Blazing Skin+", de: "Dorian Blazing Skin+", es: "Dorian Blazing Skin+", fr: "Dorian Blazing Skin+", ja: "ドリアン・ブレイジングスキン+" },
  labelOnly: true
},     
      
{
        titles: { en: "Kendle - Relic Event", de: "Kendle - Relikt-Ereignis", es: "Kendle - Evento de Reliquia", fr: "Kendle - Événement des Reliques", pt: "Kendle - Evento de Relíquia", ja: "ケンドル - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
       {
  titles: { en: "Kendle Guide", de: "Kendle Leitfaden", es: "Guía de Kendle", fr: "Guide Kendle", pt: "Guia da Kendle", ja: "ケンドル - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },       
  noStrip: true
},  
             
    ]
  },

  {
    weekday: "Tuesday",
    date: "June, 2",
    image: "../../img-HWM/events-img/secrets-of-the-dungeon-img/secrets-of-the-dungeon-200px.webp",
    alt: "Tips for Secrets of the Dungeon Event",
    titles: { en: "Tips for Secrets of the Dungeon Event", de: "Tipps für das Geheimnisse des Dungeons Event", es: "Consejos para el Evento Secretos de la Mazmorra", fr: "Conseils pour l'Événement Secrets du Donjon", pt: "Dicas para o Evento Segredos da Masmorra", ja: "ダンジョンの秘密イベントのヒント" },
    links: { en: "../../Hero Wars/events/secrets-of-the-dungeon-en-hwa.html", de: "", es: "", fr: "", pt: "../../Hero Wars/events/secrets-of-the-dungeon-pt-hwa.html", ja: "" },
    extra: [   
      {
        titles: { en: "Kendle - Relic Event", de: "Kendle - Relikt-Ereignis", es: "Kendle - Evento de Reliquia", fr: "Kendle - Événement des Reliques", pt: "Kendle - Evento de Relíquia", ja: "ケンドル - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
       {
  titles: { en: "Kendle Guide", de: "Kendle Leitfaden", es: "Guía de Kendle", fr: "Guide Kendle", pt: "Guia da Kendle", ja: "ケンドル - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },       
  noStrip: true
},  
    ]
  },

  {
    weekday: "Wednesday",
    date: "June, 3",
    image: "../../img-HWM/events-img/secrets-of-the-dungeon-img/secrets-of-the-dungeon-200px.webp",
    alt: "Tips for Secrets of the Dungeon Event",
    titles: { en: "Tips for Secrets of the Dungeon Event", de: "Tipps für das Geheimnisse des Dungeons Event", es: "Consejos para el Evento Secretos de la Mazmorra", fr: "Conseils pour l'Événement Secrets du Donjon", pt: "Dicas para o Evento Segredos da Masmorra", ja: "ダンジョンの秘密イベントのヒント" },
    links: { en: "../../Hero Wars/events/secrets-of-the-dungeon-en-hwa.html", de: "", es: "", fr: "", pt: "../../Hero Wars/events/secrets-of-the-dungeon-pt-hwa.html", ja: "" },
    extra: [   
      {
        titles: { en: "Kendle - Relic Event", de: "Kendle - Relikt-Ereignis", es: "Kendle - Evento de Reliquia", fr: "Kendle - Événement des Reliques", pt: "Kendle - Evento de Relíquia", ja: "ケンドル - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
       {
  titles: { en: "Kendle Guide", de: "Kendle Leitfaden", es: "Guía de Kendle", fr: "Guide Kendle", pt: "Guia da Kendle", ja: "ケンドル - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },       
  noStrip: true
},  
    ]
  },
  {
    weekday: "Thursday",
    date: "June, 4",
    image: "../../img-HWM/events-img/secrets-of-the-dungeon-img/secrets-of-the-dungeon-200px.webp",
    alt: "Tips for Secrets of the Dungeon Event",
    titles: { en: "Tips for Secrets of the Dungeon Event", de: "Tipps für das Geheimnisse des Dungeons Event", es: "Consejos para el Evento Secretos de la Mazmorra", fr: "Conseils pour l'Événement Secrets du Donjon", pt: "Dicas para o Evento Segredos da Masmorra", ja: "ダンジョンの秘密イベントのヒント" },
    links: { en: "../../Hero Wars/events/secrets-of-the-dungeon-en-hwa.html", de: "", es: "", fr: "", pt: "../../Hero Wars/events/secrets-of-the-dungeon-pt-hwa.html", ja: "" },
    extra: [   
      {
        titles: { en: "Kendle - Relic Event", de: "Kendle - Relikt-Ereignis", es: "Kendle - Evento de Reliquia", fr: "Kendle - Événement des Reliques", pt: "Kendle - Evento de Relíquia", ja: "ケンドル - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
       {
  titles: { en: "Kendle Guide", de: "Kendle Leitfaden", es: "Guía de Kendle", fr: "Guide Kendle", pt: "Guia da Kendle", ja: "ケンドル - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },       
  noStrip: true
},  
    ]
  },
  {
    weekday: "Friday",
    date: "June, 5",
    image: "../../img-HWM/events-img/titan-power/titan-power-200px.webp",
    alt: "Titan Power Event",
    titles: { en: "Titan Power Event", de: "Titanenmacht Ereignis", es: "Evento Poder del Titán", fr: "Événement Puissance du Titan", pt: "Evento Poder do Titã", ja: "タイタンパワーイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/titan-power-event-en-hwa.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/titan-power-event-pt-hwa.html", ja: "" },
    extra: [  
       {
  titles: { en: "Power of the Elements", pt: "Poder dos Elementos", de: "Macht der Elemente", es: "Poder de los Elementos", fr: "Pouvoir des Éléments", ja: "元素の力" },
  links: { en: "../../Hero Wars/events/power-of-the-elements-event-en-hwa.html", pt: "../../Hero Wars/events/power-of-the-elements-event-pt-hwa.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
     
       {
 titles: { en: "Titan Power (Eden)", pt: "Evento Poder do Titã (Eden)", de: "Titanenmacht Ereignis (Eden)", es: "Evento Poder del Titán (Eden)", fr: "Événement Puissance du Titan (Eden)", ja: "タイタンパワーイベント (エデン)" },
  labelOnly: true
},    
{
  titles: { en: "Titan Eden Guide", de: "Titan Eden Leitfaden", es: "Guía de Titan Eden", fr: "Guide Titan Eden", pt: "Guia do Titan Eden", ja: "タイタンエデンガイド" },
  links: { en: "../../Hero Wars/Guia de Titãs Hero Wars/Eden-English.html", de: "", es: "", fr: "", pt: "../../Hero Wars/Guia de Titãs Hero Wars/Eden.html", ja: "" },       
  noStrip: true
},  
{
        titles: { en: "Kendle - Relic Event", de: "Kendle - Relikt-Ereignis", es: "Kendle - Evento de Reliquia", fr: "Kendle - Événement des Reliques", pt: "Kendle - Evento de Relíquia", ja: "ケンドル - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
       {
  titles: { en: "Kendle Guide", de: "Kendle Leitfaden", es: "Guía de Kendle", fr: "Guide Kendle", pt: "Guia da Kendle", ja: "ケンドル - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },       
  noStrip: true
},  
    
     
    ]
  },
  {
    weekday: "Saturday",
    date: "June, 6",
    image: "../../img-HWM/events-img/titan-power/titan-power-200px.webp",
    alt: "Titan Power Event",
    titles: { en: "Titan Power Event", de: "Titanenmacht Ereignis", es: "Evento Poder del Titán", fr: "Événement Puissance du Titan", pt: "Evento Poder do Titã", ja: "タイタンパワーイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/titan-power-event-en-hwa.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/titan-power-event-pt-hwa.html", ja: "" },
    extra: [  
      {
  titles: { en: "Power of the Elements", pt: "Poder dos Elementos", de: "Macht der Elemente", es: "Poder de los Elementos", fr: "Pouvoir des Éléments", ja: "元素の力" },
  links: { en: "../../Hero Wars/events/power-of-the-elements-event-en-hwa.html", pt: "../../Hero Wars/events/power-of-the-elements-event-pt-hwa.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
     
       {
 titles: { en: "Titan Power (Eden)", pt: "Evento Poder do Titã (Eden)", de: "Titanenmacht Ereignis (Eden)", es: "Evento Poder del Titán (Eden)", fr: "Événement Puissance du Titan (Eden)", ja: "タイタンパワーイベント (エデン)" },
  labelOnly: true
},    
{
  titles: { en: "Titan Eden Guide", de: "Titan Eden Leitfaden", es: "Guía de Titan Eden", fr: "Guide Titan Eden", pt: "Guia do Titan Eden", ja: "タイタンエデンガイド" },
  links: { en: "../../Hero Wars/Guia de Titãs Hero Wars/Eden-English.html", de: "", es: "", fr: "", pt: "../../Hero Wars/Guia de Titãs Hero Wars/Eden.html", ja: "" },       
  noStrip: true
},  
{
        titles: { en: "Kendle - Relic Event", de: "Kendle - Relikt-Ereignis", es: "Kendle - Evento de Reliquia", fr: "Kendle - Événement des Reliques", pt: "Kendle - Evento de Relíquia", ja: "ケンドル - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
       {
  titles: { en: "Kendle Guide", de: "Kendle Leitfaden", es: "Guía de Kendle", fr: "Guide Kendle", pt: "Guia da Kendle", ja: "ケンドル - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },       
  noStrip: true
},  
     
    ]
  },
  {
    weekday: "Sunday",
    date: "June, 7",
    image: "../../img-HWM/events-img/titan-power/titan-power-200px.webp",
    alt: "Titan Power Event",
    titles: { en: "Titan Power Event", de: "Titanenmacht Ereignis", es: "Evento Poder del Titán", fr: "Événement Puissance du Titan", pt: "Evento Poder do Titã", ja: "タイタンパワーイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/titan-power-event-en-hwa.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/titan-power-event-pt-hwa.html", ja: "" },
    extra: [  
       {
  titles: { en: "Power of the Elements", pt: "Poder dos Elementos", de: "Macht der Elemente", es: "Poder de los Elementos", fr: "Pouvoir des Éléments", ja: "元素の力" },
  links: { en: "../../Hero Wars/events/power-of-the-elements-event-en-hwa.html", pt: "../../Hero Wars/events/power-of-the-elements-event-pt-hwa.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},
     
       {
 titles: { en: "Titan Power (Eden)", pt: "Evento Poder do Titã (Eden)", de: "Titanenmacht Ereignis (Eden)", es: "Evento Poder del Titán (Eden)", fr: "Événement Puissance du Titan (Eden)", ja: "タイタンパワーイベント (エデン)" },
  labelOnly: true
},    
{
  titles: { en: "Titan Eden Guide", de: "Titan Eden Leitfaden", es: "Guía de Titan Eden", fr: "Guide Titan Eden", pt: "Guia do Titan Eden", ja: "タイタンエデンガイド" },
   links: { en: "../../Hero Wars/Guia de Titãs Hero Wars/Eden-English.html", de: "", es: "", fr: "", pt: "../../Hero Wars/Guia de Titãs Hero Wars/Eden.html", ja: "" },       
  noStrip: true
},  
{
        titles: { en: "Kendle - Relic Event", de: "Kendle - Relikt-Ereignis", es: "Kendle - Evento de Reliquia", fr: "Kendle - Événement des Reliques", pt: "Kendle - Evento de Relíquia", ja: "ケンドル - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
       {
  titles: { en: "Kendle Guide", de: "Kendle Leitfaden", es: "Guía de Kendle", fr: "Guide Kendle", pt: "Guia da Kendle", ja: "ケンドル - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },       
  noStrip: true
},  
     
    ]
  },




 {
    weekday: "WhatsApp Group",
    date: "",
    image: "",
    alt: "Alexandre Games WhatsApp Group",
  titles: {
   en: "🎁 Join our English WhatsApp group for Hero Wars Alliance tips and giveaways!",
  pt: "🎁 Entre no nosso grupo WhatsApp em Português para dicas de Hero Wars Alliance e sorteios!",
  es: "🎁 ¡Únete a nuestro grupo de WhatsApp en inglés para consejos de Hero Wars Alliance y sorteos!",
  de: "🎁 Trete unserer englischen WhatsApp-Gruppe für Hero Wars Alliance-Tipps und Gewinnspiele bei!",
  fr: "🎁 Rejoignez notre groupe WhatsApp en anglais pour des conseils et des giveaways sur Hero Wars Alliance !",
  ja: "🎁 英語のWhatsAppグループに参加して、ヒーローウォーズアライアンスのヒントやギブアウェイをゲット！"
},
  links: { en: "https://chat.whatsapp.com/BsBhrUR1OHfCLciVdA6gGGl", de: "https://chat.whatsapp.com/BsBhrUR1OHfCLciVdA6gGG", es: "https://chat.whatsapp.com/BsBhrUR1OHfCLciVdA6gGG", fr: "https://chat.whatsapp.com/BsBhrUR1OHfCLciVdA6gGG", pt: "https://chat.whatsapp.com/EjH7D0P2i9qKfOy6uX0QRa", ja: "https://chat.whatsapp.com/BsBhrUR1OHfCLciVdA6gGG" },
  noStrip: true,
  extra: [
    {// Dentro de extra[] de um evento:
 titles: { en: "\u00A0", pt: "\u00A0", de: "\u00A0", es: "\u00A0", fr: "\u00A0", ja: "\u00A0" },
  labelOnly: true
}, 

{
  titles: {
    en: "Join Alexandre Games Discord",
    pt: "Entre no Discord Alexandre Games",
    de: "Tritt dem Alexandre Games Discord bei",
    es: "Únete al Discord de Alexandre Games",
    fr: "Rejoignez le Discord Alexandre Games",
    ja: "Alexandre Games Discordに参加しよう"
  },
  links: {
    en: "https://discord.gg/37BRnhBv6r",
    pt: "https://discord.gg/37BRnhBv6r",
    de: "https://discord.gg/37BRnhBv6r",
    es: "https://discord.gg/37BRnhBv6r",
    fr: "https://discord.gg/37BRnhBv6r",
    ja: "https://discord.gg/37BRnhBv6r"
  },
  noStrip: true
},
  ]
  },

  


/* ################################################
   ################################################
   ################################################
   ################################################
   ################################################
   ################################################
   ################################################
    {
        titles: { en: "Blessing of Worlds", de: "Segen der Welten", es: "Bendición de los Mundos", fr: "Bénédiction des Mondes", pt: "Benção dos Mundos", ja: "世界の祝福" },
    links: { en: "../../hero-wars-alliance/event-hwa/blessing-of-worlds-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/blessing-of-worlds-pt.html", ja: "" },
        },

*/
 

/* Calendar data for Alexandre Games - Last updated: 2026-02-01T16:43:33-03:00
   - Keep links per language empty when you want to fill them manually
   - Image and paths are relative to the page that includes the calendar
*/
 /* economizar torre Missão 4(The Way Up), 11 baus da torre = 10+20+30+40+50+70+100 = 320 Rune Spheres(blue)
   - Expedicoes de valkyries(missao 4 - Journey, Rune Stones(red) and Season Points Extra= 1000+1500(25 Season Points)+2000+2500(30season points)+4000)
   - includes the calendar se fizer isso antes de zerar o horário do servidor vc consegue fazer 4 logins as missoes 
*/  

// Add more events following this shape. Keep `links` per language for manual editing.
// Add more events following this shape. Keep `links` per language for manual editing.
// Add more events following this shape. Keep `links` per language for manual editing.
];
