/*  Calendar data for Hero Wars: Dominion Era
  npm run update-calendar-hwde
*/
/* Calendar data for Hero Wars: Dominion Era */
// ===================== texto em branco com cor branca para colocar informacoes =====================
/*     
{
  titles: { en: "quando nao tem link", pt: "", de: "", es: "", fr: "", ja: "" },
  labelOnly: true
},

{
  titles: { en: "", de: "", es: "", fr: "", pt: "", ja: "" },
  links: { en: "../../", de: "", es: "", fr: "", pt: "", ja: "" },       
  noStrip: true
},  

hero: 🦸masculino e 🦸‍♀️feminino
skin: 🥋masculino skin 👗feminino 

{
        titles: { en: "🌀Event: Random Hero or New Umbra Titan sem link", pt: "", de: "", es: "", fr: "", ja: "" },
        labelOnly: true,
      },
*/      
// Título do mês do calendário npm run update-calendar-hwde
window.CALENDAR_MONTH_HEADER = {
  en: "November Calendar Events",
  pt: "Eventos do Calendário de Novembro",
  de: "November-Kalender-Events",
  es: "Eventos del Calendario de Noviembre",
  fr: "Événements du Calendrier de Novembre",
  ja: "11月のカレンダーイベント"
};

window.CALENDAR_DATA = [
  {
    weekday: "WhatsApp & Discord",
    date: "",
    image: "",
    alt: "Alexandre Games WhatsApp Group",
    titles: { en: "🎁 Join our English WhatsApp group for Hero Wars Dominion Era tips and giveaways!", pt: "🎁 Entre no nosso grupo WhatsApp em Português para dicas de Hero Wars Dominion Era e sorteios!", es: "🎁 ¡Únete a nuestro grupo de WhatsApp en inglés para consejos de Hero Wars Dominion Era y sorteos!", de: "🎁 Trete unserer englischen WhatsApp-Gruppe für Hero Wars Dominion Era-Tipps und Gewinnspiele bei!", fr: "🎁 Rejoignez notre groupe WhatsApp en anglais pour des conseils et des giveaways sur Hero Wars Dominion Era !", ja: "🎁 英語のWhatsAppグループに参加して、ヒーローウォーズドミニオン時代のヒントやギブアウェイをゲット！" },
    links: { en: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", de: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", es: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", fr: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", pt: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", ja: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY" },
    noStrip: true,
    extra: [
     {// Dentro de extra[] de um evento:
 titles: { en: "\u00A0", pt: "\u00A0", de: "\u00A0", es: "\u00A0", fr: "\u00A0", ja: "\u00A0" },
  labelOnly: true
},
    ]
  },
  {
    weekday: "Sunday",
    date: "November, 01",
    image: "../../hero-wars-dominion-era/images/events/spooky-festival/spooky-festival-400px.webp",
    alt: "Spooky Festival",
    titles: { en: "Spooky Festival 2026", pt: "Festival Assustador 2026", de: "Gruselfestival 2026", es: "Festival Espeluznante 2026", fr: "Festival Effrayant 2026", ja: "スプーキー・フェスティバル 2026" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/spooky-festival-2026-en.html", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        labelOnly: true
      },
      {
        titles: { en: "📦No Prestige today", pt: "📦Dia sem Prestígio", de: "📦Heute kein Prestige", es: "📦Día sin Prestigio", fr: "📦Jour sans Prestige", ja: "📦本日はプレステージなし" },
        labelOnly: true
      },
       {// Dentro de extra[] de um evento:
 titles: { en: "\u00A0", pt: "\u00A0", de: "\u00A0", es: "\u00A0", fr: "\u00A0", ja: "\u00A0" },
  labelOnly: true
},
      {
        titles: { en: "🪙Elemental Synergy", pt: "🪙Sinergia Elemental", de: "🪙Elementarsynergie", es: "🪙Sinergia Elemental", fr: "🪙Synergie Élémentaire", ja: "🪙エレメンタルシナジー" },
        links: { en: "../../hero-wars-dominion-era/events/elemental-synergy-en.html", pt: "../../hero-wars-dominion-era/events/elemental-synergy-pt.html", de: "../../hero-wars-dominion-era/events/elemental-synergy-de.html", es: "../../hero-wars-dominion-era/events/elemental-synergy-es.html", fr: "../../hero-wars-dominion-era/events/elemental-synergy-fr.html", ja: "../../hero-wars-dominion-era/events/elemental-synergy-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "👗Folio: Solar Skin — Full Unlock", pt: "👗Folio: Skin Solar — Desbloqueio Completo", de: "👗Folio: Sonnen-Skin — Vollständig freigeschaltet", es: "👗Folio: Skin Solar — Desbloqueo Completo", fr: "👗Folio : Skin Solaire — Déverrouillage complet", ja: "👗Folio：ソーラースキン — 完全解放" },
        links: { en: "../../hero-wars-dominion-era/characters/folio-en.html", pt: "../../hero-wars-dominion-era/characters/folio-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Monday",
    date: "November, 02",
    image: "../../hero-wars-dominion-era/images/events/hero-tournament-of-power/hero-tournament-of-power-150px.webp",
    alt: "Tournament of Hero Power",
    titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
    links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🗺️Heroes' Area of Conquest", pt: "🗺️Área de Conquista de Heróis", de: "🗺️Eroberungsgebiet der Helden", es: "🗺️Área de Conquista de Héroes", fr: "🗺️Zone de Conquête des Héros", ja: "🗺️英雄の征服エリア" },
        links: { en: "../../hero-wars-dominion-era/events/area-of-conquest-en.html", pt: "../../hero-wars-dominion-era/events/area-of-conquest-pt.html", de: "../../hero-wars-dominion-era/events/area-of-conquest-de.html", es: "../../hero-wars-dominion-era/events/area-of-conquest-es.html", fr: "../../hero-wars-dominion-era/events/area-of-conquest-fr.html", ja: "../../hero-wars-dominion-era/events/area-of-conquest-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "📦Artifact Chest - Sale 30% (expected)", pt: "📦Baú de Artefatos - Desconto 30% (previsto)", de: "📦Artefakttruhe - 30% Rabatt (voraussichtlich)", es: "📦Cofre de Artefactos - 30% de Descuento (previsto)", fr: "📦Coffre d'Artéfacts - 30% de Réduction (prévu)", ja: "📦アーティファクトチェスト - 30%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌀Soul Atrium - Sale 50% (expected)", pt: "🌀Átrio da Alma - Desconto 50% (previsto)", de: "🌀Seelenatrium - 50% Rabatt (voraussichtlich)", es: "🌀Atrio del Alma - 50% de Descuento (previsto)", fr: "🌀Atrium de l'Âme - 50% de Réduction (prévu)", ja: "🌀ソウルアトリウム - 50%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "👗Eva: New Cybernetic Skin", pt: "👗Eva: Nova Skin Cibernética", de: "👗Eva: Neuer Kybernetischer-Skin", es: "👗Eva: Nueva Skin Cibernética", fr: "👗Eva : Nouveau Skin Cybernétique", ja: "👗Eva：新サイバネティックスキン" },
        links: { en: "../../hero-wars-dominion-era/characters/eva-en.html", pt: "../../hero-wars-dominion-era/characters/eva-pt.html", de: "../../hero-wars-dominion-era/characters/eva-de.html", es: "../../hero-wars-dominion-era/characters/eva-es.html", fr: "../../hero-wars-dominion-era/characters/eva-fr.html", ja: "../../hero-wars-dominion-era/characters/eva-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "👗Jorgen: New Stellar Skin", pt: "👗Jorgen: Nova Skin Estelar", de: "👗Jorgen: Neuer Sternen-Skin", es: "👗Jorgen: Nueva Skin Estelar", fr: "👗Jorgen : Nouveau Skin Stellaire", ja: "👗Jorgen：新ステラスキン" },
        noStrip: true,
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Tuesday",
    date: "November, 03",
    image: "../../hero-wars-dominion-era/images/events/hero-tournament-of-power/hero-tournament-of-power-150px.webp",
    alt: "Tournament of Hero Power",
    titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
    links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🗺️Heroes' Area of Conquest", pt: "🗺️Área de Conquista de Heróis", de: "🗺️Eroberungsgebiet der Helden", es: "🗺️Área de Conquista de Héroes", fr: "🗺️Zone de Conquête des Héros", ja: "🗺️英雄の征服エリア" },
        links: { en: "../../hero-wars-dominion-era/events/area-of-conquest-en.html", pt: "../../hero-wars-dominion-era/events/area-of-conquest-pt.html", de: "../../hero-wars-dominion-era/events/area-of-conquest-de.html", es: "../../hero-wars-dominion-era/events/area-of-conquest-es.html", fr: "../../hero-wars-dominion-era/events/area-of-conquest-fr.html", ja: "../../hero-wars-dominion-era/events/area-of-conquest-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "📦Artifact Chest - Sale 30% (expected)", pt: "📦Baú de Artefatos - Desconto 30% (previsto)", de: "📦Artefakttruhe - 30% Rabatt (voraussichtlich)", es: "📦Cofre de Artefactos - 30% de Descuento (previsto)", fr: "📦Coffre d'Artéfacts - 30% de Réduction (prévu)", ja: "📦アーティファクトチェスト - 30%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌀Soul Atrium - Sale 50% (expected)", pt: "🌀Átrio da Alma - Desconto 50% (previsto)", de: "🌀Seelenatrium - 50% Rabatt (voraussichtlich)", es: "🌀Atrio del Alma - 50% de Descuento (previsto)", fr: "🌀Atrium de l'Âme - 50% de Réduction (prévu)", ja: "🌀ソウルアトリウム - 50%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "👗Tristan: Sports Skin — Full Unlock", pt: "👗Tristan: Skin Esportiva — Desbloqueio Completo", de: "👗Tristan: Sport-Skin — Vollständig freigeschaltet", es: "👗Tristan: Skin Deportiva — Desbloqueo Completo", fr: "👗Tristan : Skin Sportif — Déverrouillage complet", ja: "👗Tristan：スポーツスキン — 完全解放" },
        noStrip: true,
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Wednesday",
    date: "November, 04",
    image: "../../hero-wars-dominion-era/images/events/hero-tournament-of-power/hero-tournament-of-power-150px.webp",
    alt: "Tournament of Hero Power",
    titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
    links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🗺️Heroes' Area of Conquest", pt: "🗺️Área de Conquista de Heróis", de: "🗺️Eroberungsgebiet der Helden", es: "🗺️Área de Conquista de Héroes", fr: "🗺️Zone de Conquête des Héros", ja: "🗺️英雄の征服エリア" },
        links: { en: "../../hero-wars-dominion-era/events/area-of-conquest-en.html", pt: "../../hero-wars-dominion-era/events/area-of-conquest-pt.html", de: "../../hero-wars-dominion-era/events/area-of-conquest-de.html", es: "../../hero-wars-dominion-era/events/area-of-conquest-es.html", fr: "../../hero-wars-dominion-era/events/area-of-conquest-fr.html", ja: "../../hero-wars-dominion-era/events/area-of-conquest-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "📦Artifact Chest - Sale 30% (expected)", pt: "📦Baú de Artefatos - Desconto 30% (previsto)", de: "📦Artefakttruhe - 30% Rabatt (voraussichtlich)", es: "📦Cofre de Artefactos - 30% de Descuento (previsto)", fr: "📦Coffre d'Artéfacts - 30% de Réduction (prévu)", ja: "📦アーティファクトチェスト - 30%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌀Soul Atrium - Sale 50% (expected)", pt: "🌀Átrio da Alma - Desconto 50% (previsto)", de: "🌀Seelenatrium - 50% Rabatt (voraussichtlich)", es: "🌀Atrio del Alma - 50% de Descuento (previsto)", fr: "🌀Atrium de l'Âme - 50% de Réduction (prévu)", ja: "🌀ソウルアトリウム - 50%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Thursday",
    date: "November, 05",
    image: "../../hero-wars-dominion-era/images/events/hero-tournament-of-power/hero-tournament-of-power-150px.webp",
    alt: "Tournament of Hero Power",
    titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
    links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🗺️Heroes' Area of Conquest", pt: "🗺️Área de Conquista de Heróis", de: "🗺️Eroberungsgebiet der Helden", es: "🗺️Área de Conquista de Héroes", fr: "🗺️Zone de Conquête des Héros", ja: "🗺️英雄の征服エリア" },
        links: { en: "../../hero-wars-dominion-era/events/area-of-conquest-en.html", pt: "../../hero-wars-dominion-era/events/area-of-conquest-pt.html", de: "../../hero-wars-dominion-era/events/area-of-conquest-de.html", es: "../../hero-wars-dominion-era/events/area-of-conquest-es.html", fr: "../../hero-wars-dominion-era/events/area-of-conquest-fr.html", ja: "../../hero-wars-dominion-era/events/area-of-conquest-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "⚔️Hero Cosmic Battle", pt: "⚔️Batalha Cósmica de Heróis", de: "⚔️Kosmischer Kampf der Helden", es: "⚔️Batalla Cósmica de Héroes", fr: "⚔️Bataille Cosmique des Héros", ja: "⚔️ヒーローの宇宙の戦い" },
        links: { en: "../../hero-wars-dominion-era/events/hero-cosmic-battle-en.html", pt: "../../hero-wars-dominion-era/events/hero-cosmic-battle-pt.html", de: "../../hero-wars-dominion-era/events/hero-cosmic-battle-de.html", es: "../../hero-wars-dominion-era/events/hero-cosmic-battle-es.html", fr: "../../hero-wars-dominion-era/events/hero-cosmic-battle-fr.html", ja: "../../hero-wars-dominion-era/events/hero-cosmic-battle-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "📦Artifact Chest - Sale 30% (expected)", pt: "📦Baú de Artefatos - Desconto 30% (previsto)", de: "📦Artefakttruhe - 30% Rabatt (voraussichtlich)", es: "📦Cofre de Artefactos - 30% de Descuento (previsto)", fr: "📦Coffre d'Artéfacts - 30% de Réduction (prévu)", ja: "📦アーティファクトチェスト - 30%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌀Soul Atrium - Sale 50% (expected)", pt: "🌀Átrio da Alma - Desconto 50% (previsto)", de: "🌀Seelenatrium - 50% Rabatt (voraussichtlich)", es: "🌀Atrio del Alma - 50% de Descuento (previsto)", fr: "🌀Atrium de l'Âme - 50% de Réduction (prévu)", ja: "🌀ソウルアトリウム - 50%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Friday",
    date: "November, 06",
    image: "../../hero-wars-dominion-era/images/events/hero-tournament-of-power/hero-tournament-of-power-150px.webp",
    alt: "Tournament of Hero Power",
    titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
    links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🎡 Fate's Wish", pt: "🎡 Desejo do Destino", de: "🎡 Schicksalswunsch", es: "🎡 Deseo del Destino", fr: "🎡 Vœu du Destin", ja: "🎡 運命の願い" },
        links: { en: "../../hero-wars-dominion-era/events/fates-wish-en.html", pt: "../../hero-wars-dominion-era/events/fates-wish-pt.html", de: "../../hero-wars-dominion-era/events/fates-wish-de.html", es: "../../hero-wars-dominion-era/events/fates-wish-es.html", fr: "../../hero-wars-dominion-era/events/fates-wish-fr.html", ja: "../../hero-wars-dominion-era/events/fates-wish-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "⚔️Hero Cosmic Battle", pt: "⚔️Batalha Cósmica de Heróis", de: "⚔️Kosmischer Kampf der Helden", es: "⚔️Batalla Cósmica de Héroes", fr: "⚔️Bataille Cosmique des Héros", ja: "⚔️ヒーローの宇宙の戦い" },
        links: { en: "../../hero-wars-dominion-era/events/hero-cosmic-battle-en.html", pt: "../../hero-wars-dominion-era/events/hero-cosmic-battle-pt.html", de: "../../hero-wars-dominion-era/events/hero-cosmic-battle-de.html", es: "../../hero-wars-dominion-era/events/hero-cosmic-battle-es.html", fr: "../../hero-wars-dominion-era/events/hero-cosmic-battle-fr.html", ja: "../../hero-wars-dominion-era/events/hero-cosmic-battle-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "💎Emeralds Sale x5 (expected)", pt: "💎Promoção de Esmeraldas x5 (previsto)", de: "💎Smaragd-Angebot x5 (voraussichtlich)", es: "💎Oferta de Esmeraldas x5 (previsto)", fr: "💎Vente d'Émeraudes x5 (prévu)", ja: "💎エメラルドセール x5（予想）" },
        links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" }
      }
    ]
  },
  {
    weekday: "Saturday",
    date: "November, 07",
    image: "../../hero-wars-dominion-era/images/events/hero-tournament-of-power/hero-tournament-of-power-150px.webp",
    alt: "Tournament of Hero Power",
    titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
    links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚔️Hero Cosmic Battle", pt: "⚔️Batalha Cósmica de Heróis", de: "⚔️Kosmischer Kampf der Helden", es: "⚔️Batalla Cósmica de Héroes", fr: "⚔️Bataille Cosmique des Héros", ja: "⚔️ヒーローの宇宙の戦い" },
        links: { en: "../../hero-wars-dominion-era/events/hero-cosmic-battle-en.html", pt: "../../hero-wars-dominion-era/events/hero-cosmic-battle-pt.html", de: "../../hero-wars-dominion-era/events/hero-cosmic-battle-de.html", es: "../../hero-wars-dominion-era/events/hero-cosmic-battle-es.html", fr: "../../hero-wars-dominion-era/events/hero-cosmic-battle-fr.html", ja: "../../hero-wars-dominion-era/events/hero-cosmic-battle-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "🪆Demon Dolls (expected)", pt: "🪆Bonecas Demoníacas (previsto)", de: "🪆Dämonenpuppen (voraussichtlich)", es: "🪆Muñecas Demoníacas (previsto)", fr: "🪆Poupées Démoniaques (prévu)", ja: "🪆デーモンドール（予想）" },
        links: { en: "#section1", pt: "#section1", de: "#section1", es: "#section1", fr: "#section1", ja: "#section1" }
      },
      {
        titles: { en: "👗Adam: Beach Skin — Full Unlock", pt: "👗Adam: Skin de Praia — Desbloqueio Completo", de: "👗Adam: Strand-Skin — Vollständig freigeschaltet", es: "👗Adam: Skin de Playa — Desbloqueo Completo", fr: "👗Adam : Skin de Plage — Déverrouillage complet", ja: "👗Adam：ビーチスキン — 完全解放" },
        links: { en: "../../hero-wars-dominion-era/characters/adam-en.html", pt: "../../hero-wars-dominion-era/characters/adam-pt.html", de: "../../hero-wars-dominion-era/characters/adam-de.html", es: "../../hero-wars-dominion-era/characters/adam-es.html", fr: "../../hero-wars-dominion-era/characters/adam-fr.html", ja: "../../hero-wars-dominion-era/characters/adam-ja.html" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Sunday",
    date: "November, 08",
    image: "../../hero-wars-dominion-era/images/img-shared/demon-dolls-500px.webp",
    alt: "Demon Dolls",
    titles: { en: "🪆Demon Dolls (expected)", pt: "🪆Bonecas Demoníacas (previsto)", de: "🪆Dämonenpuppen (voraussichtlich)", es: "🪆Muñecas Demoníacas (previsto)", fr: "🪆Poupées Démoniaques (prévu)", ja: "🪆デーモンドール（予想）" },
    links: { en: "#section1", pt: "#section1", de: "#section1", es: "#section1", fr: "#section1", ja: "#section1" },
    extra: []
  },
  {
    weekday: "Monday",
    date: "November, 09",
    image: "../../hero-wars-dominion-era/images/events-special/mead-festival-missions/mead-festival-missions-400px.webp",
    alt: "Mead Festival",
    titles: { en: "🐾Mead Festival", pt: "🐾Festival do Hidromel", de: "🐾Metfest", es: "🐾Festival de la Hidromiel", fr: "🐾Festival de l’Hydromel", ja: "🐾蜂蜜酒祭り" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/mead-festival-missions-en.html", de: "", es: "", fr: "", pt: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🐖Piggy Bank (expected)", pt: "🐖Porquinho (previsto)", de: "🐖Sparschwein (voraussichtlich)", es: "🐖Alcancía (previsto)", fr: "🐖Tirelire (prévu)", ja: "🐖ピギーバンク（予想）" },
        links: { en: "#section4", pt: "#section4", de: "#section4", es: "#section4", fr: "#section4", ja: "#section4" }
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🌕Circle of Summoning - Sale 15% (expected)", pt: "🌕Círculo de Invocação - Desconto 15% (previsto)", de: "🌕Kreis der Beschwörung - 15% Rabatt (voraussichtlich)", es: "🌕Círculo de Invocación - 15% de Descuento (previsto)", fr: "🌕Cercle d'Invocation - 15% de Réduction (prévu)", ja: "🌕召喚の円 - 15%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌍Altar of the Elements - Sale 10% (expected)", pt: "🌍Altar dos Elementos - Desconto 10% (previsto)", de: "🌍Altar der Elemente - 10% Rabatt (voraussichtlich)", es: "🌍Altar de los Elementos - 10% de Descuento (previsto)", fr: "🌍Autel des Éléments - 10% de Réduction (prévu)", ja: "🌍元素の祭壇 - 10%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "👗Lumira & Apollo: New Primordial Skin", pt: "👗Lumira & Apollo: Nova Skin Primordial", de: "👗Lumira & Apollo: Neuer Ursprünglicher-Skin", es: "👗Lumira & Apollo: Nueva Skin Primordial", fr: "👗Lumira & Apollo : Nouveau Skin Primordial", ja: "👗Lumira & Apollo：新原始スキン" },
        links: { en: "../../hero-wars-dominion-era/titans/lumira-en.html", pt: "../../hero-wars-dominion-era/titans/lumira-pt.html", de: "../../hero-wars-dominion-era/titans/lumira-de.html", es: "../../hero-wars-dominion-era/titans/lumira-es.html", fr: "../../hero-wars-dominion-era/titans/lumira-fr.html", ja: "../../hero-wars-dominion-era/titans/lumira-ja.html" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Tuesday",
    date: "November, 10",
    image: "../../hero-wars-dominion-era/images/events-special/mead-festival-missions/mead-festival-missions-400px.webp",
    alt: "Mead Festival",
    titles: { en: "🐾Mead Festival", pt: "🐾Festival do Hidromel", de: "🐾Metfest", es: "🐾Festival de la Hidromiel", fr: "🐾Festival de l’Hydromel", ja: "🐾蜂蜜酒祭り" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/mead-festival-missions-en.html", de: "", es: "", fr: "", pt: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💧Emerald Waterfalls", pt: "💧Cachoeiras de Esmeralda", de: "💧Smaragdwasserfälle", es: "💧Cascadas de Esmeraldas", fr: "💧Cascades d'Émeraudes", ja: "💧エメラルドの滝" },
        links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" }
      },
      {
        titles: { en: "🐖Piggy Bank (expected)", pt: "🐖Porquinho (previsto)", de: "🐖Sparschwein (voraussichtlich)", es: "🐖Alcancía (previsto)", fr: "🐖Tirelire (prévu)", ja: "🐖ピギーバンク（予想）" },
        links: { en: "#section4", pt: "#section4", de: "#section4", es: "#section4", fr: "#section4", ja: "#section4" }
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🌕Circle of Summoning - Sale 15% (expected)", pt: "🌕Círculo de Invocação - Desconto 15% (previsto)", de: "🌕Kreis der Beschwörung - 15% Rabatt (voraussichtlich)", es: "🌕Círculo de Invocación - 15% de Descuento (previsto)", fr: "🌕Cercle d'Invocation - 15% de Réduction (prévu)", ja: "🌕召喚の円 - 15%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌍Altar of the Elements - Sale 10% (expected)", pt: "🌍Altar dos Elementos - Desconto 10% (previsto)", de: "🌍Altar der Elemente - 10% Rabatt (voraussichtlich)", es: "🌍Altar de los Elementos - 10% de Descuento (previsto)", fr: "🌍Autel des Éléments - 10% de Réduction (prévu)", ja: "🌍元素の祭壇 - 10%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Wednesday",
    date: "November, 11",
    image: "../../hero-wars-dominion-era/images/events-special/mead-festival-missions/mead-festival-missions-400px.webp",
    alt: "Mead Festival",
    titles: { en: "🐾Mead Festival", pt: "🐾Festival do Hidromel", de: "🐾Metfest", es: "🐾Festival de la Hidromiel", fr: "🐾Festival de l’Hydromel", ja: "🐾蜂蜜酒祭り" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/mead-festival-missions-en.html", de: "", es: "", fr: "", pt: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💧Emerald Waterfalls", pt: "💧Cachoeiras de Esmeralda", de: "💧Smaragdwasserfälle", es: "💧Cascadas de Esmeraldas", fr: "💧Cascades d'Émeraudes", ja: "💧エメラルドの滝" },
        links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" }
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🌕Circle of Summoning - Sale 15% (expected)", pt: "🌕Círculo de Invocação - Desconto 15% (previsto)", de: "🌕Kreis der Beschwörung - 15% Rabatt (voraussichtlich)", es: "🌕Círculo de Invocación - 15% de Descuento (previsto)", fr: "🌕Cercle d'Invocation - 15% de Réduction (prévu)", ja: "🌕召喚の円 - 15%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌍Altar of the Elements - Sale 10% (expected)", pt: "🌍Altar dos Elementos - Desconto 10% (previsto)", de: "🌍Altar der Elemente - 10% Rabatt (voraussichtlich)", es: "🌍Altar de los Elementos - 10% de Descuento (previsto)", fr: "🌍Autel des Éléments - 10% de Réduction (prévu)", ja: "🌍元素の祭壇 - 10%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Thursday",
    date: "November, 12",
    image: "../../hero-wars-dominion-era/images/events-special/mead-festival-missions/mead-festival-missions-400px.webp",
    alt: "Mead Festival",
    titles: { en: "🐾Mead Festival", pt: "🐾Festival do Hidromel", de: "🐾Metfest", es: "🐾Festival de la Hidromiel", fr: "🐾Festival de l’Hydromel", ja: "🐾蜂蜜酒祭り" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/mead-festival-missions-en.html", de: "", es: "", fr: "", pt: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💧Emerald Waterfalls", pt: "💧Cachoeiras de Esmeralda", de: "💧Smaragdwasserfälle", es: "💧Cascadas de Esmeraldas", fr: "💧Cascades d'Émeraudes", ja: "💧エメラルドの滝" },
        links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" }
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🌕Circle of Summoning - Sale 15% (expected)", pt: "🌕Círculo de Invocação - Desconto 15% (previsto)", de: "🌕Kreis der Beschwörung - 15% Rabatt (voraussichtlich)", es: "🌕Círculo de Invocación - 15% de Descuento (previsto)", fr: "🌕Cercle d'Invocation - 15% de Réduction (prévu)", ja: "🌕召喚の円 - 15%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌍Altar of the Elements - Sale 10% (expected)", pt: "🌍Altar dos Elementos - Desconto 10% (previsto)", de: "🌍Altar der Elemente - 10% Rabatt (voraussichtlich)", es: "🌍Altar de los Elementos - 10% de Descuento (previsto)", fr: "🌍Autel des Éléments - 10% de Réduction (prévu)", ja: "🌍元素の祭壇 - 10%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Friday",
    date: "November, 13",
    image: "../../hero-wars-dominion-era/images/events-special/mead-festival-missions/mead-festival-missions-400px.webp",
    alt: "Mead Festival",
    titles: { en: "🐾Mead Festival", pt: "🐾Festival do Hidromel", de: "🐾Metfest", es: "🐾Festival de la Hidromiel", fr: "🐾Festival de l’Hydromel", ja: "🐾蜂蜜酒祭り" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/mead-festival-missions-en.html", de: "", es: "", fr: "", pt: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🔮Seer's Game", pt: "🔮Jogo do Vidente", de: "🔮Spiel des Sehers", es: "🔮Juego del Vidente", fr: "🔮Jeu du Voyant", ja: "🔮予言者のゲーム" },
        links: { en: "../../hero-wars-dominion-era/events/seers-game-hwde-en.html", pt: "../../hero-wars-dominion-era/events/seers-game-hwde-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💧Emerald Waterfalls", pt: "💧Cachoeiras de Esmeralda", de: "💧Smaragdwasserfälle", es: "💧Cascadas de Esmeraldas", fr: "💧Cascades d'Émeraudes", ja: "💧エメラルドの滝" },
        links: { en: "#section2", pt: "#section2", de: "#section2", es: "#section2", fr: "#section2", ja: "#section2" }
      },
      {
        titles: { en: "🎁Secret Wealth", pt: "🎁Riqueza Secreta", de: "🎁Geheimer Reichtum", es: "🎁Riqueza Secreta", fr: "🎁Richesse Secrète", ja: "🎁秘密の富" },
        links: { en: "#section3", pt: "#section3", de: "#section3", es: "#section3", fr: "#section3", ja: "#section3" }
      },
      {
        titles: { en: "🎁Precious Offer (expected)", pt: "🎁Oferta Preciosa (previsto)", de: "🎁Kostbares Angebot (voraussichtlich)", es: "🎁Oferta Preciosa (previsto)", fr: "🎁Offre Précieuse (prévu)", ja: "🎁貴重なオファー（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emeralds Sale x4 (expected)", pt: "💎Promoção de Esmeraldas x4 (previsto)", de: "💎Smaragd-Angebot x4 (voraussichtlich)", es: "💎Oferta de Esmeraldas x4 (previsto)", fr: "💎Vente d'Émeraudes x4 (prévu)", ja: "💎エメラルドセール x4（予想）" },
        links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" }
      },
      {
        titles: { en: "👗Jhu: New Demonic Skin", pt: "👗Jhu: Nova Skin Demoníaca", de: "👗Jhu: Neuer Dämonischer-Skin", es: "👗Jhu: Nueva Skin Demoníaca", fr: "👗Jhu : Nouveau Skin Démoniaque", ja: "👗Jhu：新悪魔スキン" },
        noStrip: true,
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Saturday",
    date: "November, 14",
    image: "../../hero-wars-dominion-era/images/events-special/mead-festival-missions/mead-festival-missions-400px.webp",
    alt: "Mead Festival",
    titles: { en: "🐾Mead Festival", pt: "🐾Festival do Hidromel", de: "🐾Metfest", es: "🐾Festival de la Hidromiel", fr: "🐾Festival de l’Hydromel", ja: "🐾蜂蜜酒祭り" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/mead-festival-missions-en.html", de: "", es: "", fr: "", pt: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🔮Seer's Game", pt: "🔮Jogo do Vidente", de: "🔮Spiel des Sehers", es: "🔮Juego del Vidente", fr: "🔮Jeu du Voyant", ja: "🔮予言者のゲーム" },
        links: { en: "../../hero-wars-dominion-era/events/seers-game-hwde-en.html", pt: "../../hero-wars-dominion-era/events/seers-game-hwde-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🎁Secret Wealth", pt: "🎁Riqueza Secreta", de: "🎁Geheimer Reichtum", es: "🎁Riqueza Secreta", fr: "🎁Richesse Secrète", ja: "🎁秘密の富" },
        links: { en: "#section3", pt: "#section3", de: "#section3", es: "#section3", fr: "#section3", ja: "#section3" }
      },
      {
        titles: { en: "🎁Precious Offer (expected)", pt: "🎁Oferta Preciosa (previsto)", de: "🎁Kostbares Angebot (voraussichtlich)", es: "🎁Oferta Preciosa (previsto)", fr: "🎁Offre Précieuse (prévu)", ja: "🎁貴重なオファー（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Sunday",
    date: "November, 15",
    image: "../../hero-wars-dominion-era/images/events-special/mead-festival-missions/mead-festival-missions-400px.webp",
    alt: "Mead Festival",
    titles: { en: "🐾Mead Festival", pt: "🐾Festival do Hidromel", de: "🐾Metfest", es: "🐾Festival de la Hidromiel", fr: "🐾Festival de l’Hydromel", ja: "🐾蜂蜜酒祭り" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/mead-festival-missions-en.html", de: "", es: "", fr: "", pt: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "🔮Seer's Game", pt: "🔮Jogo do Vidente", de: "🔮Spiel des Sehers", es: "🔮Juego del Vidente", fr: "🔮Jeu du Voyant", ja: "🔮予言者のゲーム" },
        links: { en: "../../hero-wars-dominion-era/events/seers-game-hwde-en.html", pt: "../../hero-wars-dominion-era/events/seers-game-hwde-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🪆Demon Dolls (expected)", pt: "🪆Bonecas Demoníacas (previsto)", de: "🪆Dämonenpuppen (voraussichtlich)", es: "🪆Muñecas Demoníacas (previsto)", fr: "🪆Poupées Démoniaques (prévu)", ja: "🪆デーモンドール（予想）" },
        links: { en: "#section1", pt: "#section1", de: "#section1", es: "#section1", fr: "#section1", ja: "#section1" }
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Monday",
    date: "November, 16",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-new-hero/unleashing-power-new-hero-400px.webp",
    alt: "Roots of Destiny",
    titles: { en: "🌳Wodryn — Roots of Destiny", pt: "🌳Wodryn — Raízes do Destino", de: "🌳Wodryn — Wurzeln des Schicksals", es: "🌳Wodryn — Raíces del Destino", fr: "🌳Wodryn — Racines du Destin", ja: "🌳Wodryn — 運命の根" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#wodryn-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🧵Weaving Patterns", pt: "🧵Tecendo Padrões", de: "🧵Webmuster", es: "🧵Tejiendo Patrones", fr: "🧵Tissage de Motifs", ja: "🧵ウィービングパターン" },
        links: { en: "../../hero-wars-dominion-era/events/weaving-patterns-en.html", pt: "../../hero-wars-dominion-era/events/weaving-patterns-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏰 Area of Conquest: Titan Territory", pt: "🏰 Área de Conquista: Território dos Titãs", de: "🏰 Eroberungsgebiet: Territorium der Titanen", es: "🏰 Área de Conquista: Territorio de los Titanes", fr: "🏰 Zone de Conquête : Territoire des Titans", ja: "🏰 征服エリア：タイタンの領域" },
        links: { en: "../../hero-wars-dominion-era/events/territory-of-titans-en.html", pt: "../../hero-wars-dominion-era/events/territory-of-titans-pt.html", de: "../../hero-wars-dominion-era/events/territory-of-titans-de.html", es: "../../hero-wars-dominion-era/events/territory-of-titans-es.html", fr: "../../hero-wars-dominion-era/events/territory-of-titans-fr.html", ja: "../../hero-wars-dominion-era/events/territory-of-titans-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "🪆Demon Dolls (expected)", pt: "🪆Bonecas Demoníacas (previsto)", de: "🪆Dämonenpuppen (voraussichtlich)", es: "🪆Muñecas Demoníacas (previsto)", fr: "🪆Poupées Démoniaques (prévu)", ja: "🪆デーモンドール（予想）" },
        links: { en: "#section1", pt: "#section1", de: "#section1", es: "#section1", fr: "#section1", ja: "#section1" }
      },
      {
        titles: { en: "🐾Pet Summoning - Sale 20% (expected)", pt: "🐾Invocação de Pets - Desconto 20% (previsto)", de: "🐾Tierbeschwörung - 20% Rabatt (voraussichtlich)", es: "🐾Invocación de Mascotas - 20% de Descuento (previsto)", fr: "🐾Invocation de Compagnons - 20% de Réduction (prévu)", ja: "🐾ペット召喚 - 20%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌠Astral Seer - Sale 15% (expected)", pt: "🌠Astral Seer - Desconto 15% (previsto)", de: "🌠Astral Seer - 15% Rabatt (voraussichtlich)", es: "🌠Astral Seer - 15% de Descuento (previsto)", fr: "🌠Astral Seer - 15% de Réduction (prévu)", ja: "🌠Astral Seer - 15%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "👗Wodryn: New Sakura Skin", pt: "👗Wodryn: Nova Skin Sakura", de: "👗Wodryn: Neuer Sakura-Skin", es: "👗Wodryn: Nueva Skin Sakura", fr: "👗Wodryn : Nouveau Skin Sakura", ja: "👗Wodryn：新桜スキン" },
        noStrip: true,
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Tuesday",
    date: "November, 17",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-new-hero/unleashing-power-new-hero-400px.webp",
    alt: "Roots of Destiny",
    titles: { en: "🌳Wodryn — Roots of Destiny", pt: "🌳Wodryn — Raízes do Destino", de: "🌳Wodryn — Wurzeln des Schicksals", es: "🌳Wodryn — Raíces del Destino", fr: "🌳Wodryn — Racines du Destin", ja: "🌳Wodryn — 運命の根" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#wodryn-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🧵Weaving Patterns", pt: "🧵Tecendo Padrões", de: "🧵Webmuster", es: "🧵Tejiendo Patrones", fr: "🧵Tissage de Motifs", ja: "🧵ウィービングパターン" },
        links: { en: "../../hero-wars-dominion-era/events/weaving-patterns-en.html", pt: "../../hero-wars-dominion-era/events/weaving-patterns-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏰 Area of Conquest: Titan Territory", pt: "🏰 Área de Conquista: Território dos Titãs", de: "🏰 Eroberungsgebiet: Territorium der Titanen", es: "🏰 Área de Conquista: Territorio de los Titanes", fr: "🏰 Zone de Conquête : Territoire des Titans", ja: "🏰 征服エリア：タイタンの領域" },
        links: { en: "../../hero-wars-dominion-era/events/territory-of-titans-en.html", pt: "../../hero-wars-dominion-era/events/territory-of-titans-pt.html", de: "../../hero-wars-dominion-era/events/territory-of-titans-de.html", es: "../../hero-wars-dominion-era/events/territory-of-titans-es.html", fr: "../../hero-wars-dominion-era/events/territory-of-titans-fr.html", ja: "../../hero-wars-dominion-era/events/territory-of-titans-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "🐾Pet Summoning - Sale 20% (expected)", pt: "🐾Invocação de Pets - Desconto 20% (previsto)", de: "🐾Tierbeschwörung - 20% Rabatt (voraussichtlich)", es: "🐾Invocación de Mascotas - 20% de Descuento (previsto)", fr: "🐾Invocation de Compagnons - 20% de Réduction (prévu)", ja: "🐾ペット召喚 - 20%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌠Astral Seer - Sale 15% (expected)", pt: "🌠Astral Seer - Desconto 15% (previsto)", de: "🌠Astral Seer - 15% Rabatt (voraussichtlich)", es: "🌠Astral Seer - 15% de Descuento (previsto)", fr: "🌠Astral Seer - 15% de Réduction (prévu)", ja: "🌠Astral Seer - 15%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "👗Verdoc & Phyto: Champion Skin — Full Unlock", pt: "👗Verdoc & Phyto: Skin de Campeão — Desbloqueio Completo", de: "👗Verdoc & Phyto: Champion-Skin — Vollständig freigeschaltet", es: "👗Verdoc & Phyto: Skin de Campeón — Desbloqueo Completo", fr: "👗Verdoc & Phyto : Skin de Champion — Déverrouillage complet", ja: "👗Verdoc & Phyto：チャンピオンスキン — 完全解放" },
        links: { en: "../../hero-wars-dominion-era/titans/verdoc-and-phyto-en.html", pt: "../../hero-wars-dominion-era/titans/verdoc-and-phyto-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Wednesday",
    date: "November, 18",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-new-hero/unleashing-power-new-hero-400px.webp",
    alt: "Roots of Destiny",
    titles: { en: "🌳Wodryn — Roots of Destiny", pt: "🌳Wodryn — Raízes do Destino", de: "🌳Wodryn — Wurzeln des Schicksals", es: "🌳Wodryn — Raíces del Destino", fr: "🌳Wodryn — Racines du Destin", ja: "🌳Wodryn — 運命の根" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#wodryn-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🧵Weaving Patterns", pt: "🧵Tecendo Padrões", de: "🧵Webmuster", es: "🧵Tejiendo Patrones", fr: "🧵Tissage de Motifs", ja: "🧵ウィービングパターン" },
        links: { en: "../../hero-wars-dominion-era/events/weaving-patterns-en.html", pt: "../../hero-wars-dominion-era/events/weaving-patterns-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏰 Area of Conquest: Titan Territory", pt: "🏰 Área de Conquista: Território dos Titãs", de: "🏰 Eroberungsgebiet: Territorium der Titanen", es: "🏰 Área de Conquista: Territorio de los Titanes", fr: "🏰 Zone de Conquête : Territoire des Titans", ja: "🏰 征服エリア：タイタンの領域" },
        links: { en: "../../hero-wars-dominion-era/events/territory-of-titans-en.html", pt: "../../hero-wars-dominion-era/events/territory-of-titans-pt.html", de: "../../hero-wars-dominion-era/events/territory-of-titans-de.html", es: "../../hero-wars-dominion-era/events/territory-of-titans-es.html", fr: "../../hero-wars-dominion-era/events/territory-of-titans-fr.html", ja: "../../hero-wars-dominion-era/events/territory-of-titans-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "🐾Pet Summoning - Sale 20% (expected)", pt: "🐾Invocação de Pets - Desconto 20% (previsto)", de: "🐾Tierbeschwörung - 20% Rabatt (voraussichtlich)", es: "🐾Invocación de Mascotas - 20% de Descuento (previsto)", fr: "🐾Invocation de Compagnons - 20% de Réduction (prévu)", ja: "🐾ペット召喚 - 20%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌠Astral Seer - Sale 15% (expected)", pt: "🌠Astral Seer - Desconto 15% (previsto)", de: "🌠Astral Seer - 15% Rabatt (voraussichtlich)", es: "🌠Astral Seer - 15% de Descuento (previsto)", fr: "🌠Astral Seer - 15% de Réduction (prévu)", ja: "🌠Astral Seer - 15%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Thursday",
    date: "November, 19",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-new-hero/unleashing-power-new-hero-400px.webp",
    alt: "Roots of Destiny",
    titles: { en: "🌳Wodryn — Roots of Destiny", pt: "🌳Wodryn — Raízes do Destino", de: "🌳Wodryn — Wurzeln des Schicksals", es: "🌳Wodryn — Raíces del Destino", fr: "🌳Wodryn — Racines du Destin", ja: "🌳Wodryn — 運命の根" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#wodryn-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🧵Weaving Patterns", pt: "🧵Tecendo Padrões", de: "🧵Webmuster", es: "🧵Tejiendo Patrones", fr: "🧵Tissage de Motifs", ja: "🧵ウィービングパターン" },
        links: { en: "../../hero-wars-dominion-era/events/weaving-patterns-en.html", pt: "../../hero-wars-dominion-era/events/weaving-patterns-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏰 Area of Conquest: Titan Territory", pt: "🏰 Área de Conquista: Território dos Titãs", de: "🏰 Eroberungsgebiet: Territorium der Titanen", es: "🏰 Área de Conquista: Territorio de los Titanes", fr: "🏰 Zone de Conquête : Territoire des Titans", ja: "🏰 征服エリア：タイタンの領域" },
        links: { en: "../../hero-wars-dominion-era/events/territory-of-titans-en.html", pt: "../../hero-wars-dominion-era/events/territory-of-titans-pt.html", de: "../../hero-wars-dominion-era/events/territory-of-titans-de.html", es: "../../hero-wars-dominion-era/events/territory-of-titans-es.html", fr: "../../hero-wars-dominion-era/events/territory-of-titans-fr.html", ja: "../../hero-wars-dominion-era/events/territory-of-titans-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "🌌 Cosmic Battle: Titans Edition", pt: "🌌 Batalha Cósmica: Edição Titãs", de: "🌌 Kosmischer Kampf: Titanen-Edition", es: "🌌 Batalla Cósmica: Edición Titanes", fr: "🌌 Combat Cosmique : Édition Titans", ja: "🌌 コズミックバトル：タイタンズエディション" },
        links: { en: "../../hero-wars-dominion-era/events/titan-cosmic-battle-en.html", pt: "../../hero-wars-dominion-era/events/titan-cosmic-battle-pt.html", de: "../../hero-wars-dominion-era/events/titan-cosmic-battle-de.html", es: "../../hero-wars-dominion-era/events/titan-cosmic-battle-es.html", fr: "../../hero-wars-dominion-era/events/titan-cosmic-battle-fr.html", ja: "../../hero-wars-dominion-era/events/titan-cosmic-battle-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "🐾Pet Summoning - Sale 20% (expected)", pt: "🐾Invocação de Pets - Desconto 20% (previsto)", de: "🐾Tierbeschwörung - 20% Rabatt (voraussichtlich)", es: "🐾Invocación de Mascotas - 20% de Descuento (previsto)", fr: "🐾Invocation de Compagnons - 20% de Réduction (prévu)", ja: "🐾ペット召喚 - 20%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌠Astral Seer - Sale 15% (expected)", pt: "🌠Astral Seer - Desconto 15% (previsto)", de: "🌠Astral Seer - 15% Rabatt (voraussichtlich)", es: "🌠Astral Seer - 15% de Descuento (previsto)", fr: "🌠Astral Seer - 15% de Réduction (prévu)", ja: "🌠Astral Seer - 15%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Friday",
    date: "November, 20",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-new-hero/unleashing-power-new-hero-400px.webp",
    alt: "Roots of Destiny",
    titles: { en: "🌳Wodryn — Roots of Destiny", pt: "🌳Wodryn — Raízes do Destino", de: "🌳Wodryn — Wurzeln des Schicksals", es: "🌳Wodryn — Raíces del Destino", fr: "🌳Wodryn — Racines du Destin", ja: "🌳Wodryn — 運命の根" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#wodryn-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🧵Weaving Patterns", pt: "🧵Tecendo Padrões", de: "🧵Webmuster", es: "🧵Tejiendo Patrones", fr: "🧵Tissage de Motifs", ja: "🧵ウィービングパターン" },
        links: { en: "../../hero-wars-dominion-era/events/weaving-patterns-en.html", pt: "../../hero-wars-dominion-era/events/weaving-patterns-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🎡 Fate's Wish", pt: "🎡 Desejo do Destino", de: "🎡 Schicksalswunsch", es: "🎡 Deseo del Destino", fr: "🎡 Vœu du Destin", ja: "🎡 運命の願い" },
        links: { en: "../../hero-wars-dominion-era/events/fates-wish-en.html", pt: "../../hero-wars-dominion-era/events/fates-wish-pt.html", de: "../../hero-wars-dominion-era/events/fates-wish-de.html", es: "../../hero-wars-dominion-era/events/fates-wish-es.html", fr: "../../hero-wars-dominion-era/events/fates-wish-fr.html", ja: "../../hero-wars-dominion-era/events/fates-wish-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "🌌 Cosmic Battle: Titans Edition", pt: "🌌 Batalha Cósmica: Edição Titãs", de: "🌌 Kosmischer Kampf: Titanen-Edition", es: "🌌 Batalla Cósmica: Edición Titanes", fr: "🌌 Combat Cosmique : Édition Titans", ja: "🌌 コズミックバトル：タイタンズエディション" },
        links: { en: "../../hero-wars-dominion-era/events/titan-cosmic-battle-en.html", pt: "../../hero-wars-dominion-era/events/titan-cosmic-battle-pt.html", de: "../../hero-wars-dominion-era/events/titan-cosmic-battle-de.html", es: "../../hero-wars-dominion-era/events/titan-cosmic-battle-es.html", fr: "../../hero-wars-dominion-era/events/titan-cosmic-battle-fr.html", ja: "../../hero-wars-dominion-era/events/titan-cosmic-battle-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "💎Emeralds Sale x5 (expected)", pt: "💎Promoção de Esmeraldas x5 (previsto)", de: "💎Smaragd-Angebot x5 (voraussichtlich)", es: "💎Oferta de Esmeraldas x5 (previsto)", fr: "💎Vente d'Émeraudes x5 (prévu)", ja: "💎エメラルドセール x5（予想）" },
        links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" }
      },
      {
        titles: { en: "🐖Piggy Bank (expected)", pt: "🐖Porquinho (previsto)", de: "🐖Sparschwein (voraussichtlich)", es: "🐖Alcancía (previsto)", fr: "🐖Tirelire (prévu)", ja: "🐖ピギーバンク（予想）" },
        links: { en: "#section4", pt: "#section4", de: "#section4", es: "#section4", fr: "#section4", ja: "#section4" }
      }
    ]
  },
  {
    weekday: "Saturday",
    date: "November, 21",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-new-hero/unleashing-power-new-hero-400px.webp",
    alt: "Roots of Destiny",
    titles: { en: "🌳Wodryn — Roots of Destiny", pt: "🌳Wodryn — Raízes do Destino", de: "🌳Wodryn — Wurzeln des Schicksals", es: "🌳Wodryn — Raíces del Destino", fr: "🌳Wodryn — Racines du Destin", ja: "🌳Wodryn — 運命の根" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#wodryn-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🧵Weaving Patterns", pt: "🧵Tecendo Padrões", de: "🧵Webmuster", es: "🧵Tejiendo Patrones", fr: "🧵Tissage de Motifs", ja: "🧵ウィービングパターン" },
        links: { en: "../../hero-wars-dominion-era/events/weaving-patterns-en.html", pt: "../../hero-wars-dominion-era/events/weaving-patterns-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Hero Power", pt: "🏆Torneio de Poder do Herói", de: "🏆Helden-Kraftturnier", es: "🏆Torneo de Poder del Héroe", fr: "🏆Tournoi de Puissance des Héros", ja: "🏆ヒーローパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/hero-tournament-of-power-en.html", pt: "../../hero-wars-dominion-era/events/hero-tournament-of-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🌌 Cosmic Battle: Titans Edition", pt: "🌌 Batalha Cósmica: Edição Titãs", de: "🌌 Kosmischer Kampf: Titanen-Edition", es: "🌌 Batalla Cósmica: Edición Titanes", fr: "🌌 Combat Cosmique : Édition Titans", ja: "🌌 コズミックバトル：タイタンズエディション" },
        links: { en: "../../hero-wars-dominion-era/events/titan-cosmic-battle-en.html", pt: "../../hero-wars-dominion-era/events/titan-cosmic-battle-pt.html", de: "../../hero-wars-dominion-era/events/titan-cosmic-battle-de.html", es: "../../hero-wars-dominion-era/events/titan-cosmic-battle-es.html", fr: "../../hero-wars-dominion-era/events/titan-cosmic-battle-fr.html", ja: "../../hero-wars-dominion-era/events/titan-cosmic-battle-ja.html" },
        noStrip: true
      },
      {
        titles: { en: "🐖Piggy Bank (expected)", pt: "🐖Porquinho (previsto)", de: "🐖Sparschwein (voraussichtlich)", es: "🐖Alcancía (previsto)", fr: "🐖Tirelire (prévu)", ja: "🐖ピギーバンク（予想）" },
        links: { en: "#section4", pt: "#section4", de: "#section4", es: "#section4", fr: "#section4", ja: "#section4" }
      }
    ]
  },
  {
    weekday: "Sunday",
    date: "November, 22",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-new-hero/unleashing-power-new-hero-400px.webp",
    alt: "Roots of Destiny",
    titles: { en: "🌳Wodryn — Roots of Destiny", pt: "🌳Wodryn — Raízes do Destino", de: "🌳Wodryn — Wurzeln des Schicksals", es: "🌳Wodryn — Raíces del Destino", fr: "🌳Wodryn — Racines du Destin", ja: "🌳Wodryn — 運命の根" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#wodryn-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-new-hero-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🧵Weaving Patterns", pt: "🧵Tecendo Padrões", de: "🧵Webmuster", es: "🧵Tejiendo Patrones", fr: "🧵Tissage de Motifs", ja: "🧵ウィービングパターン" },
        links: { en: "../../hero-wars-dominion-era/events/weaving-patterns-en.html", pt: "../../hero-wars-dominion-era/events/weaving-patterns-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Monday",
    date: "November, 23",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-ascension/unleashing-power-ascension-400px.webp",
    alt: "Path of Legends",
    titles: { en: "🦸K’arkh — Path of Legends", pt: "🦸K’arkh — Caminho das Lendas", de: "🦸K’arkh — Pfad der Legenden", es: "🦸K’arkh — Camino de las Leyendas", fr: "🦸K’arkh — Voie des Légendes", ja: "🦸K’arkh — 伝説の道" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#karkh-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "📦Artifact Chest - Sale 30% (expected)", pt: "📦Baú de Artefatos - Desconto 30% (previsto)", de: "📦Artefakttruhe - 30% Rabatt (voraussichtlich)", es: "📦Cofre de Artefactos - 30% de Descuento (previsto)", fr: "📦Coffre d'Artéfacts - 30% de Réduction (prévu)", ja: "📦アーティファクトチェスト - 30%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌀Soul Atrium - Sale 50% (expected)", pt: "🌀Átrio da Alma - Desconto 50% (previsto)", de: "🌀Seelenatrium - 50% Rabatt (voraussichtlich)", es: "🌀Atrio del Alma - 50% de Descuento (previsto)", fr: "🌀Atrium de l'Âme - 50% de Réduction (prévu)", ja: "🌀ソウルアトリウム - 50%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "👗Amira: New Space Skin", pt: "👗Amira: Nova Skin Espacial", de: "👗Amira: Neuer Weltraum-Skin", es: "👗Amira: Nueva Skin Espacial", fr: "👗Amira : Nouveau Skin Spatial", ja: "👗Amira：新宇宙スキン" },
        links: { en: "../../hero-wars-dominion-era/characters/amira-en.html", pt: "../../hero-wars-dominion-era/characters/amira-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "👗Martha: (name to be confirmed) Skin — Full Unlock", pt: "👗Martha: Skin (nome a confirmar) — Desbloqueio Completo", de: "👗Martha: (Name noch offen)-Skin — Vollständig freigeschaltet", es: "👗Martha: Skin (nombre por confirmar) — Desbloqueo Completo", fr: "👗Martha : Skin (nom à confirmer) — Déverrouillage complet", ja: "👗Martha：（名称未定）スキン — 完全解放" },
        links: { en: "../../hero-wars-dominion-era/characters/martha-en.html", pt: "../../hero-wars-dominion-era/characters/martha-pt.html", de: "../../hero-wars-dominion-era/characters/martha-de.html", es: "../../hero-wars-dominion-era/characters/martha-es.html", fr: "../../hero-wars-dominion-era/characters/martha-fr.html", ja: "../../hero-wars-dominion-era/characters/martha-ja.html" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Tuesday",
    date: "November, 24",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-ascension/unleashing-power-ascension-400px.webp",
    alt: "Path of Legends",
    titles: { en: "🦸K’arkh — Path of Legends", pt: "🦸K’arkh — Caminho das Lendas", de: "🦸K’arkh — Pfad der Legenden", es: "🦸K’arkh — Camino de las Leyendas", fr: "🦸K’arkh — Voie des Légendes", ja: "🦸K’arkh — 伝説の道" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#karkh-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "📦Artifact Chest - Sale 30% (expected)", pt: "📦Baú de Artefatos - Desconto 30% (previsto)", de: "📦Artefakttruhe - 30% Rabatt (voraussichtlich)", es: "📦Cofre de Artefactos - 30% de Descuento (previsto)", fr: "📦Coffre d'Artéfacts - 30% de Réduction (prévu)", ja: "📦アーティファクトチェスト - 30%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌀Soul Atrium - Sale 50% (expected)", pt: "🌀Átrio da Alma - Desconto 50% (previsto)", de: "🌀Seelenatrium - 50% Rabatt (voraussichtlich)", es: "🌀Atrio del Alma - 50% de Descuento (previsto)", fr: "🌀Atrium de l'Âme - 50% de Réduction (prévu)", ja: "🌀ソウルアトリウム - 50%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Wednesday",
    date: "November, 25",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-ascension/unleashing-power-ascension-400px.webp",
    alt: "Path of Legends",
    titles: { en: "🦸K’arkh — Path of Legends", pt: "🦸K’arkh — Caminho das Lendas", de: "🦸K’arkh — Pfad der Legenden", es: "🦸K’arkh — Camino de las Leyendas", fr: "🦸K’arkh — Voie des Légendes", ja: "🦸K’arkh — 伝説の道" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#karkh-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "📦Artifact Chest - Sale 30% (expected)", pt: "📦Baú de Artefatos - Desconto 30% (previsto)", de: "📦Artefakttruhe - 30% Rabatt (voraussichtlich)", es: "📦Cofre de Artefactos - 30% de Descuento (previsto)", fr: "📦Coffre d'Artéfacts - 30% de Réduction (prévu)", ja: "📦アーティファクトチェスト - 30%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌀Soul Atrium - Sale 50% (expected)", pt: "🌀Átrio da Alma - Desconto 50% (previsto)", de: "🌀Seelenatrium - 50% Rabatt (voraussichtlich)", es: "🌀Atrio del Alma - 50% de Descuento (previsto)", fr: "🌀Atrium de l'Âme - 50% de Réduction (prévu)", ja: "🌀ソウルアトリウム - 50%オフ（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Thursday",
    date: "November, 26",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-ascension/unleashing-power-ascension-400px.webp",
    alt: "Path of Legends",
    titles: { en: "🦸K’arkh — Path of Legends", pt: "🦸K’arkh — Caminho das Lendas", de: "🦸K’arkh — Pfad der Legenden", es: "🦸K’arkh — Camino de las Leyendas", fr: "🦸K’arkh — Voie des Légendes", ja: "🦸K’arkh — 伝説の道" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#karkh-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🔮Seer's Game", pt: "🔮Jogo do Vidente", de: "🔮Spiel des Sehers", es: "🔮Juego del Vidente", fr: "🔮Jeu du Voyant", ja: "🔮予言者のゲーム" },
        links: { en: "../../hero-wars-dominion-era/events/seers-game-hwde-en.html", pt: "../../hero-wars-dominion-era/events/seers-game-hwde-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "📦Artifact Chest - Sale 30% (expected)", pt: "📦Baú de Artefatos - Desconto 30% (previsto)", de: "📦Artefakttruhe - 30% Rabatt (voraussichtlich)", es: "📦Cofre de Artefactos - 30% de Descuento (previsto)", fr: "📦Coffre d'Artéfacts - 30% de Réduction (prévu)", ja: "📦アーティファクトチェスト - 30%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🌀Soul Atrium - Sale 50% (expected)", pt: "🌀Átrio da Alma - Desconto 50% (previsto)", de: "🌀Seelenatrium - 50% Rabatt (voraussichtlich)", es: "🌀Atrio del Alma - 50% de Descuento (previsto)", fr: "🌀Atrium de l'Âme - 50% de Réduction (prévu)", ja: "🌀ソウルアトリウム - 50%オフ（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "👗Valdur & Echo: New (name to be confirmed) Skin", pt: "👗Valdur & Echo: Nova Skin (nome a confirmar)", de: "👗Valdur & Echo: Neuer (Name noch offen)-Skin", es: "👗Valdur & Echo: Nueva Skin (nombre por confirmar)", fr: "👗Valdur & Echo : Nouveau Skin (nom à confirmer)", ja: "👗Valdur & Echo：新（名称未定）スキン" },
        links: { en: "../../hero-wars-dominion-era/titans/valdur-en.html", pt: "../../hero-wars-dominion-era/titans/valdur-pt.html", de: "../../hero-wars-dominion-era/titans/valdur-de.html", es: "../../hero-wars-dominion-era/titans/valdur-es.html", fr: "../../hero-wars-dominion-era/titans/valdur-fr.html", ja: "../../hero-wars-dominion-era/titans/valdur-ja.html" },
        noStrip: true
      }
    ]
  },
  {
    weekday: "Friday",
    date: "November, 27",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-ascension/unleashing-power-ascension-400px.webp",
    alt: "Path of Legends",
    titles: { en: "🦸K’arkh — Path of Legends", pt: "🦸K’arkh — Caminho das Lendas", de: "🦸K’arkh — Pfad der Legenden", es: "🦸K’arkh — Camino de las Leyendas", fr: "🦸K’arkh — Voie des Légendes", ja: "🦸K’arkh — 伝説の道" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#karkh-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🔮Seer's Game", pt: "🔮Jogo do Vidente", de: "🔮Spiel des Sehers", es: "🔮Juego del Vidente", fr: "🔮Jeu du Voyant", ja: "🔮予言者のゲーム" },
        links: { en: "../../hero-wars-dominion-era/events/seers-game-hwde-en.html", pt: "../../hero-wars-dominion-era/events/seers-game-hwde-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emeralds Sale x4 (expected)", pt: "💎Promoção de Esmeraldas x4 (previsto)", de: "💎Smaragd-Angebot x4 (voraussichtlich)", es: "💎Oferta de Esmeraldas x4 (previsto)", fr: "💎Vente d'Émeraudes x4 (prévu)", ja: "💎エメラルドセール x4（予想）" },
        links: { en: "#section5", pt: "#section5", de: "#section5", es: "#section5", fr: "#section5", ja: "#section5" }
      }
    ]
  },
  {
    weekday: "Saturday",
    date: "November, 28",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-ascension/unleashing-power-ascension-400px.webp",
    alt: "Path of Legends",
    titles: { en: "🦸K’arkh — Path of Legends", pt: "🦸K’arkh — Caminho das Lendas", de: "🦸K’arkh — Pfad der Legenden", es: "🦸K’arkh — Camino de las Leyendas", fr: "🦸K’arkh — Voie des Légendes", ja: "🦸K’arkh — 伝説の道" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#karkh-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🏆Tournament of Titan Power", pt: "🏆Torneio de Poder dos Titãs", de: "🏆Titanenkraft-Turnier", es: "🏆Torneo de Poder de Titanes", fr: "🏆Tournoi de Puissance des Titans", ja: "🏆タイタンパワートーナメント" },
        links: { en: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-en.html", pt: "../../hero-wars-dominion-era/events/the-tournament-of-titan-power-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🔮Seer's Game", pt: "🔮Jogo do Vidente", de: "🔮Spiel des Sehers", es: "🔮Juego del Vidente", fr: "🔮Jeu du Voyant", ja: "🔮予言者のゲーム" },
        links: { en: "../../hero-wars-dominion-era/events/seers-game-hwde-en.html", pt: "../../hero-wars-dominion-era/events/seers-game-hwde-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🎁Precious Offer (expected)", pt: "🎁Oferta Preciosa (previsto)", de: "🎁Kostbares Angebot (voraussichtlich)", es: "🎁Oferta Preciosa (previsto)", fr: "🎁Offre Précieuse (prévu)", ja: "🎁貴重なオファー（予想）" },
        labelOnly: true
      }
    ]
  },
  {
    weekday: "Sunday",
    date: "November, 29",
    image: "../../hero-wars-dominion-era/images/events-special/unleashing-power-ascension/unleashing-power-ascension-400px.webp",
    alt: "Path of Legends",
    titles: { en: "🦸K’arkh — Path of Legends", pt: "🦸K’arkh — Caminho das Lendas", de: "🦸K’arkh — Pfad der Legenden", es: "🦸K’arkh — Camino de las Leyendas", fr: "🦸K’arkh — Voie des Légendes", ja: "🦸K’arkh — 伝説の道" },
    links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#karkh-edition", pt: "", de: "", es: "", fr: "", ja: "" },
    noStrip: true,
    extra: [
      {
        titles: { en: "⚡Unleashing Power", pt: "⚡Liberando Poder", de: "⚡Kraft entfesseln", es: "⚡Desatando el Poder", fr: "⚡Libérer la Puissance", ja: "⚡力の解放" },
        links: { en: "../../hero-wars-dominion-era/events-special-hwde/unleashing-power-ascension-en.html#missions", pt: "", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "💎Emerald City", pt: "💎Cidade Esmeralda", de: "💎Smaragdstadt", es: "💎Ciudad Esmeralda", fr: "💎Ville d'Émeraude", ja: "💎エメラルドシティ" },
        links: { en: "../../hero-wars-dominion-era/events/emerald-city-en.html", pt: "../../hero-wars-dominion-era/events/emerald-city-pt.html", de: "", es: "", fr: "", ja: "" },
        noStrip: true
      },
      {
        titles: { en: "🎁Precious Offer (expected)", pt: "🎁Oferta Preciosa (previsto)", de: "🎁Kostbares Angebot (voraussichtlich)", es: "🎁Oferta Preciosa (previsto)", fr: "🎁Offre Précieuse (prévu)", ja: "🎁貴重なオファー（予想）" },
        labelOnly: true
      },
      {
        titles: { en: "🪆Demon Dolls (expected)", pt: "🪆Bonecas Demoníacas (previsto)", de: "🪆Dämonenpuppen (voraussichtlich)", es: "🪆Muñecas Demoníacas (previsto)", fr: "🪆Poupées Démoniaques (prévu)", ja: "🪆デーモンドール（予想）" },
        links: { en: "#section1", pt: "#section1", de: "#section1", es: "#section1", fr: "#section1", ja: "#section1" }
      }
    ]
  },
  {
    weekday: "Monday",
    date: "November, 30",
    image: "../../hero-wars-dominion-era/images/img-shared/demon-dolls-500px.webp",
    alt: "Demon Dolls",
    titles: { en: "🪆Demon Dolls (expected)", pt: "🪆Bonecas Demoníacas (previsto)", de: "🪆Dämonenpuppen (voraussichtlich)", es: "🪆Muñecas Demoníacas (previsto)", fr: "🪆Poupées Démoniaques (prévu)", ja: "🪆デーモンドール（予想）" },
    links: { en: "#section1", pt: "#section1", de: "#section1", es: "#section1", fr: "#section1", ja: "#section1" },
    extra: []
  },
  {
    weekday: "WhatsApp & Discord",
    date: "",
    image: "",
    alt: "Alexandre Games WhatsApp Group",
    titles: { en: "🎁 Join our English WhatsApp group for Hero Wars Dominion Era tips and giveaways!", pt: "🎁 Entre no nosso grupo WhatsApp em Português para dicas de Hero Wars Dominion Era e sorteios!", es: "🎁 ¡Únete a nuestro grupo de WhatsApp en inglés para consejos de Hero Wars Dominion Era y sorteos!", de: "🎁 Trete unserer englischen WhatsApp-Gruppe für Hero Wars Dominion Era-Tipps und Gewinnspiele bei!", fr: "🎁 Rejoignez notre groupe WhatsApp en anglais pour des conseils et des giveaways sur Hero Wars Dominion Era !", ja: "🎁 英語のWhatsAppグループに参加して、ヒーローウォーズドミニオン時代のヒントやギブアウェイをゲット！" },
    links: { en: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", de: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", es: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", fr: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", pt: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY", ja: "https://chat.whatsapp.com/Ls6TKVfqscx87WkugvfQOY" },
    noStrip: true,
    extra: [
      {
        titles: { en: " ", pt: " ", de: " ", es: " ", fr: " ", ja: " " },
        labelOnly: true
      },
      {
        titles: { en: "💬Join Alexandre Games Discord", pt: "💬Entre no Discord Alexandre Games", de: "💬Tritt dem Alexandre Games Discord bei", es: "💬Únete al Discord de Alexandre Games", fr: "💬Rejoignez le Discord Alexandre Games", ja: "💬Alexandre Games Discordに参加しよう" },
        links: { en: "https://discord.gg/37BRnhBv6r", pt: "https://discord.gg/37BRnhBv6r", de: "https://discord.gg/37BRnhBv6r", es: "https://discord.gg/37BRnhBv6r", fr: "https://discord.gg/37BRnhBv6r", ja: "https://discord.gg/37BRnhBv6r" },
        noStrip: true
      }
    ]
  }
];
