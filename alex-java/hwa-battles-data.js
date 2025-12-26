// Hero Wars Alliance - Battle Database
const battlesData = [
    {
        winRate: "100%",
        attackTeam: {
            power: "796k",
            heroes: [
                { name: "Andvari", talisman: "Magic Reflection", relicLv: 0 },
                { name: "Cascade", talisman: "Agility", relicLv: 0 },
                { name: "Lara Croft", talisman: "Agility", relicLv: 0 },
                { name: "Astrid", talisman: "Physical Attack", relicLv: 0 },
                { name: "Polaris", talisman: "Intelligence", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "816k",
            heroes: [
                { name: "Oya", talisman: "Strength", relicLv: 0 },
                { name: "Yasmine", talisman: "Agility", relicLv: 0 },
                { name: "Dante", talisman: "Agility", relicLv: 0 },
                { name: "Sebastian", talisman: "Physical Attack", relicLv: 0 },
                { name: "Octavia", talisman: "Toughness", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            power: "811k",
            heroes: [
                { name: "Corvus", talisman: "Magic Defense", relicLv: 0 },
                { name: "Dante", talisman: "Physical Attack", relicLv: 0 },
                { name: "Morrigan", talisman: "Armor", relicLv: 0 },
                { name: "Iris", talisman: "Armor", relicLv: 2 },
                { name: "Octavia", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "806k",
            heroes: [
                { name: "Corvus", talisman: "Magic Defense", relicLv: 0 },
                { name: "Kayla", talisman: "Armor Penetration", relicLv: 0 },
                { name: "Morrigan", talisman: "Armor", relicLv: 0 },
                { name: "Iris", talisman: "Armor", relicLv: 2 },
                { name: "Aidan", talisman: "Intelligence", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            power: "727k",
            heroes: [
                { name: "Corvus", talisman: "Magic Defense", relicLv: 0 },
                { name: "Dante", talisman: "Agility", relicLv: 0 },
                   { name: "Iris", talisman: "Armor", relicLv: 2 },
                { name: "Somna", talisman: "Toughness", relicLv: 1 },
                { name: "Octavia", talisman: "Agility", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "806k",
            heroes: [
                { name: "Corvus", talisman: "Magic Defense", relicLv: 0 },
                { name: "Kayla", talisman: "Armor Penetration", relicLv: 0 },
                { name: "Morrigan", talisman: "Armor", relicLv: 0 },
                { name: "Iris", talisman: "Armor", relicLv: 2 },
                { name: "Aidan", talisman: "Intelligence", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            power: "681k",
            heroes: [
                { name: "Electra", talisman: "Strength", relicLv: 2 },
                { name: "Guus", talisman: "Strength", relicLv: 0 },
                { name: "Soleil", talisman: "Magic Reflection", relicLv: 0 },
                { name: "Folio", talisman: "Intelligence", relicLv: 0 },
                { name: "Polaris", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "816k",
            heroes: [
              { name: "Oya", talisman: "Strength", relicLv: 0 },
                { name: "Yasmine", talisman: "Agility", relicLv: 0 },
                { name: "Dante", talisman: "Agility", relicLv: 0 },
                { name: "Sebastian", talisman: "Physical Attack", relicLv: 0 },
                { name: "Octavia", talisman: "Toughness", relicLv: 0 }
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

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { battlesData, parsePower };
}
