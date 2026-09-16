/* Examples based on hero-wars-alliance/characters-guide/@hwa_stats.json. */
(() => {
  'use strict';
  const format = value => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value);
  const read = id => {
    const input = document.getElementById(id);
    if (!input || input.value.trim() === '' || !input.checkValidity()) return null;
    const value = Number(input.value);
    return Number.isFinite(value) && value >= 0 ? value : null;
  };
  const defenseForm = document.getElementById('defense-form');
  const chanceForm = document.getElementById('chance-form');
  if (defenseForm) defenseForm.addEventListener('submit', event => {
    event.preventDefault();
    const raw = read('raw-damage');
    const defense = read('target-defense');
    const penetration = read('penetration');
    const output = document.getElementById('defense-result');
    if ([raw, defense, penetration].includes(null)) {
      output.textContent = 'Enter a valid, non-negative number in every field.';
      return;
    }
    const effective = Math.max(0, defense - penetration);
    const damage = raw / (1 + effective / 3000);
    const reduction = (1 - 1 / (1 + effective / 3000)) * 100;
    output.textContent = `${format(defense)} − ${format(penetration)} leaves ${format(effective)} effective defense (minimum zero). Damage reduction: ${format(reduction)}%. Damage received: ${format(damage)} from a ${format(raw)} hit.`;
  });
  if (chanceForm) chanceForm.addEventListener('submit', event => {
    event.preventDefault();
    const rating = read('chance-rating');
    const main = read('opponent-main');
    const output = document.getElementById('chance-result');
    if (rating === null || main === null || main <= 0) {
      output.textContent = 'Enter a non-negative rating and an opponent main stat of at least 1.';
      return;
    }
    const chance = rating / (rating + main) * 100;
    output.textContent = `${format(rating)} ÷ (${format(rating)} + ${format(main)}) × 100 = ${format(chance)}%. This is a chance per eligible event, not a guaranteed sequence.`;
  });
})();
