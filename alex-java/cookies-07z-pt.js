document.addEventListener("DOMContentLoaded", function () {
    // Criar e inserir CSS dinamicamente
    const style = document.createElement('style');
    style.innerHTML = `
        .cookie-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #faebe4;
            padding: 10px 20px;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
            z-index: 1000;
        }
        .cookie-banner p {
            margin: 0;
            text-align: center;
        }
        .button-container {
            margin-top: 10px;
        }
        .btn {
            padding: 8px 20px;
            margin: 0 5px;
            margin-bottom: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .accept-btn {
            background-color: #00611E;
            color: white;
        }
        .reject-btn {
            background-color: #9E251A;
            color: white;
        }
        .privacy-link {
            color: #171717;
            text-decoration: none;
        }
        .privacy-link:hover {
            text-decoration: underline;
        }
        @media (max-width: 768px) {
            .box-cookies {
                flex-direction: column;
                border-left: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Criar e inserir o banner de cookies
    const cookieBannerHTML = `
        <div id="cookie-banner" class="cookie-banner">
            <p>Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de cookies.</p>
            <div class="button-container">
                <button id="accept-cookies" class="btn accept-btn">Aceitar Todos</button>
                <button id="reject-cookies" class="btn reject-btn">Rejeitar Todos</button>
            </div>
            <a href="https://alexandregames.com/Documentos/Pol%C3%ADtica%20de%20privacidade.html" class="privacy-link">Política de Privacidade</a>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', cookieBannerHTML);

    // Selecionar botões e banner
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const rejectCookiesBtn = document.getElementById('reject-cookies');
    const cookieBanner = document.getElementById('cookie-banner');

    // Função para aceitar cookies
    acceptCookiesBtn.addEventListener('click', function () {
        setCookie('cookie_consent', 'accepted', 365);
        cookieBanner.style.display = 'none';
    });

    // Função para rejeitar cookies
    rejectCookiesBtn.addEventListener('click', function () {
        setCookie('cookie_consent', 'rejected', 180);
        cookieBanner.style.display = 'none';
    });

    // Função para definir cookies
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    // Função para obter cookies
    function getCookie(name) {
        const cookieArray = document.cookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            const cookiePair = cookieArray[i].split('=');
            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    // Verificar consentimento de cookies
    const consent = getCookie('cookie_consent');
    if (consent === 'accepted' || consent === 'rejected') {
        cookieBanner.style.display = 'none';
    }
});
