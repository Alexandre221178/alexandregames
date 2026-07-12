/* HWDE Daily Gifts Data - npm run update-gifts-hwde
// ── July #, 2026 ──────────────────────────────
   { date:'2026-07-##', type:'link', giftId:'######', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },
// ── July #, 2026 ──────────────────────────────
  { date:'2026-07-##', type:'link', giftId:'#####', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }, 'titan-artifact-sphere x5'] },
// ── July #, 2026 ──────────────────────────────
{ date:'2026-07-##', type:'link', giftId:'#####', note:'until|2026-07-##T02:00:00Z',
  rewards:['energy x500'] },
  // 2026-07-##── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-07-##', type:'link', giftLinkWeb:'https://herowars.me/#wb#', giftLinkFb:'https://herowars.me/#fb#',
 note:'until|2026-07-##T02:00:00Z', rewards:['energy x500'] },
https://www.hero-wars.com/?nx_source=group_posting_boxweb&gift_id=
*/window.HWDE_GIFTS = [
  // 2026-07-12── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-07-12', type:'link', giftLinkWeb:'https://herowars.me/4pdWEcV', giftLinkFb:'https://herowars.me/4aI6lum',
 note:'until|2026-07-15T02:00:00Z', rewards:['energy x500'] },
  // ── July 11, 2026 ──────────────────────────────
  { date:'2026-07-11', type:'link', giftId:'2152218b82a2b85f6ad273787079124f', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }, 'titan-artifact-sphere x5'] },
  // 2026-07-11── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-07-11', type:'link', giftLinkWeb:'https://herowars.me/4ykaChK', giftLinkFb:'https://herowars.me/3Tuu3UP',
 note:'until|2026-07-14T02:00:00Z', rewards:['honey-energy x2000', 'summer-festival-coin x1'] },
  { date:'2026-07-10', type:'link', giftId:'e85b704538df55bfb38c38e16bca39d0', note:'level',
  rewards:[{ web:'platinum-box x3', fb:'fb-platinum-box x3' }] },
  { date:'2026-07-10', type:'link', giftLinkWeb:'https://herowars.me/4f7dOUO', giftLinkFb:'https://herowars.me/44n5Fa0',
 note:'until|2026-07-14T02:00:00Z', rewards:['honey-energy x2000', 'energy x500'] },
  // 2026-07-10── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-07-10', type:'link', giftLinkWeb:'https://herowars.me/4vZDGta', giftLinkFb:'https://herowars.me/4vVjHvy',
 note:'until|2026-07-14T02:00:00Z', rewards:['energy x500'] },
  
   
  // 2026-07-07── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-07-07', type:'link', giftLinkWeb:'https://herowars.me/4w8abFP', giftLinkFb:'https://herowars.me/4w8d2yx',
 note:'until|2026-07-07T02:00:00Z', rewards:['energy x500'] },
 // ── 1 Link Exclusivo so giftWebId diferente de weblink esse so coloca o id ──────────────────────────────
{ date:'2026-07-06', type:'link', giftWebId:'ZryXlzQxy2', note:'until|2026-07-13T02:00:00Z',
  rewards:['honey-energy x2000'] },
   
  // 2026-07-06── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-07-06', type:'link', giftLinkWeb:'https://herowars.me/3SHZfjf', giftLinkFb:'https://herowars.me/4vUi3us',
 note:'until|2026-07-06T02:00:00Z', rewards:['honey-energy x1000'] },
  
   // 2026-07-05── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-07-05', type:'link', giftLinkWeb:'https://herowars.me/4f0jYq4', giftLinkFb:'https://herowars.me/4p0UA7X',
 note:'until|2026-07-10T02:00:00Z', rewards:['energy x500'] },
  // ── July 4, 2026 ──────────────────────────────
 
   
  // ── 1 Link Exclusivo so giftWebId diferente de weblink esse so coloca o id ──────────────────────────────
{ date:'2026-06-24', type:'link', giftWebId:'gA6AsbsN33', note:'until|2026-06-30T02:00:00Z',
  rewards:['valor-coin x10000'] },
  
  
 { date:'2026-06-24', type:'link', giftLinkWeb:'https://herowars.me/4vt3gXh', giftLinkFb:'https://herowars.me/4oPNbIO', note:'until|2026-07-01T02:00:00Z',
  rewards:['energy-crystal x16', 'valor-coin x8500', 'sapphire-medallion x2','energy x500' ] },
   // ── June 23, 2026 ──────────────────────────────
    // 2026-06-##── 2 Link Exclusivo Web/FB ──────────────────────────────
  

      
  
  



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
https://www.hero-wars.com/?nx_source=group_posting_boxweb&gift_id=

*OBRIGARORIO MANTER HTTP:// PARA OS LINKS ABAIXO WEB/FB
// ── 2 Link Exclusivo Web/FB ──────────────────────────────
{ date:'2026-0#-##30', type:'link', giftLinkWeb:'https://herowars.me/##', giftLinkFb:'https://herowars.me/##', note:'until|2026-05-03T02:00:00Z',
  rewards:['energy x500'] },

  // ── June #, 2026 ──────────────────────────────
{ date:'2026-06-##', type:'link', giftId:'#####', note:'until|2026-0#-##T02:00:00Z',
  rewards:['energy x500'] },

  // ── 1 Link Exclusivo so giftWebId diferente de weblink esse so coloca o id ──────────────────────────────
{ date:'2026-##-##', type:'link', giftWebId:'#####', note:'until|2026-##-##T02:00:00Z',
  rewards:['valor-coin x1000'] },

  // ── Gifts New hero or titan ──────────────────────────────
 { date:'2026-0#-##', type:'link', giftId:'#####', note:'until|2026-0#-0#T02:00:00Z',
  rewards:['energy-crystal x16', 'valor-coin x8000', 'sapphire-medallion x1'] },

  // ── Code Gift Type ──────────────────────────────
{ date:'2026-04-06', type:'code', code:'EGGHNT', note:'until|2026-##-##T02:00:00Z', expired:true,
  rewards:['easter-key x5', 'soul-crystal x10'] },

  // ── gift friend-chip coin e Gold ──────────────────────────────
{ date:'2026-03-27', type:'link', giftId:'xqYzCnjZ49', note:'until|2026-##-##T02:00:00Z',
  rewards:['large-skin-stone-chest x10', 'friendship-chip x10000', 'gold 1M'] },

// ── 2 Link Exclusivo Web/FB postado atrasado ──────────────────────────────
{ date:'2026-05-14', type:'link', giftLinkWeb:'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa3BlbXdoZ2Z3UmhaVTJTMjJURzk4ZHVJeHQ3QXxBQ3Jtc0tsQnBjUGwzOE5Cc044c0lFWXp3a2JlWk5MbGFQR3RaZXdwa3dCUWpPYzlMcWo3S1EzY1hZaGtQQXJIN014bzY4akxBSEx5YjNvSDBfdmhUamhzdFZ5OXRZdWduYnVVWW9ZNjUwU0c3YUgtSk13UjQ1bw&q=https%3A%2F%2Fwww.hero-wars.com%2F%3Fnx_source%3Dgroup_posting_boxweb%26gift_id%3D8PdgKQBHWP&v=6ICF5LDfVTo',
   giftLinkFb:'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbl9yMHZwSGhzWDRJcmJqajlEZTlHSU5nMy1RUXxBQ3Jtc0trSXdxaUNDb1pEOGFkUzMxOTFaV0MyUHFZckZoaVZSSFFuUnVSLVhGS3hlUVFPUGhhOEtfNkFYYVBFRndDeGk3elhtZGZkMTRMczc1QWtKcDlRaGN2eW0yMXktXzVjQ25UeVFpU21DNVp6WnVLX2pnbw&q=https%3A%2F%2Ffb.gg%2Fplay%2Fmobaheroes%2Fd%2F4546179685671400%2F&v=6ICF5LDfVTo', note:'until|2026-05-03T02:00:00Z',
  note:'until|2026-##-##T02:00:00Z', rewards:['large-skin-stone-chest x5', 'portal-charge x3']
 },

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
   ╚══════════════════════════════════════════════════════════════════╝ 
   
   
   
   */
