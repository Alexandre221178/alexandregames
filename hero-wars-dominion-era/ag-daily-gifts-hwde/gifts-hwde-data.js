/* HWDE Daily Gifts Data - npm run update-gifts-hwde
// ── May #, 2026 ──────────────────────────────
   { date:'2026-0#-##', type:'link', giftId:'######', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },
// ── May #, 2026 ──────────────────────────────
  { date:'2026-0#-##', type:'link', giftId:'#####', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }, 'titan-artifact-sphere x5'] },
// ── May #, 2026 ──────────────────────────────
{ date:'2026-05-##', type:'link', giftId:'#####', note:'until|2026-0#-##T02:00:00Z',
  rewards:['energy x500'] },
https://www.hero-wars.com/?nx_source=group_posting_boxweb&gift_id=
// ── May #, 2026 ──────────────────────────────
*/window.HWDE_GIFTS = [
  // ── May 9, 2026 ──────────────────────────────
  { date:'2026-05-09', type:'link', giftId:'5d1286dc3bf024661d85bee6224183c5', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }, 'titan-artifact-sphere x5'] },
  { date:'2026-05-09', type:'link', giftId:'pys2qu5thj', note:'until|2026-05-14T02:00:00Z',
  rewards:['energy-crystal x24', 'valor-coin x12500', 'sapphire-medallion x3'] },

{ date:'2026-05-09', type:'link', giftId:'fvynEMCqac', note:'until|2026-05-12T02:00:00Z',
  rewards:['energy x500'] },

   // ── May 8, 2026 ──────────────────────────────
   { date:'2026-05-08', type:'link', giftId:'7bcf526ede49a8eafb48c7da0d3f7913', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },
// ── May 7, 2026 ──────────────────────────────
   
{ date:'2026-05-07', type:'link', giftId:'3WUHe5nf44', note:'until|2026-05-14T02:00:00Z',
  rewards:['energy-crystal x24', 'valor-coin x12500', 'sapphire-medallion x2'] },

   
  // ── May 5, 2026 ──────────────────────────────
 
{ date:'2026-05-05', type:'link', giftId:'uZHHmfMazu', note:'until|2026-05-09T02:00:00Z',
  rewards:['energy x500'] },
  
  
  



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
// ── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-0#-##30', type:'link', giftLinkWeb:'https://herowars.me/49iwkHL', giftLinkFb:'https://herowars.me/4sXSMgl', note:'until|2026-05-03T02:00:00Z',
  rewards:['energy x500'] },

  // ── Gifts New hero or titan ──────────────────────────────
 { date:'2026-0#-##', type:'link', giftId:'#####', note:'until|2026-0#-0#T02:00:00Z',
  rewards:['energy-crystal x16', 'valor-coin x8000', 'sapphire-medallion x1'] },

  // ── Code Gift Type ──────────────────────────────
{ date:'2026-04-06', type:'code', code:'EGGHNT', note:'until|2026-04-09T02:00:00Z', expired:true,
  rewards:['easter-key x5', 'soul-crystal x10'] },

  // ── gift friend-chip coin e Gold ──────────────────────────────
{ date:'2026-03-27', type:'link', giftId:'xqYzCnjZ49', note:'until|2026-04-05T02:00:00Z',
  rewards:['large-skin-stone-chest x10', 'friendship-chip x10000', 'gold 1M'] },


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
