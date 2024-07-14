document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
       <div class="logo">
                  <a href="https://alexandregames.com/index-pt.html"><img src="../imagens/exandregames318x318-removebg.webp" alt="logo Alexandre Games Mobile" title="logo Alexandre Games Mobile" ></a>
              </div>                     
              <ul>                     
                  <div class="dropdown">
                    <button><a href="../HeroWars.html">Hero Wars Alliance</a></button>
                      
                  </div>              
                      
                  <div class="dropdown">
                      <button><a href="../MobileLegends.html">Mobile Legends</a></button> 
                     
                  </div> 
      
                  <div class="dropdown">
                      <button><a href="../roblox-br.html">Roblox</a></button> 
                     
                  </div> 
                  
            <div class="dropdown">
                <button class="dropbtn">More</button>
                <div class="dropdown-content">
                <a href="../ragnarok-origin/codigos-ragnarok-br.html">Ragnarok ROO</a>
                    <a>_____________</a>
                    <a href="../Documentos/Contato.html">Contato</a>
                    <a href="../Documentos/aviso-legal.html">Isenção de Responsabilidade</a>
                    <a href="../Documentos/Política de privacidade.html">Política de Privacidade</a>
                    <a href="../Documentos/Sobre.html">Sobre Nós</a>                   
                    <a href="../Documentos/Termos de uso.html">Termos de Uso</a>
                </div>
            </div>
        </ul>
        <div class="menu-icon">
            <img src="../imagens/menu.png" alt="Menu" style="width:48px;height:48px;">
        </div>
    `;

    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    document.querySelector('.container').prepend(navElement);

    // Move the language switch button inside the nav
    const langButton = document.querySelector('.language-switch');
    navElement.querySelector('ul').appendChild(langButton);

    var menu = document.querySelector('nav ul');
    var menuBar = document.querySelector('nav .menu-icon');
    var iconMenu = document.querySelector('nav .menu-icon img');

    menuBar.addEventListener('click', function() {
        if (iconMenu.getAttribute("src") === '../imagens/close.webp') {
            iconMenu.setAttribute("src", "../imagens/menu.png");
        } else {
            iconMenu.setAttribute("src", "../imagens/close.webp");
        }
        
        menu.classList.toggle('active');
    });
});

// last modified inicio

        // Function to extract and display modification date
        function displayModificationDate() {
            var metaTags = document.getElementsByTagName('meta');
            var modificationDate;

            // Array with month names
            var months = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            // Find the meta tag with property="article:modified_time"
            for (var i = 0; i < metaTags.length; i++) {
                if (metaTags[i].getAttribute('property') === 'article:modified_time') {
                    modificationDate = metaTags[i].getAttribute('content');
                    break;
                }
            }

            // Display the modification date on the page
            if (modificationDate) {
                var formattedDate = new Date(modificationDate);
                var day = formattedDate.getDate();
                var month = months[formattedDate.getMonth()]; // Get the month name
                var year = formattedDate.getFullYear();
                var dateElement = document.getElementById('data-modificacao');
                dateElement.textContent = 'Last updated: ' + month + ' ' + day + ', ' + year;
            }
        }

        // Call the function when the page loads
        window.onload = displayModificationDate;
    
// last modified fim






  


