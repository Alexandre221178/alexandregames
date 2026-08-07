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

{
  weekday: "Monday",
  date: "August, 03",
    image: "../../imagens/image-shared/pallant-300px.webp",
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
  titles: { en: "🦸Pallant Guide", pt: "🦸Guia do Pallant", de: "🦸Pallant Leitfaden", es: "🦸Guía de Pallant", fr: "🦸Guide de Pallant", ja: "🦸パラント ガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/pallant-en.html", pt: "../../hero-wars-alliance/titans-guide/pallant-pt.html", de: "../../hero-wars-alliance/titans-guide/pallant-de.html", es: "../../hero-wars-alliance/titans-guide/pallant-es.html", fr: "../../hero-wars-alliance/titans-guide/pallant-fr.html", ja: "../../hero-wars-alliance/titans-guide/pallant-ja.html" },
  noStrip: true
},
    ]
  },
  {
    weekday: "Tuesday",
   date: "August, 04",
    image: "../../imagens/image-shared/pallant-300px.webp",
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
  titles: { en: "🦸Pallant Guide", pt: "🦸Guia do Pallant", de: "🦸Pallant Leitfaden", es: "🦸Guía de Pallant", fr: "🦸Guide de Pallant", ja: "🦸パラント ガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/pallant-en.html", pt: "../../hero-wars-alliance/titans-guide/pallant-pt.html", de: "../../hero-wars-alliance/titans-guide/pallant-de.html", es: "../../hero-wars-alliance/titans-guide/pallant-es.html", fr: "../../hero-wars-alliance/titans-guide/pallant-fr.html", ja: "../../hero-wars-alliance/titans-guide/pallant-ja.html" },
  noStrip: true
},
    ]
  },
{
  weekday: "Wednesday",
 date: "August, 05",
    image: "../../imagens/image-shared/pallant-300px.webp",
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
  titles: { en: "🦸Pallant Guide", pt: "🦸Guia do Pallant", de: "🦸Pallant Leitfaden", es: "🦸Guía de Pallant", fr: "🦸Guide de Pallant", ja: "🦸パラント ガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/pallant-en.html", pt: "../../hero-wars-alliance/titans-guide/pallant-pt.html", de: "../../hero-wars-alliance/titans-guide/pallant-de.html", es: "../../hero-wars-alliance/titans-guide/pallant-es.html", fr: "../../hero-wars-alliance/titans-guide/pallant-fr.html", ja: "../../hero-wars-alliance/titans-guide/pallant-ja.html" },
  noStrip: true
},
    ]
  },
  {
    weekday: "Thursday",
   date: "August, 06",
    image: "../../imagens/image-shared/pallant-300px.webp",
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
  titles: { en: "🦸Pallant Guide", pt: "🦸Guia do Pallant", de: "🦸Pallant Leitfaden", es: "🦸Guía de Pallant", fr: "🦸Guide de Pallant", ja: "🦸パラント ガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/pallant-en.html", pt: "../../hero-wars-alliance/titans-guide/pallant-pt.html", de: "../../hero-wars-alliance/titans-guide/pallant-de.html", es: "../../hero-wars-alliance/titans-guide/pallant-es.html", fr: "../../hero-wars-alliance/titans-guide/pallant-fr.html", ja: "../../hero-wars-alliance/titans-guide/pallant-ja.html" },
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
 date: "August, 07",
    image: "../../imagens/image-shared/pallant-300px.webp",
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
  titles: { en: "🦸Pallant Guide", pt: "🦸Guia do Pallant", de: "🦸Pallant Leitfaden", es: "🦸Guía de Pallant", fr: "🦸Guide de Pallant", ja: "🦸パラント ガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/pallant-en.html", pt: "../../hero-wars-alliance/titans-guide/pallant-pt.html", de: "../../hero-wars-alliance/titans-guide/pallant-de.html", es: "../../hero-wars-alliance/titans-guide/pallant-es.html", fr: "../../hero-wars-alliance/titans-guide/pallant-fr.html", ja: "../../hero-wars-alliance/titans-guide/pallant-ja.html" },
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
  date: "August, 08",
    image: "../../imagens/image-shared/pallant-300px.webp",
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
  titles: { en: "🦸Pallant Guide", pt: "🦸Guia do Pallant", de: "🦸Pallant Leitfaden", es: "🦸Guía de Pallant", fr: "🦸Guide de Pallant", ja: "🦸パラント ガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/pallant-en.html", pt: "../../hero-wars-alliance/titans-guide/pallant-pt.html", de: "../../hero-wars-alliance/titans-guide/pallant-de.html", es: "../../hero-wars-alliance/titans-guide/pallant-es.html", fr: "../../hero-wars-alliance/titans-guide/pallant-fr.html", ja: "../../hero-wars-alliance/titans-guide/pallant-ja.html" },
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
 date: "August, 09",
    image: "../../imagens/image-shared/pallant-300px.webp",
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
  titles: { en: "🦸Pallant Guide", pt: "🦸Guia do Pallant", de: "🦸Pallant Leitfaden", es: "🦸Guía de Pallant", fr: "🦸Guide de Pallant", ja: "🦸パラント ガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/pallant-en.html", pt: "../../hero-wars-alliance/titans-guide/pallant-pt.html", de: "../../hero-wars-alliance/titans-guide/pallant-de.html", es: "../../hero-wars-alliance/titans-guide/pallant-es.html", fr: "../../hero-wars-alliance/titans-guide/pallant-fr.html", ja: "../../hero-wars-alliance/titans-guide/pallant-ja.html" },
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
{
  weekday: "Monday",
  date: "August, 10",
    image: "../../hero-wars-alliance/images/events/trade-routes/trade-routes-250px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
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
      titles: { en: "📿 Cleaver - Relic Event", de: "📿 Cleaver - Relikt-Event", es: "📿 Cleaver - Evento de Reliquia", fr: "📿 Cleaver - Événement des Reliques", pt: "📿 Cleaver - Evento de Relíquia", ja: "📿 クリーバー - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
   {
 titles: { en: "🦸 Cleaver Guide", pt: "🦸 Guia da Cleaver", de: "🦸 Cleaver-Leitfaden", es: "🦸 Guía de Cleaver", fr: "🦸 Guide de Cleaver", ja: "🦸 クリーバー ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/cleaver-en.html", de: "../../hero-wars-alliance/characters-guide/cleaver-de.html", es: "../../hero-wars-alliance/characters-guide/cleaver-es.html", fr: "../../hero-wars-alliance/characters-guide/cleaver-fr.html", pt: "../../hero-wars-alliance/characters-guide/cleaver-pt.html", ja: "../../hero-wars-alliance/characters-guide/cleaver-ja.html" },
  noStrip: true
},
  {
  titles: { en: "👗 Peech New Skin: Inner Demons", pt: "👗 Peech Nova Skin: Demônios Interiores", de: "👗 Peech Neue Skin: Innere Dämonen", es: "👗 Peech Nueva Skin: Demonios Interiores", fr: "👗 Peech Nouvelle Skin : Démons Intérieurs", ja: "👗 ピーチ 新スキン：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},

    ]
  },
  {
    weekday: "Tuesday",
   date: "August, 11",
    image: "../../hero-wars-alliance/images/events/trade-routes/trade-routes-250px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
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
      titles: { en: "📿 Cleaver - Relic Event", de: "📿 Cleaver - Relikt-Event", es: "📿 Cleaver - Evento de Reliquia", fr: "📿 Cleaver - Événement des Reliques", pt: "📿 Cleaver - Evento de Relíquia", ja: "📿 クリーバー - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
  {
 titles: { en: "🦸 Cleaver Guide", pt: "🦸 Guia da Cleaver", de: "🦸 Cleaver-Leitfaden", es: "🦸 Guía de Cleaver", fr: "🦸 Guide de Cleaver", ja: "🦸 クリーバー ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/cleaver-en.html", de: "../../hero-wars-alliance/characters-guide/cleaver-de.html", es: "../../hero-wars-alliance/characters-guide/cleaver-es.html", fr: "../../hero-wars-alliance/characters-guide/cleaver-fr.html", pt: "../../hero-wars-alliance/characters-guide/cleaver-pt.html", ja: "../../hero-wars-alliance/characters-guide/cleaver-ja.html" },
  noStrip: true
},
  {
  titles: { en: "👗 Peech New Skin: Inner Demons", pt: "👗 Peech Nova Skin: Demônios Interiores", de: "👗 Peech Neue Skin: Innere Dämonen", es: "👗 Peech Nueva Skin: Demonios Interiores", fr: "👗 Peech Nouvelle Skin : Démons Intérieurs", ja: "👗 ピーチ 新スキン：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html",pt: "", de: "", es: "", fr: "",  ja: "" }, 
  noStrip: true
},

    ]
  },
{
  weekday: "Wednesday",
  date: "August, 12",
    image: "../../hero-wars-alliance/images/events/trade-routes/trade-routes-250px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
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
      titles: { en: "📿 Cleaver - Relic Event", de: "📿 Cleaver - Relikt-Event", es: "📿 Cleaver - Evento de Reliquia", fr: "📿 Cleaver - Événement des Reliques", pt: "📿 Cleaver - Evento de Relíquia", ja: "📿 クリーバー - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
  {
 titles: { en: "🦸 Cleaver Guide", pt: "🦸 Guia da Cleaver", de: "🦸 Cleaver-Leitfaden", es: "🦸 Guía de Cleaver", fr: "🦸 Guide de Cleaver", ja: "🦸 クリーバー ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/cleaver-en.html", de: "../../hero-wars-alliance/characters-guide/cleaver-de.html", es: "../../hero-wars-alliance/characters-guide/cleaver-es.html", fr: "../../hero-wars-alliance/characters-guide/cleaver-fr.html", pt: "../../hero-wars-alliance/characters-guide/cleaver-pt.html", ja: "../../hero-wars-alliance/characters-guide/cleaver-ja.html" },
  noStrip: true
},
   {
  titles: { en: "👗 Peech New Skin: Inner Demons", pt: "👗 Peech Nova Skin: Demônios Interiores", de: "👗 Peech Neue Skin: Innere Dämonen", es: "👗 Peech Nueva Skin: Demonios Interiores", fr: "👗 Peech Nouvelle Skin : Démons Intérieurs", ja: "👗 ピーチ 新スキン：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html", de: "", es: "", fr: "", ja: "" },
  noStrip: true
},

    ]
  },
  {
    weekday: "Thursday",
   date: "August, 13",
     image: "../../hero-wars-alliance/images/events/trade-routes/trade-routes-250px.webp",
    alt: "Trade Routes Events",
   titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
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
      titles: { en: "📿 Cleaver - Relic Event", de: "📿 Cleaver - Relikt-Event", es: "📿 Cleaver - Evento de Reliquia", fr: "📿 Cleaver - Événement des Reliques", pt: "📿 Cleaver - Evento de Relíquia", ja: "📿 クリーバー - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
  {
 titles: { en: "🦸 Cleaver Guide", pt: "🦸 Guia da Cleaver", de: "🦸 Cleaver-Leitfaden", es: "🦸 Guía de Cleaver", fr: "🦸 Guide de Cleaver", ja: "🦸 クリーバー ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/cleaver-en.html", de: "../../hero-wars-alliance/characters-guide/cleaver-de.html", es: "../../hero-wars-alliance/characters-guide/cleaver-es.html", fr: "../../hero-wars-alliance/characters-guide/cleaver-fr.html", pt: "../../hero-wars-alliance/characters-guide/cleaver-pt.html", ja: "../../hero-wars-alliance/characters-guide/cleaver-ja.html" },
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

    ]
  },
  {
    weekday: "Friday",
   date: "August, 14",
     image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
   extra: [
    {
  titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
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
      titles: { en: "📿 Cleaver - Relic Event", de: "📿 Cleaver - Relikt-Event", es: "📿 Cleaver - Evento de Reliquia", fr: "📿 Cleaver - Événement des Reliques", pt: "📿 Cleaver - Evento de Relíquia", ja: "📿 クリーバー - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
  {
 titles: { en: "🦸 Cleaver Guide", pt: "🦸 Guia da Cleaver", de: "🦸 Cleaver-Leitfaden", es: "🦸 Guía de Cleaver", fr: "🦸 Guide de Cleaver", ja: "🦸 クリーバー ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/cleaver-en.html", de: "../../hero-wars-alliance/characters-guide/cleaver-de.html", es: "../../hero-wars-alliance/characters-guide/cleaver-es.html", fr: "../../hero-wars-alliance/characters-guide/cleaver-fr.html", pt: "../../hero-wars-alliance/characters-guide/cleaver-pt.html", ja: "../../hero-wars-alliance/characters-guide/cleaver-ja.html" },
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
  titles: { en: "👗 Xe'Sha New Skin+: Inner Demons", pt: "👗 Xe'Sha Nova Skin+: Demônios Interiores", de: "👗 Xe'Sha Neue Skin+: Innere Dämonen", es: "👗 Xe'Sha Nueva Skin+: Demonios Interiores", fr: "👗 Xe'Sha Nouvelle Skin+ : Démons Intérieurs", ja: "👗 ゼーシャ 新スキン+：インナーデーモン" },
   labelOnly: true
},

    ]
  },
  {
    weekday: "Saturday",
    date: "August, 15",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
   extra: [
    {
  titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
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
      titles: { en: "📿 Cleaver - Relic Event", de: "📿 Cleaver - Relikt-Event", es: "📿 Cleaver - Evento de Reliquia", fr: "📿 Cleaver - Événement des Reliques", pt: "📿 Cleaver - Evento de Relíquia", ja: "📿 クリーバー - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
  {
 titles: { en: "🦸 Cleaver Guide", pt: "🦸 Guia da Cleaver", de: "🦸 Cleaver-Leitfaden", es: "🦸 Guía de Cleaver", fr: "🦸 Guide de Cleaver", ja: "🦸 クリーバー ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/cleaver-en.html", de: "../../hero-wars-alliance/characters-guide/cleaver-de.html", es: "../../hero-wars-alliance/characters-guide/cleaver-es.html", fr: "../../hero-wars-alliance/characters-guide/cleaver-fr.html", pt: "../../hero-wars-alliance/characters-guide/cleaver-pt.html", ja: "../../hero-wars-alliance/characters-guide/cleaver-ja.html" },
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
  titles: { en: "👗 Xe'Sha New Skin+: Inner Demons", pt: "👗 Xe'Sha Nova Skin+: Demônios Interiores", de: "👗 Xe'Sha Neue Skin+: Innere Dämonen", es: "👗 Xe'Sha Nueva Skin+: Demonios Interiores", fr: "👗 Xe'Sha Nouvelle Skin+ : Démons Intérieurs", ja: "👗 ゼーシャ 新スキン+：インナーデーモン" },
   labelOnly: true
},

    ]
  },
{
  weekday: "Sunday",
  date: "August, 16",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
   extra: [
    {
  titles: { en: "🌌 Trade Routes Events", de: "🌌 Handelsrouten-Events", es: "🌌 Eventos de Rutas Comerciales", fr: "🌌 Événements Routes Commerciales", pt: "🌌 Eventos Rotas Comerciais", ja: "🌌 交易路イベント" },
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
      titles: { en: "📿 Cleaver - Relic Event", de: "📿 Cleaver - Relikt-Event", es: "📿 Cleaver - Evento de Reliquia", fr: "📿 Cleaver - Événement des Reliques", pt: "📿 Cleaver - Evento de Relíquia", ja: "📿 クリーバー - レリックイベント", },
    links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
  },
  {
 titles: { en: "🦸 Cleaver Guide", pt: "🦸 Guia da Cleaver", de: "🦸 Cleaver-Leitfaden", es: "🦸 Guía de Cleaver", fr: "🦸 Guide de Cleaver", ja: "🦸 クリーバー ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/cleaver-en.html", de: "../../hero-wars-alliance/characters-guide/cleaver-de.html", es: "../../hero-wars-alliance/characters-guide/cleaver-es.html", fr: "../../hero-wars-alliance/characters-guide/cleaver-fr.html", pt: "../../hero-wars-alliance/characters-guide/cleaver-pt.html", ja: "../../hero-wars-alliance/characters-guide/cleaver-ja.html" },
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
  titles: { en: "👗 Xe'Sha New Skin+: Inner Demons", pt: "👗 Xe'Sha Nova Skin+: Demônios Interiores", de: "👗 Xe'Sha Neue Skin+: Innere Dämonen", es: "👗 Xe'Sha Nueva Skin+: Demonios Interiores", fr: "👗 Xe'Sha Nouvelle Skin+ : Démons Intérieurs", ja: "👗 ゼーシャ 新スキン+：インナーデーモン" },
   labelOnly: true
},

    ]
  },

  {
    weekday: "Monday",
     date: "August, 17",
     image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
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
  titles: { en: "👗 Kendle New Skin+: Inner Demons", pt: "👗 Kendle Nova Skin+: Demônios Interiores", de: "👗 Kendle Neue Skin+: Innere Dämonen", es: "👗 Kendle Nueva Skin+: Demonios Interiores", fr: "👗 Kendle Nouvelle Skin+: Démons Intérieurs", ja: "👗 ケンドル 新スキン+：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true
},
{
  titles: { en: "🥋 Cleaver New Skin: Inner Demons", pt: "🥋 Cleaver Nova Skin: Demônios Interiores", de: "🥋 Cleaver Neue Skin: Innere Dämonen", es: "🥋 Cleaver Nueva Skin: Demonios Interiores", fr: "🥋 Cleaver Nouvelle Skin : Démons Intérieurs", ja: "🥋 クリーバー 新スキン：インナーデーモン" },
   labelOnly: true
},

          ]
  },
  {
    weekday: "Tuesday",
    date: "August, 18",
   image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Events",
     titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
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
 titles: { en: "👗 Kendle New Skin+: Inner Demons", pt: "👗 Kendle Nova Skin+: Demônios Interiores", de: "👗 Kendle Neue Skin+: Innere Dämonen", es: "👗 Kendle Nueva Skin+: Demonios Interiores", fr: "👗 Kendle Nouvelle Skin+: Démons Intérieurs", ja: "👗 ケンドル 新スキン+：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true
},
{
  titles: { en: "🥋 Cleaver New Skin: Inner Demons", pt: "🥋 Cleaver Nova Skin: Demônios Interiores", de: "🥋 Cleaver Neue Skin: Innere Dämonen", es: "🥋 Cleaver Nueva Skin: Demonios Interiores", fr: "🥋 Cleaver Nouvelle Skin : Démons Intérieurs", ja: "🥋 クリーバー 新スキン：インナーデーモン" },
   labelOnly: true
},


  ]
  },

  {
    weekday: "Wednesday",
    date: "August, 19",
    image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Events",
     titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
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
  titles: { en: "👗 Kendle New Skin+: Inner Demons", pt: "👗 Kendle Nova Skin+: Demônios Interiores", de: "👗 Kendle Neue Skin+: Innere Dämonen", es: "👗 Kendle Nueva Skin+: Demonios Interiores", fr: "👗 Kendle Nouvelle Skin+: Démons Intérieurs", ja: "👗 ケンドル 新スキン+：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true
},
{
  titles: { en: "🥋 Cleaver New Skin: Inner Demons", pt: "🥋 Cleaver Nova Skin: Demônios Interiores", de: "🥋 Cleaver Neue Skin: Innere Dämonen", es: "🥋 Cleaver Nueva Skin: Demonios Interiores", fr: "🥋 Cleaver Nouvelle Skin : Démons Intérieurs", ja: "🥋 クリーバー 新スキン：インナーデーモン" },
   labelOnly: true
},


  ]
  },
  {
    weekday: "Thursday",
    date: "August, 20",
    image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Events",
     titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
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
 titles: { en: "👗 Kendle New Skin+: Inner Demons", pt: "👗 Kendle Nova Skin+: Demônios Interiores", de: "👗 Kendle Neue Skin+: Innere Dämonen", es: "👗 Kendle Nueva Skin+: Demonios Interiores", fr: "👗 Kendle Nouvelle Skin+: Démons Intérieurs", ja: "👗 ケンドル 新スキン+：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true
},
{
  titles: { en: "🥋 Cleaver New Skin: Inner Demons", pt: "🥋 Cleaver Nova Skin: Demônios Interiores", de: "🥋 Cleaver Neue Skin: Innere Dämonen", es: "🥋 Cleaver Nueva Skin: Demonios Interiores", fr: "🥋 Cleaver Nouvelle Skin : Démons Intérieurs", ja: "🥋 クリーバー 新スキン：インナーデーモン" },
   labelOnly: true
},


  ]
  },
  {
    weekday: "Fryday",
    date: "August, 21",
       image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
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
  titles: { en: "👗 Kendle New Skin+: Inner Demons", pt: "👗 Kendle Nova Skin+: Demônios Interiores", de: "👗 Kendle Neue Skin+: Innere Dämonen", es: "👗 Kendle Nueva Skin+: Demonios Interiores", fr: "👗 Kendle Nouvelle Skin+: Démons Intérieurs", ja: "👗 ケンドル 新スキン+：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true
},
{
  titles: { en: "🥋 Cleaver New Skin: Inner Demons", pt: "🥋 Cleaver Nova Skin: Demônios Interiores", de: "🥋 Cleaver Neue Skin: Innere Dämonen", es: "🥋 Cleaver Nueva Skin: Demonios Interiores", fr: "🥋 Cleaver Nouvelle Skin : Démons Intérieurs", ja: "🥋 クリーバー 新スキン：インナーデーモン" },
   labelOnly: true
},


          ]
  },

  {
    weekday: "Saturday",
    date: "August, 22",
       image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
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
  titles: { en: "👗 Kendle New Skin+: Inner Demons", pt: "👗 Kendle Nova Skin+: Demônios Interiores", de: "👗 Kendle Neue Skin+: Innere Dämonen", es: "👗 Kendle Nueva Skin+: Demonios Interiores", fr: "👗 Kendle Nouvelle Skin+: Démons Intérieurs", ja: "👗 ケンドル 新スキン+：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true
},
{
  titles: { en: "🥋 Cleaver New Skin: Inner Demons", pt: "🥋 Cleaver Nova Skin: Demônios Interiores", de: "🥋 Cleaver Neue Skin: Innere Dämonen", es: "🥋 Cleaver Nueva Skin: Demonios Interiores", fr: "🥋 Cleaver Nouvelle Skin : Démons Intérieurs", ja: "🥋 クリーバー 新スキン：インナーデーモン" },
   labelOnly: true
},


]
  },

  {
    weekday: "Sunday",
    date: "August, 23",
      image: "../../hero-wars-alliance/images/events/ascendant-glory/ascendant-glory-250px.webp",
    alt: "🪽Ascendant Glory Event Group",
  titles: { en: "🪽Ascendant Glory Events", de: "🪽Aufsteigender Ruhm-Events", es: "🪽Eventos de Gloria Ascendente", fr: "🪽Événements Gloire Ascendante", pt: "🪽Eventos Glória Ascendente", ja: "🪽栄光への飛翔イベント" },   links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" },
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
 titles: { en: "👗 Kendle New Skin+: Inner Demons", pt: "👗 Kendle Nova Skin+: Demônios Interiores", de: "👗 Kendle Neue Skin+: Innere Dämonen", es: "👗 Kendle Nueva Skin+: Demonios Interiores", fr: "👗 Kendle Nouvelle Skin+: Démons Intérieurs", ja: "👗 ケンドル 新スキン+：インナーデーモン" },
  links: { en: "../../hero-wars-alliance/characters-guide/kendle-en.html", pt: "../../hero-wars-alliance/characters-guide/kendle-pt.html", de: "../../hero-wars-alliance/characters-guide/kendle-de.html", es: "../../hero-wars-alliance/characters-guide/kendle-es.html", fr: "../../hero-wars-alliance/characters-guide/kendle-fr.html", ja: "../../hero-wars-alliance/characters-guide/kendle-ja.html" },
  noStrip: true
},
{
  titles: { en: "🥋 Cleaver New Skin: Inner Demons", pt: "🥋 Cleaver Nova Skin: Demônios Interiores", de: "🥋 Cleaver Neue Skin: Innere Dämonen", es: "🥋 Cleaver Nueva Skin: Demonios Interiores", fr: "🥋 Cleaver Nouvelle Skin : Démons Intérieurs", ja: "🥋 クリーバー 新スキン：インナーデーモン" },
   labelOnly: true
},


]
  },


  {
    weekday: "Monday",
    date: "August, 24",
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
        titles: { en: "📿Peech - Relic Event", de: "📿Peech - Relikt-Ereignis", es: "📿Peech - Evento de Reliquia", fr: "📿Peech - Événement des Reliques", pt: "📿Peech - Evento de Relíquia", ja: "📿ピーチ - レリックイベント" },
       links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
       },

      {
 titles: { en: "🦸‍♀️ Peech Guide", pt: "🦸‍♀️ Guia da Peech", de: "🦸‍♀️ Peech-Leitfaden", es: "🦸‍♀️ Guía de Peech", fr: "🦸‍♀️ Guide de Peech", ja: "🦸‍♀️ ピーチ ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html", ja: "" },
  noStrip: true
},

    ]
  },

  {
    weekday: "Tuesday",
    date: "August, 25",
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
        titles: { en: "📿Peech - Relic Event", de: "📿Peech - Relikt-Ereignis", es: "📿Peech - Evento de Reliquia", fr: "📿Peech - Événement des Reliques", pt: "📿Peech - Evento de Relíquia", ja: "📿ピーチ - レリックイベント" },
       links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
       },

      {
 titles: { en: "🦸‍♀️ Peech Guide", pt: "🦸‍♀️ Guia da Peech", de: "🦸‍♀️ Peech-Leitfaden", es: "🦸‍♀️ Guía de Peech", fr: "🦸‍♀️ Guide de Peech", ja: "🦸‍♀️ ピーチ ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html", ja: "" },
  noStrip: true
},

    ]
  },

  {
    weekday: "Wednesday",
     date: "August, 26",
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
        titles: { en: "📿Peech - Relic Event", de: "📿Peech - Relikt-Ereignis", es: "📿Peech - Evento de Reliquia", fr: "📿Peech - Événement des Reliques", pt: "📿Peech - Evento de Relíquia", ja: "📿ピーチ - レリックイベント" },
       links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
       },

      {
 titles: { en: "🦸‍♀️ Peech Guide", pt: "🦸‍♀️ Guia da Peech", de: "🦸‍♀️ Peech-Leitfaden", es: "🦸‍♀️ Guía de Peech", fr: "🦸‍♀️ Guide de Peech", ja: "🦸‍♀️ ピーチ ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html", ja: "" },
  noStrip: true
},

    ]
  },
  {
    weekday: "Thursday",
    date: "August, 27",
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
        titles: { en: "📿Peech - Relic Event", de: "📿Peech - Relikt-Ereignis", es: "📿Peech - Evento de Reliquia", fr: "📿Peech - Événement des Reliques", pt: "📿Peech - Evento de Relíquia", ja: "📿ピーチ - レリックイベント" },
       links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
       },

      {
 titles: { en: "🦸‍♀️ Peech Guide", pt: "🦸‍♀️ Guia da Peech", de: "🦸‍♀️ Peech-Leitfaden", es: "🦸‍♀️ Guía de Peech", fr: "🦸‍♀️ Guide de Peech", ja: "🦸‍♀️ ピーチ ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html", ja: "" },
  noStrip: true
},

    ]
  },
  {
    weekday: "Friday",
     date: "August, 28",
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
        titles: { en: "📿Peech - Relic Event", de: "📿Peech - Relikt-Ereignis", es: "📿Peech - Evento de Reliquia", fr: "📿Peech - Événement des Reliques", pt: "📿Peech - Evento de Relíquia", ja: "📿ピーチ - レリックイベント" },
       links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
       },

      {
 titles: { en: "🦸‍♀️ Peech Guide", pt: "🦸‍♀️ Guia da Peech", de: "🦸‍♀️ Peech-Leitfaden", es: "🦸‍♀️ Guía de Peech", fr: "🦸‍♀️ Guide de Peech", ja: "🦸‍♀️ ピーチ ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html", ja: "" },
  noStrip: true
},

    ]
  },
  {
    weekday: "Saturday",
     date: "August, 29",
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
        titles: { en: "📿Peech - Relic Event", de: "📿Peech - Relikt-Ereignis", es: "📿Peech - Evento de Reliquia", fr: "📿Peech - Événement des Reliques", pt: "📿Peech - Evento de Relíquia", ja: "📿ピーチ - レリックイベント" },
       links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
       },

      {
 titles: { en: "🦸‍♀️ Peech Guide", pt: "🦸‍♀️ Guia da Peech", de: "🦸‍♀️ Peech-Leitfaden", es: "🦸‍♀️ Guía de Peech", fr: "🦸‍♀️ Guide de Peech", ja: "🦸‍♀️ ピーチ ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html", ja: "" },
  noStrip: true
},

    ]
  },
{
  weekday: "Sunday",
   date: "August, 30",
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
        titles: { en: "📿Peech - Relic Event", de: "📿Peech - Relikt-Ereignis", es: "📿Peech - Evento de Reliquia", fr: "📿Peech - Événement des Reliques", pt: "📿Peech - Evento de Relíquia", ja: "📿ピーチ - レリックイベント" },
       links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html", },
       },

      {
 titles: { en: "🦸‍♀️ Peech Guide", pt: "🦸‍♀️ Guia da Peech", de: "🦸‍♀️ Peech-Leitfaden", es: "🦸‍♀️ Guía de Peech", fr: "🦸‍♀️ Guide de Peech", ja: "🦸‍♀️ ピーチ ガイド" }, 
 links: { en: "../../hero-wars-alliance/characters-guide/peech-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/characters-guide/peech-pt.html", ja: "" },
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
