// Define o conteúdo HTML do menu
const menuContent = `
    
    <a href="https://alexandregames.com/herowars-alliance-en.html"><b>Hero Wars Alliance</b></a>
                    <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-en-hwa.html">Best Teams Guide</a>
                    <a href="https://alexandregames.com/Hero%20Wars/calendar-event-en-hwa.html">Calendar & Events</a>
                    <a href="https://alexandregames.com/Hero%20Wars%20English/Heroes%20Guide%20Hero%20Wars.html">Heroes Guide</a>
                    <a href="https://alexandregames.com/hero-wars-alliance/event-hwa/herosway-en-hwa.html">Hero's Way</a>  
                    <a href="https://alexandregames.com/hero-wars-alliance/menu-review-en-hwa.html">Skins Reviews</a>
                    <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">Tactics & Secrets</a>
                    <a href="https://alexandregames.com/Hero%20Wars%20English/Titans%20Guide%20Hero%20Wars.html">Titans Guide</a>
                    
                    
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

