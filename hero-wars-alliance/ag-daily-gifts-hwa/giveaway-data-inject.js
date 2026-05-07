function injectGiveawayContent() {
  const pathname = window.location.pathname;
  let lang = 'en';
  if (pathname.includes('-pt')) lang = 'pt';
  else if (pathname.includes('-de')) lang = 'de';
  else if (pathname.includes('-es')) lang = 'es';
  else if (pathname.includes('-fr')) lang = 'fr';
  else if (pathname.includes('-ja')) lang = 'ja';

  const data = giveawayData[lang];
  const container = document.getElementById('giveaway-content');

  let html = `<div class="alexandre-tips">
  <h2>${data.title}</h2>
<p>${data.para1}</p>
<p>${data.para2}</p>
<!--
<figure>
  <picture>
    <source media="(min-width: 768px)" srcset="../../hero-wars-dominion-era/images/guides/mysterious-island/april-map1-1200px.webp">
    <img src="../../hero-wars-dominion-era/images/guides/mysterious-island/april-map1-800px.webp"
         alt="Mysterious Island April Map 1 - Wallpaper"
         title="Mysterious Island April Map 1 - Hero Wars Dominion Era"
         loading="lazy"
         width="100%">
  </picture>
  <figcaption>${data.figcaption}</figcaption>
</figure>-->
<p>${data.para3}</p>
<p>${data.para4}</p>
<p>${data.para5}</p>
<h3>${data.rewardsTitle}</h3>
<table class="event-table">
<caption>${data.tableCaption}</caption>
  <thead>
    <tr>
      <th>Rewards</th>
      <th>Winners ID</th>
    </tr>
  </thead>
  <tbody></div>`;

  data.rewards.forEach(reward => {
    let td1 = '';
    if (reward.image) {
      td1 = `<div class="reward-cell">
        <img src="${reward.image}" alt="${reward.item}" title="${reward.item} - Hero Wars Alliance" loading="lazy" width="64" height="64">
        <span>${reward.item}</span>
      </div>`;
    } else if (reward.item === 'Total' || reward.item === 'Gesamt' || reward.item === '合計' || reward.item.includes('Total') || reward.item.includes('Gesamt') || reward.item.includes('合計')) {
      td1 = `<strong>${reward.item}</strong>`;
    } else if (reward.item === '') {
      td1 = '';
    } else {
      td1 = `<strong>${reward.item}</strong>`;
    }
    html += `<tr${reward.item === 'Total' || reward.item === 'Gesamt' || reward.item === '合計' ? ' class="total-row"' : ''}>
      <td>${td1}</td>
      <td>${reward.winner_id ? reward.winner_id : ''}</td>
    </tr>`;
  });

  html += `  </tbody>
</table>`;

  container.innerHTML = html;
}

// Chama a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', injectGiveawayContent);
