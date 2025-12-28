// Titan PVP Battle Filter System for Hero Wars Alliance
// Search and filter titan battles by defense titans and power

// Get unique titan names from defense teams
function getDefenseTitans() {
    const titansSet = new Set();
    titanBattlesData.forEach(battle => {
        battle.defenseTeam.titans.forEach(titan => {
            titansSet.add(titan.name);
        });
    });
    return Array.from(titansSet).sort();
}

// Search battles by defense titans
function searchByDefenseTitans(selectedTitans) {
    if (!selectedTitans || selectedTitans.length === 0) {
        return titanBattlesData;
    }

    // Filter out empty strings
    const validTitans = selectedTitans.filter(t => t && t.trim() !== '');
    
    if (validTitans.length === 0) {
        return titanBattlesData;
    }

    return titanBattlesData.filter(battle => {
        const defenseTitanNames = battle.defenseTeam.titans.map(t => t.name.toLowerCase());
        
        // Check if all selected titans are in the defense team
        return validTitans.every(titanName => 
            defenseTitanNames.includes(titanName.toLowerCase())
        );
    });
}

// Find closest battles by power
function findClosestByPower(targetPower, battles, limit = 10) {
    const targetPowerNum = parsePower(targetPower);
    
    // Calculate difference for each battle
    const battlesWithDiff = battles.map(battle => {
        // Calculate defense power from titans
        const defensePower = calculateTotalPower(battle.defenseTeam.titans);
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
function searchTitanBattles(defenseTitans, targetPower, limit = 10) {
    // First filter by titans
    let results = searchByDefenseTitans(defenseTitans);
    
    // Then sort by power if provided
    if (targetPower && targetPower.trim() !== '') {
        results = findClosestByPower(targetPower, results, limit);
    } else {
        results = results.slice(0, limit);
    }
    
    return results;
}

// Render search results as HTML for titans
function renderTitanBattleResults(battles) {
    const container = document.getElementById('battle-results');
    if (!container) return;

    if (battles.length === 0) {
        container.innerHTML = '<p class="no-results">No titan battles found with the selected criteria.</p>';
        return;
    }

    let html = '<div class="results-header">';
    html += `<h3>Found ${battles.length} titan battle(s)</h3>`;
    html += '</div>';

    battles.forEach((battle, index) => {
        // Calculate total power for both teams
        const attackTotalPower = getTeamTotalPower(battle.attackTeam);
        const defenseTotalPower = getTeamTotalPower(battle.defenseTeam);
        
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
                    <div class="titans-list">
                        <div class="titan-item titan-header">
                            <span class="titan-name">Titan</span>
                            <span class="titan-power">Power</span>
                        </div>
                        ${battle.attackTeam.titans.map(titan => `
                            <div class="titan-item">
                                <span class="titan-name">${titan.name}</span>
                                <span class="titan-power" title="Titan Power">${titan.power || 'N/A'}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="vs-divider">VS</div>

                <div class="team defense-team">
                    <h4>🛡️ Defense Team</h4>
                    <div class="team-power">Total Power: ${defenseTotalPower}</div>
                    <div class="titans-list">
                        <div class="titan-item titan-header">
                            <span class="titan-name">Titan</span>
                            <span class="titan-power">Power</span>
                        </div>
                        ${battle.defenseTeam.titans.map(titan => `
                            <div class="titan-item">
                                <span class="titan-name">${titan.name}</span>
                                <span class="titan-power" title="Titan Power">${titan.power || 'N/A'}</span>
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

// Update selected titans display
function updateSelectedTitansDisplay() {
    const inputs = [
        document.getElementById('defense-titan-1'),
        document.getElementById('defense-titan-2'),
        document.getElementById('defense-titan-3'),
        document.getElementById('defense-titan-4'),
        document.getElementById('defense-titan-5')
    ];
    
    const display = document.getElementById('selected-titans-display');
    if (!display) return;
    
    const selectedTitans = inputs
        .map(input => input.value.trim())
        .filter(value => value !== '');
    
    if (selectedTitans.length > 0) {
        display.classList.add('active');
        display.innerHTML = `
            <div class="selected-titans-title">Selected Defense Titans (${selectedTitans.length}/5):</div>
            ${selectedTitans.map(titan => `<span class="selected-titan-tag">${titan}</span>`).join('')}
        `;
    } else {
        display.classList.remove('active');
        display.innerHTML = '';
    }
}

// Initialize search interface
function initializeTitanBattleSearch() {
    const powerInput = document.getElementById('target-power-input');
    const searchButton = document.getElementById('search-battles-btn');
    const clearButton = document.getElementById('clear-search-btn');
    
    const titanInputs = [
        document.getElementById('defense-titan-1'),
        document.getElementById('defense-titan-2'),
        document.getElementById('defense-titan-3'),
        document.getElementById('defense-titan-4'),
        document.getElementById('defense-titan-5')
    ];

    if (!powerInput || !searchButton || titanInputs.some(input => !input)) {
        console.error('Search interface elements not found');
        return;
    }

    // Populate datalist with titan names
    const datalist = document.getElementById('titans-datalist');
    if (datalist) {
        const defenseTitans = getDefenseTitans();
        defenseTitans.forEach(titanName => {
            const option = document.createElement('option');
            option.value = titanName;
            datalist.appendChild(option);
        });
    }

    // Add input listeners to update display
    titanInputs.forEach(input => {
        input.addEventListener('input', updateSelectedTitansDisplay);
        input.addEventListener('change', updateSelectedTitansDisplay);
    });

    // Search button click handler
    searchButton.addEventListener('click', () => {
        const selectedTitans = titanInputs.map(input => input.value.trim());
        const targetPower = powerInput.value;
        
        const results = searchTitanBattles(selectedTitans, targetPower);
        renderTitanBattleResults(results);
    });

    // Clear button click handler
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            titanInputs.forEach(input => input.value = '');
            powerInput.value = '';
            updateSelectedTitansDisplay();
            document.getElementById('battle-results').innerHTML = '';
        });
    }

    // Allow Enter key to search
    powerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    titanInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    });
}

// Update battle count display
function updateTitanBattleCount() {
    const countElement = document.getElementById('total-battles-count');
    if (countElement && typeof titanBattlesData !== 'undefined') {
        countElement.textContent = titanBattlesData.length;
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeTitanBattleSearch();
        updateTitanBattleCount();
    });
} else {
    initializeTitanBattleSearch();
    updateTitanBattleCount();
}
