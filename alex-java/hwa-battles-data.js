// Hero Wars Alliance - Battle Database
const battlesData = [
    {
        winRate: "100%",
        attackTeam: {
            power: "796k",
            heroes: [
                { name: "Andvari", talisman: "MR", relicLv: 0 },
                { name: "Cascade", talisman: "Agility", relicLv: 0 },
                { name: "Lara Croft", talisman: "Agility", relicLv: 0 },
                { name: "Astrid", talisman: "PA", relicLv: 0 },
                { name: "Polaris", talisman: "Intelligence", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "816k",
            heroes: [
                { name: "Oya", talisman: "Strength", relicLv: 0 },
                { name: "Yasmine", talisman: "Agility", relicLv: 0 },
                { name: "Dante", talisman: "Agility", relicLv: 0 },
                { name: "Sebastian", talisman: "PA", relicLv: 0 },
                { name: "Octavia", talisman: "Toughness", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            power: "811k",
            heroes: [
                { name: "Corvus", talisman: "MD", relicLv: 0 },
                { name: "Dante", talisman: "PA", relicLv: 0 },
                { name: "Morrigan", talisman: "Armor", relicLv: 0 },
                { name: "Iris", talisman: "Armor", relicLv: 2 },
                { name: "Octavia", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "806k",
            heroes: [
                { name: "Corvus", talisman: "MD", relicLv: 0 },
                { name: "Kayla", talisman: "AP", relicLv: 0 },
                { name: "Morrigan", talisman: "Armor", relicLv: 0 },
                { name: "Iris", talisman: "Armor", relicLv: 2 },
                { name: "Aidan", talisman: "Intelligence", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            power: "665k",
            heroes: [
                { name: "Electra", talisman: "Agility", relicLv: 2 },
                { name: "Byrna", talisman: "Intelligence", relicLv: 2 },
                { name: "Tempus", talisman: "Toughness", relicLv: 0 },
                { name: "Folio", talisman: "Intelligence", relicLv: 0 },
                { name: "Polaris", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "728k",
            heroes: [
                { name: "Julius", talisman: "PA", relicLv: 0 },
                { name: "Kayla", talisman: "AP", relicLv: 0 },
                { name: "Guus", talisman: "Agility", relicLv: 0 },
                { name: "Peech", talisman: "Health", relicLv: 0 },
                { name: "Aidan", talisman: "Toughness", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            power: "777k",
            heroes: [
                { name: "Julius", talisman: "Agility", relicLv: 0 },
                { name: "Byrna", talisman: "Intelligence", relicLv: 0 },
                { name: "Tempus", talisman: "Toughness", relicLv: 0 },
                { name: "Folio", talisman: "Intelligence", relicLv: 0 },
                { name: "Polaris", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "555k",
            heroes: [
                { name: "Cleaver", talisman: "PA", relicLv: 0 },
                { name: "NinjaTurtles", talisman: "AP", relicLv: 0 },
                { name: "Guus", talisman: "Agility", relicLv: 0 },
                { name: "Peech", talisman: "Health", relicLv: 0 },
                { name: "Aidan", talisman: "Toughness", relicLv: 0 }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            power: "666k",
            heroes: [
                { name: "Corvus", talisman: "Agility", relicLv: 0 },
                { name: "Byrna", talisman: "Intelligence", relicLv: 0 },
                { name: "Tempus", talisman: "Toughness", relicLv: 0 },
                { name: "Folio", talisman: "Intelligence", relicLv: 0 },
                { name: "Polaris", talisman: "Toughness", relicLv: 0 }
            ]
        },
        defenseTeam: {
            power: "666k",
            heroes: [
                { name: "Rufus", talisman: "PA", relicLv: 0 },
                { name: "NinjaTurtles", talisman: "AP", relicLv: 0 },
                { name: "Guus", talisman: "Agility", relicLv: 0 },
                { name: "Peech", talisman: "Health", relicLv: 0 },
                { name: "Aidan", talisman: "Toughness", relicLv: 0 }
            ]
        }
    }

    
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
