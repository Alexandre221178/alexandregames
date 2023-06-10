var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == '../../imagens/close.png') {
        iconMenu.setAttribute("src","../../imagens/menu.png");
    }else{
        iconMenu.setAttribute("src","../../imagens/close.png");
    }
    
    menu.classList.toggle('active')
});

(() => {
    if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
    }

    const acceptCookies = () => {
        document.querySelector(".box-cookies").classList.add('hide');
        localStorage.setItem("pureJavaScriptCookies", "accept");
    };

    const btnCookies = document.querySelector(".btn-cookies");

    btnCookies.addEventListener('click', acceptCookies);
})();

let text = document.lastModified;
document.getElementById("demo").innerHTML = text;
document.getElementById("demo").style.color = "#18a84d";

