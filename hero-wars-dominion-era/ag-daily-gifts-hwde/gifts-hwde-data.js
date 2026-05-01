/* HWDE Daily Gifts Data - npm run update-gifts-hwde
   { date:'2026-0#-##', type:'link', giftId:'######', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },

{ date:'2026-05-##', type:'link', giftId:'#####', note:'until|2026-0#-##T02:00:00Z',
  rewards:['energy x500'] },
*/
// ── May #, 2026 ──────────────────────────────
window.HWDE_GIFTS = [
// ── May 1, 2026 ──────────────────────────────
{ date:'2026-05-01', type:'link', giftId:'3b4znNd28S', note:'until|2026-05-06T02:00:00Z',
  rewards:['energy x500'] },
   // ── April 30, 2026 ──────────────────────────────
    { date:'2026-04-30', type:'link', giftId:'ebae9d7190b6e4064e74fd636924efd4', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },
   { date:'2026-04-30', type:'link', giftLinkWeb:'https://herowars.me/49iwkHL', giftLinkFb:'https://herowars.me/4sXSMgl', note:'until|2026-05-03T02:00:00Z',
  rewards:['energy x500'] },

   // ── April 29, 2026 ──────────────────────────────
    { date:'2026-04-29', type:'link', giftId:'fafe27f0ffaac9002ad9925c45e5e836', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },
   { date:'2026-04-29', type:'link', giftId:'RMYJpNlZIz', note:'until|2026-05-01T02:00:00Z',
  rewards:['energy-crystal x16', 'valor-coin x8000', 'sapphire-medallion x1'] },

   // ── April 28 2026 ──────────────────────────────
   { date:'2026-04-28', type:'link', giftId:'6e672da8b559d4eeee558877e5133247', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },
{ date:'2026-04-28', type:'link', giftId:'0mpZXpBGQO', note:'until|2026-05-01T02:00:00Z',
  rewards:['energy x500'] },
// ── April 27, 2026 ──────────────────────────────  
{ date:'2026-04-27', type:'link', giftId:'1f22f4d868d7fd02bf805848212a8054', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },
{ date:'2026-04-27', type:'link', giftId:'ZlXEEbNf6b', note:'until|2026-05-01T02:00:00Z',
  rewards:['energy-crystal x16', 'valor-coin x8500', 'sapphire-medallion x2'] },

// ── April 26, 2026 ──────────────────────────────
   { date:'2026-04-26', type:'link', giftId:'4ce24f8f1543cb9233fb412501d1a6c6', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },   
{ date:'2026-04-26', type:'link', giftId:'4SJmySx3PQ', note:'until|2026-04-30T02:00:00Z',
  rewards:['energy x500'] },

// ── April 25, 2026 ──────────────────────────────
{ date:'2026-04-25', type:'link', giftId:'a520aa51d39ee8fcefd22529e24ee4c4', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }, 'titan-artifact-sphere x5'] },

{ date:'2026-04-25', type:'link', giftId:'YfHETvcQ6t', note:'until|2026-04-28T02:00:00Z',
  rewards:['energy x500'] },

// ── April 24, 2026 ──────────────────────────────
{ date:'2026-04-24', type:'link', giftId:'8071832e9246a44b2422c7c88a94cca8', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },

{ date:'2026-04-24', type:'link', giftId:'rfyo8vd5kT', note:'until|2026-05-01T02:00:00Z',
  rewards:['energy-crystal x16', 'valor-coin x8500', 'sapphire-medallion x2', 'energy x500'] },

// ── April 6, 2026 ──────────────────────────────
{ date:'2026-04-06', type:'code', code:'EGGHNT', note:'until|2026-04-09T02:00:00Z', expired:true,
  rewards:['easter-key x5', 'soul-crystal x10'] },

// ── March 27, 2026 ──────────────────────────────
{ date:'2026-03-27', type:'link', giftId:'xqYzCnjZ49', note:'until|2026-04-05T02:00:00Z',
  rewards:['large-skin-stone-chest x10', 'friendship-chip x10000', 'gold 1M'] },

];

/* 
###################################################################################
link type  : { date:'YYYY-MM-DD', type:'link',  giftId:'...', note:'until|YYYY-MM-DDThh:mm:ssZ' | 'level' | '24h' | 'custom', rewards:[...] }
   link type (direct URL): { date:'YYYY-MM-DD', type:'link', giftLinkWeb:'https://herowars.me/...', giftLinkFb:'https://herowars.me/...', note:'until|YYYY-MM-DDThh:mm:ssZ' | 'custom', rewards:[...] }
   code type  : { date:'YYYY-MM-DD', type:'code',  code:'CODE',  note:'until|YYYY-MM-DDThh:mm:ssZ' | 'custom', rewards:[...] }
   Platform-split reward (Web/FB different items): { web:'item-key xN', fb:'fb-item-key xN' }
   For large qty text use: 'gold 1M' or 'friendship-chip 10k' (no x prefix)
   For unknown items use: 'alexandregames NAME x1'
   To mark expired code add: expired:true
###################################################################################
// ── Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-0#-##30', type:'link', giftLinkWeb:'https://herowars.me/49iwkHL', giftLinkFb:'https://herowars.me/4sXSMgl', note:'until|2026-05-03T02:00:00Z',
  rewards:['energy x500'] },

  // ── Gifts New hero or titan ──────────────────────────────
 { date:'2026-0#-##', type:'link', giftId:'#####', note:'until|2026-0#-0#T02:00:00Z',
  rewards:['energy-crystal x16', 'valor-coin x8000', 'sapphire-medallion x1'] },


╔══════════════════════════════════════════════════════════════════╗
   ║  HWDE GIFTS — Add newest entries at the TOP                     ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║  LINK type (most common)                                        ║
   ║  { date:'2026-XX-XX', type:'link', giftId:'GIFT_ID',           ║
   ║    note:'until|2026-XX-XXT02:00:00Z',                          ║
   ║    rewards:['energy x500'] }                                    ║
   ║                                                                  ║
   ║  LINK with platform-split boxes                                  ║
   ║  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }]  ║
   ║                                                                  ║
   ║  CODE type                                                       ║
   ║  { date:'2026-XX-XX', type:'code', code:'MYCODE',              ║
   ║    note:'until|2026-XX-XXT02:00:00Z',                          ║
   ║    rewards:['energy x500'] }                                    ║
   ║                                                                  ║
   ║  note values:                                                    ║
   ║    'until|2026-05-01T02:00:00Z'  → works until that date/time  ║
   ║    'level'    → 24h + box type depends on Team Level            ║
   ║    '24h'      → link works 24 hours                             ║
   ║    'custom'   → use customNote:{ en:'...', pt:'...' }           ║
   ╚══════════════════════════════════════════════════════════════════╝ */
