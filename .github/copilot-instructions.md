# Alexandre Games - AI Coding Agent Instructions

## Project Overview
**Alexandre Games** is a bilingual (English/Portuguese) gaming blog focused on mobile/cross-platform games including Hero Wars Alliance/Dominion Era, Mobile Legends, Roblox, Top Troops, and Throne and Liberty. The site is built with vanilla HTML, CSS, and JavaScript - no frameworks.

## Architecture & Structure

### Language System
- **Dual-language approach**: Most pages exist in `-en.html` and `-pt.html` variants
- English pages: `index.html`, `Index-English.html`, `HeroWars.html`
- Portuguese pages: `index-pt.html`, `HeroWars-pt.html`, `roblox-br.html`
- Navigation and shared components are language-specific JS files (e.g., `nav07z-en.js`, `nav07z-pt.js`)

### Component Injection Pattern
**Critical**: This site uses JavaScript-based component injection instead of server-side includes:
- Navigation: `alex-java/nav07z-{en,pt}.js` and `Documentos/nav13-{en,pt}-v2.js`
- Footer: `alex-java/footer-07z-{en,pt}.js`
- Cookies: `alex-java/cookies-07z-{en,pt}.js`
- Components inject into containers like `#menu-container` via `document.createElement()` + `innerHTML`

Example from [alex-java/nav07z-pt.js](alex-java/nav07z-pt.js):
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `<div class="logo">...</div>`;
    const navElement = document.createElement('nav');
    navElement.innerHTML = navHTML;
    document.querySelector('#menu-container').prepend(navElement);
});
```

### CSS Organization
- Main styles: `css/estilo-07z.css`, `estilo13z.css`
- Legacy/backup files: `estilo.css`, `estilobackup.css`, `estilo2024.css`
- Use `estilo-07z.css` for new pages (modern layout with `.container-principal`, responsive design)

### Game-Specific Features

#### Hero Wars PVP Battle System
Location: `battles-pvp-java/`
- **Data files**: `hwa-battles-data.js`, `hwde-battles-data.js`, `hwa-titan-battles-data.js`
- **Filter logic**: `hwa-pvp-filter.js` (search by defense heroes, filter by power)
- **Key functions**: `searchByDefenseHeroes()`, `findClosestByPower()`, `calculateTotalPower()`

#### Titan Position Mapping
[battles-pvp-java/hwa-titan-position-mapper.js](battles-pvp-java/hwa-titan-position-mapper.js) handles titan team positioning logic

## File Naming Conventions

### HTML Pages
- English: `{game}-English.html` or `{feature}-en.html`
- Portuguese: `{game}.html` (no suffix) or `{feature}-pt.html` or `{feature}-br.html`
- Root pages: `index.html` (EN), `index-pt.html` (PT)

### JavaScript Components
- Navigation: `nav{version}-{lang}.js` (e.g., `nav07z-en.js`, `nav13-pt-v2.js`)
- Shared utilities: `data-07z-en.js` (date formatting), `lazy-load.js`, `carousel-slide.js`
- Fixed menus: `menu-fixo-{game}-{lang}.js` (sticky navigation for specific game sections)

## Development Workflows

### Adding New Pages
1. Create HTML file with dual-language variant (`page-en.html`, `page-pt.html`)
2. Include meta tags for SEO: `article:modified_time`, Open Graph, Twitter Card
3. Link appropriate CSS: `<link rel="stylesheet" href="./css/estilo-07z.css">`
4. Add navigation script: `<script src="./alex-java/nav07z-{lang}.js"></script>`
5. Include `#menu-container` div for nav injection
6. Add lazy loading: `<script src="./Documentos/lazy-load.js"></script>`
7. Update sitemap.xml and robots.txt

### Updating Navigation
- Modify `alex-java/nav07z-en.js` and `nav07z-pt.js` simultaneously
- Maintain dropdown structure: `.dropdown` > `.dropbtn` + `.dropdown-content`
- Language switcher uses `.language-switch` button with flag icon
- Mobile menu toggles with `.menu-icon` (hamburger/close icon swap)

### SEO & Analytics
- Google Analytics ID: `G-P90XK71HW9`
- AdSense: `ca-pub-7838775403194689`
- Update `article:modified_time` meta tag on content changes
- Use `data-07z-{lang}.js` to auto-display last updated date from meta tag

## Critical Patterns

### Date Formatting
[alex-java/data-07z-en.js](alex-java/data-07z-en.js) extracts `article:modified_time` and displays formatted date:
```javascript
var modificationDate = metaTags[i].getAttribute('content');
var formattedDate = new Date(modificationDate);
dateElement.textContent = 'Last updated: ' + month + ' ' + day + ', ' + year;
```

### Responsive Design
- Desktop: `.container-principal` (max-width: 1000px, flexbox layout)
- Mobile: Uses `@media` queries, menu toggles with `.active` class
- Lazy loading: `IntersectionObserver` for images with `data-src` attribute

### Hero Wars Battle Data Structure
```javascript
{
    defenseTeam: { heroes: [{name: "Heroname", power: 123456}] },
    attackTeam: { heroes: [...] },
    result: "Victory" | "Defeat"
}
```

## External Dependencies
- Google Analytics (`gtag.js`)
- Google AdSense
- Font: Roboto (via CSS)
- Social links: Facebook, YouTube (@alexandregamesm)

## File Organization
- `/hero-wars-alliance/` - HWA game guides (best teams, events, hero guides, skins)
- `/hero-wars-dominion-era/` - HWDE variant
- `/mobile-legends/` - Mobile Legends content
- `/roblox/` - Roblox guides and codes
- `/imagens/` - Site-wide images (logo, icons)
- `/img-HWM/`, `/img-MLBB/` - Game-specific assets
- `/Documentos/` - Legal pages (privacy policy, terms, contact)

## Contact & Attribution
- **Author**: Alexandre Pereira Domingos (with Kilvia Ferreira Domingos)
- **Email**: alexandregamesmobile@gmail.com
- **Domain**: www.alexandregames.com
- **Repository**: Alexandre221178/alexandregames

## Important Notes
- No build process - pure static HTML/CSS/JS
- Deploy directly to hosting (appears to use GitHub Pages based on CNAME/404.html)
- Always maintain EN/PT parity when updating content
- Test mobile responsiveness (primary audience uses mobile devices)
- Update `sitemap.xml` when adding new pages
