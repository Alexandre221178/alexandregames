// Mapeamento das posições dos Titans no jogo Hero Wars Alliance
// Use esta ordem ao adicionar titans do print (por dano causado)
// O sistema reorganizará automaticamente na posição correta de batalha

const titanBattlePositions = {
    "Sigurd": 1,
    "Brustar": 2,
    "Rigel": 3,
    "Moloch": 4,
    "Angus": 5,
    "Nova": 6,
    "Vulcan": 7,
    "Avalon": 8,
    "Verdoc": 9,
    "Tydus": 10,
    "Mairi": 11,
    "Araji": 12,
    "Iyari": 13,
    "Asherona": 14,
    "Eden": 15,
    "Lumira": 16,
    "Hyperion": 17,
    "Ignis": 18,
    "Solaris": 19,
    "Sylva": 20,
    "Amon": 21,
    "Morte": 22,
    "Keros": 23,
    "Tenebris": 24
};

/**
 * Reorganiza os titans na ordem de batalha do jogo
 * @param {Array} titans - Array de titans em qualquer ordem (ex: ordem de dano)
 * @returns {Array} - Titans ordenados pela posição de batalha
 */
function sortTitansByBattlePosition(titans) {
    return titans.sort((a, b) => {
        const posA = titanBattlePositions[a.name] || 999;
        const posB = titanBattlePositions[b.name] || 999;
        return posA - posB;
    });
}

/**
 * Cria uma entrada de batalha com titans já ordenados
 * Adicione os titans na ordem que aparecem no print (por dano)
 * A função reorganizará automaticamente
 */
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

// Exemplo de uso - Copie do print na ordem de dano:
// Exemplo baseado no seu print:
/*
const exampleBattle = createBattle(
    "100%",
    // ATTACK TEAM - Cole aqui na ordem do print (por dano)
    [
        { name: "Amon", power: "120k" },
        { name: "Solaris", power: "120k" },
        { name: "Brustar", power: "120k" },
        { name: "Iyari", power: "120k" },
        { name: "Lumira", power: "120k" }
    ],
    // DEFENSE TEAM - Cole aqui na ordem do print (por dano)
    [
        { name: "Solaris", power: "120k" },
        { name: "Iyari", power: "120k" },
        { name: "Tenebris", power: "120k" },
        { name: "Rigel", power: "120k" },
        { name: "Araji", power: "120k" }
    ]
);

// Resultado: os titans serão automaticamente reorganizados na posição de batalha:
// Attack: Brustar(2), Lumira(16), Solaris(19), Amon(21)
// Defense: Rigel(3), Araji(12), Iyari(13), Solaris(19), Tenebris(24)
*/
