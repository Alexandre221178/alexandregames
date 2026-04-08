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

   For expired hub codes add: expired:true
   For text qty (like 250k) use: 'gold 250k' instead of 'gold x250'
*/

window.HWA_GIFTS = [

// ── April 8, 2026 ──────────────────────────────
 

  // ── April 7, 2026 ──────────────────────────────
  { date:'2026-04-07', type:'hub', code:'RUGIFT04', note:'hub24h',
    rewards:['large-skin-stone-chest x5', 'energy x1000'] },

  { date:'2026-04-07', type:'special', mission:'3-3', note:'until|2026-04-13T01:00:00Z',
    rewards:['adventure-coin x1000', 'energy x20', 'adventure-energy x50'] },

  { date:'2026-04-07', type:'daily', mission:'3-4', note:'daily|80',
    rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── April 6, 2026 ──────────────────────────────
  { date:'2026-04-06', type:'daily', mission:'2-8', note:'daily|80',
    rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── April 5, 2026 ──────────────────────────────
  { date:'2026-04-05', type:'hub', code:'RUGIFT03', note:'hub24h',
    rewards:['large-skin-stone-chest x5', 'energy x1000'] },

  { date:'2026-04-05', type:'special', mission:'3-11', note:'untilLevel|2026-04-13T01:00:00Z|15',
    rewards:['artifact-chest-key x5', 'rune-stone x1500', 'energy x20', 'random-resources-chest-1k x6', '1h-general-speedup x1', 'world-energy x20'] },

  { date:'2026-04-05', type:'daily', mission:'3-5', note:'daily|80',
    rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── April 4, 2026 ──────────────────────────────
  { date:'2026-04-04', type:'daily', mission:'2-13', note:'daily|80',
    rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  { date:'2026-04-04', type:'hub', code:'ASTRAL', note:'hubUntil|2026-04-07T10:00:00Z',
    rewards:['strength-skin-stone x500', 'energy x20'] },

  // ── April 3, 2026 ──────────────────────────────
  { date:'2026-04-03', type:'hub', code:'RUGIFT02', note:'custom',
    customNote:{ en:'The gift is available until... not defined(expired or 24hs)', pt:'O presente est\u00e1 dispon\u00edvel at\u00e9... n\u00e3o definido(expirado ou 24h)', de:'Das Geschenk ist verf\u00fcgbar bis... nicht definiert(abgelaufen oder 24h)', es:'El regalo est\u00e1 disponible hasta... no definido(expirado o 24h)', fr:'Le cadeau est disponible jusqu\u0027\u00e0... non d\u00e9fini(expir\u00e9 ou 24h)', ja:'\u30ae\u30d5\u30c8\u306e\u6709\u52b9\u671f\u9650... \u672a\u5b9a\u7fa9\uff08\u671f\u9650\u5207\u308c\u307e\u305f\u306f24\u6642\u9593\uff09' },
    rewards:['large-skin-stone-chest x5', 'energy x1000'] },

  { date:'2026-04-03', type:'daily', mission:'3-7', note:'daily|80',
    rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── April 2, 2026 ──────────────────────────────
  { date:'2026-04-02', type:'daily', mission:'2-9', note:'daily|80',
    rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── April 1, 2026 ──────────────────────────────
  { date:'2026-04-01', type:'hub', code:'RUGIFT01', note:'custom', expired:true,
    customNote:{ en:'The gift is available until... not defined', pt:'O presente est\u00e1 dispon\u00edvel at\u00e9... n\u00e3o definido', de:'Das Geschenk ist verf\u00fcgbar bis... nicht definiert', es:'El regalo est\u00e1 disponible hasta... no definido', fr:'Le cadeau est disponible jusqu\u0027\u00e0... non d\u00e9fini', ja:'\u30ae\u30d5\u30c8\u306e\u6709\u52b9\u671f\u9650... \u672a\u5b9a\u7fa9' },
    rewards:['large-skin-stone-chest x5', 'energy x1000'] },

  { date:'2026-04-01', type:'hub', code:'CONFIDENTIAL', note:'custom',
    customNote:{ en:'The gift is available until... not defined', pt:'O presente est\u00e1 dispon\u00edvel at\u00e9... n\u00e3o definido', de:'Das Geschenk ist verf\u00fcgbar bis... nicht definiert', es:'El regalo est\u00e1 disponible hasta... no definido', fr:'Le cadeau est disponible jusqu\u0027\u00e0... non d\u00e9fini', ja:'\u30ae\u30d5\u30c8\u306e\u6709\u52b9\u671f\u9650... \u672a\u5b9a\u7fa9' },
    rewards:['large-skin-stone-chest x5', 'energy x100'] },

  { date:'2026-04-01', type:'daily', mission:'3-14', note:'daily|80',
    rewards:['silver-casket x1', 'energy x20', 'realm-casket x1'] },

  // ── March 31, 2026 ──────────────────────────────
  { date:'2026-03-31', type:'specialTask', mission:'2-12', note:'untilLevel|2026-04-13T01:00:00Z|15',
    rewards:['artifact-chest-key x5', 'energy x100'] },

  // ── March 29, 2026 ──────────────────────────────
  { date:'2026-03-29', type:'specialTask', mission:'2-2', note:'untilLevel|2026-04-13T01:00:00Z|15',
    rewards:['seers-orb x50', 'energy x100'] },

  // ── March 28, 2026 ──────────────────────────────
  { date:'2026-03-28', type:'special', mission:'3-8', note:'untilLevel|2026-03-31T09:00:00Z|15',
    rewards:['artifact-chest-key x5', 'rune-stone x1500', 'energy x20'] },

  // ── March 25, 2026 ──────────────────────────────
  { date:'2026-03-25', type:'special', mission:'(3-12)', note:'until|2026-04-13T01:00:00Z',
    rewards:['adventure-coin x1000', 'energy x20', 'adventure-energy x50'] },

  // ── March 21, 2026 ──────────────────────────────
  { date:'2026-03-21', type:'specialTask', mission:'3-13', note:'untilLevel|2026-04-13T01:00:00Z|15',
    rewards:['large-skin-stone-chest x5', 'energy x100'] },

  // ── March 20, 2026 ──────────────────────────────
  { date:'2026-03-20', type:'special', mission:'2-13', note:'untilLevel|2026-03-23T15:00:00Z|15',
    rewards:['intelligence-skin-stone x350', 'agility-skin-stone x350', 'strength-skin-stone x350', 'energy x20'] },

  // ── March 19, 2026 ──────────────────────────────
  { date:'2026-03-19', type:'specialTask', mission:'3-9', note:'untilLevel|2026-04-13T01:00:00Z|15',
    rewards:['artifact-chest-key x5', 'energy x100'] },

  // ── March 17, 2026 ──────────────────────────────
  { date:'2026-03-17', type:'special', mission:'2-11', note:'until|2026-04-13T01:00:00Z',
    rewards:['adventure-coin x1000', 'energy x20', 'adventure-energy x50'] },

  // ── March 15, 2026 ──────────────────────────────
  { date:'2026-03-15', type:'special', mission:'3-3', note:'untilLevel|2026-03-18T09:00:00Z|15',
    rewards:['summoning-sphere x5', 'energy x20', 'gold 250k'] },

  // ── March 14, 2026 ──────────────────────────────
  { date:'2026-03-14', type:'specialTask', mission:'2-7', note:'custom',
    customNote:{ en:'Note: The reward works till 17th of March, 3 PM UTC\nAvailable for all 15+ level players!', pt:'Nota: A recompensa funciona at\u00e9 17 de mar\u00e7o, 3 PM UTC\nDispon\u00edvel para todos os jogadores n\u00edvel 15+!', de:'Hinweis: Die Belohnung gilt bis 17. M\u00e4rz, 15 Uhr UTC\nVerf\u00fcgbar f\u00fcr alle Spieler ab Stufe 15!', es:'Nota: La recompensa funciona hasta el 17 de marzo, 3 PM UTC\n\u00a1Disponible para todos los jugadores de nivel 15+!', fr:'Note : La r\u00e9compense est valable jusqu\u0027au 17 mars, 15 h UTC\nDisponible pour tous les joueurs de niveau 15+ !', ja:'\u6ce8\u610f\uff1a\u5831\u916c\u306f3\u670817\u65e515:00 UTC\u307e\u3067\u6709\u52b9\u3067\u3059\u3002\n\u30ec\u30d9\u30eb15\u4ee5\u4e0a\u306e\u3059\u3079\u3066\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u5bfe\u8c61\uff01' },
    rewards:['boxys-gift x3', 'energy x100', 'realm-gift x3'] },

  // ── March 13, 2026 ──────────────────────────────
  { date:'2026-03-13', type:'specialTask', mission:'2-14', note:'untilLevel|2026-04-13T01:00:00Z|15',
    rewards:['boxys-gift x3', 'energy x100', 'realm-gift x3'] }

];
