(function(){
  // Carousel multi-language injector ( npm run update-hwa-index-hwa )
  const slides = [
    {
      link: "/hero-wars-alliance/characters-guide/nebula-en.html",
      src500: "/hero-wars-alliance/images/hero/nebula/nebula-500px.webp",
      src400: "/hero-wars-alliance/images/hero/nebula/nebula-400px.webp",
      alt: "Nebula Guide for Hero Wars Alliance",
      title: "Nebula Guide for Hero Wars Alliance",
      strong: "Guide: Nebula Rework for Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },   
    {
      link: "/hero-wars-alliance/characters-guide/eva-en.html",
      src500: "/hero-wars-alliance/images/hero/eva/eva-500px.webp",
      src400: "/hero-wars-alliance/images/hero/eva/eva-400px.webp",
      alt: "Eva Guide for Hero Wars Alliance",
      title: "Eva Guide for Hero Wars Alliance",
      strong: "Guide: Eva for Hero Wars Alliance",
      updated: "Updated: September, 2026."
    },   
   
    
    {
      link: "/hero-wars-alliance/guide/top-heroes-hwa-de.html",
      src500: "/hero-wars-alliance/images/guides/top-heroes-hwa/top-heroes-hwa-500px.webp",
      src400: "/hero-wars-alliance/images/guides/top-heroes-hwa/top-heroes-hwa-400px.webp",
      alt: "Top 17 Meta Heroes - Hero Wars Alliance",
      title: "Top 17 Meta Heroes - Hero Wars Alliance",
      strong: "Guide: Top 17 Meta Heroes - Hero Wars Alliance",
      updated: "Updated: August, 2026."
    },    
    
    {
      link: "/hero-wars-alliance/characters-guide/peech-en.html",
      src500: "/hero-wars-alliance/images/hero/peech/peech-500px.webp",
      src400: "/hero-wars-alliance/images/hero/peech/peech-400px.webp",
      alt: "Peech Guide for Hero Wars Alliance",
      title: "Peech Guide for Hero Wars Alliance",
      strong: "Guide New Skin+: Peech for Hero Wars Alliance",
      updated: "Updated: August, 2026."
    },   
     
    {
      link: "/hero-wars-alliance/characters-guide/kendle-en.html",
      src500: "/hero-wars-alliance/images/hero/kendle/kendle-500px.webp",
      src400: "/hero-wars-alliance/images/hero/kendle/kendle-400px.webp",
      alt: "Kendle Guide for Hero Wars Alliance",
      title: "Kendle Guide for Hero Wars Alliance",
      strong: "Guide New Skin+: Kendle for Hero Wars Alliance",
      updated: "Updated: August, 2026."
    },     
    {
      link: "/hero-wars-alliance/characters-guide/cleaver-en.html",
      src500: "/hero-wars-alliance/images/hero/cleaver/cleaver-500px.webp",
      src400: "/hero-wars-alliance/images/hero/cleaver/cleaver-400px.webp",
      alt: "Cleaver Guide for Hero Wars Alliance",
      title: "Cleaver Guide for Hero Wars Alliance",
      strong: "Guide New Skin: Cleaver for Hero Wars Alliance",
      updated: "Updated: August, 2026."
    },     
      
    {
      link: "/hero-wars-alliance/characters-guide/xesha-en.html",
      src500: "/hero-wars-alliance/images/hero/xesha/xesha-500px.webp",
      src400: "/hero-wars-alliance/images/hero/xesha/xesha-400px.webp",
      alt: "Xesha Guide for Hero Wars Alliance",
      title: "Xesha Guide for Hero Wars Alliance",
      strong: "Guide New Skin+: Xesha for Hero Wars Alliance",
      updated: "Updated: August, 2026."
    },     
   
    {
      link: "/hero-wars-alliance/guide/best-farms-hwa-en.html",
      src500: "/hero-wars-alliance/images/guides/best-farms-hwa/best-farms-hwa-500px.webp",
      src400: "/hero-wars-alliance/images/guides/best-farms-hwa/best-farms-hwa-400px.webp",
      alt: "Most Players Don’t Know These SECRET FARMS for Hero Wars Alliance",
      title: "Most Players Don’t Know These SECRET FARMS for Hero Wars Alliance",
      strong: "Most Players Don’t Know These SECRET FARMS - Hero Wars Alliance",
      updated: "Updated: July, 2026."
    },      
    
       {
      link: "/hero-wars-alliance/guide/realm-pve-best-teams-en.html",
      src500: "/hero-wars-alliance/images/guides/realm-pve-best-teams/realm-pve-best-teams-500px.webp",
      src400: "/hero-wars-alliance/images/guides/realm-pve-best-teams/realm-pve-best-teams-400px.webp",
      alt: "Realm PVE Best Teams for Hero Wars Alliance",
      title: "Realm PVE Best Teams for Hero Wars Alliance",
      strong: "Guide: Updated - Realm PVE Best Teams - Hero Wars Alliance",
      updated: "Updated: August, 2026."
    },      
    {
      link: "/hero-wars-alliance/guide/fort-guide-realm-en.html",
      src500: "/hero-wars-alliance/images/guides/fort-guide-realm/fort-guide-realm-500px.webp",
      src400: "/hero-wars-alliance/images/guides/fort-guide-realm/fort-guide-realm-400px.webp",
      alt: "Fort Guide for Hero Wars Alliance",
      title: "Fort Guide for Hero Wars Alliance",
      strong: "Guide: Fort - Hero Wars Alliance",
      updated: "Updated: August, 2026."
    },        
    
     {
      link: "/hero-wars-alliance/guide/realm-brown-squares-map-en.html",
      src500: "/hero-wars-alliance/images/guides/realm-brown-squares-map/realm-brown-squares-map-500px.webp",
      src400: "/hero-wars-alliance/images/guides/realm-brown-squares-map/realm-brown-squares-map-400px.webp",
      alt: "Realm Brown Squares Map for Hero Wars Alliance",
      title: "Realm Brown Squares Map for Hero Wars Alliance",
      strong: "Updated Realm: Map - Brown Squares for Hero Wars Alliance",
      updated: "Updated: July, 2026."
    },      
   {
      link: "/hero-wars-alliance/characters-guide/guus-en.html",
      src500: "/hero-wars-alliance/images/hero/guus/guus-500px.webp",
      src400: "/hero-wars-alliance/images/hero/guus/guus-400px.webp",
      alt: "Guus Guide for Hero Wars Alliance",
      title: "Guus Guide for Hero Wars Alliance",
      strong: "Guide: Guus for Hero Wars Alliance",
      updated: "Updated: July, 2026."
    },     
    
  
     
    {
      link: "/hero-wars-alliance/characters-guide/crow-en.html",
      src500: "/hero-wars-alliance/images/hero/crow/crow-500px.webp",
      src400: "/hero-wars-alliance/images/hero/crow/crow-400px.webp",
      alt: "Crow Legendary Skills Guide for Hero Wars Alliance",
      title: "Crow Guide for Hero Wars Alliance",
      strong: "Guide: Crow Legendary Skills for Hero Wars Alliance",
      updated: "Updated: July, 2026."
    },     
    
     {
      link: "/hero-wars-alliance/guide/talisman-guide-hwa-en.html",
      src500: "/hero-wars-alliance/images/guides/talisman-hwa/talisman-guide-hwa-500px.webp",
      src400: "/hero-wars-alliance/images/guides/talisman-hwa/talisman-guide-hwa-400px.webp",
      alt: "Talisman Guide for Hero Wars Alliance",
      title: "Talisman Guide for Hero Wars Alliance",
      strong: "Updated Reroll: Talisman Guide for Hero Wars Alliance",
      updated: "Updated: June, 2026."
    },       
        
    
    {
      link: "../../hero-wars-alliance/titans-guide/orm-en.html",
      src500: "../../hero-wars-alliance/images/titans/orm/orm-500px.webp",
      src400: "../../hero-wars-alliance/images/titans/orm/orm-400px.webp",
      alt: "Orm Legendary Skills Guide for Hero Wars Alliance",
      title: "Titan Orm Guide for Hero Wars Alliance",
      strong: "Guide: Titan Orm for Hero Wars Alliance",
      updated: "Updated: June, 2026."
    }, 
         
    
    {
      link: "/hero-wars-alliance/review/damage-over-time-en.html",
      src500: "/hero-wars-alliance/images/review/damage-over-time-500px.webp",
      src400: "/hero-wars-alliance/images/review/damage-over-time-400px.webp",
      alt: "Damage Over Time (DoT) System Guide in Hero Wars Alliance",
      title: "Damage Over Time (DoT) System Guide - Hero Wars Alliance",
      strong: "Guide: Damage Over Time (DoT) - Hero Wars Alliance",
      updated: "Updated: May, 2026."
    },   
    {
      link: "../../hero-wars-alliance/titans-guide/lumira-en.html",
      src500: "../../hero-wars-alliance/images/titans/lumira/lumira-500px.webp",
      src400: "../../hero-wars-alliance/images/titans/lumira/lumira-400px.webp",
      alt: "Lumira Legendary Skills Guide for Hero Wars Alliance",
      title: "Titan Lumira Guide for Hero Wars Alliance",
      strong: "Guide: Titan Lumira for Hero Wars Alliance",
      updated: "Updated: May, 2026."
    },   
    
          
    
    {
      link: "../../hero-wars-alliance/menu-hwa/calendar-hwa-en.html",
      src500: "../../hero-wars-alliance/images/calendar/calendar-500px.webp",
      src400: "../../hero-wars-alliance/images/calendar/calendar-400px.webp",
      alt: "Calendar for Hero Wars Alliance",
      title: "Calendar for Hero Wars Alliance",
      strong: "Calendar for Hero Wars Alliance",
      updated: "Updated: Monthly."
    },
    {
      link: "../../hero-wars-alliance/ag-daily-gifts-hwa/gifts-hwa-en.html",
      src500: "../../hero-wars-alliance/images/daily-gifts/gifts-hwa-500px.webp",
      src400: "../../hero-wars-alliance/images/daily-gifts/gifts-hwa-400px.webp",
      alt: "Redeem your Daily Gifts for Hero Wars Alliance",
      title: "Redeem your Daily Gifts for Hero Wars Alliance",
      strong: "Redeem your Daily Gifts for Hero Wars Alliance",
      updated: "Updated: Everyday."
    }
  ];
// traducoes dos titulos
// tem que add idioma por idioma
  const translations = {
    en: {
      updatedPrefix: 'Updated:',
      map: {}
    },
   
    pt: {
      updatedPrefix: 'Atualizado:',
      map: {
      strong: "Lian Astral Reflections Skin+ Event Guide - What to Buy? (English) for Hero Wars Alliance",
        'Sanctum of Balance Shop Guide for Hero Wars Alliance': 'Guia da Loja do Sanctum of Balance para Hero Wars Alliance',
      'Balance of Power Event Group Guide': 'Guia do Evento "Equilíbrio de Poder"',
        'Astral Reflections': 'Reflexões Astrais', 'Lords of the Elements': 'Senhores dos Elementos', 
        'Legendary Skills Guide for Hero Wars Alliance': 'Guia de Habilidades Lendárias para Hero Wars Alliance',
        'Complete Talisman Guide 2026 for Hero Wars Alliance': 'Guia Completo de Talismãs 2026 para Hero Wars Alliance',
        'Realm Tier List Guide for Hero Wars Alliance': 'Guia da Tier List do Reino para Hero Wars Alliance',
        'Miu Legendary Guide Skills for Hero Wars Alliance': 'Guia de Habilidades Lendárias da Miu para Hero Wars Alliance',
        'Complete Meta Teams and Combos 2026 Guide for Hero Wars Alliance': 'Guia Completo de Times e Combos Meta 2026 para Hero Wars Alliance',
        'Oya Legendary Guide Skills for Hero Wars Alliance': 'Guia de Habilidades Lendárias de Oya para Hero Wars Alliance',
        'Complete Realm Mode Guide for Hero Wars Alliance': 'Guia Completo do Modo Reino para Hero Wars Alliance',
        'Umbra Titan Guide: Master the Darkness Summoner for Hero Wars Alliance': 'Guia do Titã Umbra: Domine o Invocador da Escuridão para Hero Wars Alliance',
        'Dante Complete Legendary Skills Guide for Hero Wars Alliance': 'Guia Completo de Habilidades Lendárias de Dante para Hero Wars Alliance',
        'Drayne Complete Guide for Hero Wars Alliance': 'Guia Completo de Drayne para Hero Wars Alliance',
        'Yasmine Legendary Relic Complete Guide for Hero Wars Alliance': 'Guia Completo de Relíquia Lendária de Yasmine para Hero Wars Alliance',
        'Byrna Guide: Unleash the Healer Bear Spirit in Hero Wars: Alliance': 'Guia de Byrna: Liberte o Espírito do Urso Curador em Hero Wars: Alliance',
        'Redeem your Daily Gifts for Hero Wars Alliance': 'Resgate seus Presentes Diários para Hero Wars Alliance',
        'Complete Talisman Guide': 'Guia Completo de Talismãs',  'everyday': 'todos os dias', 'How to Play': 'Como Jogar',
        'monthly': 'mensalmente', 'How to Get the': 'Como Obter a', 'Talisman': 'Talismã',
        'Calendar': 'Calendário', 'priorities': 'prioridades', 'Realm': 'Reino', 'Brown Squares': 'Quadrados Marrons', 'Map': 'Mapa',
        'New': 'Nova', 'and': 'e', 'Strategy': 'Estratégia', 
        'Most Players Don’t Know These SECRET FARMS': 'A Maioria dos Jogadores Não Conhece Estas FARMS SECRETAS', 
        'Adventure Shop Tips': 'Dicas da Loja de Aventura', 'Event': 'Evento ',
        'What to Buy': 'O que Comprar', 'What to do?': 'O que fazer?', 
        'Which is better': 'Qual é o Melhor', 'New Titan': 'Novo Titã',
        'Updated': 'Atualizado',
        'Updated:': 'Atualizado:'
      }
    },
    es: {
      updatedPrefix: 'Actualizado:',
      map: {
        'Lian Astral Reflections Skin+ Event Guide - What to Buy? (English) for Hero Wars Alliance': 'Guía del Evento Lian Astral Reflections Skin+ - ¿Qué Comprar? (Inglés) para Hero Wars Alliance',
          'Sanctum of Balance Shop Guide for Hero Wars Alliance': 'Guía de la Loja del Sanctum of Balance para Hero Wars Alliance',
      'Balance of Power Event Group Guide': 'Guía del evento «Equilibrio de poder» para grupos',
        'Legendary Skills Guide for Hero Wars Alliance': 'Guía de Habilidades Legendarias para Hero Wars Alliance',
        'Complete Talisman Guide 2026 for Hero Wars Alliance': 'Guía Completa de Talismáns 2026 para Hero Wars Alliance',
        'Realm Tier List Guide for Hero Wars Alliance': 'Guía de la Lista de Niveles del Reino para Hero Wars Alliance',
        'Miu Legendary Guide Skills for Hero Wars Alliance': 'Guía de Habilidades Legendarias de Miu para Hero Wars Alliance',
        'Complete Meta Teams and Combos 2026 Guide for Hero Wars Alliance': 'Guía Completa de Equipos y Combos Meta 2026 para Hero Wars Alliance',
        'Oya Legendary Guide Skills for Hero Wars Alliance': 'Guía de Habilidades Legendarias de Oya para Hero Wars Alliance',
        'Complete Realm Mode Guide for Hero Wars Alliance': 'Guía Completa del Modo Reino para Hero Wars Alliance',
        'Umbra Titan Guide: Master the Darkness Summoner for Hero Wars Alliance': 'Guía del Titán Umbra: Domina al Invocador de la Oscuridad para Hero Wars Alliance',
        'Dante Complete Legendary Skills Guide for Hero Wars Alliance': 'Guía Completa de Habilidades Legendarias de Dante para Hero Wars Alliance',
        'Drayne Complete Guide for Hero Wars Alliance': 'Guía Completa de Drayne para Hero Wars Alliance',
        'Yasmine Legendary Relic Complete Guide for Hero Wars Alliance': 'Guía Completa de Reliquia Legendaria de Yasmine para Hero Wars Alliance',
        'Byrna Guide: Unleash the Healer Bear Spirit in Hero Wars: Alliance': 'Guía de Byrna: Libera el Espíritu del Oso Sanador en Hero Wars: Alliance',
        'Redeem your Daily Gifts for Hero Wars Alliance': 'Canjea tus Regalos Diarios para Hero Wars Alliance',
        'Complete Talisman Guide': 'Guía completa de talismanes:', 'priorities': 'prioridades', 'Realm': 'Reino', 'Brown Squares': 'Cuadrados marrones', 'Map': 'Mapa',
        'everyday': 'todos los días', 'How to Play': 'Cómo Jugar', 'Talisman': 'Talismán', 'Lords of the Elements': 'Señores de los Elementos',
        'Most Players Don’t Know These SECRET FARMS': 'La mayoría de los jugadores no conoce estas GRANJAS SECRETAS', 
        'monthly': 'mensalmente', 'How to Get the': 'Cómo Obtener la',
        'Calendar': 'Calendario', 'Strategy': 'Estrategia',
        'New': 'Nueva', 'and': 'y', 'Event': 'Evento ',
        'Adventure Shop Tips': 'Consejos de la Tienda de Aventura',
        'What to Buy': 'Qué Comprar', 'What to do?': 'Qué Hacer?', 
        'Which is better': 'Cuál es Mejor', 'New Titan': 'Nuevo Titán',
        'Updated': 'Actualizado',
      }
    },
    fr: {
      updatedPrefix: 'Mis à jour:',
      map: {
         'Most Players Don’t Know These SECRET FARMS': 'La plupart des joueurs ne connaissent pas ces FERMES SECRÈTES', 

        'Lian Astral Reflections Skin+ Event Guide - What to Buy? (English) for Hero Wars Alliance': 'Guide de l’événement Skin+ Reflets Astraux de Lian - Que acheter ? (Anglais) pour Hero Wars Alliance',
        'Balance of Power Event Group Guide': 'Guide de l’événement « Équilibre des pouvoirs »',
        'Sanctum of Balance Shop Guide for Hero Wars Alliance': 'Guide de la Loja du Sanctum of Balance pour Hero Wars Alliance',
        'Legendary Skills Guide for Hero Wars Alliance': 'Guide des Compétences Légendaires pour Hero Wars Alliance',
        'Complete Talisman Guide 2026 for Hero Wars Alliance': 'Guide Complet des Talismans 2026 pour Hero Wars Alliance',
        'Realm Tier List Guide for Hero Wars Alliance': 'Guide de la Liste des Niveaux du Royaume pour Hero Wars Alliance',
        'Miu Legendary Guide Skills for Hero Wars Alliance': 'Guide des Compétences Légendaires de Miu pour Hero Wars Alliance',
        'Complete Meta Teams and Combos 2026 Guide for Hero Wars Alliance': 'Guide Complet des Équipes et Combos Meta 2026 pour Hero Wars Alliance',
        'Oya Legendary Guide Skills for Hero Wars Alliance': 'Guide des Compétences Légendaires d\'Oya pour Hero Wars Alliance',
        'Complete Realm Mode Guide for Hero Wars Alliance': 'Guide Complet du Mode Royaume pour Hero Wars Alliance',
        'Umbra Titan Guide: Master the Darkness Summoner for Hero Wars Alliance': 'Guide du Titan Umbra: Maîtrisez l\'Invocateur des Ténèbres pour Hero Wars Alliance',
        'Dante Complete Legendary Skills Guide for Hero Wars Alliance': 'Guide Complet des Compétences Légendaires de Dante pour Hero Wars Alliance',
        'Drayne Complete Guide for Hero Wars Alliance': 'Guide Complet de Drayne pour Hero Wars Alliance',
        'Yasmine Legendary Relic Complete Guide for Hero Wars Alliance': 'Guide Complet de Relique Légendaire de Yasmine pour Hero Wars Alliance',
        'Byrna Guide: Unleash the Healer Bear Spirit in Hero Wars: Alliance': 'Guide de Byrna: Libérez l\'Esprit de l\'Ours Guérisseur dans Hero Wars: Alliance',
        'Redeem your Daily Gifts for Hero Wars Alliance': 'Échangez vos Cadeaux Quotidiens pour Hero Wars Alliance',
        'Complete Talisman Guide:': 'Guide complet des talismans:', 'priorities': 'priorités', 'Realm': 'Royaume', 'Brown Squares': 'carrés marron', 'Map': 'carte',
        'everyday': 'tous les jours', 'How to Play': 'Comment Jouer', 'Event': 'Événement', 'Lords of the Elements': 'Seigneurs des Éléments',
        'monthly': 'mensuellement', 'How to Get the': 'Comment Obtenir le', 'Talisman': 'Talisman',
        'Calendar': 'Calendrier', 'Strategy': 'Stratégie',
        'New': 'Nouvelle', 'and': 'et', 'New Titan': 'Nouveau Titan',
        'Adventure Shop Tips': 'Conseils de la Boutique d\'Aventure',
        'What to Buy?': 'Que Acheter?', 'What to do?': 'Que Faire?',
        'Which is better': '¿Lequel est meilleur',
        'Updated': 'Mis à jour',
      }
    },

 de: {
      updatedPrefix: 'Aktualisiert:',
      map: {
                 'Most Players Don’t Know These SECRET FARMS': 'Die meisten Spieler kennen diese GEHEIMEN FARMEN nicht', 
        'Lian Astral Reflections Skin+ Event Guide - What to Buy? (English) for Hero Wars Alliance': 'Leitfaden zum Event „Lian Astral Reflections Skin+“ - Was kaufen? (Englisch) für Hero Wars Alliance',
        'Sanctum of Balance Shop Guide for Hero Wars Alliance': 'Leitfaden zur Loja do Sanctum of Balance für Hero Wars Alliance',
 'Balance of Power Event Group Guide': 'Leitfaden zum Event „Machtgleichgewicht“',
        'Legendary Skills Guide for Hero Wars Alliance': 'Leitfaden zu Legendären Fähigkeiten für Hero Wars Alliance',
        'Complete Talisman Guide 2026 for Hero Wars Alliance': 'Kompletter Talisman-Leitfaden 2026 für Hero Wars Alliance',
        'Realm Tier List Guide for Hero Wars Alliance': 'Realm-Tier-Liste Leitfaden für Hero Wars Alliance',
        'Miu Legendary Guide Skills for Hero Wars Alliance': 'Leitfaden zu Miu`s legendären Fähigkeiten für Hero Wars Alliance',
        'Complete Meta Teams and Combos 2026 Guide for Hero Wars Alliance': 'Vollständiger Leitfaden zu Meta-Teams und Combos 2026 für Hero Wars Alliance',
        'Oya Legendary Guide Skills for Hero Wars Alliance': 'Oya Legendäre Fähigkeiten Guide für Hero Wars Alliance',
        'Umbra Titan Guide: Master the Darkness Summoner for Hero Wars Alliance': 'Umbra Titan Leitfaden: Meistere den Dunkelheisinvokator für Hero Wars Alliance',
        'Dante Complete Legendary Skills Guide for Hero Wars Alliance': 'Vollständiger Leitfaden zu Legendären Fähigkeiten von Dante für Hero Wars Alliance',
        'Drayne Complete Guide for Hero Wars Alliance': 'Vollständiger Leitfaden zu Drayne für Hero Wars Alliance',
        'Yasmine Legendary Relic Complete Guide for Hero Wars Alliance': 'Vollständiger Leitfaden zu Legendärer Relikt von Yasmine für Hero Wars Alliance',
        'Byrna Guide: Unleash the Healer Bear Spirit in Hero Wars: Alliance': 'Byrna Leitfaden: Entfessle den Heiler-Bärengeist in Hero Wars: Alliance',
        'Redeem your Daily Gifts for Hero Wars Alliance': 'Löse deine täglichen Geschenke für Hero Wars Alliance ein',
        'Complete Talisman Guide:': 'Vollständiger Talisman-Leitfaden:', 'priorities': 'Prioritäten', 'Realm': 'Königreich', 'braune Quadrate': 'carrés marron', 'Map': 'Karte',
        'for': 'für', 'How to Play': 'Wie man spielt', 'Event': 'Event', 'Talisman': 'Talismane', 'Lords of the Elements': 'Herren der Elemente',
        'skin': 'Skin', 'How to Get the': 'Wie man das bekommt',
        'everyday': 'täglich', 'New Titan': 'Neuer Titan',
        'monthly': 'monatlich',
        'Calendar': 'Kalender', 'Strategy': 'Strategie',
        'New': 'Neu', 'and': 'und',
        'Adventure Shop Tips': 'Abenteuerladen Tipps',
        'What to Buy?': 'Was soll man kaufen?', 'What to do?': 'Was soll man tun?',
        'Which is better': 'Welches ist besser',
        'Updated': 'Aktualisiert',
      }
    },
    ja: {
      updatedPrefix: '更新:',
      map: {
'Most Players Don’t Know These SECRET FARMS': 'ほとんどのプレイヤーが知らない秘密の農場', 
  
       'Lian Astral Reflections Skin+ Event Guide - What to Buy? (English) for Hero Wars Alliance': 'リアン 星界の反射スキン+イベントガイド - 何を買うべき？（英語）Hero Wars Alliance向け',
          'Sanctum of Balance Shop Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのサンクタム・オブ・バランスショップガイド',
 'Balance of Power Event Group Guide': '「力の均衡」イベント・グループ・ガイド',
       'Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスの伝説スキルガイド',
        'Complete Talisman Guide 2026 for Hero Wars Alliance': 'ヒーローウォーズ アライアンス完全タリスマンガイド2026',
        'Lian Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのリアン伝説スキルガイド',
        'Lian Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのリアンガイド',
        'Lian Legendary Guide Skills for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのリアン伝説スキルガイド',
        'Realm Tier List Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのレルムティアリストガイド',
        'Miu Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスの美雨伝説スキルガイド',
        'Miu Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスの美雨ガイド', 
        'Miu Legendary Guide Skills for Hero Wars Alliance': 'ヒーローウォーズ アライアンスの美雨伝説スキルガイド',
        'Meta Teams and Combos Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのメタチームとコンボガイド',
        'Complete Meta Teams and Combos 2026 Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンス完全メタチーム＆コンボガイド2026',
        'Oya Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのオーヤ伝説スキルガイド',
        'Oya Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのオーヤガイド',
        'Oya Legendary Guide Skills for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのオーヤ伝説スキルガイド',
        'Byrna Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのバーナ伝説スキルガイド',
        'Byrna Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのバーナガイド',
        'Byrna Legendary Guide Skills Guide for Hero Wars Alliance (skin+)': 'ヒーローウォーズ アライアンスのバーナ伝説スキルガイド（スキン+対応）',
        'Realm Mode Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのレルムモードガイド',
        'Complete Realm Mode Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンス完全レルムモードガイド',
        'Leonel Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのレオネル伝説スキルガイド',
        'Leonel Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのレオネルガイド',
        'Leonel Legendary Guide Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのレオネル伝説スキルガイド',
        'Alvanor Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのアルバノール伝説スキルガイド',
        'Alvanor Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのアルバノールガイド',
        'Alvanor Complete Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのアルバノール完全伝説スキルガイド',
        'Umbra Titan Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのウンブラタイタンガイド',
        'Umbra Titan Guide: Master the Darkness Summoner for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのウンブラタイタンガイド: 闇の召喚師を極める',
        'Dante Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのダンテ伝説スキルガイド',
        'Dante Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのダンテガイド',
        'Dante Complete Legendary Skills Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのダンテ完全伝説スキルガイド',
        'Drayne Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのドレインガイド', 'New Titan': '新しいタイタン',
        'Drayne Complete Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのドレイン完全ガイド',
        'Yasmine Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのヤスミンガイド',
        'Yasmine Legendary Relic Complete Guide for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのヤスミン伝説遺物完全ガイド',
        'Byrna Guide: Unleash the Healer Bear Spirit in Hero Wars: Alliance': 'ヒーローウォーズ アライアンスのバーナガイド: 癒やしの熊の精霊を解き放て',
        'Calendar for Hero Wars Alliance': 'ヒーローウォーズ アライアンス カレンダー','Talisman': 'タリスマン', 'Lords of the Elements': '元素の支配者たち',
        'Redeem your Daily Gifts for Hero Wars Alliance': 'ヒーローウォーズ アライアンスのデイリーギフトを受け取る',
        'Complete Talisman Guide:': 'タリスマン完全ガイド:', 'How to Get the': '入手方法', 'Event': 'イベント',
        'Hero Wars: Alliance': 'ヒーローウォーズ アライアンス', 'hero wars alliance': 'ヒーローウォーズ アライアンス',
        'for': '向け', 'skin': 'スキン',  'everyday': '毎日', 'monthly': '毎月', 'Calendar': 'カレンダー',
        'New': '新しい', 'How to Play': '遊び方', 'and': 'と', 'What to do?': '何をすべきか？', 'Realm': '王国', 'braune Quadrate': '茶色の四角形n', 'Map': '地図',
        'Adventure Shop Tips': 'アドベンチャーショップのヒント', 'Strategy': '戦略', 'priorities': '優先事項',
        'What to Buy?': '何を買うべき？', 'Which is better': 'どちらがいいですか',
        'Updated': '更新'
      }
    },


 
   
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
      var escapedKey = k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      var useWordBounds = /^[A-Za-z0-9]+$/.test(k);
      var pattern = useWordBounds ? '\\b' + escapedKey + '\\b' : escapedKey;
      out = out.replace(new RegExp(pattern,'gi'), map[k]);
    });
    return normalizeAllianceCase(out);
  }

  function localizeText(text, lang){
    return normalizeAllianceCase(applyTranslations(text, lang));
  }

  function normalizeAllianceCase(text){
    if(!text || typeof text !== 'string') return text;
    return text
      .replace(/\bAlLiance\b/g, 'Alliance')
      .replace(/\bALliance\b/g, 'Alliance')
      .replace(/\bAllIance\b/g, 'Alliance')
      .replace(/\bALLiance\b/g, 'Alliance');
  }

  function translateUpdated(updated, lang){
    if(!updated) return updated;
    // match patterns like "Updated: ..." or "Updated(skin+): ..." (preserve parenthesis)
    var m = updated.match(/^\s*(Updated(?:\([^\)]*\))?)\s*:\s*(.*)$/i);
    if(!m) return applyTranslations(updated, lang);
    var originalPrefix = m[1]; // e.g. "Updated" or "Updated(skin+)"
    var rest = m[2] || '';
    var basePrefix = translations[lang] ? translations[lang].updatedPrefix : translations.en.updatedPrefix;
    // ensure basePrefix has no trailing colon, then re-add and preserve any parentheses from original
    var baseNoColon = (basePrefix || '').replace(/:$/, '');
    var paren = (originalPrefix.match(/^Updated(\([^\)]*\))?$/i) || [])[1] || '';
    var prefix = baseNoColon + (paren || '') + ':';
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

  var pageAvailabilityCache = {};

  function buildLocalizedLink(englishLink, lang){
    if(!englishLink) return englishLink;
    if(lang === 'en') return englishLink;
    if(englishLink.indexOf('y-m-gifts-hwa') !== -1) return englishLink;
    return englishLink.replace(/-en\.html$/, '-' + lang + '.html');
  }

  function checkPageExists(url){
    if(!url) return Promise.resolve(false);
    var absoluteUrl;
    try{
      absoluteUrl = new URL(url, document.baseURI).href;
    }catch(e){
      return Promise.resolve(false);
    }
    if(pageAvailabilityCache[absoluteUrl]) return pageAvailabilityCache[absoluteUrl];

    function fetchWithMethod(method){
      return fetch(absoluteUrl, {
        method: method,
        cache: 'no-cache',
        credentials: 'same-origin'
      }).then(function(response){
        return response.ok;
      }).catch(function(){
        return false;
      });
    }

    pageAvailabilityCache[absoluteUrl] = fetchWithMethod('HEAD').then(function(exists){
      if(exists) return true;
      return fetchWithMethod('GET');
    });

    return pageAvailabilityCache[absoluteUrl];
  }

  function setEnglishFallbackIndicator(anchor, showIndicator){
    if(!anchor) return;

    anchor.setAttribute('data-english-fallback', showIndicator ? 'true' : 'false');

    var label = anchor.querySelector('strong');
    if(!label) return;

    var text = (label.textContent || '').replace(/\s*\(EN\)\s*$/i, '').trim();
    label.textContent = text + (showIndicator ? ' (EN)' : '');
  }

  function isEnglishPageLink(link){
    return /-en(?:-hwa)?\.html(?:[?#].*)?$/i.test(link || '');
  }

  function resolveCarouselLink(anchor){
    if(!anchor) return Promise.resolve();

    var englishLink = anchor.getAttribute('data-en-link') || anchor.getAttribute('href');
    var localizedLink = anchor.getAttribute('data-localized-link') || englishLink;
    var lang = anchor.getAttribute('data-lang') || 'en';

    if(!englishLink || !localizedLink){
      anchor.setAttribute('href', englishLink || localizedLink || '#');
      setEnglishFallbackIndicator(anchor, false);
      return Promise.resolve();
    }

    if(lang === 'en'){
      anchor.setAttribute('href', englishLink);
      setEnglishFallbackIndicator(anchor, false);
      return Promise.resolve();
    }

    if(localizedLink === englishLink){
      anchor.setAttribute('href', englishLink);
      setEnglishFallbackIndicator(anchor, isEnglishPageLink(englishLink));
      return Promise.resolve();
    }

    return checkPageExists(localizedLink).then(function(exists){
      anchor.setAttribute('href', exists ? localizedLink : englishLink);
      setEnglishFallbackIndicator(anchor, !exists);
    }).catch(function(){
      anchor.setAttribute('href', englishLink);
      setEnglishFallbackIndicator(anchor, true);
    });
  }

  function buildSlideHTML(s, index){
    const lang = detectLang();
    var englishLink = s.link;
    var targetLink = buildLocalizedLink(englishLink, lang);
    const altText = localizeText(s.alt, lang);
    const titleText = localizeText(s.title, lang);
    const strongText = localizeText(s.strong, lang);
    const updatedText = translateUpdated(s.updated, lang);

    return '\n<figure class="carousel-slide">\n  <a href="' + targetLink + '" data-en-link="' + englishLink + '" data-localized-link="' + targetLink + '" data-lang="' + lang + '" data-slide-index="' + index + '">\n    <picture>\n      <source media="(min-width: 769px)" srcset="' + s.src500 + '">\n      <img src="' + s.src400 + '" alt="' + altText + '" title="' + titleText + '" loading="lazy" data-slide-index="' + index + '">\n        <strong>' + strongText + '</strong>\n        <i>' + updatedText + '</i>\n  </a>\n</figure>';
  }

  function inject(){
    const track = document.querySelector('.carousel-track');
    if(!track) return;
    const html = slides.map(buildSlideHTML).join('\n');
    track.innerHTML = html;
  }

  function updateCarouselMetadata(){
    try{
      var lang = detectLang();
      var images = document.querySelectorAll('.carousel-slide img[data-slide-index]');
      for(var i=0;i<images.length;i++){
        var img = images[i];
        var index = parseInt(img.getAttribute('data-slide-index'), 10);
        if(isNaN(index) || !slides[index]) continue;
        img.alt = localizeText(slides[index].alt, lang);
        img.title = localizeText(slides[index].title, lang);
      }
    }catch(e){}
  }

  function resolveCarouselLinks(){
    try{
      var anchors = document.querySelectorAll('.carousel-slide a[data-en-link]');
      var tasks = [];
      for(var i=0;i<anchors.length;i++){
        tasks.push(resolveCarouselLink(anchors[i]));
      }
      return Promise.all(tasks);
    }catch(e){
      return Promise.resolve();
    }
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
        el.textContent = normalizeAllianceCase(applyTranslations(el.textContent, lang));
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

  function exposeSharedApi(){
    try{
      window.hwaCarouselShared = {
        getSlides: function(){ return slides.slice(); },
        getTranslations: function(){ return translations; },
        detectLang: detectLang,
        localizeText: localizeText,
        translateUpdated: translateUpdated,
        buildLocalizedLink: buildLocalizedLink,
        resolveLink: resolveCarouselLink,
        normalizeAllianceCase: normalizeAllianceCase
      };
      try{ document.dispatchEvent(new CustomEvent('hwaCarouselSharedReady')); }catch(err){}
    }catch(e){}
  }

  function init(){
    exposeSharedApi();
    inject();
    resolveCarouselLinks();
    initCarouselControls();
    updateCarouselMetadata();
    fetchTermsJSON(function(){ updateAllUpdatedElements(); updateSlideTexts(); updateCarouselMetadata(); });
    loadHeroesLocalization(function(){ updateSlideTexts(); updateAllUpdatedElements(); updateCarouselMetadata(); });
    loadTitansLocalization(function(){ updateSlideTexts(); updateAllUpdatedElements(); updateCarouselMetadata(); });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
