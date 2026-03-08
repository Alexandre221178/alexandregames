document.addEventListener("DOMContentLoaded", function () {

const container = document.getElementById("author-alexandre-games");
if (!container) return;

const path = window.location.pathname;


/* ==============================
CSS
================================ */

if (!document.getElementById("alex-author-style")) {

const style = document.createElement("style");
style.id = "alex-author-style";

style.textContent = `

.about-author{
display:flex;
gap:15px;
margin:40px 0 25px;
padding:20px;
border:1px solid #e5e5e5;
border-radius:8px;
background:#fafafa;
align-items:flex-start;
}

.about-author img{
width:90px;
height:90px;
border-radius:50%;
object-fit:cover;
}

.author-text h3{
margin-top:0;
font-size:18px;
}

.author-text p{
margin-bottom:10px;
font-size:16px;
line-height:1.5;
}

/* Creator Box */

.creator-support-box{
margin:30px 0;
padding:25px;
border-radius:10px;
background:linear-gradient(135deg,#1e293b,#111827);
color:#ffffff;
text-align:center;
box-shadow:0 6px 20px rgba(0,0,0,0.25);
}

.creator-support-box p,
.creator-support-box strong,
.creator-support-box span,
.creator-support-box a{
color:#ffffff;
}

.creator-header{
font-size:22px;
font-weight:700;
margin-bottom:10px;
}

.creator-text{
font-size:17px;
margin-bottom:12px;
opacity:0.9;
color:white;
}

.creator-code-box{
background:white;
color:#d32f2f;
display:inline-block;
padding:10px 18px;
border-radius:8px;
margin:12px 0;
font-size:18px;
font-weight:700;
}

.creator-code-box span{
display:block;
font-size:16px;
color:#444;
font-weight:500;
}

.creator-main-button{
display:inline-block;
margin-top:12px;
padding:12px 24px;
background:#ff3b3b;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:700;
font-size:15px;
transition:0.2s;
}

.creator-main-button:hover{
background:#ff1f1f;
transform:scale(1.05);
}

.creator-small{
font-size:16px;
margin-top:10px;
opacity:0.8;
}

`;

document.head.appendChild(style);

}


/* ==============================
Autor
================================ */

const authorHTML = `

<div class="about-author">

<img src="/imagens/alexandre-domingos.webp"
alt="Alexandre Domingos - Blogautor"
loading="lazy">

<div class="author-text">

<h3>Über den Autor</h3>

<p>
<strong>Alexandre Domingos</strong> hat einen postgradualen Abschluss in Ingenieurwesen und arbeitet als Produktionsleiter.
In seiner Freizeit ist er
<a href="https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw" target="_blank" rel="noopener">
<strong>YouTuber</strong></a>, <strong>Blogger</strong> und
<strong>Webmaster</strong> von
<a href="https://alexandregames.com"><strong>Alexandre Games</strong></a>.
</p>

<p>
Er spielt Videospiele seit seinem 5. Lebensjahr und begann mit klassischen Plattformen wie MSX,
Master System, Nintendo und alten 286-PCs.
Seit 2019 erstellt er Guides, Tutorials und fortgeschrittene Strategien für die Gaming-Community.
</p>

</div>

</div>

`;

/* ==============================
GIVE ME a Coffee HTML FOR HERO WARS: DOMINION ERA
================================ */
const coffeeHTML = `

<div class="creator-support-box">

<div class="creator-header">
☕ Hat dir dieser Guide gefallen?
</div>

<p class="creator-text">
Wenn dir dieser Guide geholfen hat, unterstütze bitte das Projekt
<strong>Alexandre Games</strong> mit einem Kaffee.
</p>

<a href="https://ko-fi.com/alexandregamesoficial"
target="_blank"
rel="noopener"
class="creator-main-button">
Mit einem Kaffee unterstützen ☕
</a>

<p class="creator-small">
Deine Unterstützung hilft dabei, neue Guides und Strategien auf der Website zu veröffentlichen.
</p>

</div>

`;


/* ==============================
Creator Code
================================ */

const creatorHTML = `

<div class="creator-support-box">

<div class="creator-header">
🎮 War dieser Guide hilfreich?
</div>

<p class="creator-text">
Wenn dir dieser Guide geholfen hat, Kämpfe zu gewinnen oder dein Gameplay zu verbessern,
kannst du die Arbeit von <strong>Alexandre Games</strong> unterstützen.
</p>

<p class="creator-text">
Verwende den folgenden Creator-Code im offiziellen Hero Wars Shop:
</p>

<div class="creator-code-box">
<span>Creator-Code</span>
ALEXANDREGAMES
</div>

<a href="https://hwa.nexters.com/c/ALEXANDREGAMES"
target="_blank"
rel="noopener"
class="creator-main-button">
Offiziellen Shop besuchen
</a>

<p class="creator-small">
Die Verwendung dieses Codes unterstützt die Erstellung neuer Guides und Tutorials –
ohne zusätzliche Kosten für dich.
<br>
🔥 Mehr als 50 Spieler haben Alexandre Games bereits unterstützt!
</p>

</div>

`;


/* ==============================
Insert Author
================================ */

container.innerHTML = authorHTML;


/* ==============================
Creator Code (only hero-wars-alliance)
================================ */

if (path.includes("hero-wars-alliance")) {
container.innerHTML += creatorHTML;
}

if (path.includes("hero-wars-dominion-era")) {
container.innerHTML += coffeeHTML;
}

});