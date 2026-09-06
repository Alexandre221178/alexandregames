/* Rankings live in hero-wars-alliance-tier-list.json; array order is display order.
 * Portraits and available guides live in hero-wars-alliance-tier-list-heroes.json.
 * Translate page labels through data-* attributes; every language shares the data.
 */
(() => {
  'use strict';
  const scriptUrl = document.currentScript.src;
  const tiers = ['SS', 'S+', 'S', 'A+', 'A', 'B+', 'B', 'C'];
  const root = document.getElementById('hwa-tier-list');
  if (!root) return;
  const search = document.getElementById('tier-search');
  const status = document.getElementById('tier-status');
  const retry = document.getElementById('tier-retry');
  const language = document.documentElement.lang.split('-')[0];
  const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  let rows = [];
  let total = 0;

  function filter() {
    const query = normalize(search.value);
    let visible = 0;
    rows.forEach(({ row, cards, count, empty }) => {
      let matches = 0;
      cards.forEach(({ node, name }) => {
        node.hidden = !normalize(name).includes(query);
        if (!node.hidden) matches++;
      });
      row.hidden = Boolean(query) && matches === 0;
      empty.hidden = cards.length > 0 || Boolean(query);
      count.textContent = String(matches);
      visible += matches;
    });
    status.textContent = (visible ? root.dataset.results : root.dataset.noResults)
      .replace('{count}', visible).replace('{total}', total);
  }

  function render(rankings, catalog) {
    const seen = new Set();
    if (Object.keys(rankings).length !== tiers.length || tiers.some(tier => !Array.isArray(rankings[tier]))) {
      throw new Error('Expected all eight tier arrays.');
    }
    const fragment = document.createDocumentFragment();
    const nextRows = tiers.map((tier, index) => {
      const row = element('section', 'hwa-tier hwa-tier-' + index);
      row.id = 'rank-' + tier.toLowerCase().replace('+', '-plus');
      const heading = element('h2', 'hwa-tier-label', tier);
      heading.id = row.id + '-title';
      row.setAttribute('aria-labelledby', heading.id);
      const body = element('div', 'hwa-tier-body');
      const count = element('span', 'hwa-tier-count');
      count.setAttribute('aria-label', root.dataset.countLabel);
      heading.append(count);
      const list = element('ul', 'hwa-hero-grid');
      const cards = rankings[tier].map(name => {
        if (typeof name !== 'string' || !name.trim() || seen.has(normalize(name))) throw new Error('Invalid or duplicate hero.');
        seen.add(normalize(name));
        const item = catalog[name] || {};
        const node = element('li', 'hwa-hero');
        const guideFor = lang => item.guides?.[lang] ||
          (item.guide && item.languages?.includes(lang) ? item.guide.replace('{lang}', lang) : null);
        const localGuide = guideFor(language);
        const guide = localGuide || guideFor('en');
        const fallback = !localGuide && Boolean(guide) && language !== 'en';
        const card = element(guide ? 'a' : 'div', 'hwa-hero-card');
        if (guide) {
          card.href = new URL(guide, scriptUrl).href;
          card.hreflang = fallback ? 'en' : language;
        }
        if (item.image) {
          const img = element('img');
          img.src = new URL(item.image, scriptUrl).href;
          img.alt = '';
          img.width = 100;
          img.height = 100;
          img.loading = 'lazy';
          img.decoding = 'async';
          img.addEventListener('error', () => img.replaceWith(element('span', 'hwa-hero-initial', name[0])), { once: true });
          card.append(img);
        } else {
          card.append(element('span', 'hwa-hero-initial', name[0]));
        }
        const label = element('strong', 'hwa-hero-name');
        if (language === 'ja' && item.names?.ja) {
          label.append(element('span', '', item.names.ja), element('br'));
        }
        label.append(element('span', '', name + (fallback ? '(EN)' : '')));
        card.append(label);
        node.append(card);
        list.append(node);
        return { node, name: name + ' ' + (item.names?.[language] || '') };
      });
      const empty = element('p', 'hwa-tier-empty', root.dataset.empty);
      body.append(list, empty);
      row.append(heading, body);
      fragment.append(row);
      return { row, cards, count, empty };
    });
    root.replaceChildren(fragment);
    rows = nextRows;
    total = seen.size;
    search.disabled = false;
    filter();
  }

  async function load() {
    retry.hidden = true;
    search.disabled = true;
    root.setAttribute('aria-busy', 'true');
    status.textContent = root.dataset.loading;
    try {
      const results = await Promise.all(['hero-wars-alliance-tier-list.json', 'hero-wars-alliance-tier-list-heroes.json'].map(async file => {
        const response = await fetch(new URL(file, scriptUrl), { cache: 'no-cache' });
        if (!response.ok) throw new Error('Unable to load ' + file);
        return response.json();
      }));
      render(...results);
    } catch (error) {
      status.textContent = root.dataset.error;
      retry.hidden = false;
      console.error('Tier list:', error);
    } finally {
      root.setAttribute('aria-busy', 'false');
    }
  }
  search.addEventListener('input', filter);
  retry.addEventListener('click', load);
  load();
})();
