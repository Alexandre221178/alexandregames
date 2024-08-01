// Function to single encode for platforms like WhatsApp
function singleEncode(url) {
    return encodeURIComponent(url);
}

// Function to double encode for platforms like Facebook
function doubleEncode(url) {
    return encodeURIComponent(encodeURIComponent(url));
}

document.addEventListener('DOMContentLoaded', (event) => {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const currentUrl = canonicalLink ? canonicalLink.href : window.location.href;
    
    // Use single encoding for WhatsApp
    const encodedUrlForWhatsApp = singleEncode(currentUrl);
    
    // Use double encoding for Facebook
    const encodedUrlForFacebook = doubleEncode(currentUrl);

    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Confira%20este%20conteúdo:%20${encodedUrlForWhatsApp}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrlForFacebook}`;

    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(currentUrl).then(() => {
            alert('Link copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar o link: ', err);
        });
    });
});
