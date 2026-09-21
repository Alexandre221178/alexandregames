/* Examples based on hero-wars-alliance/characters-guide/@hwa_stats.json. */
(() => {
  'use strict';
  const isPortuguese = document.documentElement.lang.toLowerCase().startsWith('pt');
  const isSpanish = document.documentElement.lang.toLowerCase().startsWith('es');
  const isFrench = document.documentElement.lang.toLowerCase().startsWith('fr');
  const isGerman = document.documentElement.lang.toLowerCase().startsWith('de');
  const isJapanese = document.documentElement.lang.toLowerCase().startsWith('ja');
  const format = value => new Intl.NumberFormat(isPortuguese ? 'pt-BR' : isSpanish ? 'es-ES' : isFrench ? 'fr-FR' : isGerman ? 'de-DE' : isJapanese ? 'ja-JP' : 'en-US', { maximumFractionDigits: 2, useGrouping: true }).format(value);
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
      output.textContent = isPortuguese
        ? 'Insira um número válido e não negativo em todos os campos.'
        : isSpanish ? 'Introduce un número válido y no negativo en todos los campos.'
        : isFrench ? 'Saisissez un nombre valide et non négatif dans chaque champ.'
        : isGerman ? 'Gib in jedes Feld eine gültige, nicht negative Zahl ein.'
        : isJapanese ? 'すべての欄に、ゼロ以上の有効な数値を入力してください。'
        : 'Enter a valid, non-negative number in every field.';
      return;
    }
    const effective = Math.max(0, defense - penetration);
    const damage = raw / (1 + effective / 3000);
    const reduction = (1 - 1 / (1 + effective / 3000)) * 100;
    output.textContent = isPortuguese
      ? `${format(defense)} − ${format(penetration)} deixa ${format(effective)} de defesa efetiva (mínimo zero). Redução de dano: ${format(reduction)}%. Dano recebido: ${format(damage)} de um golpe de ${format(raw)}.`
      : isSpanish ? `${format(defense)} − ${format(penetration)} deja ${format(effective)} de defensa efectiva (mínimo cero). Reducción de daño: ${format(reduction)}%. Daño recibido: ${format(damage)} de un golpe de ${format(raw)}.`
      : isFrench ? `${format(defense)} − ${format(penetration)} laisse ${format(effective)} de défense effective (minimum zéro). Réduction des dégâts : ${format(reduction)} %. Dégâts reçus : ${format(damage)} pour un coup de ${format(raw)}.`
      : isGerman ? `${format(defense)} − ${format(penetration)} ergibt ${format(effective)} effektive Abwehr (mindestens null). Schadensverringerung: ${format(reduction)} %. Erlittener Schaden: ${format(damage)} bei einem Treffer mit ${format(raw)} Schaden.`
      : isJapanese ? `${format(defense)} − ${format(penetration)} = 有効防御値${format(effective)}（下限はゼロ）。ダメージ軽減率：${format(reduction)}%。${format(raw)}ダメージの攻撃で受けるダメージ：${format(damage)}。`
      : `${format(defense)} − ${format(penetration)} leaves ${format(effective)} effective defense (minimum zero). Damage reduction: ${format(reduction)}%. Damage received: ${format(damage)} from a ${format(raw)} hit.`;
  });
  if (chanceForm) chanceForm.addEventListener('submit', event => {
    event.preventDefault();
    const rating = read('chance-rating');
    const main = read('opponent-main');
    const output = document.getElementById('chance-result');
    if (rating === null || main === null || main <= 0) {
      output.textContent = isPortuguese
        ? 'Insira um valor de atributo não negativo e um atributo principal do adversário de pelo menos 1.'
        : isSpanish ? 'Introduce un valor de atributo no negativo y un atributo principal del rival de al menos 1.'
        : isFrench ? 'Saisissez une valeur de statistique non négative et un attribut principal de l’adversaire d’au moins 1.'
        : isGerman ? 'Gib einen nicht negativen Wert und ein gegnerisches Hauptattribut von mindestens 1 ein.'
        : isJapanese ? '評価値にはゼロ以上、相手の主属性には1以上の数値を入力してください。'
        : 'Enter a non-negative rating and an opponent main stat of at least 1.';
      return;
    }
    const chance = rating / (rating + main) * 100;
    output.textContent = isPortuguese
      ? `${format(rating)} ÷ (${format(rating)} + ${format(main)}) × 100 = ${format(chance)}%. Esta é uma chance por evento elegível, não uma sequência garantida.`
      : isSpanish ? `${format(rating)} ÷ (${format(rating)} + ${format(main)}) × 100 = ${format(chance)}%. Es una probabilidad por evento que cumpla las condiciones, no una secuencia garantizada.`
      : isFrench ? `${format(rating)} ÷ (${format(rating)} + ${format(main)}) × 100 = ${format(chance)} %. Il s’agit d’une probabilité par événement remplissant les conditions, pas d’une séquence garantie.`
      : isGerman ? `${format(rating)} ÷ (${format(rating)} + ${format(main)}) × 100 = ${format(chance)} %. Das ist eine Wahrscheinlichkeit pro Ereignis, das die Voraussetzungen erfüllt, keine garantierte Abfolge.`
      : isJapanese ? `${format(rating)} ÷ (${format(rating)} + ${format(main)}) × 100 = ${format(chance)}%。これは条件を満たす事象一回ごとの確率であり、発生する順序を保証するものではありません。`
      : `${format(rating)} ÷ (${format(rating)} + ${format(main)}) × 100 = ${format(chance)}%. This is a chance per eligible event, not a guaranteed sequence.`;
  });
})();
