// Define o conteúdo HTML do menu
const menuContent = `
  
    <a href="https://alexandregames.com/herowars-alliance-pt.html">Hero Wars Alliance</a>  
                <a href="https://alexandregames.com/hero-wars-alliance/menu-best-teams-pt-hwa.html">Guia de Melhores Times</a>  
                <a href="https://alexandregames.com/Hero%20Wars/calendar-event-pt-hwa.html">Calendário & Eventos</a>
                <a href="https://alexandregames.com/hero-wars-alliance/event-hwa/herosway-pt-hwa.html">Caminho do Herói</a>  
                <a href="https://alexandregames.com/Hero%20Wars/Guiadeherois.html">Guia de Heróis</a>  
                <a href="https://alexandregames.com/hero-wars-alliance/menu-review-pt-hwa.html">Análises de Skins</a>  
                <a href="https://alexandregames.com/hero-wars-alliance/menu-tactics-secrets-hwa-en.html">Táticas & Segredos</a>  
                <a href="https://alexandregames.com/Hero%20Wars/Guia%20de%20Titans.html">Guia de Titãs</a>  
                
    
`;

// Seleciona a div existente com a classe "menu-fixo"
const menuFixo = document.querySelector('.menu-fixo');

// Insere o conteúdo HTML na div "menu-fixo"
if (menuFixo) {
    menuFixo.innerHTML = menuContent;
}

