/* HWDE Daily Gifts Data
   link type  : { date:'YYYY-MM-DD', type:'link',  giftId:'...', note:'until|YYYY-MM-DDThh:mm:ssZ' | 'level' | '24h' | 'custom', rewards:[...] }
   code type  : { date:'YYYY-MM-DD', type:'code',  code:'CODE',  note:'until|YYYY-MM-DDThh:mm:ssZ' | 'custom', rewards:[...] }
   Platform-split reward (Web/FB different items): { web:'item-key xN', fb:'fb-item-key xN' }
   For large qty text use: 'gold 1M' or 'friendship-chip 10k' (no x prefix)
   For unknown items use: 'alexandregames NAME x1'
   To mark expired code add: expired:true
   npm run update-gifts-hwde  */

window.HWDE_GIFTS = [

// ── April 26, 2026 ──────────────────────────────
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

/* ╔══════════════════════════════════════════════════════════════════╗
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
