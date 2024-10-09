// Função para codificação única (WhatsApp, Reddit)
function singleEncode(url) {
    return encodeURIComponent(url);
}

// Função para codificação dupla (Facebook)
function doubleEncode(url) {
    return encodeURIComponent(encodeURIComponent(url));
}

// Detectar se o usuário está em um dispositivo iOS
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const currentUrl = canonicalLink ? canonicalLink.href : window.location.href;

    // Codificação única para WhatsApp
    const encodedUrlForWhatsApp = singleEncode(currentUrl);

    // Codificação condicional para Facebook com base no dispositivo
    const encodedUrlForFacebook = isIOS() ? singleEncode(currentUrl) : doubleEncode(currentUrl);

    // Codificação única para Reddit
    const encodedUrlForReddit = singleEncode(currentUrl);

    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Confira%20este%20conteúdo:%20${encodedUrlForWhatsApp}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrlForFacebook}`;
    document.getElementById('reddit-share').href = `https://www.reddit.com/submit?url=${encodedUrlForReddit}&title=Confira%20este%20conteúdo`;

    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(currentUrl).then(() => {
            alert('Link copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar o link: ', err);
        });
    });
});