/*Abaixo para simular um espaço vazio - npm run update-calendar-hwa
 {
 titles: { en: "&nbsp;", pt: "&nbsp;", de: "&nbsp;", es: "&nbsp;", fr: "&nbsp;", ja: "&nbsp;" },
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
    weekday: "Sunday",
    date: "",
    image: "../../imagens/image-shared/satori-300px.webp",
    alt: "Satori Guide",
   titles: { en: "🦊Satori Relic Guide", pt: "🦊Guia do Satori com Relíquias", de: "🦊Satori-Relikt-Leitfaden", es: "🦊Guía de Satori con Reliquias", fr: "🦊Guide de Satori avec Reliques", ja: "🦊サトリのレリックガイド" },  links: { en: "../../hero-wars-alliance/characters-guide/satori-en.html", de: "../../hero-wars-alliance/characters-guide/satori-de.html", es: "../../hero-wars-alliance/characters-guide/satori-es.html", fr: "../../hero-wars-alliance/characters-guide/satori-fr.html", pt: "../../hero-wars-alliance/characters-guide/satori-pt.html", ja: "../../hero-wars-alliance/characters-guide/satori-ja.html" },       
  noStrip: true,
  extra: [{
titles: { en: "📘Cascade Relic Guide", de: "📘Kaskade Leitfaden und Relikte", es: "📘Guía de Cascade con Reliquias", fr: "📘Guide Cascadee com Reliques", pt: "📘Guia da Dilúvio com Relíquias", ja: "📘カスケード - ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/cascade-en.html", de: "../../hero-wars-alliance/characters-guide/cascade-de.html", es: "../../hero-wars-alliance/characters-guide/cascade-es.html", fr: "../../hero-wars-alliance/characters-guide/cascade-fr.html", pt: "../../hero-wars-alliance/characters-guide/cascade-pt.html", ja: "../../hero-wars-alliance/characters-guide/cascade-ja.html" },       
noStrip: true
}, ]
  },
  
{
  weekday: "Monday",
  date: "June, 08",
    image: "../../img-HWM/events-img/outland-splendor-img/outland-splendor-200px.webp",
    alt: "Abyss Splendor",
    titles: { en: "🌌 Abyss Splendor Event", de: "🌌 Glanz des Außenlands Leitfaden", es: "🌌 Esplendor del Territorio Guía", fr: "🌌 Splendeur de l’Outreterre Guide", pt: "🌌 Esplendor da Fronteira Guia", ja: "🌌 アウトランド・スプレンダー ガイド" },
    links: { en: "/hero-wars-alliance/event-hwa/abyss-splendor-en.html", pt: "/hero-wars-alliance/event-hwa/abyss-splendor-pt.html", de: "/hero-wars-alliance/event-hwa/abyss-splendor-de.html", es: "/hero-wars-alliance/event-hwa/abyss-splendor-es.html", fr: "/hero-wars-alliance/event-hwa/abyss-splendor-fr.html", ja: "/hero-wars-alliance/event-hwa/abyss-splendor-ja.html" },
    extra: [     
{ titles: { en: "👗Cascade New Skin: Dawn", pt: "👗Dilúvio Nova Skin: Aurora", de: "👗Kaskade Neue Skin: Morgenröte", es: "👗Cascade Nueva Skin: Aurora", fr: "👗Cascade Nouvelle Skin : Aurore", ja: "👗カスケード新スキン：ドーン" },
 labelOnly: true },      
{ titles: { en: "Starting June 8, Skin Stones Move from Outland to Realm Rally Bosses!", pt: "A Partir de 8 de Junho, as Pedras de Skin Saem de Outland e Passam para os Chefes de Rally do Reino!", de: "Ab dem 8. Juni wechseln Skinsteine von Outland zu den Realm-Rallye-Bossen!", es: "¡A Partir del 8 de Junio, las Piedras de Skin Pasan de Outland a los Jefes de Rally del Reino!", fr: "À Partir du 8 Juin, les Pierres de Skin Passent d’Outland aux Boss de Rallye du Royaume !", ja: "6月8日より、スキンストーンの入手先がアウトランドからレルムのラリーボスへ変更！" },
 labelOnly: true},
{ titles: { en: "Outland Chests Remain Available in the Hall of Fortune!", pt: "Os Baús de Outland Continuam Disponíveis no Hall da Fortuna!", de: "Outland-Truhen bleiben in der Halle des Glücks verfügbar!", es: "¡Los Cofres de Outland Siguen Disponibles en el Salón de la Fortuna!", fr: "Les Coffres d’Outland Restent Disponibles dans le Hall de la Fortune !", ja: "アウトランドチェストは幸運の館で引き続き利用可能！" },
 labelOnly: true },
    ]
  },
  {
    weekday: "Tuesday",
    date: "June, 09",
     image: "../../img-HWM/events-img/outland-splendor-img/outland-splendor-200px.webp",
    alt: "Abyss Splendor",
    titles: { en: "🌌 Abyss Splendor Event", de: "🌌 Glanz des Außenlands Leitfaden", es: "🌌 Esplendor del Territorio Guía", fr: "🌌 Splendeur de l’Outreterre Guide", pt: "🌌 Esplendor da Fronteira Guia", ja: "🌌 アウトランド・スプレンダー ガイド" },
    links: { en: "/hero-wars-alliance/event-hwa/abyss-splendor-en.html", pt: "/hero-wars-alliance/event-hwa/abyss-splendor-pt.html", de: "/hero-wars-alliance/event-hwa/abyss-splendor-de.html", es: "/hero-wars-alliance/event-hwa/abyss-splendor-es.html", fr: "/hero-wars-alliance/event-hwa/abyss-splendor-fr.html", ja: "/hero-wars-alliance/event-hwa/abyss-splendor-ja.html" },
    extra: [     
        { titles: { en: "Starting June 8, Skin Stones Move from Outland to Realm Rally Bosses!", pt: "A Partir de 8 de Junho, as Pedras de Skin Saem de Outland e Passam para os Chefes de Rally do Reino!", de: "Ab dem 8. Juni wechseln Skinsteine von Outland zu den Realm-Rallye-Bossen!", es: "¡A Partir del 8 de Junio, las Piedras de Skin Pasan de Outland a los Jefes de Rally del Reino!", fr: "À Partir du 8 Juin, les Pierres de Skin Passent d’Outland aux Boss de Rallye du Royaume !", ja: "6月8日より、スキンストーンの入手先がアウトランドからレルムのラリーボスへ変更！" },
 labelOnly: true
},
      
{ titles: { en: "Outland Chests Remain Available in the Hall of Fortune!", pt: "Os Baús de Outland Continuam Disponíveis no Hall da Fortuna!", de: "Outland-Truhen bleiben in der Halle des Glücks verfügbar!", es: "¡Los Cofres de Outland Siguen Disponibles en el Salón de la Fortuna!", fr: "Les Coffres d’Outland Restent Disponibles dans le Hall de la Fortune !", ja: "アウトランドチェストは幸運の館で引き続き利用可能！" },
 labelOnly: true },
    ]
  },
{
  weekday: "Wednesday",
  date: "June, 10",
     image: "../../img-HWM/events-img/outland-splendor-img/outland-splendor-200px.webp",
    alt: "Abyss Splendor",
    titles: { en: "🌌 Abyss Splendor Event", de: "🌌 Glanz des Außenlands Leitfaden", es: "🌌 Esplendor del Territorio Guía", fr: "🌌 Splendeur de l’Outreterre Guide", pt: "🌌 Esplendor da Fronteira Guia", ja: "🌌 アウトランド・スプレンダー ガイド" },
    links: { en: "/hero-wars-alliance/event-hwa/abyss-splendor-en.html", pt: "/hero-wars-alliance/event-hwa/abyss-splendor-pt.html", de: "/hero-wars-alliance/event-hwa/abyss-splendor-de.html", es: "/hero-wars-alliance/event-hwa/abyss-splendor-es.html", fr: "/hero-wars-alliance/event-hwa/abyss-splendor-fr.html", ja: "/hero-wars-alliance/event-hwa/abyss-splendor-ja.html" },
    extra: [     
       { titles: { en: "Starting June 8, Skin Stones Move from Outland to Realm Rally Bosses!", pt: "A Partir de 8 de Junho, as Pedras de Skin Saem de Outland e Passam para os Chefes de Rally do Reino!", de: "Ab dem 8. Juni wechseln Skinsteine von Outland zu den Realm-Rallye-Bossen!", es: "¡A Partir del 8 de Junio, las Piedras de Skin Pasan de Outland a los Jefes de Rally del Reino!", fr: "À Partir du 8 Juin, les Pierres de Skin Passent d’Outland aux Boss de Rallye du Royaume !", ja: "6月8日より、スキンストーンの入手先がアウトランドからレルムのラリーボスへ変更！" },
 labelOnly: true
},
{ titles: { en: "Outland Chests Remain Available in the Hall of Fortune!", pt: "Os Baús de Outland Continuam Disponíveis no Hall da Fortuna!", de: "Outland-Truhen bleiben in der Halle des Glücks verfügbar!", es: "¡Los Cofres de Outland Siguen Disponibles en el Salón de la Fortuna!", fr: "Les Coffres d’Outland Restent Disponibles dans le Hall de la Fortune !", ja: "アウトランドチェストは幸運の館で引き続き利用可能！" },
 labelOnly: true },
      
    ]
  },
  {
    weekday: "Thursday",
    date: "June, 11",
    image: "../../imagens/image-shared/orm-300px.webp",
     alt: "Orm Guide",
   titles: { 
 en: "💧Orm's Guide", de: "💧Orm Leitfaden", es: "💧Guía de Orm", fr: "💧Guide de Orm", pt: "💧Guia de Orm", ja: "💧オーム - ガイド"
},    links: { en: "../../hero-wars-alliance/titans-guide/orm-en.html", de: "../../hero-wars-alliance/titans-guide/orm-de.html", es: "../../hero-wars-alliance/titans-guide/orm-es.html", fr: "../../hero-wars-alliance/titans-guide/orm-fr.html", pt: "../../hero-wars-alliance/titans-guide/orm-pt.html", ja: "../../hero-wars-alliance/titans-guide/orm-ja.html" },
  noStrip: true,
  extra: [       
      {
 titles: { en: "🌊Ancient Awakening - Orm Event Guide", pt: "🌊Despertar Ancestral - Guia do Evento de Orm", de: "🌊Antikes Erwachen - Orm-Event-Leitfaden", es: "🌊Despertar Ancestral - Guía del Evento de Orm", fr: "🌊Éveil Ancien - Guide de l'Événement d'Orm", ja: "🌊古代の覚醒 - オームイベントガイド" },  links: { en: "../../hero-wars-alliance/titans-events-tips/orm-ancient-awakening-event-en.html", de: "", es: "", fr: "", pt: "", ja: "" },       
  noStrip: true
},  
    ]
  },
  {
    weekday: "Friday",
    date: "June, 12",
     image: "../../imagens/image-shared/orm-300px.webp",
     alt: "Orm Guide",
   titles: { 
 en: "💧Orm's Guide", de: "💧Orm Leitfaden", es: "💧Guía de Orm", fr: "💧Guide de Orm", pt: "💧Guia de Orm", ja: "💧オーム - ガイド"
},    links: { en: "../../hero-wars-alliance/titans-guide/orm-en.html", de: "../../hero-wars-alliance/titans-guide/orm-de.html", es: "../../hero-wars-alliance/titans-guide/orm-es.html", fr: "../../hero-wars-alliance/titans-guide/orm-fr.html", pt: "../../hero-wars-alliance/titans-guide/orm-pt.html", ja: "../../hero-wars-alliance/titans-guide/orm-ja.html" },
  noStrip: true,
  extra: [       
      {
 titles: { en: "🌊Ancient Awakening - Orm Event Guide", pt: "🌊Despertar Ancestral - Guia do Evento de Orm", de: "🌊Antikes Erwachen - Orm-Event-Leitfaden", es: "🌊Despertar Ancestral - Guía del Evento de Orm", fr: "🌊Éveil Ancien - Guide de l'Événement d'Orm", ja: "🌊古代の覚醒 - オームイベントガイド" },  links: { en: "../../hero-wars-alliance/titans-events-tips/orm-ancient-awakening-event-en.html", de: "", es: "", fr: "", pt: "", ja: "" },       
  noStrip: true
},  
    ]
  },
  {
    weekday: "Saturday",
    date: "June, 13",
   image: "../../imagens/image-shared/orm-300px.webp",
     alt: "Orm Guide",
   titles: { 
 en: "💧Orm's Guide", de: "💧Orm Leitfaden", es: "💧Guía de Orm", fr: "💧Guide de Orm", pt: "💧Guia de Orm", ja: "💧オーム - ガイド"
},    links: { en: "../../hero-wars-alliance/titans-guide/orm-en.html", de: "../../hero-wars-alliance/titans-guide/orm-de.html", es: "../../hero-wars-alliance/titans-guide/orm-es.html", fr: "../../hero-wars-alliance/titans-guide/orm-fr.html", pt: "../../hero-wars-alliance/titans-guide/orm-pt.html", ja: "../../hero-wars-alliance/titans-guide/orm-ja.html" },
  noStrip: true,
  extra: [       
      {
 titles: { en: "🌊Ancient Awakening - Orm Event Guide", pt: "🌊Despertar Ancestral - Guia do Evento de Orm", de: "🌊Antikes Erwachen - Orm-Event-Leitfaden", es: "🌊Despertar Ancestral - Guía del Evento de Orm", fr: "🌊Éveil Ancien - Guide de l'Événement d'Orm", ja: "🌊古代の覚醒 - オームイベントガイド" },  links: { en: "../../hero-wars-alliance/titans-events-tips/orm-ancient-awakening-event-en.html", de: "", es: "", fr: "", pt: "", ja: "" },       
  noStrip: true
},  
    ]
  },
{
  weekday: "Sunday",
  date: "June, 14",
     image: "../../imagens/image-shared/orm-300px.webp",
     alt: "Orm Guide",
  titles: { 
 en: "💧Orm's Guide", de: "💧Orm Leitfaden", es: "💧Guía de Orm", fr: "💧Guide de Orm", pt: "💧Guia de Orm", ja: "💧オーム - ガイド"
},    links: { en: "../../hero-wars-alliance/titans-guide/orm-en.html", de: "../../hero-wars-alliance/titans-guide/orm-de.html", es: "../../hero-wars-alliance/titans-guide/orm-es.html", fr: "../../hero-wars-alliance/titans-guide/orm-fr.html", pt: "../../hero-wars-alliance/titans-guide/orm-pt.html", ja: "../../hero-wars-alliance/titans-guide/orm-ja.html" },
  noStrip: true,
  extra: [       
      {
 titles: { en: "🌊Ancient Awakening - Orm Event Guide", pt: "🌊Despertar Ancestral - Guia do Evento de Orm", de: "🌊Antikes Erwachen - Orm-Event-Leitfaden", es: "🌊Despertar Ancestral - Guía del Evento de Orm", fr: "🌊Éveil Ancien - Guide de l'Événement d'Orm", ja: "🌊古代の覚醒 - オームイベントガイド" },  links: { en: "../../hero-wars-alliance/titans-events-tips/orm-ancient-awakening-event-en.html", de: "", es: "", fr: "", pt: "", ja: "" },       
  noStrip: true
},  
    ]
  },

  {
    weekday: "Monday",
    date: "June, 15",
   image: "../../img-HWM/events-img/secrets-of-the-dungeon-img/secrets-of-the-dungeon-200px.webp",
    alt: "Tips for Secrets of the Dungeon Event",
    titles: { en: "🏰Tips for Secrets of the Dungeon Event", de: "🏰Tipps für das Geheimnisse des Dungeons Event", es: "🏰Consejos para el Evento Secretos de la Mazmorra", fr: "🏰Conseils pour l'Événement Secrets du Donjon", pt: "🏰Dicas para o Evento Segredos da Masmorra", ja: "🏰ダンジョンの秘密イベントのヒント" },
    links: { en: "../../Hero Wars/events/secrets-of-the-dungeon-en-hwa.html", de: "", es: "", fr: "", pt: "../../Hero Wars/events/secrets-of-the-dungeon-pt-hwa.html", ja: "" },
    extra: [    
      {
        titles: { en: "📿Satori - Relic Event", de: "📿Satori - Relikt-Ereignis", es: "📿Satori - Evento de Reliquia", fr: "📿Satori - Événement des Reliques", pt: "📿Satori - Evento de Relíquia", ja: "📿サトリ - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "🦊Satori Guide", pt: "🦊Guia do Satori", de: "🦊Satori Leitfaden", es: "🦊Guía de Satori", fr: "🦊Guide de Satori",  ja: "🦊サトリ - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/satori-en.html", de: "../../hero-wars-alliance/characters-guide/satori-de.html", es: "../../hero-wars-alliance/characters-guide/satori-es.html", fr: "../../hero-wars-alliance/characters-guide/satori-fr.html", pt: "../../hero-wars-alliance/characters-guide/satori-pt.html", ja: "../../hero-wars-alliance/characters-guide/satori-ja.html" },       
  noStrip: true
},  

    ]
  },

  {
    weekday: "Tuesday",
    date: "June, 16",
    image: "../../img-HWM/events-img/secrets-of-the-dungeon-img/secrets-of-the-dungeon-200px.webp",
    alt: "Tips for Secrets of the Dungeon Event",
    titles: { en: "🏰Tips for Secrets of the Dungeon Event", de: "🏰Tipps für das Geheimnisse des Dungeons Event", es: "🏰Consejos para el Evento Secretos de la Mazmorra", fr: "🏰Conseils pour l'Événement Secrets du Donjon", pt: "🏰Dicas para o Evento Segredos da Masmorra", ja: "🏰ダンジョンの秘密イベントのヒント" },
    links: { en: "../../Hero Wars/events/secrets-of-the-dungeon-en-hwa.html", de: "", es: "", fr: "", pt: "../../Hero Wars/events/secrets-of-the-dungeon-pt-hwa.html", ja: "" },
    extra: [   
     {
        titles: { en: "📿Satori - Relic Event", de: "📿Satori - Relikt-Ereignis", es: "📿Satori - Evento de Reliquia", fr: "📿Satori - Événement des Reliques", pt: "📿Satori - Evento de Relíquia", ja: "📿サトリ - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "🦊Satori Guide", pt: "🦊Guia do Satori", de: "🦊Satori Leitfaden", es: "🦊Guía de Satori", fr: "🦊Guide de Satori",  ja: "🦊サトリ - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/satori-en.html", de: "../../hero-wars-alliance/characters-guide/satori-de.html", es: "../../hero-wars-alliance/characters-guide/satori-es.html", fr: "../../hero-wars-alliance/characters-guide/satori-fr.html", pt: "../../hero-wars-alliance/characters-guide/satori-pt.html", ja: "../../hero-wars-alliance/characters-guide/satori-ja.html" },       
  noStrip: true
},  
    ]
  },

  {
    weekday: "Wednesday",
    date: "June, 17",
     image: "../../img-HWM/events-img/secrets-of-the-dungeon-img/secrets-of-the-dungeon-200px.webp",
    alt: "Tips for Secrets of the Dungeon Event",
    titles: { en: "🏰Tips for Secrets of the Dungeon Event", de: "🏰Tipps für das Geheimnisse des Dungeons Event", es: "🏰Consejos para el Evento Secretos de la Mazmorra", fr: "🏰Conseils pour l'Événement Secrets du Donjon", pt: "🏰Dicas para o Evento Segredos da Masmorra", ja: "🏰ダンジョンの秘密イベントのヒント" },
    links: { en: "../../Hero Wars/events/secrets-of-the-dungeon-en-hwa.html", de: "", es: "", fr: "", pt: "../../Hero Wars/events/secrets-of-the-dungeon-pt-hwa.html", ja: "" },
    extra: [    
      {
        titles: { en: "📿Satori - Relic Event", de: "📿Satori - Relikt-Ereignis", es: "📿Satori - Evento de Reliquia", fr: "📿Satori - Événement des Reliques", pt: "📿Satori - Evento de Relíquia", ja: "📿サトリ - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "🦊Satori Guide", pt: "🦊Guia do Satori", de: "🦊Satori Leitfaden", es: "🦊Guía de Satori", fr: "🦊Guide de Satori",  ja: "🦊サトリ - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/satori-en.html", de: "../../hero-wars-alliance/characters-guide/satori-de.html", es: "../../hero-wars-alliance/characters-guide/satori-es.html", fr: "../../hero-wars-alliance/characters-guide/satori-fr.html", pt: "../../hero-wars-alliance/characters-guide/satori-pt.html", ja: "../../hero-wars-alliance/characters-guide/satori-ja.html" },       
  noStrip: true
},  

    ]
  },

  {
    weekday: "Thursday",
    date: "June, 18",
    image: "../../hero-wars-alliance/images/events/shards-of-the-past/shards-of-the-past-250px.webp",
    alt: "📿 Shards of the Past Event Guide",
    titles: { en: "📿 Shards of the Past Event Guide", de: "📿 Fragmente der Vergangenheit Event Guide", es: "📿 Fragmentos del Pasado Event Guide", fr: "📿 Fragments du Passé Event Guide", pt: "📿 Guia do Evento Fragmentos do Passado", ja: "📿 過去の破片イベントガイド" },
    links: { en: "../../hero-wars-alliance/event-hwa/shards-of-the-past-en.html", pt: "../../hero-wars-alliance/event-hwa/shards-of-the-past-pt.html", de: "../../hero-wars-alliance/event-hwa/shards-of-the-past-de.html", es: "../../hero-wars-alliance/event-hwa/shards-of-the-past-es.html", fr: "../../hero-wars-alliance/event-hwa/shards-of-the-past-fr.html", ja: "../../hero-wars-alliance/event-hwa/shards-of-the-past-ja.html" },
    extra: [     
             {
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  
{
        titles: { en: "📿Satori - Relic Event", de: "📿Satori - Relikt-Ereignis", es: "📿Satori - Evento de Reliquia", fr: "📿Satori - Événement des Reliques", pt: "📿Satori - Evento de Relíquia", ja: "📿サトリ - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "🦊Satori Guide", pt: "🦊Guia do Satori", de: "🦊Satori Leitfaden", es: "🦊Guía de Satori", fr: "🦊Guide de Satori",  ja: "🦊サトリ - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/satori-en.html", de: "../../hero-wars-alliance/characters-guide/satori-de.html", es: "../../hero-wars-alliance/characters-guide/satori-es.html", fr: "../../hero-wars-alliance/characters-guide/satori-fr.html", pt: "../../hero-wars-alliance/characters-guide/satori-pt.html", ja: "../../hero-wars-alliance/characters-guide/satori-ja.html" },       
  noStrip: true
},  
      
    ]
  },
  {
    weekday: "Friday",
    date: "June, 19",
    image: "../../hero-wars-alliance/images/events/shards-of-the-past/shards-of-the-past-250px.webp",
    alt: "📿 Shards of the Past Event Guide",
    titles: { en: "📿 Shards of the Past Event Guide", de: "📿 Fragmente der Vergangenheit Event Guide", es: "📿 Fragmentos del Pasado Event Guide", fr: "📿 Fragments du Passé Event Guide", pt: "📿 Guia do Evento Fragmentos do Passado", ja: "📿 過去の破片イベントガイド" },
    links: { en: "../../hero-wars-alliance/event-hwa/shards-of-the-past-en.html", pt: "../../hero-wars-alliance/event-hwa/shards-of-the-past-pt.html", de: "../../hero-wars-alliance/event-hwa/shards-of-the-past-de.html", es: "../../hero-wars-alliance/event-hwa/shards-of-the-past-es.html", fr: "../../hero-wars-alliance/event-hwa/shards-of-the-past-fr.html", ja: "../../hero-wars-alliance/event-hwa/shards-of-the-past-ja.html" },
    extra: [     
             {
  titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  
{
        titles: { en: "📿Satori - Relic Event", de: "📿Satori - Relikt-Ereignis", es: "📿Satori - Evento de Reliquia", fr: "📿Satori - Événement des Reliques", pt: "📿Satori - Evento de Relíquia", ja: "📿サトリ - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "🦊Satori Guide", pt: "🦊Guia do Satori", de: "🦊Satori Leitfaden", es: "🦊Guía de Satori", fr: "🦊Guide de Satori",  ja: "🦊サトリ - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/satori-en.html", de: "../../hero-wars-alliance/characters-guide/satori-de.html", es: "../../hero-wars-alliance/characters-guide/satori-es.html", fr: "../../hero-wars-alliance/characters-guide/satori-fr.html", pt: "../../hero-wars-alliance/characters-guide/satori-pt.html", ja: "../../hero-wars-alliance/characters-guide/satori-ja.html" },       
  noStrip: true
},  
      
    ]
  },
  {
    weekday: "Saturday",
    date: "June, 20",
    image: "../../hero-wars-alliance/images/events/shards-of-the-past/shards-of-the-past-250px.webp",
    alt: "📿 Shards of the Past Event Guide",
    titles: { en: "📿 Shards of the Past Event Guide", de: "📿 Fragmente der Vergangenheit Event Guide", es: "📿 Fragmentos del Pasado Event Guide", fr: "📿 Fragments du Passé Event Guide", pt: "📿 Guia do Evento Fragmentos do Passado", ja: "📿 過去の破片イベントガイド" },
    links: { en: "../../hero-wars-alliance/event-hwa/shards-of-the-past-en.html", pt: "../../hero-wars-alliance/event-hwa/shards-of-the-past-pt.html", de: "../../hero-wars-alliance/event-hwa/shards-of-the-past-de.html", es: "../../hero-wars-alliance/event-hwa/shards-of-the-past-es.html", fr: "../../hero-wars-alliance/event-hwa/shards-of-the-past-fr.html", ja: "../../hero-wars-alliance/event-hwa/shards-of-the-past-ja.html" },
    extra: [   
            {
 titles: { en: "☯️All Talisman Guides", de: "☯️Alle Talisman Guides", es: "☯️Guía de Todos los Talismanes", fr: "☯️Tous les Guides des Talismans", pt: "☯️Guia de Todos os Talismãs", ja: "☯️すべてのタリスマンガイド" },
  links: { en: "../../hero-wars-alliance/guide/talisman-guide-hwa-en.html", de: "../../hero-wars-alliance/guide/talisman-guide-hwa-de.html", es: "../../hero-wars-alliance/guide/talisman-guide-hwa-es.html", fr: "../../hero-wars-alliance/guide/talisman-guide-hwa-fr.html", pt: "../../hero-wars-alliance/guide/talisman-guide-hwa-pt.html", ja: "../../hero-wars-alliance/guide/talisman-guide-hwa-ja.html" },       
  noStrip: true
},  

{
        titles: { en: "📿Satori - Relic Event", de: "📿Satori - Relikt-Ereignis", es: "📿Satori - Evento de Reliquia", fr: "📿Satori - Événement des Reliques", pt: "📿Satori - Evento de Relíquia", ja: "📿サトリ - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "🦊Satori Guide", pt: "🦊Guia do Satori", de: "🦊Satori Leitfaden", es: "🦊Guía de Satori", fr: "🦊Guide de Satori",  ja: "🦊サトリ - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/satori-en.html", de: "../../hero-wars-alliance/characters-guide/satori-de.html", es: "../../hero-wars-alliance/characters-guide/satori-es.html", fr: "../../hero-wars-alliance/characters-guide/satori-fr.html", pt: "../../hero-wars-alliance/characters-guide/satori-pt.html", ja: "../../hero-wars-alliance/characters-guide/satori-ja.html" },       
  noStrip: true
},  
      
    ]
  },
  
{
  weekday: "Sunday",
  date: "June, 21",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
    extra: [
  { titles: { en: "👗Satori New Skin+: Dawn", pt: "👗Satori Nova Skin+: Aurora", de: "👗Satori Neue Skin+: Morgenröte", es: "👗Satori Nueva Skin+: Aurora", fr: "👗Cascade Nouvelle Skin+: Aurore", ja: "👗サトリ - 新しいスキン+: 夜明け" },
  links: { en: "../../", pt: "", de: "", es: "", fr: "",  ja: "" },       
  labelOnly: true},  
{
        titles: { en: "📿Satori - Relic Event", de: "📿Satori - Relikt-Ereignis", es: "📿Satori - Evento de Reliquia", fr: "📿Satori - Événement des Reliques", pt: "📿Satori - Evento de Relíquia", ja: "📿サトリ - レリックイベント" },
        links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
       },  
      
      {        
  titles: { en: "🦊Satori Guide", pt: "🦊Guia do Satori", de: "🦊Satori Leitfaden", es: "🦊Guía de Satori", fr: "🦊Guide de Satori",  ja: "🦊サトリ - ガイド" },
  links: { en: "../../hero-wars-alliance/characters-guide/satori-en.html", de: "../../hero-wars-alliance/characters-guide/satori-de.html", es: "../../hero-wars-alliance/characters-guide/satori-es.html", fr: "../../hero-wars-alliance/characters-guide/satori-fr.html", pt: "../../hero-wars-alliance/characters-guide/satori-pt.html", ja: "../../hero-wars-alliance/characters-guide/satori-ja.html" },       
  noStrip: true
},  
       
    ]
  },

{
  weekday: "Monday",
  date: "June, 22",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
    extra: [
 { titles: { en: "👗Satori New Skin+: Dawn", pt: "👗Satori Nova Skin+: Aurora", de: "👗Satori Neue Skin+: Morgenröte", es: "👗Satori Nueva Skin+: Aurora", fr: "👗Cascade Nouvelle Skin+: Aurore", ja: "👗サトリ - 新しいスキン+: 夜明け" },
  links: { en: "../../", pt: "", de: "", es: "", fr: "",  ja: "" },       
  labelOnly: true},     
     
             
    ]
  },
  {
    weekday: "Tuesday",
    date: "June, 23",
    image: "../../hero-wars-alliance/images/events/seers-game/seers-game-150px.webp",
    alt: "Seers' Game",
    titles: { en: "🔮 Seer's Game Event", de: "Event des Seherspiels", es: "🔮 Evento del Juego de la Vidente", fr: "🔮 Événement du Jeu de la Voyante", pt: "🔮 Evento do Jogo da Vidente", ja: "🔮 予言者のゲームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/seers-game-en.html", de: "../../hero-wars-alliance/event-hwa/seers-game-de.html", es: "../../hero-wars-alliance/event-hwa/seers-game-es.html", fr: "../../hero-wars-alliance/event-hwa/seers-game-fr.html", pt: "../../hero-wars-alliance/event-hwa/seers-game-pt.html", ja: "../../hero-wars-alliance/event-hwa/seers-game-ja.html" },
    extra: [
      { titles: { en: "👗Satori New Skin+: Dawn", pt: "👗Satori Nova Skin+: Aurora", de: "👗Satori Neue Skin+: Morgenröte", es: "👗Satori Nueva Skin+: Aurora", fr: "👗Cascade Nouvelle Skin+: Aurore", ja: "👗サトリ - 新しいスキン+: 夜明け" },
  links: { en: "../../", pt: "", de: "", es: "", fr: "",  ja: "" },       
  labelOnly: true},  
    ]
  },

{
  weekday: "Wednesday",
  date: "June, 24",
   image: "../../hero-wars-alliance/images/events/rune-storm/rune-storm-250px.webp",
    alt: "Rune Storm Event",
    titles: { en: "🌪️ Rune Storm Event", de: " 🌪️Runensturm-Event", es: " 🌪️Evento Tormenta de Runas", fr: "🌪️ Événement Tempête de Runes", pt: "🌪️ Evento Tempestade de Runas", ja: "🌪️ ルーンストームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/rune-storm-en.html", pt: "../../hero-wars-alliance/event-hwa/rune-storm-pt.html", de: "../../hero-wars-alliance/event-hwa/rune-storm-de.html", es: "../../hero-wars-alliance/event-hwa/rune-storm-es.html", fr: "../../hero-wars-alliance/event-hwa/rune-storm-fr.html", ja: "../../hero-wars-alliance/event-hwa/rune-storm-ja.html" },
    extra: [

          ]
  },
  {
    weekday: "Thursday",
    date: "June, 25",
    image: "../../hero-wars-alliance/images/events/rune-storm/rune-storm-250px.webp",
    alt: "Rune Storm Event",
    titles: { en: "🌪️ Rune Storm Event", de: " 🌪️Runensturm-Event", es: " 🌪️Evento Tormenta de Runas", fr: "🌪️ Événement Tempête de Runes", pt: "🌪️ Evento Tempestade de Runas", ja: "🌪️ ルーンストームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/rune-storm-en.html", pt: "../../hero-wars-alliance/event-hwa/rune-storm-pt.html", de: "../../hero-wars-alliance/event-hwa/rune-storm-de.html", es: "../../hero-wars-alliance/event-hwa/rune-storm-es.html", fr: "../../hero-wars-alliance/event-hwa/rune-storm-fr.html", ja: "../../hero-wars-alliance/event-hwa/rune-storm-ja.html" },
     extra: [
          ]
  },
  {
    weekday: "Friday",
    date: "June, 26",
    image: "../../hero-wars-alliance/images/events/rune-storm/rune-storm-250px.webp",
    alt: "Rune Storm Event",
    titles: { en: "🌪️ Rune Storm Event", de: " 🌪️Runensturm-Event", es: " 🌪️Evento Tormenta de Runas", fr: "🌪️ Événement Tempête de Runes", pt: "🌪️ Evento Tempestade de Runas", ja: "🌪️ ルーンストームイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/rune-storm-en.html", pt: "../../hero-wars-alliance/event-hwa/rune-storm-pt.html", de: "../../hero-wars-alliance/event-hwa/rune-storm-de.html", es: "../../hero-wars-alliance/event-hwa/rune-storm-es.html", fr: "../../hero-wars-alliance/event-hwa/rune-storm-fr.html", ja: "../../hero-wars-alliance/event-hwa/rune-storm-ja.html" },
     extra: [
          ]
  },

  {
    weekday: "Saturday",
    date: "June, 27",
    image: "../../hero-wars-alliance/images/events/skinplus-event/skinplus-event-500px.webp",
    alt: "Skin+ Event",
    titles: { en: "👗 Skin+ Event", de: "👗 Skin+ Event", es: "👗 Evento Skin+", fr: "👗 Événement Skin+", pt: "👗 Evento Skin+", ja: "👗 スキン+ イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/skinplus-event-en.html", de: "../../hero-wars-alliance/event-hwa/skinplus-event-de.html", es: "../../hero-wars-alliance/event-hwa/skinplus-event-es.html", fr: "../../hero-wars-alliance/event-hwa/skinplus-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/skinplus-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/skinplus-event-ja.html" },
    extra: [
      
{ titles: { en: "👗Miu New Skin: Dawn", pt: "👗Miu Nova Skin: Aurora", de: "👗Miu Neue Skin: Morgenröte", es: "👗Miu Nueva Skin: Aurora", fr: "👗Miu Nouvelle Skin : Aurore", ja: "👗美雨 ード新スキン：ドーン" },
 labelOnly: true },  
 { titles: { en: "👗Somna New Skin: Dawn", pt: "👗Somna Nova Skin: Aurora", de: "👗Somna Neue Skin: Morgenröte", es: "👗Somna Nueva Skin: Aurora", fr: "👗Somna Nouvelle Skin : Aurore", ja: "👗ソムナ ード新スキン：ドーン" },
 labelOnly: true },  
 
             
    ]
  },
  {
    weekday: "Sunday",
    date: "June, 28",
    image: "../../hero-wars-alliance/images/events/skinplus-event/skinplus-event-500px.webp",
    alt: "Skin+ Event",
    titles: { en: "👗 Skin+ Event", de: "👗 Skin+ Event", es: "👗 Evento Skin+", fr: "👗 Événement Skin+", pt: "👗 Evento Skin+", ja: "👗 スキン+ イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/skinplus-event-en.html", de: "../../hero-wars-alliance/event-hwa/skinplus-event-de.html", es: "../../hero-wars-alliance/event-hwa/skinplus-event-es.html", fr: "../../hero-wars-alliance/event-hwa/skinplus-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/skinplus-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/skinplus-event-ja.html" },
    extra: [
      { titles: { en: "👗Miu New Skin: Dawn", pt: "👗Miu Nova Skin: Aurora", de: "👗Miu Neue Skin: Morgenröte", es: "👗Miu Nueva Skin: Aurora", fr: "👗Miu Nouvelle Skin : Aurore", ja: "👗美雨 ード新スキン：ドーン" },
 labelOnly: true },  
 { titles: { en: "👗Somna New Skin: Dawn", pt: "👗Somna Nova Skin: Aurora", de: "👗Somna Neue Skin: Morgenröte", es: "👗Somna Nueva Skin: Aurora", fr: "👗Somna Nouvelle Skin : Aurore", ja: "👗ソムナ ード新スキン：ドーン" },
 labelOnly: true }, 
             
    ]
  },
  {
    weekday: "Monday",
    date: "June, 29",
    image: "../../hero-wars-alliance/images/events/skinplus-event/skinplus-event-500px.webp",
    alt: "Skin+ Event",
   titles: { en: "👗 Skin+ Event", de: "👗 Skin+ Event", es: "👗 Evento Skin+", fr: "👗 Événement Skin+", pt: "👗 Evento Skin+", ja: "👗 スキン+ イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/skinplus-event-en.html", de: "../../hero-wars-alliance/event-hwa/skinplus-event-de.html", es: "../../hero-wars-alliance/event-hwa/skinplus-event-es.html", fr: "../../hero-wars-alliance/event-hwa/skinplus-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/skinplus-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/skinplus-event-ja.html" },
    extra: [
       { titles: { en: "👗Miu New Skin: Dawn", pt: "👗Miu Nova Skin: Aurora", de: "👗Miu Neue Skin: Morgenröte", es: "👗Miu Nueva Skin: Aurora", fr: "👗Miu Nouvelle Skin : Aurore", ja: "👗美雨 ード新スキン：ドーン" },
 labelOnly: true },  
 { titles: { en: "👗Somna New Skin: Dawn", pt: "👗Somna Nova Skin: Aurora", de: "👗Somna Neue Skin: Morgenröte", es: "👗Somna Nueva Skin: Aurora", fr: "👗Somna Nouvelle Skin : Aurore", ja: "👗ソムナ ード新スキン：ドーン" },
 labelOnly: true }, 
{ titles: { en: "🏺Cascade - Relic Event", de: "🏺Kaskade - Relikt-Ereignis", es: "🏺Cascade - Evento de Reliquia", fr: "🏺Cascade - Événement des Reliques", pt: "🏺Dilúvio - Evento de Relíquia", ja: "🏺カスケード - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "../../hero-wars-alliance/event-hwa/relic-season-event-de.html", es: "../../hero-wars-alliance/event-hwa/relic-season-event-es.html", fr: "../../hero-wars-alliance/event-hwa/relic-season-event-fr.html", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "../../hero-wars-alliance/event-hwa/relic-season-event-ja.html" }
},  
{
titles: { en: "📘Cascade Guide", de: "📘Kaskade Leitfaden", es: "📘Guía de Cascade", fr: "📘Guide Cascadee", pt: "📘Guia da Dilúvio", ja: "📘カスケード - ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/cascade-en.html", de: "../../hero-wars-alliance/characters-guide/cascade-de.html", es: "../../hero-wars-alliance/characters-guide/cascade-es.html", fr: "../../hero-wars-alliance/characters-guide/cascade-fr.html", pt: "../../hero-wars-alliance/characters-guide/cascade-pt.html", ja: "../../hero-wars-alliance/characters-guide/cascade-ja.html" },       
noStrip: true
},  
             
    ]
  },

  {
    weekday: "Tuesday",
    date: "June, 30",
    image: "../../img-HWM/events-img/way-of-mystery-event/way-of-mystery-200px.webp",
    alt: "Way of Mystery Event",
    titles: { en: "🌀 Way of Mystery Event", pt: "🌀 Evento Caminho do Mistério", de: "🌀 Weg des Mysteriums Event", es: "🌀 Evento Camino del Misterio", fr: "🌀 Événement Voie du Mystère", ja: "🌀 ミステリーの道イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/way-of-mystery-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/way-of-mystery-event-pt.html", ja: "" },
    extra: [   
      { titles: { en: "🏺Cascade - Relic Event", de: "🏺Kaskade - Relikt-Ereignis", es: "🏺Cascade - Evento de Reliquia", fr: "🏺Cascade - Événement des Reliques", pt: "🏺Dilúvio - Evento de Relíquia", ja: "🏺カスケード - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
},  
{
  titles: {
    en: "📘Guide: Cascade Way of Mystery Shop Event - What to Buy?",
    pt: "📘Guia: Evento Loja Caminho do Mistério da Dilúvio - O Que Comprar?",
    de: "📘Leitfaden: Kaskade Weg des Mysteriums-Shop-Event – Was kaufen?",
    es: "📘Guía: Evento de la Tienda Camino del Misterio de Cascade - ¿Qué comprar?",
    fr: "📘Guide : Événement Boutique Voie du Mystère de Cascade - Que faut-il acheter ?",
    ja: "📘ガイド：カスケード 神秘の道ショップイベント - 何を買うべき？"
  },
   links: { en: "../../hero-wars-alliance/events-tips-hwa/cascade-way-of-mystery-shop-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},
{
titles: { en: "📘Cascade Guide", de: "📘Kaskade Leitfaden", es: "📘Guía de Cascade", fr: "📘Guide Cascadee", pt: "📘Guia da Dilúvio", ja: "📘カスケード - ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/cascade-en.html", de: "../../hero-wars-alliance/characters-guide/cascade-de.html", es: "../../hero-wars-alliance/characters-guide/cascade-es.html", fr: "../../hero-wars-alliance/characters-guide/cascade-fr.html", pt: "../../hero-wars-alliance/characters-guide/cascade-pt.html", ja: "../../hero-wars-alliance/characters-guide/cascade-ja.html" },       
noStrip: true
},  
    ]
  },

  {
    weekday: "Wednesday",
    date: "July, 01",
   image: "../../img-HWM/events-img/way-of-mystery-event/way-of-mystery-200px.webp",
    alt: "Way of Mystery Event",
    titles: { en: "🌀 Way of Mystery Event", pt: "🌀 Evento Caminho do Mistério", de: "🌀 Weg des Mysteriums Event", es: "🌀 Evento Camino del Misterio", fr: "🌀 Événement Voie du Mystère", ja: "🌀 ミステリーの道イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/way-of-mystery-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/way-of-mystery-event-pt.html", ja: "" },
    extra: [   
      { titles: { en: "🏺Cascade - Relic Event", de: "🏺Kaskade - Relikt-Ereignis", es: "🏺Cascade - Evento de Reliquia", fr: "🏺Cascade - Événement des Reliques", pt: "🏺Dilúvio - Evento de Relíquia", ja: "🏺カスケード - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
},  
{
  titles: {
    en: "📘Guide: Cascade Way of Mystery Shop Event - What to Buy?",
    pt: "📘Guia: Evento Loja Caminho do Mistério da Dilúvio - O Que Comprar?",
    de: "📘Leitfaden: Kaskade Weg des Mysteriums-Shop-Event – Was kaufen?",
    es: "📘Guía: Evento de la Tienda Camino del Misterio de Cascade - ¿Qué comprar?",
    fr: "📘Guide : Événement Boutique Voie du Mystère de Cascade - Que faut-il acheter ?",
    ja: "📘ガイド：カスケード 神秘の道ショップイベント - 何を買うべき？"
  },
   links: { en: "../../hero-wars-alliance/events-tips-hwa/cascade-way-of-mystery-shop-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},
{
titles: { en: "📘Cascade Guide", de: "📘Kaskade Leitfaden", es: "📘Guía de Cascade", fr: "📘Guide Cascadee", pt: "📘Guia da Dilúvio", ja: "📘カスケード - ガイド" },
links: { en: "../../hero-wars-alliance/characters-guide/cascade-en.html", de: "../../hero-wars-alliance/characters-guide/cascade-de.html", es: "../../hero-wars-alliance/characters-guide/cascade-es.html", fr: "../../hero-wars-alliance/characters-guide/cascade-fr.html", pt: "../../hero-wars-alliance/characters-guide/cascade-pt.html", ja: "../../hero-wars-alliance/characters-guide/cascade-ja.html" },       
   
noStrip: true
},   
    ]
  },
  {
    weekday: "Thursday",
    date: "July, 02",
    image: "../../img-HWM/events-img/way-of-mystery-event/way-of-mystery-200px.webp",
    alt: "Way of Mystery Event",
    titles: { en: "🌀 Way of Mystery Event", pt: "🌀 Evento Caminho do Mistério", de: "🌀 Weg des Mysteriums Event", es: "🌀 Evento Camino del Misterio", fr: "🌀 Événement Voie du Mystère", ja: "🌀 ミステリーの道イベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/way-of-mystery-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/way-of-mystery-event-pt.html", ja: "" },
    extra: [   
      { titles: { en: "🏺Cascade - Relic Event", de: "🏺Kaskade - Relikt-Ereignis", es: "🏺Cascade - Evento de Reliquia", fr: "🏺Cascade - Événement des Reliques", pt: "🏺Dilúvio - Evento de Relíquia", ja: "🏺カスケード - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
},  
{
  titles: {
    en: "📘Guide: Cascade Way of Mystery Shop Event - What to Buy?",
    pt: "📘Guia: Evento Loja Caminho do Mistério da Dilúvio - O Que Comprar?",
    de: "📘Leitfaden: Kaskade Weg des Mysteriums-Shop-Event – Was kaufen?",
    es: "📘Guía: Evento de la Tienda Camino del Misterio de Cascade - ¿Qué comprar?",
    fr: "📘Guide : Événement Boutique Voie du Mystère de Cascade - Que faut-il acheter ?",
    ja: "📘ガイド：カスケード 神秘の道ショップイベント - 何を買うべき？"
  },
   links: { en: "../../hero-wars-alliance/events-tips-hwa/cascade-way-of-mystery-shop-en.html", pt: "", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},
{
titles: { en: "📘Cascade Guide", de: "📘Kaskade Leitfaden", es: "📘Guía de Cascade", fr: "📘Guide Cascadee", pt: "📘Guia da Dilúvio", ja: "📘カスケード - ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/cascade-en.html", de: "../../hero-wars-alliance/characters-guide/cascade-de.html", es: "../../hero-wars-alliance/characters-guide/cascade-es.html", fr: "../../hero-wars-alliance/characters-guide/cascade-fr.html", pt: "../../hero-wars-alliance/characters-guide/cascade-pt.html", ja: "../../hero-wars-alliance/characters-guide/cascade-ja.html" },       
noStrip: true
},  
    ]
  },
  {
    weekday: "Friday",
    date: "July, 03",
    image: "../../img-HWM/events-img/titan-power/titan-power-200px.webp",
    alt: "Titan Power Event",
    titles: { en: "⚡Titan Power Event", de: "⚡Titanenmacht Ereignis", es: "⚡Evento Poder del Titán", fr: "⚡Événement Puissance du Titan", pt: "⚡Evento Poder do Titã", ja: "⚡タイタンパワーイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/titan-power-event-en-hwa.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/titan-power-event-pt-hwa.html", ja: "" },
    extra: [  
       {
  titles: { en: "🌞🌑 Blessing Worlds", pt: "🌞🌑 Mundos Abençoados", de: "🌞🌑 Gesegnete Welten", es: "🌞🌑 Mundos Bendecidos", fr: "🌞🌑 Mondes Bénis", ja: "🌞🌑 祝福された世界" },
  links: { en: "../../hero-wars-alliance/event-hwa/blessing-of-worlds-en.html", pt: "../../hero-wars-alliance/event-hwa/blessing-of-worlds-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
     
       {
 titles: { en: "📘Titan Power (Umbra)", pt: "📘Evento Poder do Titã (Umbra)", de: "📘Titanenmacht Ereignis (Umbra)", es: "📘Evento Poder del Titán (Umbra)", fr: "📘Événement Puissance du Titan (Umbra)", ja: "📘タイタンパワーイベント (アンブラ)" },
  labelOnly: true
},    
{
  titles: { en: "📘Titan Umbra Guide", de: "📘Titan Umbra Leitfaden", es: "📘Guía de Titan Umbra", fr: "📘Guide Titan Umbra", pt: "📘Guia do Titan Umbra", ja: "📘アンブラ - タイタンガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/eden-en.html", de: "../../hero-wars-alliance/titans-guide/eden-de.html", es: "../../hero-wars-alliance/titans-guide/eden-es.html", fr: "../../hero-wars-alliance/titans-guide/eden-fr.html", pt: "../../hero-wars-alliance/titans-guide/eden-pt.html", ja: "../../hero-wars-alliance/titans-guide/eden-ja.html" },       
  noStrip: true
},  
{ titles: { en: "🏺Cascade - Relic Event", de: "🏺Kaskade - Relikt-Ereignis", es: "🏺Cascade - Evento de Reliquia", fr: "🏺Cascade - Événement des Reliques", pt: "🏺Dilúvio - Evento de Relíquia", ja: "🏺カスケード - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
},  
{
titles: { en: "📘Cascade Guide", de: "📘Kaskade Leitfaden", es: "📘Guía de Cascade", fr: "📘Guide Cascadee", pt: "📘Guia da Dilúvio", ja: "📘カスケード - ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/cascade-en.html", de: "../../hero-wars-alliance/characters-guide/cascade-de.html", es: "../../hero-wars-alliance/characters-guide/cascade-es.html", fr: "../../hero-wars-alliance/characters-guide/cascade-fr.html", pt: "../../hero-wars-alliance/characters-guide/cascade-pt.html", ja: "../../hero-wars-alliance/characters-guide/cascade-ja.html" },       
noStrip: true
},  
    
     
    ]
  },
  {
    weekday: "Saturday",
    date: "July, 04",
    image: "../../img-HWM/events-img/titan-power/titan-power-200px.webp",
    alt: "Titan Power Event",
    titles: { en: "⚡Titan Power Event", de: "⚡Titanenmacht Ereignis", es: "⚡Evento Poder del Titán", fr: "⚡Événement Puissance du Titan", pt: "⚡Evento Poder do Titã", ja: "⚡タイタンパワーイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/titan-power-event-en-hwa.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/titan-power-event-pt-hwa.html", ja: "" },
    extra: [  
        {
  titles: { en: "🌞🌑 Blessing Worlds", pt: "🌞🌑 Mundos Abençoados", de: "🌞🌑 Gesegnete Welten", es: "🌞🌑 Mundos Bendecidos", fr: "🌞🌑 Mondes Bénis", ja: "🌞🌑 祝福された世界" },
  links: { en: "../../hero-wars-alliance/event-hwa/blessing-of-worlds-en.html", pt: "../../hero-wars-alliance/event-hwa/blessing-of-worlds-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
     
       {
 titles: { en: "📘Titan Power (Umbra)", pt: "📘Evento Poder do Titã (Umbra)", de: "📘Titanenmacht Ereignis (Umbra)", es: "📘Evento Poder del Titán (Umbra)", fr: "📘Événement Puissance du Titan (Umbra)", ja: "📘タイタンパワーイベント (アンブラ)" },
  labelOnly: true
},    
{
  titles: { en: "📘Titan Umbra Guide", de: "📘Titan Umbra Leitfaden", es: "📘Guía de Titan Umbra", fr: "📘Guide Titan Umbra", pt: "📘Guia do Titan Umbra", ja: "📘アンブラ - タイタンガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/eden-en.html", de: "../../hero-wars-alliance/titans-guide/eden-de.html", es: "../../hero-wars-alliance/titans-guide/eden-es.html", fr: "../../hero-wars-alliance/titans-guide/eden-fr.html", pt: "../../hero-wars-alliance/titans-guide/eden-pt.html", ja: "../../hero-wars-alliance/titans-guide/eden-ja.html" },       
  noStrip: true
},  
{ titles: { en: "🏺Cascade - Relic Event", de: "🏺Kaskade - Relikt-Ereignis", es: "🏺Cascade - Evento de Reliquia", fr: "🏺Cascade - Événement des Reliques", pt: "🏺Dilúvio - Evento de Relíquia", ja: "🏺カスケード - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
},  
{
titles: { en: "📘Cascade Guide", de: "📘Kaskade Leitfaden", es: "📘Guía de Cascade", fr: "📘Guide Cascadee", pt: "📘Guia da Dilúvio", ja: "📘カスケード - ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/cascade-en.html", de: "../../hero-wars-alliance/characters-guide/cascade-de.html", es: "../../hero-wars-alliance/characters-guide/cascade-es.html", fr: "../../hero-wars-alliance/characters-guide/cascade-fr.html", pt: "../../hero-wars-alliance/characters-guide/cascade-pt.html", ja: "../../hero-wars-alliance/characters-guide/cascade-ja.html" },       
noStrip: true
},  
    
     
    ]
  },
  {
    weekday: "Sunday",
    date: "July, 05",
    image: "../../img-HWM/events-img/titan-power/titan-power-200px.webp",
    alt: "Titan Power Event",
    titles: { en: "⚡Titan Power Event", de: "⚡Titanenmacht Ereignis", es: "⚡Evento Poder del Titán", fr: "⚡Événement Puissance du Titan", pt: "⚡Evento Poder do Titã", ja: "⚡タイタンパワーイベント" },
    links: { en: "../../hero-wars-alliance/event-hwa/titan-power-event-en-hwa.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/titan-power-event-pt-hwa.html", ja: "" },
    extra: [  
       {
  titles: { en: "🌞🌑 Blessing Worlds", pt: "🌞🌑 Mundos Abençoados", de: "🌞🌑 Gesegnete Welten", es: "🌞🌑 Mundos Bendecidos", fr: "🌞🌑 Mondes Bénis", ja: "🌞🌑 祝福された世界" },
  links: { en: "../../hero-wars-alliance/event-hwa/blessing-of-worlds-en.html", pt: "../../hero-wars-alliance/event-hwa/blessing-of-worlds-pt.html", de: "", es: "", fr: "",  ja: "" },       
  noStrip: true
},  
     
       {
 titles: { en: "📘Titan Power (Umbra)", pt: "📘Evento Poder do Titã (Umbra)", de: "📘Titanenmacht Ereignis (Umbra)", es: "📘Evento Poder del Titán (Umbra)", fr: "📘Événement Puissance du Titan (Umbra)", ja: "📘タイタンパワーイベント (アンブラ)" },
  labelOnly: true
},    
{
  titles: { en: "📘Titan Umbra Guide", de: "📘Titan Umbra Leitfaden", es: "📘Guía de Titan Umbra", fr: "📘Guide Titan Umbra", pt: "📘Guia do Titan Umbra", ja: "📘アンブラ - タイタンガイド" },
  links: { en: "../../hero-wars-alliance/titans-guide/eden-en.html", de: "../../hero-wars-alliance/titans-guide/eden-de.html", es: "../../hero-wars-alliance/titans-guide/eden-es.html", fr: "../../hero-wars-alliance/titans-guide/eden-fr.html", pt: "../../hero-wars-alliance/titans-guide/eden-pt.html", ja: "../../hero-wars-alliance/titans-guide/eden-ja.html" },       
  noStrip: true
},  
{ titles: { en: "🏺Cascade - Relic Event", de: "🏺Kaskade - Relikt-Ereignis", es: "🏺Cascade - Evento de Reliquia", fr: "🏺Cascade - Événement des Reliques", pt: "🏺Dilúvio - Evento de Relíquia", ja: "🏺カスケード - レリックイベント" },
  links: { en: "../../hero-wars-alliance/event-hwa/relic-season-event-en.html", de: "", es: "", fr: "", pt: "../../hero-wars-alliance/event-hwa/relic-season-event-pt.html", ja: "" }
},  
{
titles: { en: "📘Cascade Guide", de: "📘Kaskade Leitfaden", es: "📘Guía de Cascade", fr: "📘Guide Cascadee", pt: "📘Guia da Dilúvio", ja: "📘カスケード - ガイド" },
 links: { en: "../../hero-wars-alliance/characters-guide/cascade-en.html", de: "../../hero-wars-alliance/characters-guide/cascade-de.html", es: "../../hero-wars-alliance/characters-guide/cascade-es.html", fr: "../../hero-wars-alliance/characters-guide/cascade-fr.html", pt: "../../hero-wars-alliance/characters-guide/cascade-pt.html", ja: "../../hero-wars-alliance/characters-guide/cascade-ja.html" },       
noStrip: true
},  
    
     
    ]
  },

{ weekday: "Highwaymen Notice", date: "", image: "", alt: "Highwaymen Shop Notice", titles: { en: "🔸 Highwaymen mode will be discontinued, but the Highwaymen Shop remains available until July 6. Spend your coins before it closes!", pt: "🔸 O modo Highwaymen será descontinuado, mas a Loja dos Highwaymen continuará disponível até 6 de julho. Gaste suas moedas antes que ela feche!", es: "🔸 El modo Highwaymen será descontinuado, pero la Tienda de Highwaymen seguirá disponible hasta el 6 de julio. ¡Gasta tus monedas antes de que cierre!", de: "🔸 Der Highwaymen-Modus wird eingestellt, aber der Highwaymen-Shop bleibt bis zum 6. Juli verfügbar. Gib deine Münzen aus, bevor er schließt!", fr: "🔸 Le mode Highwaymen sera supprimé, mais la Boutique Highwaymen restera disponible jusqu’au 6 juillet. Dépensez vos pièces avant sa fermeture !", ja: "🔸 ハイウェイマンモードは廃止されますが、ハイウェイマンショップは7月6日まで利用可能です。閉店前にコインを使い切りましょう！" },
 labelOnly: true },


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
