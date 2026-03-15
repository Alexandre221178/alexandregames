/* calendar-component.js
   - Monta o HTML do calendário a partir de window.CALENDAR_DATA
   - Detecta idioma via `document.documentElement.lang` ou `data-lang` no container `.calendar`
   - Traduz automaticamente dias da semana e meses
*/
/* {
        titles: { en: "Demon Dolls", pt: "Bonecas Demoníacas", de: "Dämonenpuppen", es: "Muñecas Demoníacas", fr: "Poupées Démoniaques", ja: "デーモンドール" },
        links: { en: "#section1", pt: "#section1", de: "#section1", es: "#section1", fr: "#section1", ja: "#section1" }
  },

{// Dentro de extra[] de um evento:
  titles: { en: "Path to Perfection", pt: "Caminho para a Perfeição", de: "Pfad zur Perfektion", es: "Camino hacia la Perfección", fr: "Chemin vers la Perfection", ja: "完璧への道" },
  labelOnly: true
}  

*/
(function(){
  var HWA_TERMS = null;
  var EVENTS_MASTER = null;
  var LINK_CHECK_CACHE = Object.create(null);

  // Traduções dos dias da semana
  var WEEKDAYS = {
    'sunday':    { en: 'Sunday',    pt: 'Domingo',   es: 'Domingo',   fr: 'Dimanche',  de: 'Sonntag',   ja: '日曜日' },
    'monday':    { en: 'Monday',    pt: 'Segunda',   es: 'Lunes',     fr: 'Lundi',     de: 'Montag',    ja: '月曜日' },
    'tuesday':   { en: 'Tuesday',   pt: 'Terça',     es: 'Martes',    fr: 'Mardi',     de: 'Dienstag',  ja: '火曜日' },
    'wednesday': { en: 'Wednesday', pt: 'Quarta',    es: 'Miércoles', fr: 'Mercredi',  de: 'Mittwoch',  ja: '水曜日' },
    'weednesday':{ en: 'Wednesday', pt: 'Quarta',    es: 'Miércoles', fr: 'Mercredi',  de: 'Mittwoch',  ja: '水曜日' }, // typo fix
    'thursday':  { en: 'Thursday',  pt: 'Quinta',    es: 'Jueves',    fr: 'Jeudi',     de: 'Donnerstag',ja: '木曜日' },
    'friday':    { en: 'Friday',    pt: 'Sexta',     es: 'Viernes',   fr: 'Vendredi',  de: 'Freitag',   ja: '金曜日' },
    'saturday':  { en: 'Saturday',  pt: 'Sábado',    es: 'Sábado',    fr: 'Samedi',    de: 'Samstag',   ja: '土曜日' }
  };

  // Traduções dos meses (abreviados)
  var MONTHS = {
    'jan': { en: 'Jan', pt: 'Jan', es: 'Ene', fr: 'Jan', de: 'Jan', ja: '1月' },
    'feb': { en: 'Feb', pt: 'Fev', es: 'Feb', fr: 'Fév', de: 'Feb', ja: '2月' },
    'mar': { en: 'Mar', pt: 'Mar', es: 'Mar', fr: 'Mar', de: 'Mär', ja: '3月' },
    'apr': { en: 'Apr', pt: 'Abr', es: 'Abr', fr: 'Avr', de: 'Apr', ja: '4月' },
    'may': { en: 'May', pt: 'Mai', es: 'May', fr: 'Mai', de: 'Mai', ja: '5月' },
    'jun': { en: 'Jun', pt: 'Jun', es: 'Jun', fr: 'Jui', de: 'Jun', ja: '6月' },
    'jul': { en: 'Jul', pt: 'Jul', es: 'Jul', fr: 'Jui', de: 'Jul', ja: '7月' },
    'aug': { en: 'Aug', pt: 'Ago', es: 'Ago', fr: 'Aoû', de: 'Aug', ja: '8月' },
    'sep': { en: 'Sep', pt: 'Set', es: 'Sep', fr: 'Sep', de: 'Sep', ja: '9月' },
    'oct': { en: 'Oct', pt: 'Out', es: 'Oct', fr: 'Oct', de: 'Okt', ja: '10月' },
    'nov': { en: 'Nov', pt: 'Nov', es: 'Nov', fr: 'Nov', de: 'Nov', ja: '11月' },
    'dec': { en: 'Dec', pt: 'Dez', es: 'Dic', fr: 'Déc', de: 'Dez', ja: '12月' }
  };

  function getLang(container){
    if(!container) return 'en';
    return container.getAttribute('data-lang') || document.documentElement.lang || 'en';
  }

  // Traduz o dia da semana
  function translateWeekday(weekday, lang){
    if(!weekday) return '';
    var key = weekday.toLowerCase().trim();
    if(WEEKDAYS[key] && WEEKDAYS[key][lang]){
      return WEEKDAYS[key][lang];
    }
    return weekday; // retorna original se não encontrar
  }

  // Traduz a data (formato "Jan, 19" ou similar)
  function translateDate(dateStr, lang){
    if(!dateStr) return '';
    // Procura por mês abreviado no início
    var result = dateStr;
    Object.keys(MONTHS).forEach(function(monthKey){
      var regex = new RegExp('\\b' + monthKey + '\\b', 'gi');
      if(regex.test(result)){
        var translated = MONTHS[monthKey][lang] || MONTHS[monthKey].en;
        result = result.replace(regex, translated);
      }
    });
    // Para japonês, formata como "1月19日" se possível
    if(lang === 'ja'){
      var match = result.match(/(\d+)月[,\s]*(\d+)/);
      if(match){
        result = match[1] + '月' + match[2] + '日';
      } else {
        // tenta extrair dia do formato original
        var dayMatch = dateStr.match(/(\d+)/);
        if(dayMatch){
          result = result.replace(/,?\s*(\d+)/, dayMatch[1] + '日');
        }
      }
    }
    return result;
  }

  // Remove common "guide"-like suffixes from titles for display
  function stripGuideSuffix(title, lang){
    if(!title) return title;
    var suffixes = {
      en: ['Guide'],
      pt: ['Guia'],
      es: ['Guía','Guia'],
      de: ['Leitfaden'],
      fr: ['Guide'],
      ja: ['ガイド']
    };
    var generic = ['Guide','Guía','Guia','Leitfaden','ガイド'];
    var list = (suffixes[lang] && suffixes[lang].slice()) || generic.slice();
    // ensure generic entries also present
    generic.forEach(function(s){ if(list.indexOf(s) === -1) list.push(s); });
    // remove trailing separators and the suffix if present at end
    for(var i=0;i<list.length;i++){
      var s = list[i].replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      var re = new RegExp('[\s:\-–—]*' + s + '\.?$', 'i');
      if(re.test(title)){
        title = title.replace(re, '').trim();
        break;
      }
    }
    return title;
  }

  function loadLocalization(){
    return fetch('../data/terms-localization.json')
      .then(function(r){ if(!r.ok) throw new Error('no localization'); return r.json(); })
      .then(function(json){ HWA_TERMS = json; })
      .catch(function(){ HWA_TERMS = null; });
  }

  function loadEventMaster(){
    return fetch('../data/events.json')
      .then(function(r){ if(!r.ok) throw new Error('no events master'); return r.json(); })
      .then(function(json){ EVENTS_MASTER = json; })
      .catch(function(){ EVENTS_MASTER = null; });
  }

  function isExternalLink(url){
    return /^(?:[a-z]+:)?\/\//i.test(url);
  }

  function isAnchorLink(url){
    return typeof url === 'string' && url.charAt(0) === '#';
  }

  function normalizeLinkValue(url){
    if(typeof url !== 'string') return '';
    return url.trim();
  }

  function resolveEventLink(links, lang){
    if(!links) return { href: '#', fallbackHref: '', usedFallback: false };
    var primaryHref = normalizeLinkValue(links[lang]);
    var fallbackHref = normalizeLinkValue(links.en);

    if(primaryHref){
      return {
        href: primaryHref,
        fallbackHref: fallbackHref && fallbackHref !== primaryHref ? fallbackHref : '',
        usedFallback: false
      };
    }

    if(fallbackHref){
      return { href: fallbackHref, fallbackHref: '', usedFallback: lang !== 'en' };
    }

    return { href: '#', fallbackHref: '', usedFallback: false };
  }

  function shouldValidateFallbackLink(linkInfo, lang){
    if(!linkInfo || !linkInfo.href || !linkInfo.fallbackHref) return false;
    if(lang === 'en') return false;
    if(linkInfo.href === linkInfo.fallbackHref) return false;
    if(isExternalLink(linkInfo.href) || isExternalLink(linkInfo.fallbackHref)) return false;
    if(isAnchorLink(linkInfo.href) || isAnchorLink(linkInfo.fallbackHref)) return false;
    return true;
  }

  function escapeHtml(value){
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function buildLinkAttributes(linkInfo){
    var attrs = ' href="' + escapeHtml(linkInfo.href || '#') + '"';
    if(linkInfo.usedFallback){
      attrs += ' data-lang-fallback="en"';
    }
    if(linkInfo.fallbackHref){
      attrs += ' data-fallback-href="' + escapeHtml(linkInfo.fallbackHref) + '"';
    }
    return attrs;
  }

  function appendEnFallbackLabel(anchor){
    if(!anchor) return;
    if(anchor.getAttribute('data-lang-fallback') === 'en') return;
    anchor.textContent = (anchor.textContent || '') + ' (EN)';
    anchor.setAttribute('data-lang-fallback', 'en');
  }

  function checkLinkExists(url){
    if(!url) return Promise.resolve(false);
    if(Object.prototype.hasOwnProperty.call(LINK_CHECK_CACHE, url)){
      return Promise.resolve(LINK_CHECK_CACHE[url]);
    }

    return fetch(url, { method: 'HEAD' })
      .then(function(response){
        var exists = response.ok;
        LINK_CHECK_CACHE[url] = exists;
        return exists;
      })
      .catch(function(){
        return fetch(url, { method: 'GET' })
          .then(function(response){
            var exists = response.ok;
            LINK_CHECK_CACHE[url] = exists;
            return exists;
          })
          .catch(function(){
            LINK_CHECK_CACHE[url] = false;
            return false;
          });
      });
  }

  function attachFallbackValidation(calendarElem, lang){
    if(!calendarElem || lang === 'en') return;

    var links = calendarElem.querySelectorAll('a[data-fallback-href]');
    Array.prototype.forEach.call(links, function(anchor){
      var href = normalizeLinkValue(anchor.getAttribute('href'));
      var fallbackHref = normalizeLinkValue(anchor.getAttribute('data-fallback-href'));

      if(!href || !fallbackHref || href === fallbackHref) return;
      if(isExternalLink(href) || isExternalLink(fallbackHref)) return;
      if(isAnchorLink(href) || isAnchorLink(fallbackHref)) return;

      checkLinkExists(href).then(function(exists){
        if(exists) return;
        anchor.setAttribute('href', fallbackHref);
        anchor.classList.add('lang-fallback');
        appendEnFallbackLabel(anchor);
      });
    });
  }

  function buildEventHTML(ev, lang){
    // If event references a master id, merge missing fields from master
    if(ev && ev.id && EVENTS_MASTER && EVENTS_MASTER[ev.id]){
      var master = EVENTS_MASTER[ev.id];
      ev.titles = ev.titles || master.titles || {};
      ev.links = ev.links || master.links || {};
      ev.image = ev.image || master.image || '';
      ev.alt = ev.alt || master.alt || ev.alt || '';
    }
    
    // Traduz dia da semana e data
    var translatedWeekday = translateWeekday(ev.weekday, lang);
    var translatedDate = translateDate(ev.date, lang);
    
    var html = '';
    html += '<div class="event-container">\n';
    html += '  <div class="weekday">' + translatedWeekday + '</div>\n';
    html += '  <div class="event">\n';
    if(ev.image){
      html += '    <img src="' + ev.image + '" alt="' + (ev.alt||'') + '" title="' + ((ev.titles && (ev.titles[lang]||ev.titles.en))||'') + '" loading="lazy">\n';
    }
    html += '    <div class="overlay"></div>\n';
    html += '    <div class="date">' + translatedDate + '</div>\n';
    if(ev.titles){
      var titleText = ev.titles[lang] || ev.titles.en || '';
      var linkInfo = resolveEventLink(ev.links, lang);
      var href = linkInfo.href;
      var usedFallback = linkInfo.usedFallback;
      // If localization map loaded, replace known terms inside titleText
      if(window && typeof window !== 'undefined' && (typeof HWA_TERMS === 'object') && HWA_TERMS){
        Object.keys(HWA_TERMS).forEach(function(key){
          try{
            var localized = (HWA_TERMS[key] && (HWA_TERMS[key][lang] || HWA_TERMS[key].en));
            if(!localized) return;
            var re = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), 'g');
            titleText = titleText.replace(re, localized);
          }catch(e){}
        });
      }
      // Strip trailing 'Guide' or localized equivalents per user request
      if(!ev.noStrip){
        titleText = stripGuideSuffix(titleText, lang);
      }
      var displayTitle = titleText + (usedFallback ? ' (EN)' : '');
      var linkClass = usedFallback ? 'event-title lang-fallback' : 'event-title';
      if(ev.labelOnly){
        html += '    <br>    <span class="event-label">' + displayTitle + '</span>\n';
      } else {
        html += '    <br>    <a' + buildLinkAttributes(linkInfo) + ' class="' + linkClass + '">' + displayTitle + '</a>\n';
      }
    }
    if(ev.extra && ev.extra.length){
      ev.extra.forEach(function(item){
        var text = (item.titles && (item.titles[lang]||item.titles.en)) || item.text || '';
        var itemLinkInfo = resolveEventLink(item.links, lang);
        var link = itemLinkInfo.href;
        var itemFallback = itemLinkInfo.usedFallback;
        // Strip guide suffix for extras unless explicitly disabled on the item
        if(!item.noStrip){
          text = stripGuideSuffix(text, lang);
        }
        var display = text + (itemFallback ? ' (EN)' : '');
        var cls = itemFallback ? 'event-title lang-fallback' : 'event-title';
        if(item.labelOnly){
          html += '    <span class="event-label">' + display + '</span>\n';
        } else {
          html += '    <a' + buildLinkAttributes(itemLinkInfo) + ' class="' + cls + '">' + display + '</a>\n';
        }
      });
    }
    html += '  </div>\n';
    html += '</div>\n';
    return html;
  }

  function renderGroupedByImage(data, lang){
    var groups = {};
    data.forEach(function(ev){
      var key = ev.image || 'no-image';
      if(!groups[key]) groups[key] = { image: ev.image, items: [] };
      groups[key].items.push(ev);
    });
    var html = '';
    Object.keys(groups).forEach(function(key){
      var g = groups[key];
      html += '<div class="group-by-image">\n';
      if(g.image){
        html += '  <div class="group-image">\n';
        html += '    <img src="' + g.image + '" alt="" loading="lazy">\n';
        html += '  </div>\n';
      }
      html += '  <div class="group-items">\n';
      g.items.forEach(function(ev){ html += buildEventHTML(ev, lang); });
      html += '  </div>\n';
      html += '</div>\n';
    });
    return html;
  }

  function renderGroupedByDate(data, lang){
    // group events by `date` field, preserve order of first appearance
    var order = [];
    var groups = {};
    data.forEach(function(ev){
      var key = (ev.date || '');
      if(!groups[key]){ groups[key] = { date: key, items: [] }; order.push(key); }
      groups[key].items.push(ev);
    });
    var html = '<div class="group-by-date">\n';
    order.forEach(function(key){
      var g = groups[key];
      html += '  <div class="date-column">\n';
      html += '    <div class="date-header">' + (g.date || '') + '</div>\n';
      html += '    <div class="date-items">\n';
      g.items.forEach(function(ev){ html += buildEventHTML(ev, lang); });
      html += '    </div>\n';
      html += '  </div>\n';
    });
    html += '</div>\n';
    return html;
  }

  function renderCalendar(){
    var calendarElem = document.querySelector('.calendar');
    if(!calendarElem) return;
    var lang = getLang(calendarElem);
    var layout = calendarElem.getAttribute('data-layout') || 'default';
    var data = window.CALENDAR_DATA || [];

    // Renderiza o header do mês se existir
    var headerContainer = document.getElementById('calendar-month-header');
    if(headerContainer && window.CALENDAR_MONTH_HEADER){
      var headerText = window.CALENDAR_MONTH_HEADER[lang] || window.CALENDAR_MONTH_HEADER.en || '';
      headerContainer.innerHTML = headerText;
    }

    // NOTE: keep requested layout (do not auto-switch to group-by-date)
    // The page author can explicitly set `data-layout="group-by-date"` when desired.
    var html = '';
    if(layout === 'group-by-image'){
      html = renderGroupedByImage(data, lang);
    } else if(layout === 'group-by-date'){
      html = renderGroupedByDate(data, lang);
    } else {
      data.forEach(function(ev){ html += buildEventHTML(ev, lang); });
    }
    // If there is a dedicated container, render into it to avoid removing scripts
    var container = calendarElem.querySelector('#calendar-container');
    if(container) container.innerHTML = html; else calendarElem.innerHTML = html;
    attachFallbackValidation(calendarElem, lang);
  }

  document.addEventListener('DOMContentLoaded', function(){
    // load localization and master events if available, then render
    Promise.all([loadLocalization(), loadEventMaster()]).finally(renderCalendar);
  });
})();
