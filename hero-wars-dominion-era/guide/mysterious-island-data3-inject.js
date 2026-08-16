//data3-copy: "mysteriousIslandData",
function injectMysteriousIslandContent3() {
  const pathname = window.location.pathname;
  let lang = 'en';
  if (pathname.includes('-pt')) lang = 'pt';
  else if (pathname.includes('-de')) lang = 'de';
  else if (pathname.includes('-es')) lang = 'es';
  else if (pathname.includes('-fr')) lang = 'fr';
  else if (pathname.includes('-ja')) lang = 'ja';

  const data = mysteriousIslandData3[lang];
  const container = document.getElementById('mysterious-island-content3');

  if (!data || !container) {
    return;
  }

  let html = `<h3>${data.title}</h3>
<p>${data.para1}</p>
<p>${data.para2}</p>
<figure>
  <picture>
    <source media="(min-width: 768px)" srcset="../../hero-wars-dominion-era/images/guides/mysterious-island/valdur-map-1200px.webp">
    <img src="../../hero-wars-dominion-era/images/guides/mysterious-island/valdur-map-800px.webp"
         alt="Valdur Map Hero Wars - Wallpaper"
         title="Valdur Map Hero Wars - Hero Wars Dominion Era"
         loading="lazy"
         width="100%">
  </picture>
  <figcaption>${data.figcaption}</figcaption>
</figure>
<p>${data.para3}</p>`;

  if (data.rewardsTitle && data.tableCaption && Array.isArray(data.rewards) && data.rewards.length > 0) {
    html += `<h2>${data.rewardsTitle}</h2>
<table class="event-table">
<caption>${data.tableCaption}</caption>
  <thead>
    <tr>
      <th>Reward</th>
      <th>Explorer's Moves Cost</th>
    </tr>
  </thead>
  <tbody>`;

    data.rewards.forEach(reward => {
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

    html += `  </tbody>
</table>`;
  }

  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', injectMysteriousIslandContent3);
