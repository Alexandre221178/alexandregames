// PVP Battle Filter System for Hero Wars Dominion Era
// Search and filter battles by defense heroes and power

// Get unique hero names from defense teams
function getDefenseHeroes() {
    const heroesSet = new Set();
    battlesData.forEach(battle => {
        battle.defenseTeam.heroes.forEach(hero => {
            heroesSet.add(hero.name);
        });
    });
    return Array.from(heroesSet).sort();
}

// Get unique pet names from defense teams
function getDefensePets() {
    const petsSet = new Set();
    battlesData.forEach(battle => {
        battle.defenseTeam.heroes.forEach(hero => {
            if (hero.pet && hero.pet !== "No Pet") {
                petsSet.add(hero.pet);
            }
        });
        if (battle.defenseTeam.mainPet) {
            petsSet.add(battle.defenseTeam.mainPet.name);
        }
    });
    return Array.from(petsSet).sort();
}

// Search battles by defense heroes
function searchByDefenseHeroes(selectedHeroes) {
    if (!selectedHeroes || selectedHeroes.length === 0) {
        return battlesData;
    }

    // Filter out empty strings
    const validHeroes = selectedHeroes.filter(h => h && h.trim() !== '');
    
    if (validHeroes.length === 0) {
        return battlesData;
    }

    return battlesData.filter(battle => {
        const defenseHeroNames = battle.defenseTeam.heroes.map(h => h.name.toLowerCase());
        
        // Check if all selected heroes are in the defense team
        return validHeroes.every(heroName => 
            defenseHeroNames.includes(heroName.toLowerCase())
        );
    });
}

// Find closest battles by power
function findClosestByPower(targetPower, battles, limit = 10) {
    const targetPowerNum = parsePower(targetPower);
    
    // Calculate difference for each battle
    const battlesWithDiff = battles.map(battle => {
        // Use the stored defense total power
        const defensePower = parsePower(battle.defenseTeam.totalPower || battle.totalPower);
        const difference = Math.abs(targetPowerNum - defensePower);
        return {
            ...battle,
            powerDifference: difference
        };
    });

    // Sort by difference and return top results
    return battlesWithDiff
        .sort((a, b) => a.powerDifference - b.powerDifference)
        .slice(0, limit);
}

// Main search function
function searchBattles(defenseHeroes, targetPower, limit = 10) {
    // First filter by heroes
    let results = searchByDefenseHeroes(defenseHeroes);
    
    // Then sort by power if provided
    if (targetPower && targetPower.trim() !== '') {
        results = findClosestByPower(targetPower, results, limit);
    } else {
        results = results.slice(0, limit);
    }
    
    return results;
}

// Render search results as HTML with HWDE-specific data
function renderBattleResults(battles) {
    const container = document.getElementById('battle-results');
    if (!container) return;

    if (battles.length === 0) {
        container.innerHTML = '<p class="no-results">No battles found with the selected criteria.</p>';
        return;
    }

    let html = '<div class="results-header">';
    html += `<h3>Found ${battles.length} battle(s)</h3>`;
    html += '</div>';

    battles.forEach((battle, index) => {
        // Get team total powers
        const attackTotalPower = battle.attackTeam.totalPower;
        const defenseTotalPower = battle.defenseTeam.totalPower;
        
        html += `
        <div class="battle-card">
            <div class="battle-header">
                <span class="win-rate">${battle.winRate} Win Rate</span>
                <span class="battle-number">#${index + 1}</span>
            </div>
            
            <div class="teams-container">
                <div class="team attack-team">
                    <h4>⚔️ Attack Team</h4>
                    <div class="team-power">Total Power: ${attackTotalPower}</div>
                    <div class="team-extras">
                        <div class="main-pet">Main Pet: ${battle.attackTeam.mainPet.name} (${battle.attackTeam.mainPet.power})</div>
                        <div class="war-flag">War Flag: ${battle.attackTeam.warFlag}</div>
                    </div>
                    <div class="heroes-list">
                        <div class="hero-item hero-header">
                            <span class="hero-name">Hero</span>
                            <span class="hero-power">Power</span>
                            <span class="hero-pet">Pet</span>
                        </div>
                        ${battle.attackTeam.heroes.map(hero => `
                            <div class="hero-item">
                                <span class="hero-name">${hero.name}</span>
                                <span class="hero-power" title="Hero Power">${hero.power || 'N/A'}</span>
                                <span class="hero-pet" title="Pet">${hero.pet}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="vs-divider">VS</div>

                <div class="team defense-team">
                    <h4>🛡️ Defense Team</h4>
                    <div class="team-power">Total Power: ${defenseTotalPower}</div>
                    <div class="team-extras">
                        <div class="main-pet">Main Pet: ${battle.defenseTeam.mainPet.name} (${battle.defenseTeam.mainPet.power})</div>
                        <div class="war-flag">War Flag: ${battle.defenseTeam.warFlag}</div>
                    </div>
                    <div class="heroes-list">
                        <div class="hero-item hero-header">
                            <span class="hero-name">Hero</span>
                            <span class="hero-power">Power</span>
                            <span class="hero-pet">Pet</span>
                        </div>
                        ${battle.defenseTeam.heroes.map(hero => `
                            <div class="hero-item">
                                <span class="hero-name">${hero.name}</span>
                                <span class="hero-power" title="Hero Power">${hero.power || 'N/A'}</span>
                                <span class="hero-pet" title="Pet">${hero.pet}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}

// Update selected heroes display
function updateSelectedHeroesDisplay() {
    const inputs = [
        document.getElementById('defense-hero-1'),
        document.getElementById('defense-hero-2'),
        document.getElementById('defense-hero-3'),
        document.getElementById('defense-hero-4'),
        document.getElementById('defense-hero-5')
    ];
    
    const display = document.getElementById('selected-heroes-display');
    if (!display) return;
    
    const selectedHeroes = inputs
        .map(input => input.value.trim())
        .filter(value => value !== '');
    
    if (selectedHeroes.length > 0) {
        display.classList.add('active');
        display.innerHTML = `
            <div class="selected-heroes-title">Selected Defense Heroes (${selectedHeroes.length}/5):</div>
            ${selectedHeroes.map(hero => `<span class="selected-hero-tag">${hero}</span>`).join('')}
        `;
    } else {
        display.classList.remove('active');
        display.innerHTML = '';
    }
}

// Initialize search interface
function initializeBattleSearch() {
    const powerInput = document.getElementById('target-power-input');
    const searchButton = document.getElementById('search-battles-btn');
    const clearButton = document.getElementById('clear-search-btn');
    
    const heroInputs = [
        document.getElementById('defense-hero-1'),
        document.getElementById('defense-hero-2'),
        document.getElementById('defense-hero-3'),
        document.getElementById('defense-hero-4'),
        document.getElementById('defense-hero-5')
    ];

    if (!powerInput || !searchButton || heroInputs.some(input => !input)) {
        console.error('Search interface elements not found');
        return;
    }

    // Populate datalist with hero names
    const datalist = document.getElementById('heroes-datalist');
    if (datalist) {
        const defenseHeroes = getDefenseHeroes();
        defenseHeroes.forEach(heroName => {
            const option = document.createElement('option');
            option.value = heroName;
            datalist.appendChild(option);
        });
    }

    // Add input listeners to update display
    heroInputs.forEach(input => {
        input.addEventListener('input', updateSelectedHeroesDisplay);
        input.addEventListener('change', updateSelectedHeroesDisplay);
    });

    // Search button click handler
    searchButton.addEventListener('click', () => {
        const selectedHeroes = heroInputs.map(input => input.value.trim());
        const targetPower = powerInput.value;
        
        const results = searchBattles(selectedHeroes, targetPower);
        renderBattleResults(results);
    });

    // Clear button click handler
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            heroInputs.forEach(input => input.value = '');
            powerInput.value = '';
            updateSelectedHeroesDisplay();
            document.getElementById('battle-results').innerHTML = '';
        });
    }

    // Allow Enter key to search
    powerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    heroInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    });
}

// Update battle count display
function updateBattleCount() {
    const countElement = document.getElementById('total-battles-count');
    if (countElement && typeof battlesData !== 'undefined') {
        countElement.textContent = battlesData.length;
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeBattleSearch();
        updateBattleCount();
    });
} else {
    initializeBattleSearch();
    updateBattleCount();
}
