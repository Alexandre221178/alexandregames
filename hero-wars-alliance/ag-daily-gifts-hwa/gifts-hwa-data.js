/*For expired hub codes add: expired:true 
   For text qty (like 250k) use: 'gold 250k' instead of 'gold x250'
  For unknown new gifts use: 'alexandregames NAME x1' or 'alexandre games NAME x1'
  The component will use the Alexandre Games logo and display only NAME
  npm run update-gifts-hwa       */
// ── April #, 2026 ──────────────────────────────
window.HWA_GIFTS = [
  // ── April 23, 2026 ──────────────────────────────
  { date:'2026-04-23', type:'daily', mission:'3-3', note:'daily|80',
rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── April 22, 2026 ──────────────────────────────
  { date:'2026-04-22', type:'daily', mission:'2-5', note:'daily|80',
rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── April 21, 2026 ──────────────────────────────
{ date:'2026-04-21', type:'specialTask', mission:'2-4', note:'untilLevel|2026-05-11T01:00:00Z|15',
rewards:['large-skin-stone-chest x5', 'energy x20', 'adventure-energy x100'] },
  { date:'2026-04-21', type:'daily', mission:'3-9', note:'daily|80',
rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

// ── April 20, 2026 ──────────────────────────────
  { date:'2026-04-20', type:'daily', mission:'2-11', note:'daily|80',
rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

// ── April 19, 2026 ──────────────────────────────
  { date:'2026-04-19', type:'daily', mission:'3-8', note:'daily|80',
rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── April 18, 2026 ──────────────────────────────
{ date:'2026-04-18', type:'hub', code:'DUNGEON', note:'until|2026-05-11T01:00:00Z',
      rewards:['energy x100', 'artifact-chest-key x5'] },

 
  
// ── April 16, 2026 ──────────────────────────────
{ date:'2026-04-16', type:'special', mission:'3-7', note:'until|2026-05-11T01:00:00Z',
    rewards:['adventure-coin x1000', 'energy x20', 'adventure-energy x50'] },


// ── April 13, 2026 ──────────────────────────────
{ date:'2026-04-13', type:'hub', code:'WEB', note:'custom',
customNote:{ en:'The gift is available until... not defined(or 24hs)', pt:'O presente est\u00e1 dispon\u00edvel at\u00e9... n\u00e3o definido(expirado ou 24h)', de:'Das Geschenk ist verf\u00fcgbar bis... nicht definiert(abgelaufen oder 24h)', es:'El regalo est\u00e1 disponible hasta... no definido(expirado o 24h)', fr:'Le cadeau est disponible jusqu\u0027\u00e0... non d\u00e9fini(expir\u00e9 ou 24h)', ja:'\u30ae\u30d5\u30c8\u306e\u6709\u52b9\u671f\u9650... \u672a\u5b9a\u7fa9\uff08\u671f\u9650\u5207\u308c\u307e\u305f\u306f24\u6642\u9593\uff09' },
rewards:[ 'energy x100'] },

// ── April 11, 2026 ──────────────────────────────
{ date:'2026-04-11', type:'hub', code:'FROMSUPPORT', note:'custom',
    customNote:{ en:'The gift is available until... not defined(or 24hs)', pt:'O presente est\u00e1 dispon\u00edvel at\u00e9... n\u00e3o definido(expirado ou 24h)', de:'Das Geschenk ist verf\u00fcgbar bis... nicht definiert(abgelaufen oder 24h)', es:'El regalo est\u00e1 disponible hasta... no definido(expirado o 24h)', fr:'Le cadeau est disponible jusqu\u0027\u00e0... non d\u00e9fini(expir\u00e9 ou 24h)', ja:'\u30ae\u30d5\u30c8\u306e\u6709\u52b9\u671f\u9650... \u672a\u5b9a\u7fa9\uff08\u671f\u9650\u5207\u308c\u307e\u305f\u306f24\u6642\u9593\uff09' },
    rewards:[ 'energy x150', 'artifact-coin x100',  'artifact-chest-key x5'] },

// ── April 10, 2026 ──────────────────────────────
{ date:'2026-04-10', type:'special', mission:'2-9', note:'until|2026-05-11T05:00:00Z',
    rewards:['boxys-gift x3', 'energy x100', 'realm-gift x3'] },
   

// ── April 9, 2026 ──────────────────────────────
{ date:'2026-04-09', type:'hub', code:'Asleepsam', note:'custom',
    customNote:{ en:'The gift is available until... not defined(expired or 24hs)', pt:'O presente est\u00e1 dispon\u00edvel at\u00e9... n\u00e3o definido(expirado ou 24h)', de:'Das Geschenk ist verf\u00fcgbar bis... nicht definiert(abgelaufen oder 24h)', es:'El regalo est\u00e1 disponible hasta... no definido(expirado o 24h)', fr:'Le cadeau est disponible jusqu\u0027\u00e0... non d\u00e9fini(expir\u00e9 ou 24h)', ja:'\u30ae\u30d5\u30c8\u306e\u6709\u52b9\u671f\u9650... \u672a\u5b9a\u7fa9\uff08\u671f\u9650\u5207\u308c\u307e\u305f\u306f24\u6642\u9593\uff09' },
    rewards:['artifact-chest-key x5', 'energy x100'] },
   
 { date:'2026-04-09', type:'special', mission:'2-7', note:'until|2026-05-12T05:00:00Z',
    rewards:['boxys-gift x3', 'energy x100', 'realm-gift x3'] },
   

  { date:'2026-04-01', type:'hub', code:'CONFIDENTIAL', note:'custom',
    customNote:{ en:'The gift is available until... not defined', pt:'O presente est\u00e1 dispon\u00edvel at\u00e9... n\u00e3o definido', de:'Das Geschenk ist verf\u00fcgbar bis... nicht definiert', es:'El regalo est\u00e1 disponible hasta... no definido', fr:'Le cadeau est disponible jusqu\u0027\u00e0... non d\u00e9fini', ja:'\u30ae\u30d5\u30c8\u306e\u6709\u52b9\u671f\u9650... \u672a\u5b9a\u7fa9' },
    rewards:['large-skin-stone-chest x5', 'energy x100'] },

  

];
/* ╔══════════════════════════════════════════════════════════════════╗
   ║  DAILY GIFTS — Add newest entries at the TOP                    ║
   ║  Copy a line, change date / code / mission / rewards            ║
   ╚══════════════════════════════════════════════════════════════════╝

   TEMPLATES — copy & paste:
   { date:'YYYY-MM-DD', type:'hub',         code:'CODE',  note:'hub24h',                        rewards:['preset x5'] },
   { date:'YYYY-MM-DD', type:'hub',         code:'CODE',  note:'hubUntil|DATETIME',             rewards:['preset x5'] },
   { date:'YYYY-MM-DD', type:'special',     mission:'X-X', note:'until|DATETIME',               rewards:['preset x5'] },
   { date:'YYYY-MM-DD', type:'specialTask', mission:'X-X', note:'untilLevel|DATETIME|15',       rewards:['preset x5'] },
   { date:'YYYY-MM-DD', type:'daily',       mission:'X-X', note:'daily|80',                     rewards:['preset x5'] },

   REWARD PRESETS (use these names in the rewards array):
   energy, gold, large-skin-stone-chest, adventure-coin, adventure-energy,
   silver-casket, realm-casket, artifact-chest-key, rune-stone,
   random-resources-chest-1k, 1h-general-speedup, world-energy,
   strength-skin-stone, intelligence-skin-stone, agility-skin-stone,
   seers-orb, boxys-gift, realm-gift, summoning-sphere

   NOTE FORMATS:
   hub24h                        — 24h or undefined expiry
   hubUntil|2026-04-07T10:00:00Z — hub gift until date
   until|2026-04-13T01:00:00Z    — reward until date
   untilLevel|2026-04-13T01:00:00Z|15 — until date, level 15+
   daily|80                      — daily mission, level 80+
   custom                        — add customNote:{ en:'...', pt:'...' }


// ── April 11, 2026 ──────────────────────────────
{ date:'2026-04-11', type:'hub', code:'FROMSUPPORT', note:'custom',
    customNote:{ en:'The gift is available until... not defined(or 24hs)', pt:'O presente est\u00e1 dispon\u00edvel at\u00e9... n\u00e3o definido(expirado ou 24h)', de:'Das Geschenk ist verf\u00fcgbar bis... nicht definiert(abgelaufen oder 24h)', es:'El regalo est\u00e1 disponible hasta... no definido(expirado o 24h)', fr:'Le cadeau est disponible jusqu\u0027\u00e0... non d\u00e9fini(expir\u00e9 ou 24h)', ja:'\u30ae\u30d5\u30c8\u306e\u6709\u52b9\u671f\u9650... \u672a\u5b9a\u7fa9\uff08\u671f\u9650\u5207\u308c\u307e\u305f\u306f24\u6642\u9593\uff09' },
    rewards:[ 'energy x150', 'artifact-coin x100',  'artifact-chest-key x5'] },

*/
