/*Abaixo para simular um espaço vazio - npm run update-calendar-hwa
{// Dentro de extra[] de um evento:
 titles: { en: "\u00A0", pt: "\u00A0", de: "\u00A0", es: "\u00A0", fr: "\u00A0", ja: "\u00A0" },
  labelOnly: true
},
hero 🦸masculino e 🦸‍♀️feminino
skin 🥋🧥masculino skin 👗feminino 
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
// hero-wars-alliance/images/calendar/calendar-1200px.webp?v=2026-0#
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
// semana 01
{
  weekday: "Monday",
  date: "September, 28",
    image: "../../imagens/image-shared/metida-300px.webp",
    alt: "Ancient Awakening Event",
   titles: {  en: "🌋 Ancient Awakening Event", de: "🌋 Ereignis „Uraltes Erwachen“", es: "🌋 Evento Despertar Ancestral", fr: "🌋 Événement Éveil Ancestral", pt: "🌋 Evento Despertar Ancestral", ja: "🌋 古代覚醒イベント"},
    links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-main-event.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
    extra: [
     
{
titles: { en: "👑 Firstborn Force Event", pt: "👑 Evento Força dos Primogênitos", de: "👑 Ereignis „Kraft der Erstgeborenen“", es: "👑 Evento Fuerza de los Primogénitos", fr: "👑 Événement Force des Premiers-Nés", ja: "👑 始祖の力イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-firstborn-force.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚖️Unstable Equilibrium Guide", pt: "⚖️Guia da Equilíbrio Instável", de: "⚖️Leitfaden für instabile Gleichgewicht", es: "⚖️Guía del Equilibrio Inestable", fr: "⚖️Guide de l'Équilibre Instable", ja: "⚖️不安定均衡ガイド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-unstable-equilibrium.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
     
     {
titles: { en: "🦸Metida Guide", pt: "🦸Guia da Metida", de: "🦸Metida Leitfaden", es: "🦸Guía de Metida", fr: "🦸Guide de Metida", ja: "🦸メティダ ガイド" },
links: { en: "../../hero-wars-alliance/titans-guide/metida-en.html", pt: "../../hero-wars-alliance/titans-guide/metida-pt.html", de: "../../hero-wars-alliance/titans-guide/metida-de.html", es: "../../hero-wars-alliance/titans-guide/metida-es.html", fr: "../../hero-wars-alliance/titans-guide/metida-fr.html", ja: "../../hero-wars-alliance/titans-guide/metida-ja.html" },
noStrip: true
},

    ]
  },
  {
    weekday: "Tuesday",
   date: "September, 29",
     image: "../../imagens/image-shared/metida-300px.webp",
    alt: "Ancient Awakening Event",
   titles: {  en: "🌋 Ancient Awakening Event", de: "🌋 Ereignis „Uraltes Erwachen“", es: "🌋 Evento Despertar Ancestral", fr: "🌋 Événement Éveil Ancestral", pt: "🌋 Evento Despertar Ancestral", ja: "🌋 古代覚醒イベント"},
    links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-main-event.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
    extra: [
     
{
titles: { en: "👑 Firstborn Force Event", pt: "👑 Evento Força dos Primogênitos", de: "👑 Ereignis „Kraft der Erstgeborenen“", es: "👑 Evento Fuerza de los Primogénitos", fr: "👑 Événement Force des Premiers-Nés", ja: "👑 始祖の力イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-firstborn-force.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚖️Unstable Equilibrium Guide", pt: "⚖️Guia da Equilíbrio Instável", de: "⚖️Leitfaden für instabile Gleichgewicht", es: "⚖️Guía del Equilibrio Inestable", fr: "⚖️Guide de l'Équilibre Instable", ja: "⚖️不安定均衡ガイド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-unstable-equilibrium.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},    
      {
titles: { en: "🦸Metida Guide", pt: "🦸Guia da Metida", de: "🦸Metida Leitfaden", es: "🦸Guía de Metida", fr: "🦸Guide de Metida", ja: "🦸メティダ ガイド" },
links: { en: "../../hero-wars-alliance/titans-guide/metida-en.html", pt: "../../hero-wars-alliance/titans-guide/metida-pt.html", de: "../../hero-wars-alliance/titans-guide/metida-de.html", es: "../../hero-wars-alliance/titans-guide/metida-es.html", fr: "../../hero-wars-alliance/titans-guide/metida-fr.html", ja: "../../hero-wars-alliance/titans-guide/metida-ja.html" },
noStrip: true
},
    ]
  },
{
  weekday: "Wednesday",
 date: "September, 30",
    image: "../../imagens/image-shared/metida-300px.webp",
    alt: "Ancient Awakening Event",
   titles: {  en: "🌋 Ancient Awakening Event", de: "🌋 Ereignis „Uraltes Erwachen“", es: "🌋 Evento Despertar Ancestral", fr: "🌋 Événement Éveil Ancestral", pt: "🌋 Evento Despertar Ancestral", ja: "🌋 古代覚醒イベント"},
    links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-main-event.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
    extra: [
     
{
titles: { en: "👑 Firstborn Force Event", pt: "👑 Evento Força dos Primogênitos", de: "👑 Ereignis „Kraft der Erstgeborenen“", es: "👑 Evento Fuerza de los Primogénitos", fr: "👑 Événement Force des Premiers-Nés", ja: "👑 始祖の力イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-firstborn-force.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚖️Unstable Equilibrium Guide", pt: "⚖️Guia da Equilíbrio Instável", de: "⚖️Leitfaden für instabile Gleichgewicht", es: "⚖️Guía del Equilibrio Inestable", fr: "⚖️Guide de l'Équilibre Instable", ja: "⚖️不安定均衡ガイド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-unstable-equilibrium.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},   
     
{
titles: { en: "🦸Metida Guide", pt: "🦸Guia da Metida", de: "🦸Metida Leitfaden", es: "🦸Guía de Metida", fr: "🦸Guide de Metida", ja: "🦸メティダ ガイド" },
links: { en: "../../hero-wars-alliance/titans-guide/metida-en.html", pt: "../../hero-wars-alliance/titans-guide/metida-pt.html", de: "../../hero-wars-alliance/titans-guide/metida-de.html", es: "../../hero-wars-alliance/titans-guide/metida-es.html", fr: "../../hero-wars-alliance/titans-guide/metida-fr.html", ja: "../../hero-wars-alliance/titans-guide/metida-ja.html" },
noStrip: true
},
    ]
  },
  {
    weekday: "Thursday",
   date: "October, 01",
    image: "../../imagens/image-shared/metida-300px.webp",
    alt: "Ancient Awakening Event",
  titles: {  en: "🌋 Ancient Awakening Event", de: "🌋 Ereignis „Uraltes Erwachen“", es: "🌋 Evento Despertar Ancestral", fr: "🌋 Événement Éveil Ancestral", pt: "🌋 Evento Despertar Ancestral", ja: "🌋 古代覚醒イベント"},
    links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-main-event.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
    extra: [
     
{
titles: { en: "👑 Firstborn Force Event", pt: "👑 Evento Força dos Primogênitos", de: "👑 Ereignis „Kraft der Erstgeborenen“", es: "👑 Evento Fuerza de los Primogénitos", fr: "👑 Événement Force des Premiers-Nés", ja: "👑 始祖の力イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-firstborn-force.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚖️Unstable Equilibrium Guide", pt: "⚖️Guia da Equilíbrio Instável", de: "⚖️Leitfaden für instabile Gleichgewicht", es: "⚖️Guía del Equilibrio Inestable", fr: "⚖️Guide de l'Équilibre Instable", ja: "⚖️不安定均衡ガイド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-unstable-equilibrium.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
     
 {
titles: { en: "🦸Metida Guide", pt: "🦸Guia da Metida", de: "🦸Metida Leitfaden", es: "🦸Guía de Metida", fr: "🦸Guide de Metida", ja: "🦸メティダ ガイド" },
links: { en: "../../hero-wars-alliance/titans-guide/metida-en.html", pt: "../../hero-wars-alliance/titans-guide/metida-pt.html", de: "../../hero-wars-alliance/titans-guide/metida-de.html", es: "../../hero-wars-alliance/titans-guide/metida-es.html", fr: "../../hero-wars-alliance/titans-guide/metida-fr.html", ja: "../../hero-wars-alliance/titans-guide/metida-ja.html" },
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
    ]
  },
  {
    weekday: "Friday",
 date: "October, 02",
    image: "../../imagens/image-shared/metida-300px.webp",
    alt: "Ancient Awakening Event",
  titles: {  en: "🌋 Ancient Awakening Event", de: "🌋 Ereignis „Uraltes Erwachen“", es: "🌋 Evento Despertar Ancestral", fr: "🌋 Événement Éveil Ancestral", pt: "🌋 Evento Despertar Ancestral", ja: "🌋 古代覚醒イベント"},
    links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-main-event.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
    extra: [
     
{
titles: { en: "👑 Firstborn Force Event", pt: "👑 Evento Força dos Primogênitos", de: "👑 Ereignis „Kraft der Erstgeborenen“", es: "👑 Evento Fuerza de los Primogénitos", fr: "👑 Événement Force des Premiers-Nés", ja: "👑 始祖の力イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-firstborn-force.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚖️Unstable Equilibrium Guide", pt: "⚖️Guia da Equilíbrio Instável", de: "⚖️Leitfaden für instabile Gleichgewicht", es: "⚖️Guía del Equilibrio Inestable", fr: "⚖️Guide de l'Équilibre Instable", ja: "⚖️不安定均衡ガイド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-unstable-equilibrium.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
     
 {
titles: { en: "🦸Metida Guide", pt: "🦸Guia da Metida", de: "🦸Metida Leitfaden", es: "🦸Guía de Metida", fr: "🦸Guide de Metida", ja: "🦸メティダ ガイド" },
links: { en: "../../hero-wars-alliance/titans-guide/metida-en.html", pt: "../../hero-wars-alliance/titans-guide/metida-pt.html", de: "../../hero-wars-alliance/titans-guide/metida-de.html", es: "../../hero-wars-alliance/titans-guide/metida-es.html", fr: "../../hero-wars-alliance/titans-guide/metida-fr.html", ja: "../../hero-wars-alliance/titans-guide/metida-ja.html" },
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

    ]
  },
  {
    weekday: "Saturday",
  date: "October, 03",
   image: "../../imagens/image-shared/metida-300px.webp",
    alt: "Ancient Awakening Event",
   titles: {  en: "🌋 Ancient Awakening Event", de: "🌋 Ereignis „Uraltes Erwachen“", es: "🌋 Evento Despertar Ancestral", fr: "🌋 Événement Éveil Ancestral", pt: "🌋 Evento Despertar Ancestral", ja: "🌋 古代覚醒イベント"},
    links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-main-event.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
    extra: [
     
{
titles: { en: "👑 Firstborn Force Event", pt: "👑 Evento Força dos Primogênitos", de: "👑 Ereignis „Kraft der Erstgeborenen“", es: "👑 Evento Fuerza de los Primogénitos", fr: "👑 Événement Force des Premiers-Nés", ja: "👑 始祖の力イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-firstborn-force.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚖️Unstable Equilibrium Guide", pt: "⚖️Guia da Equilíbrio Instável", de: "⚖️Leitfaden für instabile Gleichgewicht", es: "⚖️Guía del Equilibrio Inestable", fr: "⚖️Guide de l'Équilibre Instable", ja: "⚖️不安定均衡ガイド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-unstable-equilibrium.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
     
{
titles: { en: "🦸Metida Guide", pt: "🦸Guia da Metida", de: "🦸Metida Leitfaden", es: "🦸Guía de Metida", fr: "🦸Guide de Metida", ja: "🦸メティダ ガイド" },
links: { en: "../../hero-wars-alliance/titans-guide/metida-en.html", pt: "../../hero-wars-alliance/titans-guide/metida-pt.html", de: "../../hero-wars-alliance/titans-guide/metida-de.html", es: "../../hero-wars-alliance/titans-guide/metida-es.html", fr: "../../hero-wars-alliance/titans-guide/metida-fr.html", ja: "../../hero-wars-alliance/titans-guide/metida-ja.html" },
noStrip: true
},
{
titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
},
{
  titles: { en: "🎁Heroic Chest Discount", pt: "🎁Desconto de Baús Heroicos", de: "🎁Rabatt auf Heroische Truhen", es: "🎁Descuento de Cajas Heroicas", fr: "🎁Réduction sur les Coffres Héroïques", ja: "🎁ヒーローの宝箱割引" },
  links: { en: "#section16", pt: "#section16", de: "#section16", es: "#section16", fr: "#section16", ja: "#section16" }
},
{
  titles: { en: "🔶Outland Chest Discount", pt: "🔶Desconto de Baús do Outland", de: "🔶Rabatt auf Outland-Truhen", es: "🔶Descuento de Cajas del Outland", fr: "🔶Réduction sur les Coffres de l'Outland", ja: "🔶アウトランドチェスト割引)" },
  links: { en: "#section12", pt: "#section12", de: "#section12", es: "#section12", fr: "#section12", ja: "#section12" }
},


    ]
  },
{
  weekday: "Sunday",
 date: "October, 04",
image: "../../imagens/image-shared/metida-300px.webp",
    alt: "Ancient Awakening Event",
   titles: {  en: "🌋 Ancient Awakening Event", de: "🌋 Ereignis „Uraltes Erwachen“", es: "🌋 Evento Despertar Ancestral", fr: "🌋 Événement Éveil Ancestral", pt: "🌋 Evento Despertar Ancestral", ja: "🌋 古代覚醒イベント"},
    links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-main-event.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
    extra: [
     
{
titles: { en: "👑 Firstborn Force Event", pt: "👑 Evento Força dos Primogênitos", de: "👑 Ereignis „Kraft der Erstgeborenen“", es: "👑 Evento Fuerza de los Primogénitos", fr: "👑 Événement Force des Premiers-Nés", ja: "👑 始祖の力イベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-firstborn-force.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
{
  titles: { en: "⚖️Unstable Equilibrium Guide", pt: "⚖️Guia da Equilíbrio Instável", de: "⚖️Leitfaden für instabile Gleichgewicht", es: "⚖️Guía del Equilibrio Inestable", fr: "⚖️Guide de l'Équilibre Instable", ja: "⚖️不安定均衡ガイド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ancient-awakening-unstable-equilibrium.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
}, 
     
{
titles: { en: "🦸Metida Guide", pt: "🦸Guia da Metida", de: "🦸Metida Leitfaden", es: "🦸Guía de Metida", fr: "🦸Guide de Metida", ja: "🦸メティダ ガイド" },
links: { en: "../../hero-wars-alliance/titans-guide/metida-en.html", pt: "../../hero-wars-alliance/titans-guide/metida-pt.html", de: "../../hero-wars-alliance/titans-guide/metida-de.html", es: "../../hero-wars-alliance/titans-guide/metida-es.html", fr: "../../hero-wars-alliance/titans-guide/metida-fr.html", ja: "../../hero-wars-alliance/titans-guide/metida-ja.html" },
noStrip: true
},
{
titles: { en: "💎Emeralds Sale x4", pt: "💎Promoção de Esmeraldas x4", de: "💎Smaragd-Angebot x4", es: "💎Oferta de Esmeraldas x4", fr: "💎Vente d'Émeraudes x4", ja: "💎エメラルドセール x4" },
links: { en: "#section11", pt: "#section11", de: "#section11", es: "#section11", fr: "#section11", ja: "#section11" }
},
{
  titles: { en: "🟡Summoning Sphere Discount", pt: "🟡Desconto de Esferas de Convocação", de: "🟡Rabatt auf Beschwörungssphären", es: "🟡Descuento de Esferas de Invocación", fr: "🟡éduction sur les Sphères d'Invocation", ja: "🟡召喚スフィア割引" },
  links: { en: "#section13", pt: "#section13", de: "#section13", es: "#section13", fr: "#section13", ja: "#section13" }
},
{
  titles: { en: "🎁Heroic Chest Discount", pt: "🎁Desconto de Baús Heroicos", de: "🎁Rabatt auf Heroische Truhen", es: "🎁Descuento de Cajas Heroicas", fr: "🎁Réduction sur les Coffres Héroïques", ja: "🎁ヒーローの宝箱割引" },
  links: { en: "#section16", pt: "#section16", de: "#section16", es: "#section16", fr: "#section16", ja: "#section16" }
},

]
},
  // semana 02
  {
  weekday: "Monday",
  date: "October, 05",
    image: "../../imagens/image-shared/guus-300px.webp",
    alt: "Trade Routes Events - Talisman Events",
   titles: { en: "🌌 Trade Routes - Talisman Events", de: "🌌 Handelsrouten - Talisman-Events", es: "🌌 Rutas Comerciales - Eventos de Talismán", fr: "🌌 Routes Commerciales - Événements de Talismans", pt: "🌌 Rotas Comerciais - Eventos de Talismã", ja: "🌌 交易路 - タリスマンイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
    extra: [
     {
  titles: { en: "🛤️ Bountiful Roads", pt: "🛤️ Estradas Prósperas", de: "🛤️ Ertragreiche Straßen", es: "🛤️ Caminos Prósperos", fr: "🛤️ Routes Prospères", ja: "🛤️ 豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
{
  titles: { en: "🐪 Grand Caravan", pt: "🐪 Grande Caravana", de: "🐪 Große Karawane", es: "🐪 Gran Caravana", fr: "🐪 Grande Caravane", ja: "🐪 大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "🔓 Roads Unlocked", pt: "🔓 Estradas Desbloqueadas", de: "🔓 Freigegebene Straßen", es: "🔓 Caminos Desbloqueados", fr: "🔓 Routes Déverrouillées", ja: "🔓 開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  

 {
      titles: { en: "📿Guus - Relic Event", de: "📿Guus - Relikt-Event", es: "📿Guus - Evento de Reliquia", fr: "📿Guus - Événement des Reliques", pt: "📿Guus - Evento de Relíquia", ja: "📿グース - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
   {
titles: { en: "🦸Guus Guide", pt: "🦸Guia do Guus", de: "🦸Guus-Leitfaden", es: "🦸Guía de Guus", fr: "🦸Guide de Guus", ja: "🦸グース ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "../../hero-wars-alliance/characters-guide/guus-de.html", es: "../../hero-wars-alliance/characters-guide/guus-es.html", fr: "../../hero-wars-alliance/characters-guide/guus-fr.html", ja: "../../hero-wars-alliance/characters-guide/guus-ja.html" },
noStrip: true
},



    ]
  },
  {
    weekday: "Tuesday",
   date: "October, 06",
    image: "../../hero-wars-alliance/images/events/trade-routes/trade-routes-250px.webp",
    alt: "Trade Routes Events - Talisman Events",
   titles: { en: "🌌 Trade Routes - Talisman Events", de: "🌌 Handelsrouten - Talisman-Events", es: "🌌 Rutas Comerciales - Eventos de Talismán", fr: "🌌 Routes Commerciales - Événements de Talismans", pt: "🌌 Rotas Comerciais - Eventos de Talismã", ja: "🌌 交易路 - タリスマンイベント" },
   links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
   extra: [
     {
  titles: { en: "🛤️ Bountiful Roads", pt: "🛤️ Estradas Prósperas", de: "🛤️ Ertragreiche Straßen", es: "🛤️ Caminos Prósperos", fr: "🛤️ Routes Prospères", ja: "🛤️ 豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
{
  titles: { en: "🐪 Grand Caravan", pt: "🐪 Grande Caravana", de: "🐪 Große Karawane", es: "🐪 Gran Caravana", fr: "🐪 Grande Caravane", ja: "🐪 大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "🔓 Roads Unlocked", pt: "🔓 Estradas Desbloqueadas", de: "🔓 Freigegebene Straßen", es: "🔓 Caminos Desbloqueados", fr: "🔓 Routes Déverrouillées", ja: "🔓 開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  

 {
      titles: { en: "📿Guus - Relic Event", de: "📿Guus - Relikt-Event", es: "📿Guus - Evento de Reliquia", fr: "📿Guus - Événement des Reliques", pt: "📿Guus - Evento de Relíquia", ja: "📿グース - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
   {
titles: { en: "🦸Guus Guide", pt: "🦸Guia do Guus", de: "🦸Guus-Leitfaden", es: "🦸Guía de Guus", fr: "🦸Guide de Guus", ja: "🦸グース ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "../../hero-wars-alliance/characters-guide/guus-de.html", es: "../../hero-wars-alliance/characters-guide/guus-es.html", fr: "../../hero-wars-alliance/characters-guide/guus-fr.html", ja: "../../hero-wars-alliance/characters-guide/guus-ja.html" },
noStrip: true
},



    ]
  },
{
  weekday: "Wednesday",
  date: "October, 07",
    image: "../../hero-wars-alliance/images/events/trade-routes/trade-routes-250px.webp",
   alt: "Trade Routes Events - Talisman Events",
   titles: { en: "🌌 Trade Routes - Talisman Events", de: "🌌 Handelsrouten - Talisman-Events", es: "🌌 Rutas Comerciales - Eventos de Talismán", fr: "🌌 Routes Commerciales - Événements de Talismans", pt: "🌌 Rotas Comerciais - Eventos de Talismã", ja: "🌌 交易路 - タリスマンイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
    extra: [
     {
  titles: { en: "🛤️ Bountiful Roads", pt: "🛤️ Estradas Prósperas", de: "🛤️ Ertragreiche Straßen", es: "🛤️ Caminos Prósperos", fr: "🛤️ Routes Prospères", ja: "🛤️ 豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
{
  titles: { en: "🐪 Grand Caravan", pt: "🐪 Grande Caravana", de: "🐪 Große Karawane", es: "🐪 Gran Caravana", fr: "🐪 Grande Caravane", ja: "🐪 大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "🔓 Roads Unlocked", pt: "🔓 Estradas Desbloqueadas", de: "🔓 Freigegebene Straßen", es: "🔓 Caminos Desbloqueados", fr: "🔓 Routes Déverrouillées", ja: "🔓 開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
 {
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  

 {
      titles: { en: "📿Guus - Relic Event", de: "📿Guus - Relikt-Event", es: "📿Guus - Evento de Reliquia", fr: "📿Guus - Événement des Reliques", pt: "📿Guus - Evento de Relíquia", ja: "📿グース - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
   {
titles: { en: "🦸Guus Guide", pt: "🦸Guia do Guus", de: "🦸Guus-Leitfaden", es: "🦸Guía de Guus", fr: "🦸Guide de Guus", ja: "🦸グース ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "../../hero-wars-alliance/characters-guide/guus-de.html", es: "../../hero-wars-alliance/characters-guide/guus-es.html", fr: "../../hero-wars-alliance/characters-guide/guus-fr.html", ja: "../../hero-wars-alliance/characters-guide/guus-ja.html" },
noStrip: true
},



    ]
  },
  {
    weekday: "Thursday",
   date: "October, 08",
     image: "../../hero-wars-alliance/images/events/trade-routes/trade-routes-250px.webp",
   alt: "Trade Routes Events - Talisman Events",
   titles: { en: "🌌 Trade Routes - Talisman Events", de: "🌌 Handelsrouten - Talisman-Events", es: "🌌 Rutas Comerciales - Eventos de Talismán", fr: "🌌 Routes Commerciales - Événements de Talismans", pt: "🌌 Rotas Comerciais - Eventos de Talismã", ja: "🌌 交易路 - タリスマンイベント" },
   links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
   extra: [
     {
  titles: { en: "🛤️ Bountiful Roads", pt: "🛤️ Estradas Prósperas", de: "🛤️ Ertragreiche Straßen", es: "🛤️ Caminos Prósperos", fr: "🛤️ Routes Prospères", ja: "🛤️ 豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
{
  titles: { en: "🐪 Grand Caravan", pt: "🐪 Grande Caravana", de: "🐪 Große Karawane", es: "🐪 Gran Caravana", fr: "🐪 Grande Caravane", ja: "🐪 大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "🔓 Roads Unlocked", pt: "🔓 Estradas Desbloqueadas", de: "🔓 Freigegebene Straßen", es: "🔓 Caminos Desbloqueados", fr: "🔓 Routes Déverrouillées", ja: "🔓 開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
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
  titles: { en: "🥋Cornelius New Skin+: Ocean Echo", pt: "🥋Cornelius Nova Skin+: Eco do Oceano", de: "🥋Cornelius Neuer Skin+: Meeres-Echo", es: "🥋Cornelius Nueva Skin+: Eco del Océano", fr: "🥋Cornelius Nouveau Skin+: Écho de l’Océan", ja: "🥋コーネリアス 新スキン+: 海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Cornelius - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
     {
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  

 {
      titles: { en: "📿Guus - Relic Event", de: "📿Guus - Relikt-Event", es: "📿Guus - Evento de Reliquia", fr: "📿Guus - Événement des Reliques", pt: "📿Guus - Evento de Relíquia", ja: "📿グース - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
   {
titles: { en: "🦸Guus Guide", pt: "🦸Guia do Guus", de: "🦸Guus-Leitfaden", es: "🦸Guía de Guus", fr: "🦸Guide de Guus", ja: "🦸グース ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "../../hero-wars-alliance/characters-guide/guus-de.html", es: "../../hero-wars-alliance/characters-guide/guus-es.html", fr: "../../hero-wars-alliance/characters-guide/guus-fr.html", ja: "../../hero-wars-alliance/characters-guide/guus-ja.html" },
noStrip: true
},



    ]
  },
  {
    weekday: "Friday",
   date: "October, 09",
     image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",// Seers Game Friday
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
   extra: [
    {
  titles: { en: "🌌 Trade Routes - Talisman Events", de: "🌌 Handelsrouten - Talisman-Events", es: "🌌 Rutas Comerciales - Eventos de Talismán", fr: "🌌 Routes Commerciales - Événements de Talismans", pt: "🌌 Rotas Comerciais - Eventos de Talismã", ja: "🌌 交易路 - タリスマンイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
     {
  titles: { en: "🛤️ Bountiful Roads", pt: "🛤️ Estradas Prósperas", de: "🛤️ Ertragreiche Straßen", es: "🛤️ Caminos Prósperos", fr: "🛤️ Routes Prospères", ja: "🛤️ 豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
{
  titles: { en: "🐪 Grand Caravan", pt: "🐪 Grande Caravana", de: "🐪 Große Karawane", es: "🐪 Gran Caravana", fr: "🐪 Grande Caravane", ja: "🐪 大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "🔓 Roads Unlocked", pt: "🔓 Estradas Desbloqueadas", de: "🔓 Freigegebene Straßen", es: "🔓 Caminos Desbloqueados", fr: "🔓 Routes Déverrouillées", ja: "🔓 開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
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
  titles: { en: "🥋Cornelius New Skin+: Ocean Echo", pt: "🥋Cornelius Nova Skin+: Eco do Oceano", de: "🥋Cornelius Neuer Skin+: Meeres-Echo", es: "🥋Cornelius Nueva Skin+: Eco del Océano", fr: "🥋Cornelius Nouveau Skin+: Écho de l’Océan", ja: "🥋コーネリアス 新スキン+: 海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Cornelius - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},

     {
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  

 {
      titles: { en: "📿Guus - Relic Event", de: "📿Guus - Relikt-Event", es: "📿Guus - Evento de Reliquia", fr: "📿Guus - Événement des Reliques", pt: "📿Guus - Evento de Relíquia", ja: "📿グース - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
   {
titles: { en: "🦸Guus Guide", pt: "🦸Guia do Guus", de: "🦸Guus-Leitfaden", es: "🦸Guía de Guus", fr: "🦸Guide de Guus", ja: "🦸グース ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "../../hero-wars-alliance/characters-guide/guus-de.html", es: "../../hero-wars-alliance/characters-guide/guus-es.html", fr: "../../hero-wars-alliance/characters-guide/guus-fr.html", ja: "../../hero-wars-alliance/characters-guide/guus-ja.html" },
noStrip: true
},



    ]
  },
  {
    weekday: "Saturday",
    date: "October, 10",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
   extra: [
    {
 titles: { en: "🌌 Trade Routes - Talisman Events", de: "🌌 Handelsrouten - Talisman-Events", es: "🌌 Rutas Comerciales - Eventos de Talismán", fr: "🌌 Routes Commerciales - Événements de Talismans", pt: "🌌 Rotas Comerciais - Eventos de Talismã", ja: "🌌 交易路 - タリスマンイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
     {
  titles: { en: "🛤️ Bountiful Roads", pt: "🛤️ Estradas Prósperas", de: "🛤️ Ertragreiche Straßen", es: "🛤️ Caminos Prósperos", fr: "🛤️ Routes Prospères", ja: "🛤️ 豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
{
  titles: { en: "🐪 Grand Caravan", pt: "🐪 Grande Caravana", de: "🐪 Große Karawane", es: "🐪 Gran Caravana", fr: "🐪 Grande Caravane", ja: "🐪 大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "🔓 Roads Unlocked", pt: "🔓 Estradas Desbloqueadas", de: "🔓 Freigegebene Straßen", es: "🔓 Caminos Desbloqueados", fr: "🔓 Routes Déverrouillées", ja: "🔓 開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
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
  titles: { en: "🥋Cornelius New Skin+: Ocean Echo", pt: "🥋Cornelius Nova Skin+: Eco do Oceano", de: "🥋Cornelius Neuer Skin+: Meeres-Echo", es: "🥋Cornelius Nueva Skin+: Eco del Océano", fr: "🥋Cornelius Nouveau Skin+: Écho de l’Océan", ja: "🥋コーネリアス 新スキン+: 海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Cornelius - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
       {
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  

 {
      titles: { en: "📿Guus - Relic Event", de: "📿Guus - Relikt-Event", es: "📿Guus - Evento de Reliquia", fr: "📿Guus - Événement des Reliques", pt: "📿Guus - Evento de Relíquia", ja: "📿グース - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
   {
titles: { en: "🦸Guus Guide", pt: "🦸Guia do Guus", de: "🦸Guus-Leitfaden", es: "🦸Guía de Guus", fr: "🦸Guide de Guus", ja: "🦸グース ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "../../hero-wars-alliance/characters-guide/guus-de.html", es: "../../hero-wars-alliance/characters-guide/guus-es.html", fr: "../../hero-wars-alliance/characters-guide/guus-fr.html", ja: "../../hero-wars-alliance/characters-guide/guus-ja.html" },
noStrip: true
},


    ]
  },
{
  weekday: "Sunday",
  date: "October, 11",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
   extra: [
    {
  titles: { en: "🌌 Trade Routes - Talisman Events", de: "🌌 Handelsrouten - Talisman-Events", es: "🌌 Rutas Comerciales - Eventos de Talismán", fr: "🌌 Routes Commerciales - Événements de Talismans", pt: "🌌 Rotas Comerciais - Eventos de Talismã", ja: "🌌 交易路 - タリスマンイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-event-group-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
     {
  titles: { en: "🛤️ Bountiful Roads", pt: "🛤️ Estradas Prósperas", de: "🛤️ Ertragreiche Straßen", es: "🛤️ Caminos Prósperos", fr: "🛤️ Routes Prospères", ja: "🛤️ 豊かな街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-bountiful-roads-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},
{
  titles: { en: "🐪 Grand Caravan", pt: "🐪 Grande Caravana", de: "🐪 Große Karawane", es: "🐪 Gran Caravana", fr: "🐪 Grande Caravane", ja: "🐪 大キャラバン" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-grand-caravan-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},
{
  titles: { en: "🔓 Roads Unlocked", pt: "🔓 Estradas Desbloqueadas", de: "🔓 Freigegebene Straßen", es: "🔓 Caminos Desbloqueados", fr: "🔓 Routes Déverrouillées", ja: "🔓 開放された街道" },
  links: { en: "../../hero-wars-alliance/event-hwa/trade-routes-roads-unlocked-en.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
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
  titles: { en: "🥋Cornelius New Skin+: Ocean Echo", pt: "🥋Cornelius Nova Skin+: Eco do Oceano", de: "🥋Cornelius Neuer Skin+: Meeres-Echo", es: "🥋Cornelius Nueva Skin+: Eco del Océano", fr: "🥋Cornelius Nouveau Skin+: Écho de l’Océan", ja: "🥋コーネリアス 新スキン+: 海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Cornelius - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
       {
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  

 {
      titles: { en: "📿Guus - Relic Event", de: "📿Guus - Relikt-Event", es: "📿Guus - Evento de Reliquia", fr: "📿Guus - Événement des Reliques", pt: "📿Guus - Evento de Relíquia", ja: "📿グース - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
   {
titles: { en: "🦸Guus Guide", pt: "🦸Guia do Guus", de: "🦸Guus-Leitfaden", es: "🦸Guía de Guus", fr: "🦸Guide de Guus", ja: "🦸グース ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "../../hero-wars-alliance/characters-guide/guus-de.html", es: "../../hero-wars-alliance/characters-guide/guus-es.html", fr: "../../hero-wars-alliance/characters-guide/guus-fr.html", ja: "../../hero-wars-alliance/characters-guide/guus-ja.html" },
noStrip: true
},


    ]
  },

// semana 03
{
    weekday: "Monday",
     date: "October, 12",
      image: "../../imagens/image-shared/crow-300px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory - Skin+ Events", de: "🪽Aufsteigender Ruhm - Skin+ Events", es: "🪽Gloria Ascendente - Eventos de Skin+", fr: "🪽Gloire Ascendante - Événements de Skin+", pt: "🪽Glória Ascendente - Eventos de Skin+", ja: "🪽昇華の栄光 - スキン+イベント" }, 
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  extra: [
     {
titles: { en: "🌟 Rising Legend", pt: "🌟 Lenda Ascendente", de: "🌟 Aufsteigende Legende", es: "🌟 Leyenda Ascendente", fr: "🌟 Légende Montante", ja: "🌟 ライジングレジェンド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🎇Spark of Glory", pt: "🎇Spark de Glória", de: "🎇Funke des Ruhms", es: "🎇Chispa de Gloria", fr: "🎇Étincelle de Gloire", ja: "🎇栄光の閃光" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🧩Trial of Legends", pt: "🧩Prova das Lendas", de: "🧩Prüfung der Legenden", es: "🧩Prueba de las Leyendas", fr: "🧩Épreuve des Légendes", ja: "🧩伝説の試練" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legends-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},

{
titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
noStrip: true
},
 
 {
titles: { en: "🥋Crow New Skin+: Ocean Echo", pt: "🥋Crow Nova Skin+: Eco do Oceano", de: "🥋Crow Neuer Skin+: Meeres-Echo", es: "🥋Crow Nueva Skin+: Eco del Océano", fr: "🥋Crow Nouvelle Skin+ : Écho de l’Océan", ja: "🥋クロウ 新スキン+：海のこだま" },

links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },

noStrip: true

},

{titles: { en: "🧥Fafnir New Skin: Ocean Echo", pt: "🧥Fafnir Nova Skin: Eco do Oceano", de: "🧥Fafnir Neuer Skin: Meeres-Echo", es: "🧥Fafnir Nueva Skin: Eco del Océano", fr: "🧥Fafnir Nouvelle Skin : Écho de l’Océan", ja: "🧥ファフニール 新スキン：海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Fafnir - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},  

          ]
  },
  {
    weekday: "Tuesday",
     date: "October, 13",
      image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory - Skin+ Events", de: "🪽Aufsteigender Ruhm - Skin+ Events", es: "🪽Gloria Ascendente - Eventos de Skin+", fr: "🪽Gloire Ascendante - Événements de Skin+", pt: "🪽Glória Ascendente - Eventos de Skin+", ja: "🪽昇華の栄光 - スキン+イベント" }, 
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  extra: [
     {
titles: { en: "🌟 Rising Legend", pt: "🌟 Lenda Ascendente", de: "🌟 Aufsteigende Legende", es: "🌟 Leyenda Ascendente", fr: "🌟 Légende Montante", ja: "🌟 ライジングレジェンド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🎇Spark of Glory", pt: "🎇Spark de Glória", de: "🎇Funke des Ruhms", es: "🎇Chispa de Gloria", fr: "🎇Étincelle de Gloire", ja: "🎇栄光の閃光" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🧩Trial of Legends", pt: "🧩Prova das Lendas", de: "🧩Prüfung der Legenden", es: "🧩Prueba de las Leyendas", fr: "🧩Épreuve des Légendes", ja: "🧩伝説の試練" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legends-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
noStrip: true
},
 
 {
titles: { en: "🥋Crow New Skin+: Ocean Echo", pt: "🥋Crow Nova Skin+: Eco do Oceano", de: "🥋Crow Neuer Skin+: Meeres-Echo", es: "🥋Crow Nueva Skin+: Eco del Océano", fr: "🥋Crow Nouvelle Skin+ : Écho de l’Océan", ja: "🥋クロウ 新スキン+：海のこだま" },

links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },

noStrip: true

},

{titles: { en: "🧥Fafnir New Skin: Ocean Echo", pt: "🧥Fafnir Nova Skin: Eco do Oceano", de: "🧥Fafnir Neuer Skin: Meeres-Echo", es: "🧥Fafnir Nueva Skin: Eco del Océano", fr: "🧥Fafnir Nouvelle Skin : Écho de l’Océan", ja: "🧥ファフニール 新スキン：海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Fafnir - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},  
          ]
  },

{
    weekday: "Wednesday",
     date: "October, 14",
      image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory - Skin+ Events", de: "🪽Aufsteigender Ruhm - Skin+ Events", es: "🪽Gloria Ascendente - Eventos de Skin+", fr: "🪽Gloire Ascendante - Événements de Skin+", pt: "🪽Glória Ascendente - Eventos de Skin+", ja: "🪽昇華の栄光 - スキン+イベント" }, 
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  extra: [
     {
titles: { en: "🌟 Rising Legend", pt: "🌟 Lenda Ascendente", de: "🌟 Aufsteigende Legende", es: "🌟 Leyenda Ascendente", fr: "🌟 Légende Montante", ja: "🌟 ライジングレジェンド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🎇Spark of Glory", pt: "🎇Spark de Glória", de: "🎇Funke des Ruhms", es: "🎇Chispa de Gloria", fr: "🎇Étincelle de Gloire", ja: "🎇栄光の閃光" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🧩Trial of Legends", pt: "🧩Prova das Lendas", de: "🧩Prüfung der Legenden", es: "🧩Prueba de las Leyendas", fr: "🧩Épreuve des Légendes", ja: "🧩伝説の試練" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legends-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
noStrip: true
},
 
 {
titles: { en: "🥋Crow New Skin+: Ocean Echo", pt: "🥋Crow Nova Skin+: Eco do Oceano", de: "🥋Crow Neuer Skin+: Meeres-Echo", es: "🥋Crow Nueva Skin+: Eco del Océano", fr: "🥋Crow Nouvelle Skin+ : Écho de l’Océan", ja: "🥋クロウ 新スキン+：海のこだま" },

links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },

noStrip: true

},

{titles: { en: "🧥Fafnir New Skin: Ocean Echo", pt: "🧥Fafnir Nova Skin: Eco do Oceano", de: "🧥Fafnir Neuer Skin: Meeres-Echo", es: "🧥Fafnir Nueva Skin: Eco del Océano", fr: "🧥Fafnir Nouvelle Skin : Écho de l’Océan", ja: "🧥ファフニール 新スキン：海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Fafnir - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},  

          ]
  },
  {
    weekday: "Thursday",
     date: "October, 15",
      image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory - Skin+ Events", de: "🪽Aufsteigender Ruhm - Skin+ Events", es: "🪽Gloria Ascendente - Eventos de Skin+", fr: "🪽Gloire Ascendante - Événements de Skin+", pt: "🪽Glória Ascendente - Eventos de Skin+", ja: "🪽昇華の栄光 - スキン+イベント" }, 
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
  extra: [
     {
titles: { en: "🌟 Rising Legend", pt: "🌟 Lenda Ascendente", de: "🌟 Aufsteigende Legende", es: "🌟 Leyenda Ascendente", fr: "🌟 Légende Montante", ja: "🌟 ライジングレジェンド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🎇Spark of Glory", pt: "🎇Spark de Glória", de: "🎇Funke des Ruhms", es: "🎇Chispa de Gloria", fr: "🎇Étincelle de Gloire", ja: "🎇栄光の閃光" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🧩Trial of Legends", pt: "🧩Prova das Lendas", de: "🧩Prüfung der Legenden", es: "🧩Prueba de las Leyendas", fr: "🧩Épreuve des Légendes", ja: "🧩伝説の試練" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legends-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
noStrip: true
},
 
 {
titles: { en: "🥋Crow New Skin+: Ocean Echo", pt: "🥋Crow Nova Skin+: Eco do Oceano", de: "🥋Crow Neuer Skin+: Meeres-Echo", es: "🥋Crow Nueva Skin+: Eco del Océano", fr: "🥋Crow Nouvelle Skin+ : Écho de l’Océan", ja: "🥋クロウ 新スキン+：海のこだま" },

links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },

noStrip: true

},

{titles: { en: "🧥Fafnir New Skin: Ocean Echo", pt: "🧥Fafnir Nova Skin: Eco do Oceano", de: "🧥Fafnir Neuer Skin: Meeres-Echo", es: "🧥Fafnir Nueva Skin: Eco del Océano", fr: "🧥Fafnir Nouvelle Skin : Écho de l’Océan", ja: "🧥ファフニール 新スキン：海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Fafnir - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},  
          ]
  },
  {
    weekday: "Friday",
    date: "October, 16",
     image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
   titles: { en: "🪽Ascendant Glory - Skin+ Events", de: "🪽Aufsteigender Ruhm - Skin+ Events", es: "🪽Gloria Ascendente - Eventos de Skin+", fr: "🪽Gloire Ascendante - Événements de Skin+", pt: "🪽Glória Ascendente - Eventos de Skin+", ja: "🪽昇華の栄光 - スキン+イベント" }, 
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
   extra: [

     {
titles: { en: "🌟 Rising Legend", pt: "🌟 Lenda Ascendente", de: "🌟 Aufsteigende Legende", es: "🌟 Leyenda Ascendente", fr: "🌟 Légende Montante", ja: "🌟 ライジングレジェンド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🎇Spark of Glory", pt: "🎇Spark de Glória", de: "🎇Funke des Ruhms", es: "🎇Chispa de Gloria", fr: "🎇Étincelle de Gloire", ja: "🎇栄光の閃光" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🧩Trial of Legends", pt: "🧩Prova das Lendas", de: "🧩Prüfung der Legenden", es: "🧩Prueba de las Leyendas", fr: "🧩Épreuve des Légendes", ja: "🧩伝説の試練" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legends-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
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
titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
noStrip: true
},
 
 {
titles: { en: "🥋Crow New Skin+: Ocean Echo", pt: "🥋Crow Nova Skin+: Eco do Oceano", de: "🥋Crow Neuer Skin+: Meeres-Echo", es: "🥋Crow Nueva Skin+: Eco del Océano", fr: "🥋Crow Nouvelle Skin+ : Écho de l’Océan", ja: "🥋クロウ 新スキン+：海のこだま" },

links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },

noStrip: true

},

{titles: { en: "🧥Fafnir New Skin: Ocean Echo", pt: "🧥Fafnir Nova Skin: Eco do Oceano", de: "🧥Fafnir Neuer Skin: Meeres-Echo", es: "🧥Fafnir Nueva Skin: Eco del Océano", fr: "🧥Fafnir Nouvelle Skin : Écho de l’Océan", ja: "🧥ファフニール 新スキン：海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Fafnir - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},  

  ]
  },

  {
    weekday: "Saturday",
    date: "October, 17",
    image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
    titles: { en: "🪽Ascendant Glory - Skin+ Events", de: "🪽Aufsteigender Ruhm - Skin+ Events", es: "🪽Gloria Ascendente - Eventos de Skin+", fr: "🪽Gloire Ascendante - Événements de Skin+", pt: "🪽Glória Ascendente - Eventos de Skin+", ja: "🪽昇華の栄光 - スキン+イベント" }, 
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
       extra: [

      {
titles: { en: "🌟 Rising Legend", pt: "🌟 Lenda Ascendente", de: "🌟 Aufsteigende Legende", es: "🌟 Leyenda Ascendente", fr: "🌟 Légende Montante", ja: "🌟 ライジングレジェンド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🎇Spark of Glory", pt: "🎇Spark de Glória", de: "🎇Funke des Ruhms", es: "🎇Chispa de Gloria", fr: "🎇Étincelle de Gloire", ja: "🎇栄光の閃光" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🧩Trial of Legends", pt: "🧩Prova das Lendas", de: "🧩Prüfung der Legenden", es: "🧩Prueba de las Leyendas", fr: "🧩Épreuve des Légendes", ja: "🧩伝説の試練" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legends-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
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
titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
noStrip: true
},
 
 {
titles: { en: "🥋Crow New Skin+: Ocean Echo", pt: "🥋Crow Nova Skin+: Eco do Oceano", de: "🥋Crow Neuer Skin+: Meeres-Echo", es: "🥋Crow Nueva Skin+: Eco del Océano", fr: "🥋Crow Nouvelle Skin+ : Écho de l’Océan", ja: "🥋クロウ 新スキン+：海のこだま" },

links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },

noStrip: true

},

{titles: { en: "🧥Fafnir New Skin: Ocean Echo", pt: "🧥Fafnir Nova Skin: Eco do Oceano", de: "🧥Fafnir Neuer Skin: Meeres-Echo", es: "🧥Fafnir Nueva Skin: Eco del Océano", fr: "🧥Fafnir Nouvelle Skin : Écho de l’Océan", ja: "🧥ファフニール 新スキン：海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Fafnir - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},  

  ]
  },
  {
    weekday: "Sunday",
    date: "October, 18",
     image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
   titles: { en: "🪽Ascendant Glory - Skin+ Events", de: "🪽Aufsteigender Ruhm - Skin+ Events", es: "🪽Gloria Ascendente - Eventos de Skin+", fr: "🪽Gloire Ascendante - Événements de Skin+", pt: "🪽Glória Ascendente - Eventos de Skin+", ja: "🪽昇華の栄光 - スキン+イベント" }, 
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-event-group-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
        extra: [

      {
titles: { en: "🌟 Rising Legend", pt: "🌟 Lenda Ascendente", de: "🌟 Aufsteigende Legende", es: "🌟 Leyenda Ascendente", fr: "🌟 Légende Montante", ja: "🌟 ライジングレジェンド" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-rising-legend-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🎇Spark of Glory", pt: "🎇Spark de Glória", de: "🎇Funke des Ruhms", es: "🎇Chispa de Gloria", fr: "🎇Étincelle de Gloire", ja: "🎇栄光の閃光" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-spark-of-glory-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},
{
  titles: { en: "🧩Trial of Legends", pt: "🧩Prova das Lendas", de: "🧩Prüfung der Legenden", es: "🧩Prueba de las Leyendas", fr: "🧩Épreuve des Légendes", ja: "🧩伝説の試練" },
  links: { en: "../../hero-wars-alliance/event-hwa/ascendant-glory-trial-of-legends-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
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
titles: { en: "🦸Crow Guide", pt: "🦸Guia do Crow", de: "🦸Crow Leitfaden", es: "🦸Guía de Crow", fr: "🦸Guide de Crow", ja: "🦸クロウ ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },
noStrip: true
},
 
 {
titles: { en: "🥋Crow New Skin+: Ocean Echo", pt: "🥋Crow Nova Skin+: Eco do Oceano", de: "🥋Crow Neuer Skin+: Meeres-Echo", es: "🥋Crow Nueva Skin+: Eco del Océano", fr: "🥋Crow Nouvelle Skin+ : Écho de l’Océan", ja: "🥋クロウ 新スキン+：海のこだま" },

links: { en: "../../hero-wars-alliance/characters-guide/crow-en.html", pt: "../../hero-wars-alliance/characters-guide/crow-pt.html", de: "../../hero-wars-alliance/characters-guide/crow-de.html", es: "../../hero-wars-alliance/characters-guide/crow-es.html", fr: "../../hero-wars-alliance/characters-guide/crow-fr.html", ja: "../../hero-wars-alliance/characters-guide/crow-ja.html" },

noStrip: true

},

{titles: { en: "🧥Fafnir New Skin: Ocean Echo", pt: "🧥Fafnir Nova Skin: Eco do Oceano", de: "🧥Fafnir Neuer Skin: Meeres-Echo", es: "🧥Fafnir Nueva Skin: Eco del Océano", fr: "🧥Fafnir Nouvelle Skin : Écho de l’Océan", ja: "🧥ファフニール 新スキン：海のこだま" },
  links: { en: "../../Hero Wars/Guia de Heróis Hero Wars/Fafnir - English.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true
},  

  ]
  },
  // semana 04
 {
    weekday: "Monday",
    date: "October, 19",
   image: "../../imagens/image-shared/luther-300px.webp",
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
  titles: { en: "📿Luther - Relic Event", de: "📿Luther - Relikt-Ereignis", es: "📿Luther - Evento de Reliquia", fr: "📿Luther - Événement des Reliques", pt: "📿Luther - Evento de Relíquia", ja: "📿ルーサー - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Luther Guide", pt: "🦸Guia do Luther", de: "🦸Luther Leitfaden", es: "🦸Guía de Luther", fr: "🦸Guide de Luther", ja: "🦸ルーサー ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true,
},
{ titles: { en: "🥋Luther New Skin+: Ocean’s Echo", pt: "🥋Luther Nova Skin+: Eco do Oceano", de: "🥋Luther Neue Skin+: Meeres-Echo", es: "🥋Luther Nueva Skin+: Eco del Océano", fr: "🥋Luther Nouvelle Skin+ : Écho de l’Océan", ja: "🥋ルーサー 新スキン+：海のこだま" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
noStrip: true,
},

    ]
  },

  {
    weekday: "Tuesday",
    date: "October, 20",
  image: "../../hero-wars-alliance/images/events/balance-of-power/balance-of-power-event-group-250px.webp",
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
  titles: { en: "📿Luther - Relic Event", de: "📿Luther - Relikt-Ereignis", es: "📿Luther - Evento de Reliquia", fr: "📿Luther - Événement des Reliques", pt: "📿Luther - Evento de Relíquia", ja: "📿ルーサー - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Luther Guide", pt: "🦸Guia do Luther", de: "🦸Luther Leitfaden", es: "🦸Guía de Luther", fr: "🦸Guide de Luther", ja: "🦸ルーサー ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true,
},
{ titles: { en: "🥋Luther New Skin+: Ocean’s Echo", pt: "🥋Luther Nova Skin+: Eco do Oceano", de: "🥋Luther Neue Skin+: Meeres-Echo", es: "🥋Luther Nueva Skin+: Eco del Océano", fr: "🥋Luther Nouvelle Skin+ : Écho de l’Océan", ja: "🥋ルーサー 新スキン+：海のこだま" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
noStrip: true,
},


]
},

  {
    weekday: "Wednesday",
     date: "October, 21",
   image: "../../hero-wars-alliance/images/events/balance-of-power/balance-of-power-event-group-250px.webp",
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
  titles: { en: "📿Luther - Relic Event", de: "📿Luther - Relikt-Ereignis", es: "📿Luther - Evento de Reliquia", fr: "📿Luther - Événement des Reliques", pt: "📿Luther - Evento de Relíquia", ja: "📿ルーサー - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Luther Guide", pt: "🦸Guia do Luther", de: "🦸Luther Leitfaden", es: "🦸Guía de Luther", fr: "🦸Guide de Luther", ja: "🦸ルーサー ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true,
},
{ titles: { en: "🥋Luther New Skin+: Ocean’s Echo", pt: "🥋Luther Nova Skin+: Eco do Oceano", de: "🥋Luther Neue Skin+: Meeres-Echo", es: "🥋Luther Nueva Skin+: Eco del Océano", fr: "🥋Luther Nouvelle Skin+ : Écho de l’Océan", ja: "🥋ルーサー 新スキン+：海のこだま" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
noStrip: true,
},


    ]
  },
  {
    weekday: "Thursday",
    date: "October, 22",
   image: "../../hero-wars-alliance/images/events/balance-of-power/balance-of-power-event-group-250px.webp",
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
  titles: { en: "📿Luther - Relic Event", de: "📿Luther - Relikt-Ereignis", es: "📿Luther - Evento de Reliquia", fr: "📿Luther - Événement des Reliques", pt: "📿Luther - Evento de Relíquia", ja: "📿ルーサー - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Luther Guide", pt: "🦸Guia do Luther", de: "🦸Luther Leitfaden", es: "🦸Guía de Luther", fr: "🦸Guide de Luther", ja: "🦸ルーサー ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true,
},
{ titles: { en: "🥋Luther New Skin+: Ocean’s Echo", pt: "🥋Luther Nova Skin+: Eco do Oceano", de: "🥋Luther Neue Skin+: Meeres-Echo", es: "🥋Luther Nueva Skin+: Eco del Océano", fr: "🥋Luther Nouvelle Skin+ : Écho de l’Océan", ja: "🥋ルーサー 新スキン+：海のこだま" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
noStrip: true,
},


    ]
  },
  {
    weekday: "Friday",
     date: "October, 23",
   image: "../../hero-wars-alliance/images/events/balance-of-power/balance-of-power-event-group-250px.webp",
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
  titles: { en: "📿Luther - Relic Event", de: "📿Luther - Relikt-Ereignis", es: "📿Luther - Evento de Reliquia", fr: "📿Luther - Événement des Reliques", pt: "📿Luther - Evento de Relíquia", ja: "📿ルーサー - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Luther Guide", pt: "🦸Guia do Luther", de: "🦸Luther Leitfaden", es: "🦸Guía de Luther", fr: "🦸Guide de Luther", ja: "🦸ルーサー ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true,
},
{ titles: { en: "🥋Luther New Skin+: Ocean’s Echo", pt: "🥋Luther Nova Skin+: Eco do Oceano", de: "🥋Luther Neue Skin+: Meeres-Echo", es: "🥋Luther Nueva Skin+: Eco del Océano", fr: "🥋Luther Nouvelle Skin+ : Écho de l’Océan", ja: "🥋ルーサー 新スキン+：海のこだま" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
noStrip: true,
},


    ]
  },
  {
    weekday: "Saturday",
     date: "October, 24",
    image: "../../hero-wars-alliance/images/events/balance-of-power/balance-of-power-event-group-250px.webp",
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
  titles: { en: "📿Luther - Relic Event", de: "📿Luther - Relikt-Ereignis", es: "📿Luther - Evento de Reliquia", fr: "📿Luther - Événement des Reliques", pt: "📿Luther - Evento de Relíquia", ja: "📿ルーサー - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Luther Guide", pt: "🦸Guia do Luther", de: "🦸Luther Leitfaden", es: "🦸Guía de Luther", fr: "🦸Guide de Luther", ja: "🦸ルーサー ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true,
},
{ titles: { en: "🥋Luther New Skin+: Ocean’s Echo", pt: "🥋Luther Nova Skin+: Eco do Oceano", de: "🥋Luther Neue Skin+: Meeres-Echo", es: "🥋Luther Nueva Skin+: Eco del Océano", fr: "🥋Luther Nouvelle Skin+ : Écho de l’Océan", ja: "🥋ルーサー 新スキン+：海のこだま" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
noStrip: true,
},


    ]
  },

{
  weekday: "Sunday",
   date: "October, 25",
    image: "../../hero-wars-alliance/images/events/balance-of-power/balance-of-power-event-group-250px.webp",
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
  titles: { en: "📿Luther - Relic Event", de: "📿Luther - Relikt-Ereignis", es: "📿Luther - Evento de Reliquia", fr: "📿Luther - Événement des Reliques", pt: "📿Luther - Evento de Relíquia", ja: "📿ルーサー - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" },
  noStrip: true
},
{
titles: { en: "🦸Luther Guide", pt: "🦸Guia do Luther", de: "🦸Luther Leitfaden", es: "🦸Guía de Luther", fr: "🦸Guide de Luther", ja: "🦸ルーサー ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },
  noStrip: true,
},
{ titles: { en: "🥋Luther New Skin+: Ocean’s Echo", pt: "🥋Luther Nova Skin+: Eco do Oceano", de: "🥋Luther Neue Skin+: Meeres-Echo", es: "🥋Luther Nueva Skin+: Eco del Océano", fr: "🥋Luther Nouvelle Skin+ : Écho de l’Océan", ja: "🥋ルーサー 新スキン+：海のこだま" },
 links: { en: "../../hero-wars-alliance/characters-guide/luther-en.html", pt: "", de: "", es: "", fr: "",  ja: "" }, 
noStrip: true,
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
  links: { en: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", de: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", es: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", fr: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", pt: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", ja: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY" },
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
    weekday: "Metida Guide",
    date: "",
    image: "../../imagens/image-shared/metida-300px.webp",
    alt: "Metida Guide",
   titles: { en: "🦸Metida Guide", pt: "🦸Guia da Metida", de: "🦸Metida Leitfaden", es: "🦸Guía de Metida", fr: "🦸Guide de Metida", ja: "🦸メティダ ガイド" },
links: { en: "../../hero-wars-alliance/titans-guide/metida-en.html", pt: "../../hero-wars-alliance/titans-guide/metida-pt.html", de: "../../hero-wars-alliance/titans-guide/metida-de.html", es: "../../hero-wars-alliance/titans-guide/metida-es.html", fr: "../../hero-wars-alliance/titans-guide/metida-fr.html", ja: "../../hero-wars-alliance/titans-guide/metida-ja.html" },
  noStrip: true,
  extra: [


   ]
  },
  {
    weekday: "Guus Guide",
    date: "",
    image: "../../imagens/image-shared/guus-300px.webp",
    alt: "Guus Guide",
    titles: { en: "🦸Guus Guide", pt: "🦸Guia do Guus", de: "🦸Guus-Leitfaden", es: "🦸Guía de Guus", fr: "🦸Guide de Guus", ja: "🦸グース ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/guus-en.html", pt: "../../hero-wars-alliance/characters-guide/guus-pt.html", de: "../../hero-wars-alliance/characters-guide/guus-de.html", es: "../../hero-wars-alliance/characters-guide/guus-es.html", fr: "../../hero-wars-alliance/characters-guide/guus-fr.html", ja: "../../hero-wars-alliance/characters-guide/guus-ja.html" },
  noStrip: true,
  extra: [


   ]
  },
  {
    weekday: "Julius Guide",
    date: "",
    image: "../../imagens/image-shared/julius-300px.webp",
    alt: "Julius Guide",
    titles: { en: "🦸Julius Guide", pt: "🦸Guia de Julius", de: "🦸Julius Leitfaden", es: "🦸Guía de Julius", fr: "🦸Guide de Julius", ja: "🦸ジュリウス ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/julius-en.html", pt: "../../hero-wars-alliance/characters-guide/julius-pt.html", de: "../../hero-wars-alliance/characters-guide/julius-de.html", es: "../../hero-wars-alliance/characters-guide/julius-es.html", fr: "../../hero-wars-alliance/characters-guide/julius-fr.html", ja: "../../hero-wars-alliance/characters-guide/julius-ja.html" },
  noStrip: true,
  extra: [


   ]
  },
  {
    weekday: "Eva Guide",
    date: "",
    image: "../../imagens/image-shared/eva-300px.webp",
    alt: "Eva Guide",
    titles: { en: "🦸Eva Guide", pt: "🦸Guia da Eva", de: "🦸Eva Leitfaden", es: "🦸Guía de Eva", fr: "🦸Guide d'Eva", ja: "🦸エヴァ ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/eva-en.html", pt: "../../hero-wars-alliance/characters-guide/eva-pt.html", de: "../../hero-wars-alliance/characters-guide/eva-de.html", es: "../../hero-wars-alliance/characters-guide/eva-es.html", fr: "../../hero-wars-alliance/characters-guide/eva-fr.html", ja: "../../hero-wars-alliance/characters-guide/eva-ja.html" },
  noStrip: true,
  extra: [


   ]
  },
{
    weekday: "Nebula Guide",
    date: "",
    image: "../../imagens/image-shared/nebula-300px.webp",
    alt: "Nebula Guide",
    titles: { en: "🦸Nebula Guide", pt: "🦸Guia da Nebula", de: "🦸Nebula Leitfaden", es: "🦸Guía de Nebula", fr: "🦸Guide de Nebula", ja: "🦸ネブュラ ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/nebula-en.html", pt: "../../hero-wars-alliance/characters-guide/nebula-pt.html", de: "../../hero-wars-alliance/characters-guide/nebula-de.html", es: "../../hero-wars-alliance/characters-guide/nebula-es.html", fr: "../../hero-wars-alliance/characters-guide/nebula-fr.html",  ja: "../../hero-wars-alliance/characters-guide/nebula-ja.html" },  noStrip: true,
  extra: [


   ]
}


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
