// Hero Wars Alliance - Titan Battle Database
// INSTRUÇÕES DE USO:
// 1. Tire o print da batalha (titans aparecem por ordem de dano)
// 2. Copie os titans exatamente na ordem que aparecem no print
// 3. Use a função createBattle() para adicionar - ela reorganiza automaticamente
// 4. Não precisa se preocupar com a ordem de batalha - o sistema faz isso!

// Mapeamento das posições dos Titans no jogo
const titanBattlePositions = {
    "Sigurd": 1, "Brustar": 2, "Rigel": 3, "Moloch": 4, "Angus": 5,
    "Nova": 6, "Vulcan": 7, "Avalon": 8, "Verdoc": 9, "Tydus": 10,
    "Mairi": 11, "Araji": 12, "Iyari": 13, "Asherona": 14, "Eden": 15,
    "Lumira": 16, "Hyperion": 17, "Ignis": 18, "Solaris": 19, "Sylva": 20,
    "Amon": 21, "Morte": 22, "Keros": 23, "Tenebris": 24
};

// Função para reorganizar titans na posição de batalha
function sortTitansByBattlePosition(titans) {
    return titans.sort((a, b) => {
        const posA = titanBattlePositions[a.name] || 999;
        const posB = titanBattlePositions[b.name] || 999;
        return posA - posB;
    });
}

// Função auxiliar - Cole os titans do print e ela reorganiza automaticamente
function createBattle(winRate, attackTitansFromPrint, defenseTitansFromPrint) {
    return {
        winRate: winRate,
        attackTeam: {
            titans: sortTitansByBattlePosition([...attackTitansFromPrint])
        },
        defenseTeam: {
            titans: sortTitansByBattlePosition([...defenseTitansFromPrint])
        }
    };
}

const titanBattlesData = [
    {
    winRate: "100%",
    attackTeam: {
        titans: [
            { name: "Angus", power: "169k" },
            { name: "Avalon", power: "129k" },
            { name: "Verdoc", power: "85k" },
            { name: "Eden", power: "141k" },
            { name: "Sylva", power: "77k" }
        ]
    },
    defenseTeam: {
        titans: [
            { name: "Rigel", power: "142k" },
            { name: "Iyari", power: "139k" },
            { name: "Eden", power: "141k" },
            { name: "Solaris", power: "142k" },
            { name: "Tenebris", power: "134k" }
        ]
    }
},
{
    winRate: "100%",
    attackTeam: {
        titans: [
            { name: "Angus", power: "169k" },
            { name: "Avalon", power: "129k" },
            { name: "Verdoc", power: "85k" },
            { name: "Eden", power: "141k" },
            { name: "Sylva", power: "77k" }
        ]
    },
    defenseTeam: {
        titans: [
            { name: "Rigel", power: "132k" },
            { name: "Iyari", power: "131k" },
            { name: "Eden", power: "141k" },
            { name: "Solaris", power: "142k" },
            { name: "Tenebris", power: "140k" }
        ]
    }
},
    {
    winRate: "99%",
    attackTeam: {
        titans: [
            { name: "Tenebris", power: "141k" },
            { name: "Solaris", power: "142k" },
            { name: "Iyari", power: "132k" },
            { name: "Araji", power: "137k" },
            { name: "Rigel", power: "133k" }
        ]
    },
    defenseTeam: {
        titans: [
            { name: "Sigurd", power: "151k" },
            { name: "Araji", power: "137k" },
            { name: "Hyperion", power: "143k" },
            { name: "Solaris", power: "142k" },
            { name: "Tenebris", power: "141k" }
        ]
    }
},

    {
    winRate: "99%",
    attackTeam: {
        titans: [
            { name: "Tenebris", power: "141k" },
            { name: "Solaris", power: "142k" },
            { name: "Iyari", power: "132k" },
            { name: "Araji", power: "137k" },
            { name: "Brustar", power: "134k" }
        ]
    },
    defenseTeam: {
        titans: [
            { name: "Sigurd", power: "151k" },
            { name: "Araji", power: "137k" },
            { name: "Hyperion", power: "143k" },
            { name: "Solaris", power: "142k" },
            { name: "Tenebris", power: "141k" }
        ]
    }
},

    {
        winRate: "100%",
        attackTeam: {
            titans: [
                { name: "Angus", power: "117k" },
                { name: "Avalon", power: "88k" },
                { name: "Verdoc", power: "72k" },
                { name: "Eden", power: "100k" },
                { name: "Sylva", power: "77k" }
            ]
        },
        defenseTeam: {
            titans: [
                 { name: "Brustar", power: "121k" },
                { name: "Lyari", power: "117k" },
                { name: "Solaris", power: "134k" },
                { name: "Mort", power: "131k" },
                { name: "Tenebris", power: "128k" }

            ]
        }
    },

    {
        winRate: "100%",
        attackTeam: {
            titans: [
                { name: "Angus", power: "117k" },
                { name: "Avalon", power: "88k" },
                { name: "Verdoc", power: "72k" },
                { name: "Eden", power: "100k" },
                { name: "Sylva", power: "77k" }
            ]
        },
        defenseTeam: {
            titans: [
                 { name: "Sigurd", power: "143k" },
                { name: "Araji", power: "124k" },
                { name: "Hyperion", power: "104k" },
                { name: "Solaris", power: "123k" },
                { name: "Tenebris", power: "127k" }

            ]
        }
    },

    {
        winRate: "100%",
        attackTeam: {
            titans: [
                { name: "Angus", power: "117k" },
                { name: "Avalon", power: "88k" },
                { name: "Verdoc", power: "72k" },
                { name: "Eden", power: "100k" },
                { name: "Sylva", power: "77k" }
            ]
        },
        defenseTeam: {
            titans: [
                 { name: "Brustar", power: "147k" },
                { name: "Araji", power: "87k" },
                { name: "Lyari", power: "145k" },
                { name: "Solaris", power: "142k" },
                { name: "Tenebris", power: "85k" }

            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            titans: [
                { name: "Rigel", power: "133k" },
                { name: "Araji", power: "137k" },
                { name: "Lumira", power: "44k" },
                { name: "Solaris", power: "142k" },
                { name: "Amon", power: "132k" }

            ]
        },
        defenseTeam: {
            titans: [
                 { name: "Moloch", power: "161k" },
                { name: "Vulcan", power: "142k" },
                { name: "Araji", power: "137k" },
                { name: "Asherona", power: "85k" },
                { name: "Ignis", power: "140k" }

            ]
        }
    },

    {
        winRate: "100%",
        attackTeam: {
            titans: [
                { name: "Angus", power: "169k" },
                { name: "Avalon", power: "129k" },
                { name: "Verdoc", power: "85k" },
                { name: "Eden", power: "141k" },
                { name: "Sylva", power: "77k" }
            ]
        },
        defenseTeam: {
            titans: [
                { name: "Rigel", power: "132k" },
                { name: "Araji", power: "137k" },
                { name: "Lumira", power: "23k" },
                { name: "Solaris", power: "142k" },
                { name: "Amon", power: "132k" }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            titans: [
                { name: "Angus", power: "144k" },
                { name: "Avalon", power: "137k" },
                { name: "Verdoc", power: "80k" },
                { name: "Eden", power: "141k" },
                { name: "Sylva", power: "123k" }
            ]
        },
        defenseTeam: {
            titans: [
                { name: "Angus", power: "169k" },
                { name: "Avalon", power: "142k" },
                { name: "Verdoc", power: "76k" },
                { name: "Eden", power: "141k" },
                { name: "Sylva", power: "140k" }
            ]
        }
    },
    {
        winRate: "100%",
        attackTeam: {
            titans: [
                { name: "Angus", power: "144k" },
                { name: "Avalon", power: "137k" },
                { name: "Verdoc", power: "80k" },
                { name: "Eden", power: "141k" },
                { name: "Sylva", power: "123k" }
            ]
        },
        defenseTeam: {
            titans: [
                { name: "Sigurd", power: "171k" },
                { name: "Nova", power: "164k" },
                { name: "Tydus", power: "86k" },
                { name: "Mairi", power: "125k" },
                { name: "Hyperion", power: "142k" }
            ]
        }
    },
    createBattle(
        "100%",
        [
            { name: "Amon", power: "74k" },
            { name: "Solaris", power: "129k" },
            { name: "Iyari", power: "127k" },
            { name: "Rigel", power: "128k" },
            { name: "Lumira", power: "50k" }
        ],
        [
            { name: "Solaris", power: "148k" },
            { name: "Brustar", power: "147k" },
            { name: "Tenebris", power: "146k" },
            { name: "Iyari", power: "145k" },
            { name: "Araji", power: "137k" }
        ]
    ),
    createBattle(
        "100%",
        [
            { name: "Solaris", power: "142k" },
            { name: "Brustar", power: "147k" },
            { name: "Mort", power: "147k" },
            { name: "Tenebris", power: "140k" },
            { name: "Iyari", power: "145k" }
        ],
        [
            { name: "Solaris", power: "148k" },
            { name: "Tenebris", power: "146k" },
            { name: "Iyari", power: "145k" },
            { name: "Rigel", power: "146k" },
            { name: "Brustar", power: "147k" }
        ]
    ),
    createBattle(
        "100%",
        [
            { name: "Solaris", power: "129k" },
            { name: "Amon", power: "145k" },
            { name: "Tenebris", power: "127k" },
            { name: "Iyari", power: "145k" },
            { name: "Rigel", power: "146k" }
        ],
        [
            { name: "Solaris", power: "148k" },
            { name: "Tenebris", power: "146k" },
            { name: "Eden", power: "142k" },
            { name: "Mort", power: "147k" },
            { name: "Rigel", power: "146k" }
        ]
    ),
    createBattle(
        "100%",
        [
            { name: "Solaris", power: "129k" },
            { name: "Amon", power: "139k" },
            { name: "Brustar", power: "142k" },
            { name: "Mort", power: "147k" },
            { name: "Iyari", power: "145k" }
        ],
        [
            { name: "Solaris", power: "135k" },
            { name: "Eden", power: "141k" },
            { name: "Iyari", power: "145k" },
            { name: "Tenebris", power: "127k" },
            { name: "Rigel", power: "132k" }
        ]
    ),
    createBattle(
        "100%",
        [
            { name: "Solaris", power: "129k" },
            { name: "Brustar", power: "128k" },
            { name: "Tenebris", power: "127k" },
            { name: "Araji", power: "137k" },
            { name: "Mort", power: "122k" }
        ],
        [
            { name: "Solaris", power: "129k" },
            { name: "Tenebris", power: "127k" },
            { name: "Iyari", power: "126k" },
            { name: "Araji", power: "137k" },
            { name: "Brustar", power: "128k" }
        ]
    ),
    createBattle(
        "100%",
        [
            { name: "Sylva", power: "137k" },
            { name: "Angus", power: "149k" },
            { name: "Avalon", power: "142k" },
            { name: "Eden", power: "141k" },
            { name: "Verdoc", power: "75k" }
        ],
        [
            { name: "Avalon", power: "142k" },
            { name: "Eden", power: "141k" },
            { name: "Angus", power: "149k" },
            { name: "Verdoc", power: "82k" },
            { name: "Sylva", power: "137k" }
        ]
    )
];

// Helper function to parse power values (e.g., "92k" -> 92000, "1.2m" -> 1200000)
function parsePower(powerStr) {
    if (!powerStr) return 0;
    
    const str = powerStr.toString().toLowerCase().trim();
    
    if (str.includes('m')) {
        return parseFloat(str) * 1000000;
    } else if (str.includes('k')) {
        return parseFloat(str) * 1000;
    }
    
    return parseFloat(str) || 0;
}

// Helper function to format power values
function formatPower(power) {
    if (power >= 1000000) {
        return (power / 1000000).toFixed(1) + 'm';
    } else if (power >= 1000) {
        return (power / 1000).toFixed(0) + 'k';
    }
    return power.toString();
}

// Calculate total power from titans
function calculateTotalPower(titans) {
    return titans.reduce((total, titan) => {
        return total + parsePower(titan.power);
    }, 0);
}

// Get team total power (formatted)
function getTeamTotalPower(team) {
    if (team.totalPower) {
        return team.totalPower;
    }
    const total = calculateTotalPower(team.titans);
    return formatPower(total);
}
