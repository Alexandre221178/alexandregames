/**
 * Hero Wars Power Calculator - JavaScript Version
 * Accuracy: ~0.77% average error
 * 
 * @version 2.0 - Final
 */

function calculateHeroPower(stats, mainStat) {
    /**
     * Calculate Hero Wars power from hero stats
     * 
     * @param {Object} stats - Hero stats from "Maximum stats" in game
     * @param {string} mainStat - One of "Strength", "Agility", or "Intelligence"
     * @returns {number} Calculated power value
     */
    
    // Helper function to safely get stat value
    const getStat = (statName) => stats[statName] || 0;
    
    // Step 1: Apply stat conversions to get base values
    
    // Strength conversions
    const strengthToHealth = getStat("Strength") * 40;
    const strengthToPA = mainStat === "Strength" ? getStat("Strength") * 1 : 0;
    
    // Intelligence conversions
    const intelToMA = getStat("Intelligence") * 3;
    const intelToMD = getStat("Intelligence") * 1;
    const intelToPA = mainStat === "Intelligence" ? getStat("Intelligence") * 1 : 0;
    
    // Agility conversions
    const agilityToPABase = getStat("Agility") * 2;
    const agilityToPABonus = mainStat === "Agility" ? getStat("Agility") * 1 : 0;
    const agilityToArmor = getStat("Agility") * 1;
    
    // Calculate base stats (removing primary stat contributions)
    const healthBase = getStat("Health") - strengthToHealth;
    const physicalAttackBase = getStat("Physical_Attack") - strengthToPA - 
                               intelToPA - agilityToPABase - agilityToPABonus;
    const magicAttackBase = getStat("Magic_Attack") - intelToMA;
    const magicDefenseBase = getStat("Magic_Defense") - intelToMD;
    const armorBase = getStat("Armor") - agilityToArmor;
    
    // Step 2: Apply power multipliers
    const multipliers = {
        vampirism: 107.726405,
        criticalHitChance: 1.304664,
        dodge: 1.289877,
        physicalAttackBase: 0.565149,
        magicAttackBase: 0.445821,
        armorBase: 0.350922,
        armorPenetration: 0.304627,
        magicDefenseBase: 0.270552,
        magicPenetration: 0.195838,
        healthBase: 0.016424,
    };
    
    const intercept = 125863.169095;
    
    // Calculate power
    let power = intercept;
    power += healthBase * multipliers.healthBase;
    power += physicalAttackBase * multipliers.physicalAttackBase;
    power += magicAttackBase * multipliers.magicAttackBase;
    power += magicDefenseBase * multipliers.magicDefenseBase;
    power += armorBase * multipliers.armorBase;
    power += getStat("Magic_Penetration") * multipliers.magicPenetration;
    power += getStat("Armor_Penetration") * multipliers.armorPenetration;
    power += getStat("Critical_Hit_Chance") * multipliers.criticalHitChance;
    power += getStat("Dodge") * multipliers.dodge;
    power += getStat("Vampirism") * multipliers.vampirism;
    
    return Math.round(power);
}

// ============================================================================
// EXAMPLES
// ============================================================================

// Example 1: Aurora (Strength tank)
const auroraStats = {
    Health: 1182769,
    Magic_Penetration: 22780,
    Strength: 17049,
    Armor: 19621,
    Physical_Attack: 29760,
    Agility: 3093,
    Magic_Attack: 68298,
    Magic_Defense: 9356,
    Dodge: 14245,
    Intelligence: 3644,
    Armor_Penetration: 0,
    Critical_Hit_Chance: 0,
    Vampirism: 0
};

console.log("=".repeat(70));
console.log("HERO WARS POWER CALCULATOR - JAVASCRIPT VERSION");
console.log("=".repeat(70));
console.log();

const auroraPower = calculateHeroPower(auroraStats, "Strength");
console.log(`Aurora (Strength Tank):`);
console.log(`  Calculated: ${auroraPower.toLocaleString()}`);
console.log(`  Actual:     195,166`);
console.log(`  Error:      ${Math.abs(195166 - auroraPower).toLocaleString()} (${(Math.abs(195166 - auroraPower)/195166*100).toFixed(2)}%)`);
console.log();

// Example 2: Cleaver (with Vampirism)
const cleaverStats = {
    Health: 1197338,
    Strength: 18331,
    Armor: 52353,
    Physical_Attack: 69965,
    Agility: 3058,
    Magic_Attack: 9149,
    Magic_Defense: 49556,
    Intelligence: 2533,
    Armor_Penetration: 0,
    Magic_Penetration: 0,
    Critical_Hit_Chance: 0,
    Dodge: 0,
    Vampirism: 55
};

const cleaverPower = calculateHeroPower(cleaverStats, "Strength");
console.log(`Cleaver (with 55% Vampirism):`);
console.log(`  Calculated: ${cleaverPower.toLocaleString()}`);
console.log(`  Actual:     195,847`);
console.log(`  Error:      ${Math.abs(195847 - cleaverPower).toLocaleString()} (${(Math.abs(195847 - cleaverPower)/195847*100).toFixed(2)}%)`);
console.log();

console.log("=".repeat(70));
console.log("USAGE IN YOUR JSON WORKFLOW:");
console.log("=".repeat(70));
console.log(`
// When you add a new skin:
const hero = {
    name: "Aurora",
    mainStat: "Strength",
    stats: { /* ... */ }
};

// Update stats with new skin bonuses
hero.stats.Magic_Attack += 10650;
hero.stats.Dodge += 2960;

// Recalculate power
hero.power = calculateHeroPower(hero.stats, hero.mainStat);

// Save to JSON
fs.writeFileSync('hero.json', JSON.stringify(hero, null, 2));
`);

// For Node.js/CommonJS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateHeroPower };
}

// For ES6 modules
// export { calculateHeroPower };
