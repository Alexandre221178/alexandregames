(function(global){
  // HWDE terms localization map
  const hwdeTerms = {
    "Hero Wars: Dominion Era": { en: "Hero Wars: Dominion Era", de: "Hero Wars: Dominion Era", es: "Hero Wars: Dominion Era", fr: "Hero Wars: Dominion Era", pt: "Hero Wars: Dominion Era", ja: "ヒーローウォーズ ドミニオン エラ" },
    "Power": { en: "Power", de: "Kraft", es: "Poder", fr: "Puissance", pt: "Poder", ja: "パワー" },
    "Dodge": { en: "Dodge", de: "Ausweichen", es: "Evasión", fr: "Esquive", pt: "Esquiva", ja: "回避率" },
    "Health": { en: "Health", de: "Gesundheit", es: "Salud", fr: "Vie", pt: "Vida", ja: "HP" },
    "Armor Penetration": { en: "Armor Penetration", de: "Rüstungsdurchdringung", es: "Penetración de armadura", fr: "Pénétration d’armure", pt: "Penetração de Armadura", ja: "アーマー貫通" },
    "Magic Penetration": { en: "Magic Penetration", de: "Magische Durchdringung", es: "Penetración mágica", fr: "Pénétration magique", pt: "Penetração Mágica", ja: "魔法貫通" },
    "Critical Hit Chance": { en: "Critical Hit Chance", de: "Kritische Trefferchance", es: "Probabilidad de crítico", fr: "Chances de coup critique", pt: "Chance de Crítico", ja: "クリティカルヒット率" },
    "Strength": { en: "Strength", de: "Stärke", es: "Fuerza", fr: "Force", pt: "Força", ja: "力" },
    "Skins": { en: "Skins", de: "Skins", es: "Skins", fr: "Skins", pt: "Skins", ja: "スキン" },
    "Best Skin": { en: "Best Skin", de: "Best Skin", es: "Best Skin", fr: "Best Skin", pt: "Best Skin", ja: "Best Skin (ベストスキン)" },
    "Armor": { en: "Armor", de: "Rüstung", es: "Armadura", fr: "Armure", pt: "Armadura", ja: "アーマー" },
    "Skills": { en: "Skills", de: "Fertigkeiten", es: "Habilidades", fr: "Compétences", pt: "Habilidades", ja: "スキル" },
    "Physical Attack": { en: "Physical Attack", de: "Physikalischer Angriff", es: "Daño físico", fr: "Attaque physique", pt: "Ataque Físico", ja: "物理攻撃" },
    "Counters": { en: "Counters", de: "Counters", es: "Counters", fr: "Counters", pt: "Counters", ja: "カウンター" },
    "Agility": { en: "Agility", de: "Agilität", es: "Agilidad", fr: "Agilité", pt: "Agilidade", ja: "素早さ" },
    "Artifacts": { en: "Artifacts", de: "Artefakte", es: "Artefactos", fr: "Artefacts", pt: "Artefatos", ja: "アーティファクト" },
    "Magic Attack": { en: "Magic Attack", de: "Magischer Angriff", es: "Daño mágico", fr: "Attaque magique", pt: "Ataque Mágico", ja: "魔法攻撃" },
    "Magic Defense": { en: "Magic Defense", de: "Magische Verteidigung", es: "Resistencia mágica", fr: "Défense magique", pt: "Defesa Mágica", ja: "魔法防御" },
    "Intelligence": { en: "Intelligence", de: "Intelligenz", es: "Inteligencia", fr: "Intelligence", pt: "Inteligência", ja: "知力" }
  };

  // Expose globally
  if(typeof global !== 'undefined') global.hwdeTerms = hwdeTerms;
  else if(typeof window !== 'undefined') window.hwdeTerms = hwdeTerms;

})(typeof window !== 'undefined' ? window : this);
