function injectGiveawayContent() {
  const pathname = window.location.pathname;
  let lang = 'en';
  if (pathname.includes('-pt')) lang = 'pt';
  else if (pathname.includes('-de')) lang = 'de';
  else if (pathname.includes('-es')) lang = 'es';
  else if (pathname.includes('-fr')) lang = 'fr';
  else if (pathname.includes('-ja')) lang = 'ja';

  const container = document.getElementById('giveaway-content');

  if (!container) return;

  const announcementSource =
    (window.giveawayAnnouncementData && window.giveawayAnnouncementData[lang]) ||
    (window.giveawayData && window.giveawayData[lang]) ||
    (window.giveawayWinnersData && window.giveawayWinnersData[lang]) ||
    null;

  const giveawaySource =
    (window.giveawayWinnersData && window.giveawayWinnersData[lang]) ||
    (window.giveawayData && window.giveawayData[lang]) ||
    null;

  if (!announcementSource && !giveawaySource) return;

  const announcement = announcementSource
    ? (announcementSource.announcement || announcementSource)
    : {};

  const giveaway = giveawaySource
    ? (giveawaySource.giveaway || giveawaySource)
    : {};
  const announcementBlocks = [announcement.para1, announcement.para2, announcement.para3, announcement.para4, announcement.para5]
    .filter(Boolean)
    .map(content => `<div>${content}</div>`)
    .join('');
  const announcementTitle = announcement.title || announcement.heading;
  const rewards = Array.isArray(giveaway.rewards) ? giveaway.rewards : [];
  const hasAnnouncement = Boolean(announcementTitle || announcementBlocks.trim());
  const hasRewards = rewards.length > 0;

  if (!hasAnnouncement && !hasRewards) return;

  let html = '';

  if (hasAnnouncement) {
    html += `<div class="alexandre-tips">
  ${announcementTitle ? `<h2>${announcementTitle}</h2>` : ''}
${announcementBlocks}
</div>`;
  }

  if (hasRewards) {
    html += `<div class="alexandre-tips giveaway-results">
<h3>${giveaway.rewardsTitle || 'Rewards'}</h3>
<table class="event-table">
<caption>${giveaway.tableCaption || ''}</caption>
  <thead>
    <tr>
      <th>Rewards</th>
      <th>Winners ID</th>
    </tr>
  </thead>
  <tbody>`;

    rewards.forEach(reward => {
      let td1 = '';
      if (reward.images && reward.images.length > 0) {
        const imgs = reward.images.map(src => `<img src="${src}" alt="${reward.item}" title="${reward.item} - Hero Wars Alliance" loading="lazy" width="64" height="64">`).join('');
        td1 = `<div class="reward-cell">${imgs}<span>${reward.item}</span></div>`;
      } else if (reward.image) {
        td1 = `<div class="reward-cell">
        <img src="${reward.image}" alt="${reward.item}" title="${reward.item} - Hero Wars Alliance" loading="lazy" width="64" height="64">
        <span>${reward.item}</span>
      </div>`;
      } else if (
        reward.item === 'Total' ||
        reward.item === 'Gesamt' ||
        reward.item === '合計' ||
        (reward.item && reward.item.includes('Total')) ||
        (reward.item && reward.item.includes('Gesamt')) ||
        (reward.item && reward.item.includes('合計'))
      ) {
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
</table>
</div>`;
  }

  container.innerHTML = html;
}

// Chama a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', injectGiveawayContent);
