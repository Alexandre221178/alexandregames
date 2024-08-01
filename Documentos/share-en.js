// Function to single encode for platforms like WhatsApp
function singleEncode(url) {
    return encodeURIComponent(url);
}

// Function to double encode for platforms like Facebook
function doubleEncode(url) {
    return encodeURIComponent(encodeURIComponent(url));
}

// Detect if the user is on an iOS device
function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const currentUrl = canonicalLink ? canonicalLink.href : window.location.href;

    // Use single encoding for WhatsApp
    const encodedUrlForWhatsApp = singleEncode(currentUrl);

    // Conditional encoding for Facebook based on platform
    const encodedUrlForFacebook = isIOS() ? singleEncode(currentUrl) : doubleEncode(currentUrl);

    document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=Confira%20este%20conteúdo:%20${encodedUrlForWhatsApp}`;
    document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrlForFacebook}`;

    document.getElementById('link-share').addEventListener('click', () => {
        navigator.clipboard.writeText(currentUrl).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Error copying link: ', err);
        });
    });
});
