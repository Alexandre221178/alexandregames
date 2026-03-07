document.addEventListener("DOMContentLoaded", function () {

const container = document.getElementById("author-alexandre-games");
if (!container) return;

const path = window.location.pathname;


/* ==============================
INJECT CSS
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

/* creator box */

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
AUTHOR HTML
================================ */

const authorHTML = `

<div class="about-author">

<img src="/imagens/alexandre-domingos.webp"
alt="Alexandre Domingos - Blog Author"
loading="lazy">

<div class="author-text">

<h3>About the Author</h3>

<p>
<strong>Alexandre Domingos</strong> holds a postgraduate degree in Engineering and works as a Production Supervisor.
In his spare time, he works as a
<a href="https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw" target="_blank" rel="noopener">
<strong>YouTuber</strong></a>, <strong>blogger</strong>, and <strong>webmaster</strong> at
<a href="https://alexandregames.com"><strong>Alexandre Games</strong></a>.
</p>

<p>
He has been immersed in the gaming world since the age of 5, starting on classic platforms such as
MSX, Master System, Nintendo, and even an old 286 PC. Since 2019 he has been producing guides,
tutorials, and advanced strategies for the community.
</p>

</div>

</div>

`;


/* ==============================
CREATOR CODE HTML
================================ */

const creatorHTML = `

<div class="creator-support-box">

<div class="creator-header">
🎮 Enjoying the Guide?
</div>

<p class="creator-text">
If this guide helped you win battles or improve your gameplay, consider supporting the project behind <strong>Alexandre Games</strong>.
</p>

<p class="creator-text">
Use the official creator code in the Hero Wars Web Shop:
</p>

<div class="creator-code-box">
<span>Creator Code</span>
ALEXANDREGAMES
</div>

<a href="https://hwa.nexters.com/c/ALEXANDREGAMES"
target="_blank"
rel="noopener"
class="creator-main-button">
Visit Official Web Shop
</a>

<p class="creator-small">
Using this code helps support new guides and tutorials for the community — at no extra cost to you.
</p>

</div>

`;


/* ==============================
INSERT AUTHOR
================================ */

container.innerHTML = authorHTML;


/* ==============================
INSERT CREATOR CODE (Hero Wars Alliance only)
================================ */

if (path.includes("hero-wars-alliance")) {
container.innerHTML += creatorHTML;
}

});