// Hero Wars Alliance - Battle Database
const battlesData = [
    {
        winRate: "100%",
        attackTeam: {
            heroes: [
                { name: "Electra", power: "150k", talisman: "Strength", relicLv: 2 },
                { name: "Guus", power: "140k", talisman: "Strength", relicLv: 0 },
                { name: "Somna", power: "130k", talisman: "Toughness", relicLv: 1 },
                { name: "Folio", power: "129k", talisman: "Intelligence", relicLv: 0 },
                { name: "Polaris", power: "129k", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            heroes: [
                { name: "Julius", power: "135k", talisman: "Strength", relicLv: 0 },
                { name: "Kayla", power: "133k", talisman: "Agility", relicLv: 0 },
                { name: "Tempus", power: "132k", talisman: "Intelligence", relicLv: 0 },
                { name: "Guus", power: "133k", talisman: "No Talisman", relicLv: 0 },
                { name: "Aidan", power: "132k", talisman: "Intelligence", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            heroes: [
                { name: "Andvari", power: "160k", talisman: "Magic Reflection", relicLv: 0 },
                { name: "Cascade", power: "159k", talisman: "Agility", relicLv: 0 },
                { name: "Lara Croft", power: "159k", talisman: "Agility", relicLv: 0 },
                { name: "Astrid", power: "159k", talisman: "Physical Attack", relicLv: 0 },
                { name: "Polaris", power: "159k", talisman: "Intelligence", relicLv: 0 }
            ]
        },
        defenseTeam: {
            heroes: [
                { name: "Oya", power: "164k", talisman: "Strength", relicLv: 0 },
                { name: "Yasmine", power: "163k", talisman: "Agility", relicLv: 0 },
                { name: "Dante", power: "163k", talisman: "Agility", relicLv: 0 },
                { name: "Sebastian", power: "163k", talisman: "Physical Attack", relicLv: 0 },
                { name: "Octavia", power: "163k", talisman: "Toughness", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            heroes: [
                { name: "Corvus", power: "163k", talisman: "Magic Defense", relicLv: 0 },
                { name: "Dante", power: "162k", talisman: "Physical Attack", relicLv: 0 },
                { name: "Morrigan", power: "162k", talisman: "Armor", relicLv: 0 },
                { name: "Iris", power: "162k", talisman: "Armor", relicLv: 2 },
                { name: "Octavia", power: "162k", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            heroes: [
                { name: "Corvus", power: "162k", talisman: "Magic Defense", relicLv: 0 },
                { name: "Kayla", power: "161k", talisman: "Armor Penetration", relicLv: 0 },
                { name: "Morrigan", power: "161k", talisman: "Armor", relicLv: 0 },
                { name: "Iris", power: "161k", talisman: "Armor", relicLv: 2 },
                { name: "Aidan", power: "161k", talisman: "Intelligence", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            heroes: [
                { name: "Corvus", power: "146k", talisman: "Magic Defense", relicLv: 0 },
                { name: "Dante", power: "145k", talisman: "Agility", relicLv: 0 },
                   { name: "Iris", power: "145k", talisman: "Armor", relicLv: 2 },
                { name: "Somna", power: "145k", talisman: "Toughness", relicLv: 1 },
                { name: "Octavia", power: "146k", talisman: "Agility", relicLv: 0 }
            ]
        },
        defenseTeam: {
            heroes: [
                { name: "Corvus", power: "162k", talisman: "Magic Defense", relicLv: 0 },
                { name: "Kayla", power: "161k", talisman: "Armor Penetration", relicLv: 0 },
                { name: "Morrigan", power: "161k", talisman: "Armor", relicLv: 0 },
                { name: "Iris", power: "161k", talisman: "Armor", relicLv: 2 },
                { name: "Aidan", power: "161k", talisman: "Intelligence", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            heroes: [
                { name: "Electra", power: "137k", talisman: "Strength", relicLv: 2 },
                { name: "Guus", power: "136k", talisman: "Strength", relicLv: 0 },
                { name: "Soleil", power: "136k", talisman: "Magic Reflection", relicLv: 0 },
                { name: "Folio", power: "136k", talisman: "Intelligence", relicLv: 0 },
                { name: "Polaris", power: "136k", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            heroes: [
              { name: "Oya", power: "164k", talisman: "Strength", relicLv: 0 },
                { name: "Yasmine", power: "163k", talisman: "Agility", relicLv: 0 },
                { name: "Dante", power: "163k", talisman: "Agility", relicLv: 0 },
                { name: "Sebastian", power: "163k", talisman: "Physical Attack", relicLv: 0 },
                { name: "Octavia", power: "163k", talisman: "Toughness", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            heroes: [
                { name: "Electra", power: "135k", talisman: "Strength", relicLv: 2 },
                { name: "Oya", power: "135k", talisman: "Physical Attack", relicLv: 0 },
                 { name: "Guus", power: "134k", talisman: "Strength", relicLv: 0 },
                { name: "Folio", power: "134k", talisman: "Intelligence", relicLv: 0 },
                { name: "Polaris", power: "135k", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            heroes: [
                { name: "Astaroth", power: "146k", talisman: "Strength", relicLv: 0 },
                { name: "Kayla", power: "145k", talisman: "Agility", relicLv: 0 },
                { name: "Xe'sha", power: "145k", talisman: "Intelligence", relicLv: 0 },
                { name: "Peech", power: "145k", talisman: "Agility", relicLv: 0 },
                { name: "Aidan", power: "146k", talisman: "Intelligence", relicLv: 0 }
            ]
        }
    },
{
        winRate: "100%",
        attackTeam: {
            heroes: [
                { name: "Electra", power: "137k", talisman: "Strength", relicLv: 2 },
                 { name: "Guus", power: "136k", talisman: "Strength", relicLv: 0 },
                 { name: "Soleil", power: "136k", talisman: "Magic Reflection", relicLv: 0 },
                { name: "Folio", power: "136k", talisman: "Intelligence", relicLv: 0 },
                { name: "Polaris", power: "136k", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            heroes: [
                { name: "Julius", power: "133k", talisman: "Physical Attack", relicLv: 0 },
                { name: "Kayla", power: "132k", talisman: "Agility", relicLv: 0 },
                { name: "Dante", power: "132k", talisman: "Agility", relicLv: 0 },
                { name: "Aidan", power: "133k", talisman: "Intelligence", relicLv: 0 },
    { name: "Octavia", power: "132k", talisman: "Toughness", relicLv: 0 }
                           ]
        }
    },




    
// 3.000 times = 92.000 linhas ai precisa dividir em varios arquivos ou vai travar o navegador
// fecha o banco de dados nao remover abaixo   
];
// Helper function to convert power string to number
function parsePower(powerStr) {
    if (!powerStr) return 0;
    const str = powerStr.toLowerCase().replace(/[^0-9.km]/g, '');
    if (str.includes('m')) {
        return parseFloat(str) * 1000000;
    } else if (str.includes('k')) {
        return parseFloat(str) * 1000;
    }
    return parseFloat(str);
}

// Calculate total power from heroes array
function calculateTotalPower(heroes) {
    if (!heroes || !Array.isArray(heroes)) return 0;
    
    let totalPower = 0;
    heroes.forEach(hero => {
        if (hero.power) {
            totalPower += parsePower(hero.power);
        }
    });
    
    return totalPower;
}

// Format power number to string (e.g., 678000 -> "678k")
function formatPower(powerNum) {
    if (powerNum >= 1000000) {
        return (powerNum / 1000000).toFixed(1).replace('.0', '') + 'm';
    } else if (powerNum >= 1000) {
        return (powerNum / 1000).toFixed(0) + 'k';
    }
    return powerNum.toString();
}

// Get total power string for a team
function getTeamTotalPower(team) {
    if (!team || !team.heroes) return '0k';
    const total = calculateTotalPower(team.heroes);
    return formatPower(total);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { battlesData, parsePower, calculateTotalPower, formatPower, getTeamTotalPower };
}
