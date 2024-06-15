document.addEventListener('DOMContentLoaded', (event) => {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const currentUrl = canonicalLink ? canonicalLink.href : window.location.href;
    const encodedUrl = encodeURIComponent(currentUrl);

    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Confira%20este%20conteúdo:%20${encodedUrl}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(currentUrl).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Error copying link: ', err);
        });
    });
});