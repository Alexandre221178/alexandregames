// Hero Wars Alliance - Titan Battle Database
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
    }
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
