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
alt="Alexandre Domingos - Autor del blog"
loading="lazy">

<div class="author-text">

<h3>Sobre el autor</h3>

<p>
<strong>Alexandre Domingos</strong> tiene un posgrado en ingeniería y trabaja como supervisor de producción.
En su tiempo libre es
<a href="https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw" target="_blank" rel="noopener">
<strong>YouTuber</strong></a>, <strong>bloguero</strong> y
<strong>webmaster</strong> de
<a href="https://alexandregames.com"><strong>Alexandre Games</strong></a>.
</p>

<p>
Juega videojuegos desde los 5 años, comenzando con plataformas clásicas como MSX,
Master System, Nintendo y los antiguos PCs 286.
Desde 2019 crea guías, tutoriales y estrategias avanzadas para la comunidad gamer.
</p>

</div>

</div>

`;


/* ==============================
Creator Code
================================ */

const creatorHTML = `

<div class="creator-support-box">

<div class="creator-header">
🎮 ¿Esta guía te fue útil?
</div>

<p class="creator-text">
Si esta guía te ayudó a ganar batallas o mejorar tu juego,
puedes apoyar el trabajo de <strong>Alexandre Games</strong>.
</p>

<p class="creator-text">
Usa el siguiente código de creador en la tienda oficial de Hero Wars:
</p>

<div class="creator-code-box">
<span>Código de creador</span>
ALEXANDREGAMES
</div>

<a href="https://hwa.nexters.com/c/ALEXANDREGAMES"
target="_blank"
rel="noopener"
class="creator-main-button">
Visitar la tienda oficial
</a>

<p class="creator-small">
Usar este código ayuda a apoyar la creación de nuevas guías y tutoriales
sin ningún costo extra para ti.
<br>
🔥 ¡Más de 50 jugadores ya han apoyado a Alexandre Games!
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

});