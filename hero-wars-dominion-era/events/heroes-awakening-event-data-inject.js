function injectHeroesAwakeningEventContent() {
  const pathname = window.location.pathname;
  let lang = 'en';
  if (pathname.includes('-pt')) lang = 'pt';
  else if (pathname.includes('-de')) lang = 'de';
  else if (pathname.includes('-es')) lang = 'es';
  else if (pathname.includes('-fr')) lang = 'fr';
  else if (pathname.includes('-ja')) lang = 'ja';

  const data = heroesAwakeningEventData[lang];
  const container = document.getElementById('heroes-awakening-event-content');
  if (!container || !data) return;

  const rewards = Array.isArray(data.rewards) ? data.rewards : [];
  const figcaption = data.figcaption || '';
  const title2 = data.title2 || '';
  const para3 = data.para3 || '';
  const para4 = data.para4 || '';
  const para5 = data.para5 || '';
  const title3 = data.title3 || '';
  const para6 = data.para6 || '';
   const para7 = data.para7 || '';
   const title4 = data.title4 || '';
   const para8 = data.para8 || '';
  const para9 = data.para9 || '';
  const para10 = data.para10 || '';
  const para11 = data.para11 || '';
   const para12 = data.para12 || '';
    const para13 = data.para13 || '';
  const rewardsTitle = data.rewardsTitle || '';
  const tableCaption = data.tableCaption || '';
  const rewardLabel = lang === 'pt' ? 'Recompensa' : 'Reward';
  const costLabel = lang === 'pt' ? 'Custo em Moedas de Valor' : "Explorer's Moves Cost";

  let html = `<h2>${data.title}</h2>
<p>${data.para1}</p>
<p>${data.para2}</p>
<figure class="img-review">
  <picture>
    <source media="(min-width: 768px)" srcset="../../hero-wars-dominion-era/images/events/heroes-awakening-event-guide/heroes-awakening-event-guide-1200px.webp">
    <img src="../../hero-wars-dominion-era/images/events/heroes-awakening-event-guide/heroes-awakening-event-guide-500px.webp"
         alt="Heroes Awakening Event - Wallpaper"
         title="Heroes Awakening Event - Hero Wars Dominion Era"
         loading="lazy"
         width="100%">
  </picture>
  <figcaption>${figcaption}</figcaption>
</figure>
<h3>${title2}</h3>
<p>${para3}</p>
<p>${para4}</p>
<p>${para5}</p>
<h2>${title3}</h2>
<p>${para6}</p>
<h2>${title4}</h2>
<p>${para7}</p>
<p>${para8}</p>
<p>${para9}</p>
<p>${para10}</p>
<p>${para11}</p>
<p>${para12}</p>
<p>${para13}</p>
`;

  if (rewards.length > 0) {
    html += `<h2>${rewardsTitle}</h2>
<table class="event-table">
<caption>${tableCaption}</caption>
  <thead>
    <tr>
      <th>${rewardLabel}</th>
      <th>${costLabel}</th>
    </tr>
  </thead>
  <tbody>`;
  }

  rewards.forEach(reward => {
    let td1 = '';
    if (reward.image) {
      td1 = `<div class="reward-cell">
        <img src="${reward.image}" alt="${reward.item}" title="${reward.item} - Hero Wars: Dominion Era" loading="lazy" width="64" height="64">
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
      <td>${reward.cost ? reward.cost : ''}</td>
    </tr>`;
  });

  if (rewards.length > 0) {
    html += `  </tbody>
</table>`;
  }

  container.innerHTML = html;
}

// Chama a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', injectHeroesAwakeningEventContent);