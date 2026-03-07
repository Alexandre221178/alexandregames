document.addEventListener("DOMContentLoaded", function () {

const container = document.getElementById("author-alexandre-games");
if (!container) return;

const path = window.location.pathname;


/* ==============================
INJETAR CSS
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

/* caixa de suporte do criador */

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
HTML DO AUTOR
================================ */

const authorHTML = `

<div class="about-author">

<img src="/imagens/alexandre-domingos.webp"
alt="Alexandre Domingos - Autor do Blog"
loading="lazy">

<div class="author-text">

<h3>Sobre o Autor</h3>

<p>
<strong>Alexandre Domingos</strong> possui pós-graduação em Engenharia e trabalha como Supervisor de Produção.
No tempo livre, atua como
<a href="https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw" target="_blank" rel="noopener">
<strong>YouTuber</strong></a>, <strong>blogueiro</strong> e <strong>webmaster</strong> no
<a href="https://alexandregames.com"><strong>Alexandre Games</strong></a>.
</p>

<p>
Ele está imerso no mundo dos jogos desde os 5 anos de idade, começando em plataformas clássicas como
MSX, Master System, Nintendo e até mesmo em um antigo PC 286. Desde 2019 produz guias,
tutoriais e estratégias avançadas para a comunidade.
</p>

</div>

</div>

`;


/* ==============================
HTML DO CÓDIGO DE CRIADOR
================================ */

const creatorHTML = `

<div class="creator-support-box">

<div class="creator-header">
🎮 Está gostando do guia?
</div>

<p class="creator-text">
Se este guia ajudou você a vencer batalhas ou melhorar sua jogabilidade, considere apoiar o projeto por trás do <strong>Alexandre Games</strong>.
</p>

<p class="creator-text">
Use o código de criador oficial na Web Shop do Hero Wars:
</p>

<div class="creator-code-box">
<span>Código de Criador</span>
ALEXANDREGAMES
</div>

<a href="https://hwa.nexters.com/c/ALEXANDREGAMES"
target="_blank"
rel="noopener"
class="creator-main-button">
Visitar Web Shop Oficial
</a>

<p class="creator-small">
Usar este código ajuda a apoiar a criação de novos guias e tutoriais para a comunidade — sem custo extra para você.
</p>

</div>

`;


/* ==============================
INSERIR AUTOR
================================ */

container.innerHTML = authorHTML;


/* ==============================
INSERIR CÓDIGO DE CRIADOR (apenas Hero Wars Alliance)
================================ */

if (path.includes("hero-wars-alliance")) {
container.innerHTML += creatorHTML;
}

});