/*
Formato atual aceito:

1) Legado, um bloco unico de aviso ou sorteio:
{
  en: {
    title: '... ',
    para1: '... ',
    para2: '... ',
    rewardsTitle: '... ',
    tableCaption: '... ',
    rewards: [{ item: '...', winner_id: '...', image: '../../images/123.webp' }]
  }
}

2) Novo formato, com secoes separadas:
{
  en: {
    announcement: {
      title: 'Promo / aviso',
      para1: '... ',
      para2: '... '
    },
    giveaway: {
      rewardsTitle: 'Giveaway rewards',
      tableCaption: 'Table: ...',
      rewards: [{ item: '...', winner_id: '...', image: '../../images/123.webp' }]
    }
  }
}

Se voce quiser manter este arquivo apenas para avisos, basta preencher announcement
ou continuar usando title + para1..para5 sem rewards.
*/
window.giveawayAnnouncementData = {
  pt: {
    title: "🔥 VENDA ANTECIPADA EXCLUSIVA: KENDLE CHEGOU! 🔥",
    para1: "Atenção, Guardiões! Kendle estará disponível para compra antes mesmo do início oficial da temporada. Uma chance única para desbloquear a heroína antes de todos os outros jogadores!",
    para2: "<p><b>📝 COMO FUNCIONA:</b></p><ol><li>1️⃣ Acesse o <strong>Hero Wars Hub</strong>.</li><li>2️⃣ Compre as <strong>Pedras de Alma da Kendle</strong>.</li><li>3️⃣ Invoque Kendle imediatamente e saia na frente no meta.</li></ol>",
    para3: "<div style=\"text-align:center; margin:25px 0;\"><p>👉 <b>DISPONÍVEL NA QUINTA-FEIRA</b></p><p>🕒 Horário exato ainda será anunciado (provavelmente à noite no horário europeu).</p></div>",
    para4: "<p>💎 Vai comprar <strong>Pedras de Alma da Kendle</strong>? Use o código <strong>ALEXANDREGAMES</strong> na loja Hub:</p><p><a href=\"https://hwa.nexters.com/c/ALEXANDREGAMES\" target=\"_blank\" rel=\"noopener\">👉 Hero Wars Hub Store</a></p>",
    para5: "<p>📘 Curioso para saber como a Kendle pode mudar o meta com <strong>dano puro crítico</strong>? Leia nosso guia completo:</p><p><a href=\"https://alexandregames.com/hero-wars-alliance/characters-guide/kendle-pt.html\" target=\"_blank\" rel=\"noopener\">👉 Guia Completo da Kendle</a></p>"
  },

  en: {
    title: "🔥 EXCLUSIVE EARLY SALE: KENDLE IS HERE! 🔥",
    para1: "Attention, Guardians! Kendle will be available for purchase before her official season begins. A unique chance to unlock the hero before everyone else!",
    para2: "<p><b>📝 HOW IT WORKS:</b></p><ol><li>1️⃣ Visit the <strong>Hero Wars Hub</strong>.</li><li>2️⃣ Buy <strong>Kendle Soul Stones</strong>.</li><li>3️⃣ Summon Kendle immediately and get ahead in the meta.</li></ol>",
    para3: "<div style=\"text-align:center; margin:25px 0;\"><p>👉 <b>AVAILABLE THURSDAY</b></p><p>🕒 Exact time TBA (likely evening in Europe).</p></div>",
    para4: "<p>💎 Buying <strong>Kendle Soul Stones</strong>? Use code <strong>ALEXANDREGAMES</strong> in the Hub Store:</p><p><a href=\"https://hwa.nexters.com/c/ALEXANDREGAMES\" target=\"_blank\" rel=\"noopener\">👉 Hero Wars Hub Store</a></p>",
    para5: "<p>📘 Curious how Kendle can change the meta with <strong>critical pure damage</strong>? Read our full guide:</p><p><a href=\"https://alexandregames.com/hero-wars-alliance/characters-guide/kendle-en.html\" target=\"_blank\" rel=\"noopener\">👉 Full Kendle Guide</a></p>"
  },

  es: {
    title: "🔥 VENTA ANTICIPADA EXCLUSIVA: ¡KENDLE YA ESTÁ AQUÍ! 🔥",
    para1: "¡Atención, Guardianes! Kendle estará disponible para compra antes del inicio oficial de su temporada. ¡Una oportunidad única para desbloquearla antes que todos!",
    para2: "<p><b>📝 CÓMO FUNCIONA:</b></p><ol><li>1️⃣ Entra al <strong>Hero Wars Hub</strong>.</li><li>2️⃣ Compra <strong>Piedras de Alma de Kendle</strong>.</li><li>3️⃣ Invoca a Kendle inmediatamente y adelántate al meta.</li></ol>",
    para3: "<div style=\"text-align:center; margin:25px 0;\"><p>👉 <b>DISPONIBLE EL JUEVES</b></p><p>🕒 Hora exacta por confirmar (probablemente por la noche en Europa).</p></div>",
    para4: "<p>💎 ¿Vas a comprar <strong>Piedras de Alma de Kendle</strong>? Usa el código <strong>ALEXANDREGAMES</strong> en la tienda Hub:</p><p><a href=\"https://hwa.nexters.com/c/ALEXANDREGAMES\" target=\"_blank\" rel=\"noopener\">👉 Hero Wars Hub Store</a></p>",
    para5: "<p>📘 ¿Quieres saber cómo Kendle puede cambiar el meta con <strong>daño puro crítico</strong>? Lee nuestra guía completa:</p><p><a href=\"https://alexandregames.com/hero-wars-alliance/characters-guide/kendle-es.html\" target=\"_blank\" rel=\"noopener\">👉 Guía Completa de Kendle</a></p>"
  },

  de: {
    title: "🔥 EXKLUSIVER FRÜHVERKAUF: KENDLE IST DA! 🔥",
    para1: "Achtung, Wächter! Kendle wird schon vor dem offiziellen Start ihrer Saison erhältlich sein. Eine einmalige Chance, die Heldin vor allen anderen freizuschalten!",
    para2: "<p><b>📝 SO FUNKTIONIERT ES:</b></p><ol><li>1️⃣ Besuche den <strong>Hero Wars Hub</strong>.</li><li>2️⃣ Kaufe <strong>Kendle-Seelensteine</strong>.</li><li>3️⃣ Beschwöre Kendle sofort und sichere dir einen Vorteil.</li></ol>",
    para3: "<div style=\"text-align:center; margin:25px 0;\"><p>👉 <b>VERFÜGBAR AM DONNERSTAG</b></p><p>🕒 Genaue Uhrzeit folgt (wahrscheinlich abends in Europa).</p></div>",
    para4: "<p>💎 Kaufst du <strong>Kendle-Seelensteine</strong>? Nutze den Code <strong>ALEXANDREGAMES</strong> im Hub Store:</p><p><a href=\"https://hwa.nexters.com/c/ALEXANDREGAMES\" target=\"_blank\" rel=\"noopener\">👉 Hero Wars Hub Store</a></p>",
    para5: "<p>📘 Neugierig, wie Kendle das Meta mit <strong>kritischem reinem Schaden</strong> verändern kann? Lies unseren kompletten Guide:</p><p><a href=\"https://alexandregames.com/hero-wars-alliance/characters-guide/kendle-de.html\" target=\"_blank\" rel=\"noopener\">👉 Vollständiger Kendle Guide</a></p>"
  },

  fr: {
    title: "🔥 VENTE ANTICIPÉE EXCLUSIVE : KENDLE EST LÀ ! 🔥",
    para1: "Attention, Gardiens ! Kendle sera disponible à l’achat avant le début officiel de sa saison. Une chance unique de la débloquer avant tout le monde !",
    para2: "<p><b>📝 COMMENT ÇA MARCHE :</b></p><ol><li>1️⃣ Rendez-vous sur le <strong>Hero Wars Hub</strong>.</li><li>2️⃣ Achetez des <strong>Pierres d’Âme de Kendle</strong>.</li><li>3️⃣ Invoquez Kendle immédiatement et prenez l’avantage.</li></ol>",
    para3: "<div style=\"text-align:center; margin:25px 0;\"><p>👉 <b>DISPONIBLE JEUDI</b></p><p>🕒 Heure exacte à confirmer (probablement le soir en Europe).</p></div>",
    para4: "<p>💎 Vous allez acheter des <strong>Pierres d’Âme de Kendle</strong> ? Utilisez le code <strong>ALEXANDREGAMES</strong> dans la boutique Hub :</p><p><a href=\"https://hwa.nexters.com/c/ALEXANDREGAMES\" target=\"_blank\" rel=\"noopener\">👉 Hero Wars Hub Store</a></p>",
    para5: "<p>📘 Curieux de savoir comment Kendle peut changer la méta avec des <strong>dégâts purs critiques</strong> ? Lisez notre guide complet :</p><p><a href=\"https://alexandregames.com/hero-wars-alliance/characters-guide/kendle-fr.html\" target=\"_blank\" rel=\"noopener\">👉 Guide Complet de Kendle</a></p>"
  },

  ja: {
    title: "🔥 限定先行販売：KENDLE登場！🔥",
    para1: "ガーディアンの皆さん注目！Kendle は公式シーズン開始前に購入可能になります。他のプレイヤーより先に入手できる特別なチャンスです！",
    para2: "<p><b>📝 入手方法:</b></p><ol><li>1️⃣ <strong>Hero Wars Hub</strong> にアクセス。</li><li>2️⃣ <strong>Kendleソウルストーン</strong> を購入。</li><li>3️⃣ すぐに召喚して先行しましょう。</li></ol>",
    para3: "<div style=\"text-align:center; margin:25px 0;\"><p>👉 <b>木曜日に販売開始</b></p><p>🕒 正確な時間は後日発表（ヨーロッパ夜予定）。</p></div>",
    para4: "<p>💎 <strong>Kendleソウルストーン</strong> を購入予定ですか？ Hubストアでコード <strong>ALEXANDREGAMES</strong> を使用してください：</p><p><a href=\"https://hwa.nexters.com/c/ALEXANDREGAMES\" target=\"_blank\" rel=\"noopener\">👉 Hero Wars Hub Store</a></p>",
    para5: "<p>📘 Kendle が <strong>クリティカル純ダメージ</strong> でメタをどう変えるか気になりますか？ 完全ガイドはこちら：</p><p><a href=\"https://alexandregames.com/hero-wars-alliance/characters-guide/kendle-ja.html\" target=\"_blank\" rel=\"noopener\">👉 Kendle 完全ガイド</a></p>"
  }
};
