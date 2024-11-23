// Define o conteúdo HTML do menu
const menuContent = `
    <h6>Hero Wars Alliance</h6>
    <a href="https://alexandregames.com/herowars-alliance-en.html">HWA - Home</a>
                    <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-en-hwa.html">Best Teams Guide</a>
                    <a href="https://alexandregames.com/Hero%20Wars/calendar-event-en-hwa.html">Calendar & Events</a>
                    <a href="https://alexandregames.com/Hero%20Wars%20English/Heroes%20Guide%20Hero%20Wars.html">Heroes Guide</a>
                    <a href="https://alexandregames.com/hero-wars-alliance/menu-review-en-hwa.html">Skins Reviews</a>
                    <a href="https://alexandregames.com/Hero%20Wars%20English/Titans%20Guide%20Hero%20Wars.html">Tactics & Secrets</a>
                    <a href="https://alexandregames.com/Hero%20Wars%20English/Titans%20Guide%20Hero%20Wars.html">Titans Guide</a>
                    
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

