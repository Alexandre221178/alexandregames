function escapeGiveawayHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function injectGiveawayStyles() {
  if (document.getElementById('giveaway-responsive-styles')) return;

  const style = document.createElement('style');
  style.id = 'giveaway-responsive-styles';
  style.textContent = `
    #giveaway-content {
      max-width: 100%;
      overflow: hidden;
    }

    #giveaway-content .alexandre-tips {
      box-sizing: border-box;
      max-width: 100%;
      font-size: clamp(1rem, 2vw, 1.25rem) !important;
      line-height: 1.55;
    }

    #giveaway-content .alexandre-tips p {
      font-size: inherit !important;
      font-style: normal !important;
    }

    #giveaway-content h2,
    #giveaway-content h3,
    #giveaway-content li {
      overflow-wrap: anywhere;
    }

    #giveaway-content .giveaway-entry-list {
      padding-left: 1.4em;
    }

    #giveaway-content .giveaway-video-cta {
      margin: 1.25rem 0;
      text-align: center;
    }

    #giveaway-content .giveaway-video-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      max-width: 100%;
      min-height: 48px;
      padding: 0.8rem 1.25rem;
      border-radius: 8px;
      background: #d71920;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.22);
      color: #fff;
      font-weight: 700;
      line-height: 1.25;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }

    #giveaway-content .giveaway-video-button:hover,
    #giveaway-content .giveaway-video-button:focus-visible {
      background: #b9151b;
      color: #fff;
      transform: translateY(-1px);
    }

    #giveaway-content .giveaway-results {
      overflow: hidden;
    }

    #giveaway-content .giveaway-results .event-table {
      width: 100%;
      min-width: 0;
      margin: 0;
      table-layout: fixed;
      border-collapse: collapse;
    }

    #giveaway-content .giveaway-results th:first-child {
      width: 76%;
    }

    #giveaway-content .giveaway-results th,
    #giveaway-content .giveaway-results td {
      box-sizing: border-box;
      padding: 0.75rem;
      overflow-wrap: anywhere;
      vertical-align: middle;
    }

    #giveaway-content .giveaway-reward-cell {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      gap: 0.75rem;
      width: 100%;
      margin: 0;
    }

    #giveaway-content .giveaway-reward-item {
      display: flex;
      flex: 1 1 110px;
      flex-direction: column;
      align-items: center;
      max-width: 150px;
      margin: 0;
      text-align: center;
    }

    #giveaway-content .giveaway-reward-item img {
      width: 72px;
      height: 72px;
      margin: 0 auto 0.4rem;
      border: 0;
      object-fit: contain;
    }

    #giveaway-content .giveaway-reward-item figcaption {
      font-size: 0.82rem;
      font-weight: 700;
      line-height: 1.25;
    }

    #giveaway-content .giveaway-package-summary {
      flex-basis: 100%;
      width: 100%;
      font-size: 0.88rem;
      font-weight: 600;
      line-height: 1.35;
      text-align: center;
    }

    #giveaway-content .giveaway-winner {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      align-items: center;
    }

    @media (max-width: 600px) {
      #giveaway-content .alexandre-tips {
        padding: 0.75rem;
        margin: 1rem 0;
        border-left-width: 4px;
      }

      #giveaway-content .alexandre-tips h2 {
        font-size: 1.35rem;
        line-height: 1.25;
      }

      #giveaway-content .giveaway-video-button {
        width: 100%;
      }

      #giveaway-content .giveaway-results .event-table,
      #giveaway-content .giveaway-results tbody,
      #giveaway-content .giveaway-results tr,
      #giveaway-content .giveaway-results td {
        display: block;
        width: 100%;
      }

      #giveaway-content .giveaway-results thead {
        display: none;
      }

      #giveaway-content .giveaway-results tr {
        box-sizing: border-box;
        margin: 0 0 0.9rem;
        border: 1px solid #aeb8c2;
        border-radius: 10px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.5);
      }

      #giveaway-content .giveaway-results td {
        border: 0;
        padding: 0.7rem 0.45rem;
      }

      #giveaway-content .giveaway-results td + td {
        border-top: 1px solid #c7cfd7;
      }

      #giveaway-content .giveaway-results td::before {
        display: block;
        margin-bottom: 0.45rem;
        content: attr(data-label);
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      #giveaway-content .giveaway-reward-cell {
        gap: 0.45rem;
      }

      #giveaway-content .giveaway-reward-item {
        flex-basis: 28%;
        min-width: 78px;
      }

      #giveaway-content .giveaway-reward-item img {
        width: 62px;
        height: 62px;
      }

      #giveaway-content .giveaway-reward-item figcaption,
      #giveaway-content .giveaway-package-summary {
        font-size: 0.75rem;
      }
    }
  `;
  document.head.appendChild(style);
}

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

  injectGiveawayStyles();

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
      <th>${giveaway.rewardHeader || 'Rewards'}</th>
      <th>${giveaway.winnerHeader || 'Winner ID'}</th>
    </tr>
  </thead>
  <tbody>`;

    rewards.forEach(reward => {
      let td1 = '';
      if (reward.images && reward.images.length > 0) {
        const figures = reward.images.map(image => {
          const imageData = typeof image === 'string'
            ? { src: image, caption: reward.item }
            : image;
          const src = escapeGiveawayHtml(imageData.src || '');
          const caption = escapeGiveawayHtml(imageData.caption || reward.item || '');
          return `<figure class="giveaway-reward-item"><img src="${src}" alt="${caption}" title="${caption} - Hero Wars Alliance" loading="lazy" width="72" height="72"><figcaption>${caption}</figcaption></figure>`;
        }).join('');
        td1 = `<div class="reward-cell giveaway-reward-cell">${figures}<span class="giveaway-package-summary">${escapeGiveawayHtml(reward.item)}</span></div>`;
      } else if (reward.image) {
        const item = escapeGiveawayHtml(reward.item);
        td1 = `<div class="reward-cell giveaway-reward-cell">
        <figure class="giveaway-reward-item"><img src="${escapeGiveawayHtml(reward.image)}" alt="${item}" title="${item} - Hero Wars Alliance" loading="lazy" width="72" height="72"><figcaption>${item}</figcaption></figure>
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
        td1 = `<strong>${escapeGiveawayHtml(reward.item)}</strong>`;
      }
      const winnerLabel = escapeGiveawayHtml(reward.winner_label || '');
      const winnerId = escapeGiveawayHtml(reward.winner_id || '');
      const winnerCell = winnerLabel
        ? `<div class="giveaway-winner"><strong>${winnerLabel}</strong><span>${winnerId}</span></div>`
        : winnerId;
      const rewardDataLabel = escapeGiveawayHtml(giveaway.rewardHeader || 'Rewards');
      const winnerDataLabel = escapeGiveawayHtml(giveaway.winnerHeader || 'Winner ID');
      html += `<tr${reward.item === 'Total' || reward.item === 'Gesamt' || reward.item === '合計' ? ' class="total-row"' : ''}>
      <td data-label="${rewardDataLabel}">${td1}</td>
      <td data-label="${winnerDataLabel}">${winnerCell}</td>
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
