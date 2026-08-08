(function () {
  const VIDEO_URL = "https://youtu.be/eExyBI0fhDg";
  const IMAGE_BASE = "../../hero-wars-alliance/images/events/shared/";

  function createRewards(labels) {
    return Array.from({ length: 5 }, (_, index) => ({
      item: labels.package,
      winner_label: `${labels.winner} ${index + 1}`,
      winner_id: labels.pending,
      images: [
        { src: `${IMAGE_BASE}meta-cube.webp`, caption: labels.metacubes },
        { src: `${IMAGE_BASE}hydra-coin.webp`, caption: labels.hydraCoins },
        { src: `${IMAGE_BASE}lucky-avatar.webp`, caption: labels.avatar }
      ]
    }));
  }

  window.giveawayWinnersData = {
    pt: {
      title: "🎉 SORTEIO DE METACUBOS E MOEDAS DE HIDRA!",
      para1: "Este sorteio terá <b>cinco vencedores</b>, e cada vencedor receberá o pacote completo de prêmios abaixo!",
      para2: `<p><b>📝 COMO PARTICIPAR:</b></p><ol class="giveaway-entry-list"><li>Acesse o vídeo do sorteio no canal <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer"><b>Alexandre Games Alliance</b></a>.</li><li>Inscreva-se no canal.</li><li>Deixe o seu <b>Game ID</b> em um comentário no vídeo.</li></ol>`,
      para3: `<div class="giveaway-video-cta"><a class="giveaway-video-button" href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">ASSISTIR AO VÍDEO E PARTICIPAR</a></div>`,
      para4: "🎁 <b>CADA VENCEDOR RECEBERÁ:</b><ul><li><b>5.000 Metacubos</b></li><li><b>10.000 Moedas de Hidra</b></li><li>O avatar exclusivo <b>Lucky Boxy</b></li></ul><p>🎲 Os cinco vencedores serão sorteados e anunciados no dia <b>10 de agosto</b>.</p>",
      rewardsTitle: "PRÊMIOS PARA CADA UM DOS 5 VENCEDORES",
      tableCaption: "Prêmios do sorteio e IDs dos cinco vencedores",
      rewardHeader: "Prêmios de cada vencedor",
      winnerHeader: "ID do vencedor",
      rewards: createRewards({
        package: "5.000 Metacubos + 10.000 Moedas de Hidra + Avatar Lucky Boxy",
        winner: "Vencedor",
        pending: "A anunciar",
        metacubes: "5.000 Metacubos",
        hydraCoins: "10.000 Moedas de Hidra",
        avatar: "Avatar Lucky Boxy"
      })
    },

    en: {
      title: "🎉 METACUBES AND HYDRA COINS GIVEAWAY!",
      para1: "This giveaway will have <b>five winners</b>, and each winner will receive the complete prize bundle below!",
      para2: `<p><b>📝 HOW TO ENTER:</b></p><ol class="giveaway-entry-list"><li>Open the giveaway video on the <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer"><b>Alexandre Games Alliance</b></a> channel.</li><li>Subscribe to the channel.</li><li>Leave your <b>Game ID</b> in a comment on the video.</li></ol>`,
      para3: `<div class="giveaway-video-cta"><a class="giveaway-video-button" href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">WATCH THE VIDEO AND ENTER</a></div>`,
      para4: "🎁 <b>EACH WINNER WILL RECEIVE:</b><ul><li><b>5,000 Metacubes</b></li><li><b>10,000 Hydra Coins</b></li><li>The exclusive <b>Lucky Boxy Avatar</b></li></ul><p>🎲 The five winners will be drawn and announced on <b>August 10</b>.</p>",
      rewardsTitle: "PRIZES FOR EACH OF THE 5 WINNERS",
      tableCaption: "Giveaway prizes and the five winners' IDs",
      rewardHeader: "Each winner's prizes",
      winnerHeader: "Winner ID",
      rewards: createRewards({
        package: "5,000 Metacubes + 10,000 Hydra Coins + Lucky Boxy Avatar",
        winner: "Winner",
        pending: "To be announced",
        metacubes: "5,000 Metacubes",
        hydraCoins: "10,000 Hydra Coins",
        avatar: "Lucky Boxy Avatar"
      })
    },

    de: {
      title: "🎉 METAWÜRFEL- UND HYDRA-MÜNZEN-GEWINNSPIEL!",
      para1: "Bei diesem Gewinnspiel gibt es <b>fünf Gewinner</b>. Jeder Gewinner erhält das vollständige Preispaket unten!",
      para2: `<p><b>📝 SO NIMMST DU TEIL:</b></p><ol class="giveaway-entry-list"><li>Öffne das Gewinnspielvideo auf dem Kanal <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer"><b>Alexandre Games Alliance</b></a>.</li><li>Abonniere den Kanal.</li><li>Hinterlasse deine <b>Spiel-ID</b> in einem Kommentar unter dem Video.</li></ol>`,
      para3: `<div class="giveaway-video-cta"><a class="giveaway-video-button" href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">VIDEO ANSEHEN UND TEILNEHMEN</a></div>`,
      para4: "🎁 <b>JEDER GEWINNER ERHÄLT:</b><ul><li><b>5.000 Metawürfel</b></li><li><b>10.000 Hydra-Münzen</b></li><li>Den exklusiven <b>Lucky Boxy-Avatar</b></li></ul><p>🎲 Die fünf Gewinner werden ausgelost und am <b>10. August</b> bekannt gegeben.</p>",
      rewardsTitle: "PREISE FÜR JEDEN DER 5 GEWINNER",
      tableCaption: "Gewinnspielpreise und IDs der fünf Gewinner",
      rewardHeader: "Preise pro Gewinner",
      winnerHeader: "Gewinner-ID",
      rewards: createRewards({
        package: "5.000 Metawürfel + 10.000 Hydra-Münzen + Lucky Boxy-Avatar",
        winner: "Gewinner",
        pending: "Wird bekannt gegeben",
        metacubes: "5.000 Metawürfel",
        hydraCoins: "10.000 Hydra-Münzen",
        avatar: "Lucky Boxy-Avatar"
      })
    },

    es: {
      title: "🎉 ¡SORTEO DE METACUBOS Y MONEDAS DE HIDRA!",
      para1: "Este sorteo tendrá <b>cinco ganadores</b>, y cada ganador recibirá el paquete completo de premios que aparece abajo.",
      para2: `<p><b>📝 CÓMO PARTICIPAR:</b></p><ol class="giveaway-entry-list"><li>Abre el video del sorteo en el canal <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer"><b>Alexandre Games Alliance</b></a>.</li><li>Suscríbete al canal.</li><li>Deja tu <b>ID del juego</b> en un comentario del video.</li></ol>`,
      para3: `<div class="giveaway-video-cta"><a class="giveaway-video-button" href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">VER EL VIDEO Y PARTICIPAR</a></div>`,
      para4: "🎁 <b>CADA GANADOR RECIBIRÁ:</b><ul><li><b>5.000 Metacubos</b></li><li><b>10.000 Monedas de Hidra</b></li><li>El exclusivo <b>Avatar Lucky Boxy</b></li></ul><p>🎲 Los cinco ganadores serán sorteados y anunciados el <b>10 de agosto</b>.</p>",
      rewardsTitle: "PREMIOS PARA CADA UNO DE LOS 5 GANADORES",
      tableCaption: "Premios del sorteo e ID de los cinco ganadores",
      rewardHeader: "Premios de cada ganador",
      winnerHeader: "ID del ganador",
      rewards: createRewards({
        package: "5.000 Metacubos + 10.000 Monedas de Hidra + Avatar Lucky Boxy",
        winner: "Ganador",
        pending: "Por anunciar",
        metacubes: "5.000 Metacubos",
        hydraCoins: "10.000 Monedas de Hidra",
        avatar: "Avatar Lucky Boxy"
      })
    },

    fr: {
      title: "🎉 GIVEAWAY MÉTACUBES ET PIÈCES D'HYDRE !",
      para1: "Ce giveaway aura <b>cinq gagnants</b>, et chaque gagnant recevra le lot complet présenté ci-dessous !",
      para2: `<p><b>📝 COMMENT PARTICIPER :</b></p><ol class="giveaway-entry-list"><li>Ouvrez la vidéo du giveaway sur la chaîne <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer"><b>Alexandre Games Alliance</b></a>.</li><li>Abonnez-vous à la chaîne.</li><li>Laissez votre <b>ID de jeu</b> dans un commentaire sous la vidéo.</li></ol>`,
      para3: `<div class="giveaway-video-cta"><a class="giveaway-video-button" href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">VOIR LA VIDÉO ET PARTICIPER</a></div>`,
      para4: "🎁 <b>CHAQUE GAGNANT RECEVRA :</b><ul><li><b>5 000 Métacubes</b></li><li><b>10 000 Pièces d'Hydre</b></li><li>L'<b>Avatar Lucky Boxy</b> exclusif</li></ul><p>🎲 Les cinq gagnants seront tirés au sort et annoncés le <b>10 août</b>.</p>",
      rewardsTitle: "LOTS POUR CHACUN DES 5 GAGNANTS",
      tableCaption: "Lots du giveaway et ID des cinq gagnants",
      rewardHeader: "Lots de chaque gagnant",
      winnerHeader: "ID du gagnant",
      rewards: createRewards({
        package: "5 000 Métacubes + 10 000 Pièces d'Hydre + Avatar Lucky Boxy",
        winner: "Gagnant",
        pending: "À annoncer",
        metacubes: "5 000 Métacubes",
        hydraCoins: "10 000 Pièces d'Hydre",
        avatar: "Avatar Lucky Boxy"
      })
    },

    ja: {
      title: "🎉 メタキューブ＆ヒドラコイン プレゼント！",
      para1: "このプレゼント企画では<b>5名様</b>が当選し、各当選者に以下の賞品セットをすべてプレゼントします！",
      para2: `<p><b>📝 応募方法:</b></p><ol class="giveaway-entry-list"><li><a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer"><b>Alexandre Games Alliance</b></a>チャンネルのプレゼント動画を開きます。</li><li>チャンネル登録をします。</li><li>動画のコメント欄にあなたの<b>ゲームID</b>を投稿します。</li></ol>`,
      para3: `<div class="giveaway-video-cta"><a class="giveaway-video-button" href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">動画を見て応募する</a></div>`,
      para4: "🎁 <b>各当選者への賞品:</b><ul><li><b>メタキューブ 5,000個</b></li><li><b>ヒドラコイン 10,000枚</b></li><li>限定<b>Lucky Boxyアバター</b></li></ul><p>🎲 5名の当選者は抽選で選ばれ、<b>8月10日</b>に発表されます。</p>",
      rewardsTitle: "5名の各当選者への賞品",
      tableCaption: "プレゼント賞品と5名の当選者ID",
      rewardHeader: "各当選者への賞品",
      winnerHeader: "当選者ID",
      rewards: createRewards({
        package: "メタキューブ 5,000個 + ヒドラコイン 10,000枚 + Lucky Boxyアバター",
        winner: "当選者",
        pending: "後日発表",
        metacubes: "メタキューブ 5,000個",
        hydraCoins: "ヒドラコイン 10,000枚",
        avatar: "Lucky Boxyアバター"
      })
    }
  };
})();
