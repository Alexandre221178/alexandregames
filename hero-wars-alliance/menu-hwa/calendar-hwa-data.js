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
  links: { en: "../../", pt: "", de: "", es: "", fr: "",  ja: "" },
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
  en: "Season Calendar!",
pt: "Calendário da Temporada!",
es: "¡Calendario de la Temporada!",
fr: "Calendrier de la Saison!",
de: "Saisonkalender!",
ja: "シーズンカレンダー！"
};
window.CALENDAR_DATA = [

{
  weekday: "Monday",
  date: "July, 06",
    image: "../../imagens/image-shared/crow-300px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
    extra: [
      {
titles: { en: "Bountiful Roads", pt: "Estradas Prósperas", de: "Ertragreiche Straßen", es: "Caminos Prósperos", fr: "Routes Prospères", ja: "豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "Grand Caravan", pt: "Grande Caravana", de: "Große Karawane", es: "Gran Caravana", fr: "Grande Caravane", ja: "大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Roads Unlocked", pt: "Estradas Desbloqueadas", de: "Freigelegene Straßen", es: "Caminos Desbloqueados", fr: "Routes Déverrouillées", ja: "開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 
      {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},
    ]
  },
  {
    weekday: "Tuesday",
   date: "July, 07",
    image: "../../imagens/image-shared/crow-300px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
   links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
      {
titles: { en: "Bountiful Roads", pt: "Estradas Prósperas", de: "Ertragreiche Straßen", es: "Caminos Prósperos", fr: "Routes Prospères", ja: "豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "Grand Caravan", pt: "Grande Caravana", de: "Große Karawane", es: "Gran Caravana", fr: "Grande Caravane", ja: "大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Roads Unlocked", pt: "Estradas Desbloqueadas", de: "Freigelegene Straßen", es: "Caminos Desbloqueados", fr: "Routes Déverrouillées", ja: "開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},


    ]
  },
{
  weekday: "Wednesday",
  date: "July, 08",
    image: "../../imagens/image-shared/crow-300px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
   links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
      {
titles: { en: "Bountiful Roads", pt: "Estradas Prósperas", de: "Ertragreiche Straßen", es: "Caminos Prósperos", fr: "Routes Prospères", ja: "豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "Grand Caravan", pt: "Grande Caravana", de: "Große Karawane", es: "Gran Caravana", fr: "Grande Caravane", ja: "大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Roads Unlocked", pt: "Estradas Desbloqueadas", de: "Freigelegene Straßen", es: "Caminos Desbloqueados", fr: "Routes Déverrouillées", ja: "開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},


    ]
  },
  {
    weekday: "Thursday",
   date: "July, 09",
     image: "../../imagens/image-shared/crow-300px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
   links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
 {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},
      {
        titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
        links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
      },
       {
        titles: { en: "🔶Outland Chest Discount", pt: "🔶Desconto de Baús do Outland", de: "🔶Rabatt auf Outland-Truhen", es: "🔶Descuento de Cajas del Outland", fr: "🔶Réduction sur les Coffres de l'Outland", ja: "🔶アウトランドチェスト割引)" },
        links: { en: "#section12", pt: "#section12", de: "#section12", es: "#section12", fr: "#section12", ja: "#section12" }
      },
      {
        titles: { en: "🟡Summoning Sphere Discount", pt: "🟡Desconto de Esferas de Convocação", de: "🟡Rabatt auf Beschwörungssphären", es: "🟡Descuento de Esferas de Invocación", fr: "🟡éduction sur les Sphères d'Invocation", ja: "🟡召喚スフィア割引" },
        links: { en: "#section13", pt: "#section13", de: "#section13", es: "#section13", fr: "#section13", ja: "#section13" }
      },
      {
titles: { en: "Bountiful Roads", pt: "Estradas Prósperas", de: "Ertragreiche Straßen", es: "Caminos Prósperos", fr: "Routes Prospères", ja: "豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "Grand Caravan", pt: "Grande Caravana", de: "Große Karawane", es: "Gran Caravana", fr: "Grande Caravane", ja: "大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Roads Unlocked", pt: "Estradas Desbloqueadas", de: "Freigelegene Straßen", es: "Caminos Desbloqueados", fr: "Routes Déverrouillées", ja: "開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
    ]
  },
  {
    weekday: "Friday",
   date: "July, 10",
     image: "../../imagens/image-shared/crow-300px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
 {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},
      {
        titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
        links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
      },
       {
        titles: { en: "🔶Outland Chest Discount", pt: "🔶Desconto de Baús do Outland", de: "🔶Rabatt auf Outland-Truhen", es: "🔶Descuento de Cajas del Outland", fr: "🔶Réduction sur les Coffres de l'Outland", ja: "🔶アウトランドチェスト割引)" },
        links: { en: "#section12", pt: "#section12", de: "#section12", es: "#section12", fr: "#section12", ja: "#section12" }
      },
       {
        titles: { en: "📦Artifact Chest Discount", pt: "📦Baú de Artefatos - Desconto", de: "📦Rabatt auf Artefakttruhen", es: "📦Cofre de Artefactos - Descuento", fr: "📦Coffre d'Artéfacts - Réduction", ja: "📦アーティファクトチェスト - オフ" },
        links: { en: "#section14", pt: "#section14", de: "#section14", es: "#section14", fr: "#section14", ja: "#section14" }

      },
      {
titles: { en: "Bountiful Roads", pt: "Estradas Prósperas", de: "Ertragreiche Straßen", es: "Caminos Prósperos", fr: "Routes Prospères", ja: "豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "Grand Caravan", pt: "Grande Caravana", de: "Große Karawane", es: "Gran Caravana", fr: "Grande Caravane", ja: "大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Roads Unlocked", pt: "Estradas Desbloqueadas", de: "Freigelegene Straßen", es: "Caminos Desbloqueados", fr: "Routes Déverrouillées", ja: "開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

    ]
  },
  {
    weekday: "Saturday",
    date: "July, 11",
   image: "../../imagens/image-shared/crow-300px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
 {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},
      {
        titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
        links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
      },
       {
        titles: { en: "🔶Outland Chest Discount", pt: "🔶Desconto de Baús do Outland", de: "🔶Rabatt auf Outland-Truhen", es: "🔶Descuento de Cajas del Outland", fr: "🔶Réduction sur les Coffres de l'Outland", ja: "🔶アウトランドチェスト割引)" },
        links: { en: "#section12", pt: "#section12", de: "#section12", es: "#section12", fr: "#section12", ja: "#section12" }
      },
       {
        titles: { en: "🟣Elemental Sphere Discount", pt: "🟣Desconto de Esferas Elementais", de: "🟣Rabatt auf Elementsphären", es: "🟣Descuento de Esferas Elementales", fr: "🟣Réduction sur les Sphères Élémentaires", ja: "🟣エレメンタルスフィア割引" },
        links: { en: "#section15", pt: "#section15", de: "#section15", es: "#section15", fr: "#section15", ja: "#section15" }

      },
      {
titles: { en: "Bountiful Roads", pt: "Estradas Prósperas", de: "Ertragreiche Straßen", es: "Caminos Prósperos", fr: "Routes Prospères", ja: "豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "Grand Caravan", pt: "Grande Caravana", de: "Große Karawane", es: "Gran Caravana", fr: "Grande Caravane", ja: "大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Roads Unlocked", pt: "Estradas Desbloqueadas", de: "Freigelegene Straßen", es: "Caminos Desbloqueados", fr: "Routes Déverrouillées", ja: "開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

    ]
  },
{
  weekday: "Sunday",
  date: "July, 12",
   image: "../../imagens/image-shared/crow-300px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
 links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
 {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},
      {
        titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
        links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
      },
      {
        titles: { en: "🟣Elemental Sphere Discount", pt: "🟣Desconto de Esferas Elementais", de: "🟣Rabatt auf Elementsphären", es: "🟣Descuento de Esferas Elementales", fr: "🟣Réduction sur les Sphères Élémentaires", ja: "🟣エレメンタルスフィア割引" },
        links: { en: "#section15", pt: "#section15", de: "#section15", es: "#section15", fr: "#section15", ja: "#section15" }

      },
      {
        titles: { en: "🎁Heroic Chest Discount", pt: "🎁Desconto de Baús Heroicos", de: "🎁Rabatt auf Heroische Truhen", es: "🎁Descuento de Cajas Heroicas", fr: "🎁Réduction sur les Coffres Héroïques", ja: "🎁ヒーローの宝箱割引" },
        links: { en: "#section16", pt: "#section16", de: "#section16", es: "#section16", fr: "#section16", ja: "#section16" }

      },
      {
titles: { en: "Bountiful Roads", pt: "Estradas Prósperas", de: "Ertragreiche Straßen", es: "Caminos Prósperos", fr: "Routes Prospères", ja: "豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
 {
  titles: { en: "Grand Caravan", pt: "Grande Caravana", de: "Große Karawane", es: "Gran Caravana", fr: "Grande Caravane", ja: "大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "Roads Unlocked", pt: "Estradas Desbloqueadas", de: "Freigelegene Straßen", es: "Caminos Desbloqueados", fr: "Routes Déverrouillées", ja: "開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

    ]
  },
  {
    weekday: "Monday",
    date: "July, 13",
   image: "../../imagens/image-shared/tristan-300px.webp",
    alt: "Balance of Power Event",
   titles: { en: "🪙 Balance of Power Event", de: "🪙 Balance der Macht", es: "🪙 Equilibrio de Poder", fr: "🪙 Équilibre du Pouvoir", pt: "🪙 Evento Equilíbrio de Poder", ja: "🪙 パワーバランスイベント" },   links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" },
    links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },

   extra: [
{
 titles: { en: "⚔️ Defiant Edge Event: All Quests & Rewards", pt: "⚔️ Evento Gume Desafiante: Todas as Missões e Recompensas", de: "⚔️ Defiant Edge-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Filo Desafiante: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lame Défiante : Toutes les Quêtes et Récompenses", ja: "⚔️ ディファイアントエッジイベント：全クエスト＆報酬" },
 links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-defiant-edge-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚔️ Gear & Glory Event: All Quests & Rewards", pt: "⚔️ Evento Equipamento e Glória: Todas as Missões e Recompensas", de: "⚔️ Gear & Glory-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Gear & Glory: Todas las Misiones y Recompensas", fr: "⚔️ Événement Gear & Glory : Toutes les Quêtes et Récompenses", ja: "⚔️ Gear & Gloryイベント：全クエスト＆報酬" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-gear-and-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
{
  titles: { en: "⚔️ Unbroken Bond Event: All Quests & Rewards", pt: "⚔️ Evento Laço Inquebrável: Todas as Missões e Recompensas", de: "⚔️ Unbreakable Bond-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Lazo Inquebrantable: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lien Indestructible : Toutes les Quêtes et Récompenses", ja: "⚔️ Unbroken Bondイベント：全クエスト＆報酬" },  
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-unbroken-bond-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},   

      {
        titles: { en: "📿Tristan - Relic Event", de: "📿Tristan - Relikt-Ereignis", es: "📿Tristan - Evento de Reliquia", fr: "📿Tristan - Événement des Reliques", pt: "📿Tristan - Evento de Relíquia", ja: "📿トリストン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },

      {
 titles: { en: "🦸Tristan Guide", pt: "🦸Guia do Tristan", de: "🦸Tristan Leitfaden", es: "🦸Guía de Tristan", fr: "🦸Guide de Tristan", ja: "🦸トリスタン ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/tristan-en.html", de: "../../hero-wars-alliance/characters-guide/tristan-de.html", es: "../../hero-wars-alliance/characters-guide/tristan-es.html", fr: "../../hero-wars-alliance/characters-guide/tristan-fr.html", pt: "../../hero-wars-alliance/characters-guide/tristan-pt.html", ja: "../../hero-wars-alliance/characters-guide/tristan-ja.html" },
  noStrip: true
},

    ]
  },

  {
    weekday: "Tuesday",
    date: "July, 14",
   image: "../../imagens/image-shared/tristan-300px.webp",
   alt: "Balance of Power Event",
   titles: { en: "🪙 Balance of Power Event", de: "🪙 Balance der Macht", es: "🪙 Equilibrio de Poder", fr: "🪙 Équilibre du Pouvoir", pt: "🪙 Evento Equilíbrio de Poder", ja: "🪙 パワーバランスイベント" },   links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
      {
 titles: { en: "⚔️ Defiant Edge Event: All Quests & Rewards", pt: "⚔️ Evento Gume Desafiante: Todas as Missões e Recompensas", de: "⚔️ Defiant Edge-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Filo Desafiante: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lame Défiante : Toutes les Quêtes et Récompenses", ja: "⚔️ ディファイアントエッジイベント：全クエスト＆報酬" },
 links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-defiant-edge-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚔️ Gear & Glory Event: All Quests & Rewards", pt: "⚔️ Evento Equipamento e Glória: Todas as Missões e Recompensas", de: "⚔️ Gear & Glory-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Gear & Glory: Todas las Misiones y Recompensas", fr: "⚔️ Événement Gear & Glory : Toutes les Quêtes et Récompenses", ja: "⚔️ Gear & Gloryイベント：全クエスト＆報酬" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-gear-and-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
{
  titles: { en: "⚔️ Unbroken Bond Event: All Quests & Rewards", pt: "⚔️ Evento Laço Inquebrável: Todas as Missões e Recompensas", de: "⚔️ Unbreakable Bond-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Lazo Inquebrantable: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lien Indestructible : Toutes les Quêtes et Récompenses", ja: "⚔️ Unbroken Bondイベント：全クエスト＆報酬" },  
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-unbroken-bond-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},   
      {
        titles: { en: "📿Tristan - Relic Event", de: "📿Tristan - Relikt-Ereignis", es: "📿Tristan - Evento de Reliquia", fr: "📿Tristan - Événement des Reliques", pt: "📿Tristan - Evento de Relíquia", ja: "📿トリストン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },

      {
 titles: { en: "🦸Tristan Guide", pt: "🦸Guia do Tristan", de: "🦸Tristan Leitfaden", es: "🦸Guía de Tristan", fr: "🦸Guide de Tristan", ja: "🦸トリスタン ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/tristan-en.html", de: "../../hero-wars-alliance/characters-guide/tristan-de.html", es: "../../hero-wars-alliance/characters-guide/tristan-es.html", fr: "../../hero-wars-alliance/characters-guide/tristan-fr.html", pt: "../../hero-wars-alliance/characters-guide/tristan-pt.html", ja: "../../hero-wars-alliance/characters-guide/tristan-ja.html" },
  noStrip: true
},

    ]
  },

  {
    weekday: "Wednesday",
     date: "July, 15",
   image: "../../imagens/image-shared/tristan-300px.webp",
    alt: "Balance of Power Event",
   titles: { en: "🪙 Balance of Power Event", de: "🪙 Balance der Macht", es: "🪙 Equilibrio de Poder", fr: "🪙 Équilibre du Pouvoir", pt: "🪙 Evento Equilíbrio de Poder", ja: "🪙 パワーバランスイベント" },   links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" },
 links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
      {
 titles: { en: "⚔️ Defiant Edge Event: All Quests & Rewards", pt: "⚔️ Evento Gume Desafiante: Todas as Missões e Recompensas", de: "⚔️ Defiant Edge-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Filo Desafiante: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lame Défiante : Toutes les Quêtes et Récompenses", ja: "⚔️ ディファイアントエッジイベント：全クエスト＆報酬" },
 links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-defiant-edge-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚔️ Gear & Glory Event: All Quests & Rewards", pt: "⚔️ Evento Equipamento e Glória: Todas as Missões e Recompensas", de: "⚔️ Gear & Glory-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Gear & Glory: Todas las Misiones y Recompensas", fr: "⚔️ Événement Gear & Glory : Toutes les Quêtes et Récompenses", ja: "⚔️ Gear & Gloryイベント：全クエスト＆報酬" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-gear-and-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
{
  titles: { en: "⚔️ Unbroken Bond Event: All Quests & Rewards", pt: "⚔️ Evento Laço Inquebrável: Todas as Missões e Recompensas", de: "⚔️ Unbreakable Bond-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Lazo Inquebrantable: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lien Indestructible : Toutes les Quêtes et Récompenses", ja: "⚔️ Unbroken Bondイベント：全クエスト＆報酬" },  
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-unbroken-bond-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},   
      {
        titles: { en: "📿Tristan - Relic Event", de: "📿Tristan - Relikt-Ereignis", es: "📿Tristan - Evento de Reliquia", fr: "📿Tristan - Événement des Reliques", pt: "📿Tristan - Evento de Relíquia", ja: "📿トリストン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },

      {
 titles: { en: "🦸Tristan Guide", pt: "🦸Guia do Tristan", de: "🦸Tristan Leitfaden", es: "🦸Guía de Tristan", fr: "🦸Guide de Tristan", ja: "🦸トリスタン ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/tristan-en.html", de: "../../hero-wars-alliance/characters-guide/tristan-de.html", es: "../../hero-wars-alliance/characters-guide/tristan-es.html", fr: "../../hero-wars-alliance/characters-guide/tristan-fr.html", pt: "../../hero-wars-alliance/characters-guide/tristan-pt.html", ja: "../../hero-wars-alliance/characters-guide/tristan-ja.html" },
  noStrip: true
},

    ]
  },
  {
    weekday: "Thursday",
    date: "July, 16",
   image: "../../imagens/image-shared/tristan-300px.webp",
   alt: "Balance of Power Event",
   titles: { en: "🪙 Balance of Power Event", de: "🪙 Balance der Macht", es: "🪙 Equilibrio de Poder", fr: "🪙 Équilibre du Pouvoir", pt: "🪙 Evento Equilíbrio de Poder", ja: "🪙 パワーバランスイベント" },   links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" },
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
      {
 titles: { en: "⚔️ Defiant Edge Event: All Quests & Rewards", pt: "⚔️ Evento Gume Desafiante: Todas as Missões e Recompensas", de: "⚔️ Defiant Edge-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Filo Desafiante: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lame Défiante : Toutes les Quêtes et Récompenses", ja: "⚔️ ディファイアントエッジイベント：全クエスト＆報酬" },
 links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-defiant-edge-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚔️ Gear & Glory Event: All Quests & Rewards", pt: "⚔️ Evento Equipamento e Glória: Todas as Missões e Recompensas", de: "⚔️ Gear & Glory-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Gear & Glory: Todas las Misiones y Recompensas", fr: "⚔️ Événement Gear & Glory : Toutes les Quêtes et Récompenses", ja: "⚔️ Gear & Gloryイベント：全クエスト＆報酬" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-gear-and-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
{
  titles: { en: "⚔️ Unbroken Bond Event: All Quests & Rewards", pt: "⚔️ Evento Laço Inquebrável: Todas as Missões e Recompensas", de: "⚔️ Unbreakable Bond-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Lazo Inquebrantable: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lien Indestructible : Toutes les Quêtes et Récompenses", ja: "⚔️ Unbroken Bondイベント：全クエスト＆報酬" },  
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-unbroken-bond-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},   
      {
        titles: { en: "📿Tristan - Relic Event", de: "📿Tristan - Relikt-Ereignis", es: "📿Tristan - Evento de Reliquia", fr: "📿Tristan - Événement des Reliques", pt: "📿Tristan - Evento de Relíquia", ja: "📿トリストン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },

      {
 titles: { en: "🦸Tristan Guide", pt: "🦸Guia do Tristan", de: "🦸Tristan Leitfaden", es: "🦸Guía de Tristan", fr: "🦸Guide de Tristan", ja: "🦸トリスタン ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/tristan-en.html", de: "../../hero-wars-alliance/characters-guide/tristan-de.html", es: "../../hero-wars-alliance/characters-guide/tristan-es.html", fr: "../../hero-wars-alliance/characters-guide/tristan-fr.html", pt: "../../hero-wars-alliance/characters-guide/tristan-pt.html", ja: "../../hero-wars-alliance/characters-guide/tristan-ja.html" },
  noStrip: true
},

    ]
  },
  {
    weekday: "Friday",
     date: "July, 17",
   image: "../../imagens/image-shared/tristan-300px.webp",
    alt: "Balance of Power Event",
     titles: { en: "🪙 Balance of Power Event", de: "🪙 Balance der Macht", es: "🪙 Equilibrio de Poder", fr: "🪙 Équilibre du Pouvoir", pt: "🪙 Evento Equilíbrio de Poder", ja: "🪙 パワーバランスイベント" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
      {
 titles: { en: "⚔️ Defiant Edge Event: All Quests & Rewards", pt: "⚔️ Evento Gume Desafiante: Todas as Missões e Recompensas", de: "⚔️ Defiant Edge-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Filo Desafiante: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lame Défiante : Toutes les Quêtes et Récompenses", ja: "⚔️ ディファイアントエッジイベント：全クエスト＆報酬" },
 links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-defiant-edge-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚔️ Gear & Glory Event: All Quests & Rewards", pt: "⚔️ Evento Equipamento e Glória: Todas as Missões e Recompensas", de: "⚔️ Gear & Glory-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Gear & Glory: Todas las Misiones y Recompensas", fr: "⚔️ Événement Gear & Glory : Toutes les Quêtes et Récompenses", ja: "⚔️ Gear & Gloryイベント：全クエスト＆報酬" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-gear-and-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
{
  titles: { en: "⚔️ Unbroken Bond Event: All Quests & Rewards", pt: "⚔️ Evento Laço Inquebrável: Todas as Missões e Recompensas", de: "⚔️ Unbreakable Bond-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Lazo Inquebrantable: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lien Indestructible : Toutes les Quêtes et Récompenses", ja: "⚔️ Unbroken Bondイベント：全クエスト＆報酬" },  
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-unbroken-bond-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},   
      {
        titles: { en: "📿Tristan - Relic Event", de: "📿Tristan - Relikt-Ereignis", es: "📿Tristan - Evento de Reliquia", fr: "📿Tristan - Événement des Reliques", pt: "📿Tristan - Evento de Relíquia", ja: "📿トリストン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },

      {
 titles: { en: "🦸Tristan Guide", pt: "🦸Guia do Tristan", de: "🦸Tristan Leitfaden", es: "🦸Guía de Tristan", fr: "🦸Guide de Tristan", ja: "🦸トリスタン ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/tristan-en.html", de: "../../hero-wars-alliance/characters-guide/tristan-de.html", es: "../../hero-wars-alliance/characters-guide/tristan-es.html", fr: "../../hero-wars-alliance/characters-guide/tristan-fr.html", pt: "../../hero-wars-alliance/characters-guide/tristan-pt.html", ja: "../../hero-wars-alliance/characters-guide/tristan-ja.html" },
  noStrip: true
},

    ]
  },
  {
    weekday: "Saturday",
     date: "July, 18",
   image: "../../imagens/image-shared/tristan-300px.webp",
    alt: "Balance of Power Event",
   titles: { en: "🪙 Balance of Power Event", de: "🪙 Balance der Macht", es: "🪙 Equilibrio de Poder", fr: "🪙 Équilibre du Pouvoir", pt: "🪙 Evento Equilíbrio de Poder", ja: "🪙 パワーバランスイベント" },   links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" },
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
      {
 titles: { en: "⚔️ Defiant Edge Event: All Quests & Rewards", pt: "⚔️ Evento Gume Desafiante: Todas as Missões e Recompensas", de: "⚔️ Defiant Edge-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Filo Desafiante: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lame Défiante : Toutes les Quêtes et Récompenses", ja: "⚔️ ディファイアントエッジイベント：全クエスト＆報酬" },
 links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-defiant-edge-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚔️ Gear & Glory Event: All Quests & Rewards", pt: "⚔️ Evento Equipamento e Glória: Todas as Missões e Recompensas", de: "⚔️ Gear & Glory-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Gear & Glory: Todas las Misiones y Recompensas", fr: "⚔️ Événement Gear & Glory : Toutes les Quêtes et Récompenses", ja: "⚔️ Gear & Gloryイベント：全クエスト＆報酬" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-gear-and-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
{
  titles: { en: "⚔️ Unbroken Bond Event: All Quests & Rewards", pt: "⚔️ Evento Laço Inquebrável: Todas as Missões e Recompensas", de: "⚔️ Unbreakable Bond-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Lazo Inquebrantable: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lien Indestructible : Toutes les Quêtes et Récompenses", ja: "⚔️ Unbroken Bondイベント：全クエスト＆報酬" },  
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-unbroken-bond-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},   
      {
        titles: { en: "📿Tristan - Relic Event", de: "📿Tristan - Relikt-Ereignis", es: "📿Tristan - Evento de Reliquia", fr: "📿Tristan - Événement des Reliques", pt: "📿Tristan - Evento de Relíquia", ja: "📿トリストン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },

      {
 titles: { en: "🦸Tristan Guide", pt: "🦸Guia do Tristan", de: "🦸Tristan Leitfaden", es: "🦸Guía de Tristan", fr: "🦸Guide de Tristan", ja: "🦸トリスタン ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/tristan-en.html", de: "../../hero-wars-alliance/characters-guide/tristan-de.html", es: "../../hero-wars-alliance/characters-guide/tristan-es.html", fr: "../../hero-wars-alliance/characters-guide/tristan-fr.html", pt: "../../hero-wars-alliance/characters-guide/tristan-pt.html", ja: "../../hero-wars-alliance/characters-guide/tristan-ja.html" },
  noStrip: true
},

    ]
  },

{
  weekday: "Sunday",
   date: "July, 19",
   image: "../../imagens/image-shared/tristan-300px.webp",
    alt: "Balance of Power Event",
     titles: { en: "🪙 Balance of Power Event", de: "🪙 Balance der Macht", es: "🪙 Equilibrio de Poder", fr: "🪙 Équilibre du Pouvoir", pt: "🪙 Evento Equilíbrio de Poder", ja: "🪙 パワーバランスイベント" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    extra: [
      {
 titles: { en: "⚔️ Defiant Edge Event: All Quests & Rewards", pt: "⚔️ Evento Gume Desafiante: Todas as Missões e Recompensas", de: "⚔️ Defiant Edge-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Filo Desafiante: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lame Défiante : Toutes les Quêtes et Récompenses", ja: "⚔️ ディファイアントエッジイベント：全クエスト＆報酬" },
 links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-defiant-edge-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚔️ Gear & Glory Event: All Quests & Rewards", pt: "⚔️ Evento Equipamento e Glória: Todas as Missões e Recompensas", de: "⚔️ Gear & Glory-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Gear & Glory: Todas las Misiones y Recompensas", fr: "⚔️ Événement Gear & Glory : Toutes les Quêtes et Récompenses", ja: "⚔️ Gear & Gloryイベント：全クエスト＆報酬" },
   links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-gear-and-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
{
  titles: { en: "⚔️ Unbroken Bond Event: All Quests & Rewards", pt: "⚔️ Evento Laço Inquebrável: Todas as Missões e Recompensas", de: "⚔️ Unbreakable Bond-Event: Alle Quests & Belohnungen", es: "⚔️ Evento Lazo Inquebrantable: Todas las Misiones y Recompensas", fr: "⚔️ Événement Lien Indestructible : Toutes les Quêtes et Récompenses", ja: "⚔️ Unbroken Bondイベント：全クエスト＆報酬" },  
  links: { en: "../../hero-wars-alliance/event-hwa/balance-of-power-unbroken-bond-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},   
      {
        titles: { en: "📿Tristan - Relic Event", de: "📿Tristan - Relikt-Ereignis", es: "📿Tristan - Evento de Reliquia", fr: "📿Tristan - Événement des Reliques", pt: "📿Tristan - Evento de Relíquia", ja: "📿トリストン - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },

      {
 titles: { en: "🦸Tristan Guide", pt: "🦸Guia do Tristan", de: "🦸Tristan Leitfaden", es: "🦸Guía de Tristan", fr: "🦸Guide de Tristan", ja: "🦸トリスタン ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/tristan-en.html", de: "../../hero-wars-alliance/characters-guide/tristan-de.html", es: "../../hero-wars-alliance/characters-guide/tristan-es.html", fr: "../../hero-wars-alliance/characters-guide/tristan-fr.html", pt: "../../hero-wars-alliance/characters-guide/tristan-pt.html", ja: "../../hero-wars-alliance/characters-guide/tristan-ja.html" },
  noStrip: true
},
    ]
  },

{
  weekday: "Monday",
  date: "July, 20",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
    extra: [
 {
       titles: { en: "🕳️Titan Rift", pt: "🕳️Fenda dos Titãs", de: "🕳️Titanenkluft", es: "🕳️Grieta de Titanes", fr: "🕳️Faille des Titans", ja: "🕳️タイタンリフト" },
       links: { en: "../../hero-wars-alliance/event-hwa/titan-rift-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },      
      },
      {
       titles: { en: "👑Legacy of Power", pt: "👑Legado do Poder", de: "👑Erbe des Macht", es: "👑 Legado del Poder", fr: "👑 Héritage du Pouvoir", ja: "👑 パワーの遺産" },
      links: { en: "../../hero-wars-alliance/event-hwa/legacy-of-power-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },      },
      { titles: { en: "👗Tristan New Skin+: Twilight", pt: "👗Tristan Nova Skin+: Crepúsculo", de: "👗Tristan Neue Skin+: Dämmerung", es: "👗Tristan Nueva Skin+: Crepúsculo", fr: "👗Tristan Nouvelle Skin+ : Crépuscule", ja: "👗トリスタン 新スキン+：トワイライト" },
  labelOnly: true },

    ]
  },
  {
    weekday: "Tuesday",
   date: "July, 21",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
    extra: [
 {
       titles: { en: "🕳️Titan Rift", pt: "🕳️Fenda dos Titãs", de: "🕳️Titanenkluft", es: "🕳️Grieta de Titanes", fr: "🕳️Faille des Titans", ja: "🕳️タイタンリフト" },
       links: { en: "../../hero-wars-alliance/event-hwa/titan-rift-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },      
      },
      {
       titles: { en: "👑Legacy of Power", pt: "👑Legado do Poder", de: "👑Erbe des Macht", es: "👑 Legado del Poder", fr: "👑 Héritage du Pouvoir", ja: "👑 パワーの遺産" },
       links: { en: "../../hero-wars-alliance/event-hwa/legacy-of-power-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },      
      },
      { titles: { en: "👗Tristan New Skin+: Twilight", pt: "👗Tristan Nova Skin+: Crepúsculo", de: "👗Tristan Neue Skin+: Dämmerung", es: "👗Tristan Nueva Skin+: Crepúsculo", fr: "👗Tristan Nouvelle Skin+ : Crépuscule", ja: "👗トリスタン 新スキン+：トワイライト" },
  labelOnly: true },

    ]
  },

{
  weekday: "Wednesday",
 date: "July, 22",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
    extra: [
 {
       titles: { en: "🕳️Titan Rift", pt: "🕳️Fenda dos Titãs", de: "🕳️Titanenkluft", es: "🕳️Grieta de Titanes", fr: "🕳️Faille des Titans", ja: "🕳️タイタンリフト" },
       links: { en: "../../hero-wars-alliance/event-hwa/titan-rift-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },      
      },
      {
       titles: { en: "👑Legacy of Power", pt: "👑Legado do Poder", de: "👑Erbe des Macht", es: "👑 Legado del Poder", fr: "👑 Héritage du Pouvoir", ja: "👑 パワーの遺産" },
       links: { en: "../../hero-wars-alliance/event-hwa/legacy-of-power-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },      
      },
      { titles: { en: "👗Tristan New Skin+: Twilight", pt: "👗Tristan Nova Skin+: Crepúsculo", de: "👗Tristan Neue Skin+: Dämmerung", es: "👗Tristan Nueva Skin+: Crepúsculo", fr: "👗Tristan Nouvelle Skin+ : Crépuscule", ja: "👗トリスタン 新スキン+：トワイライト" },
  labelOnly: true },

    ]
  },
  {
    weekday: "Thursday",
     date: "July, 23",
     image: "../../hero-wars-alliance/images/events/shared/alexandregames-150px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
 links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  extra: [
 { titles: { en: "👗Guus New Skin+: Twilight", pt: "👗Guus Nova Skin+: Crepúsculo", de: "👗Guus Neue Skin+: Dämmerung", es: "👗Guus Nueva Skin+: Crepúsculo", fr: "👗Guus Nouvelle Skin+ : Crépuscule", ja: "👗グース 新スキン+：黄昏" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{ titles: { en: "👗Artemis New Skin: Twilight", pt: "👗Artemis Nova Skin: Crepúsculo", de: "👗Artemis Neue Skin: Dämmerung", es: "👗Artemis Nueva Skin: Crepúsculo", fr: "👗Artemis Nouvelle Skin : Crépuscule", ja: "👗アルテミス 新スキン：黄昏" },
 links: { en: "../../hero-wars-alliance/characters-guide/artemis-en.html", pt: "../../hero-wars-alliance/characters-guide/artemis-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

          ]
  },
  {
    weekday: "Friday",
    date: "July, 24",
   image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Events",
     titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
    links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
   extra: [

      

  {
        titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
        links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
      },
       {
        titles: { en: "🔶Outland Chest Discount", pt: "🔶Desconto de Baús do Outland", de: "🔶Rabatt auf Outland-Truhen", es: "🔶Descuento de Cajas del Outland", fr: "🔶Réduction sur les Coffres de l'Outland", ja: "🔶アウトランドチェスト割引)" },
        links: { en: "#section12", pt: "#section12", de: "#section12", es: "#section12", fr: "#section12", ja: "#section12" }
      },
      { titles: { en: "👗Guus New Skin+: Twilight", pt: "👗Guus Nova Skin+: Crepúsculo", de: "👗Guus Neue Skin+: Dämmerung", es: "👗Guus Nueva Skin+: Crepúsculo", fr: "👗Guus Nouvelle Skin+ : Crépuscule", ja: "👗グース 新スキン+：黄昏" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{ titles: { en: "👗Artemis New Skin: Twilight", pt: "👗Artemis Nova Skin: Crepúsculo", de: "👗Artemis Neue Skin: Dämmerung", es: "👗Artemis Nueva Skin: Crepúsculo", fr: "👗Artemis Nouvelle Skin : Crépuscule", ja: "👗アルテミス 新スキン：黄昏" },
 links: { en: "../../hero-wars-alliance/characters-guide/artemis-en.html", pt: "../../hero-wars-alliance/characters-guide/artemis-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

  ]
  },

  {
    weekday: "Saturday",
    date: "July, 25",
    image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Events",
     titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
      links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },   extra: [

     

  {
        titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
        links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
      },
       {
        titles: { en: "🔶Outland Chest Discount", pt: "🔶Desconto de Baús do Outland", de: "🔶Rabatt auf Outland-Truhen", es: "🔶Descuento de Cajas del Outland", fr: "🔶Réduction sur les Coffres de l'Outland", ja: "🔶アウトランドチェスト割引)" },
        links: { en: "#section12", pt: "#section12", de: "#section12", es: "#section12", fr: "#section12", ja: "#section12" }
      },
      { titles: { en: "👗Guus New Skin+: Twilight", pt: "👗Guus Nova Skin+: Crepúsculo", de: "👗Guus Neue Skin+: Dämmerung", es: "👗Guus Nueva Skin+: Crepúsculo", fr: "👗Guus Nouvelle Skin+ : Crépuscule", ja: "👗グース 新スキン+：黄昏" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{ titles: { en: "👗Artemis New Skin: Twilight", pt: "👗Artemis Nova Skin: Crepúsculo", de: "👗Artemis Neue Skin: Dämmerung", es: "👗Artemis Nueva Skin: Crepúsculo", fr: "👗Artemis Nouvelle Skin : Crépuscule", ja: "👗アルテミス 新スキン：黄昏" },
 links: { en: "../../hero-wars-alliance/characters-guide/artemis-en.html", pt: "../../hero-wars-alliance/characters-guide/artemis-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

  ]
  },
  {
    weekday: "Sunday",
    date: "July, 26",
    image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Events",
     titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
     links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },   extra: [

     

  {
        titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
        links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
      },
       {
        titles: { en: "🔶Outland Chest Discount", pt: "🔶Desconto de Baús do Outland", de: "🔶Rabatt auf Outland-Truhen", es: "🔶Descuento de Cajas del Outland", fr: "🔶Réduction sur les Coffres de l'Outland", ja: "🔶アウトランドチェスト割引)" },
        links: { en: "#section12", pt: "#section12", de: "#section12", es: "#section12", fr: "#section12", ja: "#section12" }
      },
      { titles: { en: "👗Guus New Skin+: Twilight", pt: "👗Guus Nova Skin+: Crepúsculo", de: "👗Guus Neue Skin+: Dämmerung", es: "👗Guus Nueva Skin+: Crepúsculo", fr: "👗Guus Nouvelle Skin+ : Crépuscule", ja: "👗グース 新スキン+：黄昏" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{ titles: { en: "👗Artemis New Skin: Twilight", pt: "👗Artemis Nova Skin: Crepúsculo", de: "👗Artemis Neue Skin: Dämmerung", es: "👗Artemis Nueva Skin: Crepúsculo", fr: "👗Artemis Nouvelle Skin : Crépuscule", ja: "👗アルテミス 新スキン：黄昏" },
 links: { en: "../../hero-wars-alliance/characters-guide/artemis-en.html", pt: "../../hero-wars-alliance/characters-guide/artemis-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

  ]
  },
  {
    weekday: "Monday",
    date: "July, 27",
     image: "../../imagens/image-shared/crow-300px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
     links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },  extra: [
      {
        titles: { en: "📿Crow - Relic Event", de: "📿Crow - Relikt-Ereignis", es: "📿Crow - Evento de Reliquia", fr: "📿Crow - Événement des Reliques", pt: "📿Crow - Evento de Relíquia", ja: "📿カラス - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },
      {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},
 { titles: { en: "👗Guus New Skin+: Twilight", pt: "👗Guus Nova Skin+: Crepúsculo", de: "👗Guus Neue Skin+: Dämmerung", es: "👗Guus Nueva Skin+: Crepúsculo", fr: "👗Guus Nouvelle Skin+ : Crépuscule", ja: "👗グース 新スキン+：黄昏" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{ titles: { en: "👗Artemis New Skin: Twilight", pt: "👗Artemis Nova Skin: Crepúsculo", de: "👗Artemis Neue Skin: Dämmerung", es: "👗Artemis Nueva Skin: Crepúsculo", fr: "👗Artemis Nouvelle Skin : Crépuscule", ja: "👗アルテミス 新スキン：黄昏" },
 links: { en: "../../hero-wars-alliance/characters-guide/artemis-en.html", pt: "../../hero-wars-alliance/characters-guide/artemis-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

          ]
  },

  {
    weekday: "Tuesday",
    date: "July, 28",
     image: "../../imagens/image-shared/crow-300px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
     links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },  extra: [
       {
        titles: { en: "📿Crow - Relic Event", de: "📿Crow - Relikt-Ereignis", es: "📿Crow - Evento de Reliquia", fr: "📿Crow - Événement des Reliques", pt: "📿Crow - Evento de Relíquia", ja: "📿カラス - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },
      {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},
 { titles: { en: "👗Guus New Skin+: Twilight", pt: "👗Guus Nova Skin+: Crepúsculo", de: "👗Guus Neue Skin+: Dämmerung", es: "👗Guus Nueva Skin+: Crepúsculo", fr: "👗Guus Nouvelle Skin+ : Crépuscule", ja: "👗グース 新スキン+：黄昏" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{ titles: { en: "👗Artemis New Skin: Twilight", pt: "👗Artemis Nova Skin: Crepúsculo", de: "👗Artemis Neue Skin: Dämmerung", es: "👗Artemis Nueva Skin: Crepúsculo", fr: "👗Artemis Nouvelle Skin : Crépuscule", ja: "👗アルテミス 新スキン：黄昏" },
 links: { en: "../../hero-wars-alliance/characters-guide/artemis-en.html", pt: "../../hero-wars-alliance/characters-guide/artemis-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

          ]
  },

  {
    weekday: "Wednesday",
    date: "July, 29",
     image: "../../imagens/image-shared/crow-300px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
      links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },  extra: [
       {
        titles: { en: "📿Crow - Relic Event", de: "📿Crow - Relikt-Ereignis", es: "📿Crow - Evento de Reliquia", fr: "📿Crow - Événement des Reliques", pt: "📿Crow - Evento de Relíquia", ja: "📿カラス - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },
      {
  titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true
},
 { titles: { en: "👗Guus New Skin+: Twilight", pt: "👗Guus Nova Skin+: Crepúsculo", de: "👗Guus Neue Skin+: Dämmerung", es: "👗Guus Nueva Skin+: Crepúsculo", fr: "👗Guus Nouvelle Skin+ : Crépuscule", ja: "👗グース 新スキン+：黄昏" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{ titles: { en: "👗Artemis New Skin: Twilight", pt: "👗Artemis Nova Skin: Crepúsculo", de: "👗Artemis Neue Skin: Dämmerung", es: "👗Artemis Nueva Skin: Crepúsculo", fr: "👗Artemis Nouvelle Skin : Crépuscule", ja: "👗アルテミス 新スキン：黄昏" },
 links: { en: "../../hero-wars-alliance/characters-guide/artemis-en.html", pt: "../../hero-wars-alliance/characters-guide/artemis-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  

          ]
  },

  {
    weekday: "Thursday",
  date: "July, 30",
    image: "../../imagens/image-shared/alecto-300px.webp",
    alt: "👑 Lords of the Elements Event Group",
   titles: { en: "👑 Lords of the Elements Events", pt: "👑 Eventos dos Senhores dos Elementos", de: "👑 Ereignisse der Herrscher der Elemente", es: "👑 Eventos de los Señores de los Elementos", fr: "👑 Événements des Seigneurs des Éléments", ja: "👑 エレメントロードイベント" },   links: { en: "#section6", pt: "#section6", de: "#section6", es: "#section6", fr: "#section6", ja: "#section6" },
    extra: [
{
  titles: { en: "🌪️ Titan's Roar", pt: "🌪️ Rugido do Titã", de: "🌪️ Gebrüll des Titanen", es: "🌪️ Rugido del Titán", fr: "🌪️ Rugissement du Titan", ja: "🌪️ タイタンの咆哮" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki1-titans-roar-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
{
  titles: { en: "🌪️ Elemental Tempest", pt: "🌪️ Tempestade Elemental", de: "🌪️ Elementarsturm", es: "🌪️ Tempestad Elemental", fr: "🌪️ Tempête Élémentaire", ja: "🌪️ エレメンタルテンペスト" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki2-elemental-tempest-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
{
  titles: { en: "🌪️ United by Power", pt: "🌪️ Unidos pelo Poder", de: "🌪️ Vereint durch Macht", es: "🌪️ Unidos por el Poder", fr: "🌪️ Unis par le Pouvoir", ja: "🌪️ 力で結ばれて" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki3-united-by-power-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
    ]
  },
  {
    weekday: "Friday",
    date: "July, 31",
    image: "../../imagens/image-shared/orm-300px.webp",
    alt: "👑 Lords of the Elements Event Group",
   titles: { en: "👑 Lords of the Elements Events", pt: "👑 Eventos dos Senhores dos Elementos", de: "👑 Ereignisse der Herrscher der Elemente", es: "👑 Eventos de los Señores de los Elementos", fr: "👑 Événements des Seigneurs des Éléments", ja: "👑 エレメントロードイベント" },   links: { en: "#section6", pt: "#section6", de: "#section6", es: "#section6", fr: "#section6", ja: "#section6" },
    extra: [
      {
  titles: { en: "🌪️ Titan's Roar", pt: "🌪️ Rugido do Titã", de: "🌪️ Gebrüll des Titanen", es: "🌪️ Rugido del Titán", fr: "🌪️ Rugissement du Titan", ja: "🌪️ タイタンの咆哮" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki1-titans-roar-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
{
  titles: { en: "🌪️ Elemental Tempest", pt: "🌪️ Tempestade Elemental", de: "🌪️ Elementarsturm", es: "🌪️ Tempestad Elemental", fr: "🌪️ Tempête Élémentaire", ja: "🌪️ エレメンタルテンペスト" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki2-elemental-tempest-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
{
  titles: { en: "🌪️ United by Power", pt: "🌪️ Unidos pelo Poder", de: "🌪️ Vereint durch Macht", es: "🌪️ Unidos por el Poder", fr: "🌪️ Unis par le Pouvoir", ja: "🌪️ 力で結ばれて" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki3-united-by-power-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
      {
        titles: { en: "🟣Elemental Sphere Discount", pt: "🟣Desconto de Esferas Elementais", de: "🟣Rabatt auf Elementsphären", es: "🟣Descuento de Esferas Elementales", fr: "🟣Réduction sur les Sphères Élémentaires", ja: "🟣エレメンタルスフィア割引" },
        links: { en: "#section15", pt: "#section15", de: "#section15", es: "#section15", fr: "#section15", ja: "#section15" }
        },
        {
        titles: { en: "🟡Summoning Sphere Discount", pt: "🟡Desconto de Esferas de Convocação", de: "🟡Rabatt auf Beschwörungssphären", es: "🟡Descuento de Esferas de Invocación", fr: "🟡éduction sur les Sphères d'Invocation", ja: "🟡召喚スフィア割引" },
        links: { en: "#section13", pt: "#section13", de: "#section13", es: "#section13", fr: "#section13", ja: "#section13" }
      },
    ]
  },
  {
    weekday: "Saturday",
    date: "August, 01",
     image: "../../imagens/image-shared/umbra-300px.webp",
    alt: "👑 Lords of the Elements Event Group",
   titles: { en: "👑 Lords of the Elements Events", pt: "👑 Eventos dos Senhores dos Elementos", de: "👑 Ereignisse der Herrscher der Elemente", es: "👑 Eventos de los Señores de los Elementos", fr: "👑 Événements des Seigneurs des Éléments", ja: "👑 エレメントロードイベント" },   links: { en: "#section6", pt: "#section6", de: "#section6", es: "#section6", fr: "#section6", ja: "#section6" },
    extra: [
      {
  titles: { en: "🌪️ Titan's Roar", pt: "🌪️ Rugido do Titã", de: "🌪️ Gebrüll des Titanen", es: "🌪️ Rugido del Titán", fr: "🌪️ Rugissement du Titan", ja: "🌪️ タイタンの咆哮" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki1-titans-roar-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
{
  titles: { en: "🌪️ Elemental Tempest", pt: "🌪️ Tempestade Elemental", de: "🌪️ Elementarsturm", es: "🌪️ Tempestad Elemental", fr: "🌪️ Tempête Élémentaire", ja: "🌪️ エレメンタルテンペスト" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki2-elemental-tempest-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
{
  titles: { en: "🌪️ United by Power", pt: "🌪️ Unidos pelo Poder", de: "🌪️ Vereint durch Macht", es: "🌪️ Unidos por el Poder", fr: "🌪️ Unis par le Pouvoir", ja: "🌪️ 力で結ばれて" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki3-united-by-power-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
     {
        titles: { en: "🟣Elemental Sphere Discount", pt: "🟣Desconto de Esferas Elementais", de: "🟣Rabatt auf Elementsphären", es: "🟣Descuento de Esferas Elementales", fr: "🟣Réduction sur les Sphères Élémentaires", ja: "🟣エレメンタルスフィア割引" },
        links: { en: "#section15", pt: "#section15", de: "#section15", es: "#section15", fr: "#section15", ja: "#section15" }
        },
        {
        titles: { en: "🟡Summoning Sphere Discount", pt: "🟡Desconto de Esferas de Convocação", de: "🟡Rabatt auf Beschwörungssphären", es: "🟡Descuento de Esferas de Invocación", fr: "🟡éduction sur les Sphères d'Invocation", ja: "🟡召喚スフィア割引" },
        links: { en: "#section13", pt: "#section13", de: "#section13", es: "#section13", fr: "#section13", ja: "#section13" }
      },
    ]
  },
  {
    weekday: "Sunday",
    date: "August, 02",
     image: "../../imagens/image-shared/alecto-300px.webp",
    alt: "👑 Lords of the Elements Event Group",
   titles: { en: "👑 Lords of the Elements Events", pt: "👑 Eventos dos Senhores dos Elementos", de: "👑 Ereignisse der Herrscher der Elemente", es: "👑 Eventos de los Señores de los Elementos", fr: "👑 Événements des Seigneurs des Éléments", ja: "👑 エレメントロードイベント" },   links: { en: "#section6", pt: "#section6", de: "#section6", es: "#section6", fr: "#section6", ja: "#section6" },
    extra: [
      {
  titles: { en: "🌪️ Titan's Roar", pt: "🌪️ Rugido do Titã", de: "🌪️ Gebrüll des Titanen", es: "🌪️ Rugido del Titán", fr: "🌪️ Rugissement du Titan", ja: "🌪️ タイタンの咆哮" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki1-titans-roar-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
{
  titles: { en: "🌪️ Elemental Tempest", pt: "🌪️ Tempestade Elemental", de: "🌪️ Elementarsturm", es: "🌪️ Tempestad Elemental", fr: "🌪️ Tempête Élémentaire", ja: "🌪️ エレメンタルテンペスト" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki2-elemental-tempest-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
{
  titles: { en: "🌪️ United by Power", pt: "🌪️ Unidos pelo Poder", de: "🌪️ Vereint durch Macht", es: "🌪️ Unidos por el Poder", fr: "🌪️ Unis par le Pouvoir", ja: "🌪️ 力で結ばれて" },
  links: { en: "../../hero-wars-alliance/event-hwa/lords-of-the-elements-ki3-united-by-power-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
}, 
     {
        titles: { en: "🟣Elemental Sphere Discount", pt: "🟣Desconto de Esferas Elementais", de: "🟣Rabatt auf Elementsphären", es: "🟣Descuento de Esferas Elementales", fr: "🟣Réduction sur les Sphères Élémentaires", ja: "🟣エレメンタルスフィア割引" },
        links: { en: "#section15", pt: "#section15", de: "#section15", es: "#section15", fr: "#section15", ja: "#section15" }
        },
        {
        titles: { en: "🟡Summoning Sphere Discount", pt: "🟡Desconto de Esferas de Convocação", de: "🟡Rabatt auf Beschwörungssphären", es: "🟡Descuento de Esferas de Invocación", fr: "🟡éduction sur les Sphères d'Invocation", ja: "🟡召喚スフィア割引" },
        links: { en: "#section13", pt: "#section13", de: "#section13", es: "#section13", fr: "#section13", ja: "#section13" }
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
  {
    weekday: "Crow Guide",
    date: "",
    image: "../../imagens/image-shared/crow-300px.webp",
    alt: "Crow Guide",
    titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
  noStrip: true,
  extra: [
{
  titles: { en: "---", pt: "---", de: "---", es: "---", fr: "---", ja: "---" },
  labelOnly: true
},  
     {
 titles: { en: "🦸Tristan Guide", pt: "🦸Guia do Tristan", de: "🦸Tristan Leitfaden", es: "🦸Guía de Tristan", fr: "🦸Guide de Tristan", ja: "🦸トリスタン ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/tristan-en.html", de: "../../hero-wars-alliance/characters-guide/tristan-de.html", es: "../../hero-wars-alliance/characters-guide/tristan-es.html", fr: "../../hero-wars-alliance/characters-guide/tristan-fr.html", pt: "../../hero-wars-alliance/characters-guide/tristan-pt.html", ja: "../../hero-wars-alliance/characters-guide/tristan-ja.html" },
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
