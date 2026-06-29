/* Expansion Healthcare Partners — AI Receptionist Widget (no API required) */

(function () {
  'use strict';

  /* ── Knowledge base ────────────────────────────────────────── */
  var KB = [
    {
      keys: ['hello','hi','hey','good morning','good afternoon','howdy','greetings','sup','start'],
      reply: "Hi there! I'm Aria, the virtual receptionist for Expansion Healthcare Partners. I can answer questions about our services, tell you about our team, or help you get in touch. What can I help you with today?",
      qr: ['What services do you offer?', 'Tell me about referral growth', 'Who is Mark Rowlands?', 'How do I contact you?']
    },
    {
      keys: ['service','offer','help','do','specialize','provide','work'],
      reply: "Expansion Healthcare Partners offers three core services:\n\n1. Medical Practice Business Development — building referral networks and growing practice revenue\n\n2. Physician Onboarding & Marketing — helping new physicians establish their presence and referral volume quickly\n\n3. Physician Placement & Employment Contract Consulting — job search, placement, and contract negotiation support\n\nWe serve specialists, groups, and hospital systems across Indiana, Illinois, Ohio, Kentucky, and Michigan.",
      qr: ['Tell me about referral growth', 'Physician placement help', 'Contact Mark']
    },
    {
      keys: ['cost','price','pricing','fee','charge','rate','how much','affordable','budget'],
      reply: "Pricing depends on the scope of work and your practice's goals. Mark Rowlands will put together a custom proposal after a brief discovery call — no obligation.\n\nWould you like to get in touch with him?",
      qr: ['Yes, contact Mark', 'Tell me more about services']
    },
    {
      keys: ['referral','physician referral','specialist','primary care','network','refer','growth','business development','barrier'],
      reply: "Medical Practice Business Development is EHP's core specialty. We uncover barriers to referral, connect you with the right providers, and track referral data to ensure measurable growth.\n\nWe embed ourselves in your community and act as an ongoing liaison — so the relationships stay on track long after the introduction is made.",
      qr: ['Physician onboarding', 'Physician placement', 'Contact Mark']
    },
    {
      keys: ['onboard','new physician','new doctor','establish','new provider','joining','new to','marketing'],
      reply: "Our Physician Onboarding & Marketing service helps new physicians hit the ground running. We leverage our existing relationships and introduction strategy so new providers aren't starting from zero.\n\nA new physician has a narrow window to build referral volume — we accelerate that process.",
      qr: ['Tell me about referral growth', 'Physician placement', 'Contact Mark']
    },
    {
      keys: ['placement','contract','employment','job','search','negotiate','negotiation','hire','hiring','site visit','housing','legal'],
      reply: "EHP assists physicians with job search, placement, and contract negotiation — including site visits, community evaluation, financial terms consultation, and legal referrals for contract assistance.\n\nFinding the right position is only part of the challenge. We provide the objectivity and experience most physicians don't have access to.",
      qr: ['Tell me about referral growth', 'Physician onboarding', 'Contact Mark']
    },
    {
      keys: ['mark','rowlands','principal','ache','fellow','founder','who','team','staff','people','consultant'],
      reply: "Mark Rowlands is the Managing Principal of Expansion Healthcare Partners and an ACHE® Fellow with decades of healthcare business development experience.\n\nHe works hands-on with every client — you won't be handed off to a junior staffer.",
      qr: ['Contact Mark', 'What services do you offer?']
    },
    {
      keys: ['contact','reach','email','phone','call','talk','speak','meet','schedule','appointment','consultation','book'],
      reply: "You can reach Mark Rowlands directly:\n\n📧 markr@expansionhp.com\n📞 317.275.1176\n📍 121 Monument Circle, Suite 526\n    Indianapolis, IN 46204\n\nOr visit our Contact page to send a message.",
      qr: ['Visit Contact page', 'What services do you offer?']
    },
    {
      keys: ['contact page','contact form','send message','form'],
      reply: "Head to our <a href='contact.html' style='color:#2B7BB9;'>Contact page</a> to send Mark a message directly. He typically responds within one business day.",
      qr: ['What services do you offer?', 'Who is Mark Rowlands?']
    },
    {
      keys: ['location','address','office','where','indianapolis','indy','indiana'],
      reply: "Our office is located at:\n\n121 Monument Circle, Suite 526\nIndianapolis, IN 46204\n\nWe also serve clients remotely across Indiana, Illinois, Ohio, Kentucky, and Michigan.",
      qr: ['Contact Mark', 'What services do you offer?']
    },
    {
      keys: ['state','area','region','serve','midwest','illinois','ohio','kentucky','michigan'],
      reply: "We serve clients across five Midwestern states: Indiana, Illinois, Ohio, Kentucky, and Michigan — with deep roots in the Indianapolis healthcare market.",
      qr: ['What services do you offer?', 'Contact Mark']
    },
    {
      keys: ['practice','independent','small','clinic','group','private'],
      reply: "We specialize in working with independent medical practices — the kind of practices that need real strategy and real results without the overhead of a large agency.\n\nFrom solo providers to multi-specialty groups, we tailor every engagement to your goals.",
      qr: ['Tell me about Meta ads', 'Physician referral growth', 'Contact Mark']
    },
    {
      keys: ['hospital','health system','system','large','network'],
      reply: "In addition to independent practices, we work with hospital systems and larger health networks on marketing strategy, business development, and service line growth.",
      qr: ['What services do you offer?', 'Contact Mark']
    },
    {
      keys: ['thank','thanks','great','awesome','perfect','helpful','good','appreciate','wonderful'],
      reply: "Happy to help! Is there anything else I can answer for you, or would you like to connect with Mark directly?",
      qr: ['Contact Mark', 'What services do you offer?']
    },
    {
      keys: ['bye','goodbye','done','no thanks','nothing','that\'s all','all set'],
      reply: "Thanks for stopping by! Don't hesitate to reach out anytime. You can always email Mark at markr@expansionhp.com or call 317.275.1176.",
      qr: []
    },
  ];

  var FALLBACK = {
    reply: "That's a great question for Mark directly. You can reach him at markr@expansionhp.com or 317.275.1176 — he'll be happy to help.",
    qr: ['What services do you offer?', 'Contact Mark', 'Tell me about Meta ads']
  };

  function findAnswer(text) {
    var lower = text.toLowerCase();
    var best = null;
    var bestScore = 0;
    KB.forEach(function (entry) {
      var score = 0;
      entry.keys.forEach(function (k) {
        if (lower.indexOf(k) !== -1) score++;
      });
      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    });
    return bestScore > 0 ? best : FALLBACK;
  }

  /* ── Inject styles ─────────────────────────────────────────── */
  var style = document.createElement('style');
  style.textContent = [
    '#ehp-chat-btn{position:fixed;bottom:28px;right:28px;z-index:9999;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#2B7BB9,#D6215E);border:none;cursor:pointer;box-shadow:0 6px 24px rgba(43,123,185,.45);display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;}',
    '#ehp-chat-btn:hover{transform:scale(1.08);box-shadow:0 10px 32px rgba(43,123,185,.55);}',
    '#ehp-chat-btn svg{width:28px;height:28px;fill:#fff;}',
    '#ehp-chat-btn .ehp-badge{position:absolute;top:2px;right:2px;width:14px;height:14px;background:#D6215E;border-radius:50%;border:2px solid #fff;display:none;}',
    '#ehp-chat-btn.has-badge .ehp-badge{display:block;}',

    '#ehp-chat-panel{position:fixed;bottom:100px;right:28px;z-index:9999;width:360px;max-width:calc(100vw - 40px);background:#fff;border-radius:16px;box-shadow:0 12px 48px rgba(27,26,46,.18);display:flex;flex-direction:column;overflow:hidden;transform:scale(.95) translateY(12px);opacity:0;pointer-events:none;transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .25s;}',
    '#ehp-chat-panel.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}',

    '#ehp-chat-header{background:linear-gradient(135deg,#2B7BB9,#1a5f94);padding:16px 18px;display:flex;align-items:center;gap:12px;}',
    '#ehp-chat-header .ehp-avatar{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '#ehp-chat-header .ehp-avatar svg{width:22px;height:22px;fill:#fff;}',
    '.ehp-hinfo h3{color:#fff;font-family:"Playfair Display",Georgia,serif;font-size:15px;font-weight:700;margin:0;}',
    '.ehp-hinfo p{color:rgba(255,255,255,.75);font-size:12px;margin:2px 0 0;}',
    '#ehp-chat-close{margin-left:auto;background:none;border:none;cursor:pointer;color:rgba(255,255,255,.8);font-size:22px;line-height:1;padding:4px 6px;}',
    '#ehp-chat-close:hover{color:#fff;}',

    '#ehp-chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;max-height:340px;min-height:180px;}',

    '.ehp-msg{max-width:84%;display:flex;flex-direction:column;gap:3px;}',
    '.ehp-msg.bot{align-self:flex-start;}',
    '.ehp-msg.user{align-self:flex-end;}',
    '.ehp-bubble{padding:10px 14px;border-radius:14px;font-size:14px;line-height:1.55;white-space:pre-line;}',
    '.ehp-msg.bot .ehp-bubble{background:#F0F4F8;color:#1A1A2E;border-bottom-left-radius:4px;}',
    '.ehp-msg.user .ehp-bubble{background:linear-gradient(135deg,#2B7BB9,#1a5f94);color:#fff;border-bottom-right-radius:4px;}',
    '.ehp-label{font-size:11px;color:#9CA3AF;}',
    '.ehp-msg.user .ehp-label{text-align:right;}',

    '.ehp-typing .ehp-bubble{display:flex;align-items:center;gap:5px;padding:12px 16px;}',
    '.ehp-dot{width:7px;height:7px;border-radius:50%;background:#2B7BB9;animation:ehpBounce 1.1s infinite ease-in-out;}',
    '.ehp-dot:nth-child(2){animation-delay:.18s;}',
    '.ehp-dot:nth-child(3){animation-delay:.36s;}',
    '@keyframes ehpBounce{0%,80%,100%{transform:translateY(0);}40%{transform:translateY(-7px);}}',

    '.ehp-quick-replies{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 10px;}',
    '.ehp-qr{background:#F0F4F8;border:1px solid #dce4ed;border-radius:20px;padding:6px 14px;font-size:12.5px;color:#2B7BB9;cursor:pointer;transition:background .15s;font-family:inherit;}',
    '.ehp-qr:hover{background:#dbeaf5;}',

    '#ehp-chat-footer{padding:12px 14px;border-top:1px solid #E5E7EB;display:flex;gap:8px;}',
    '#ehp-chat-input{flex:1;border:1px solid #E5E7EB;border-radius:24px;padding:9px 16px;font-size:14px;font-family:inherit;outline:none;resize:none;line-height:1.4;max-height:100px;}',
    '#ehp-chat-input:focus{border-color:#2B7BB9;}',
    '#ehp-chat-send{background:linear-gradient(135deg,#2B7BB9,#D6215E);border:none;border-radius:50%;width:40px;height:40px;flex-shrink:0;cursor:pointer;display:flex;align-items:center;justify-content:center;}',
    '#ehp-chat-send:hover{opacity:.9;}',
    '#ehp-chat-send svg{width:18px;height:18px;fill:#fff;}',
  ].join('');
  document.head.appendChild(style);

  /* ── Inject HTML ───────────────────────────────────────────── */
  var root = document.createElement('div');
  root.innerHTML = [
    '<button id="ehp-chat-btn" aria-label="Chat with our receptionist">',
    '  <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.03 2 11c0 2.386.972 4.548 2.556 6.12L3 22l5.27-1.474A10.9 10.9 0 0012 21c5.523 0 10-4.03 10-9S17.523 2 12 2z"/></svg>',
    '  <span class="ehp-badge"></span>',
    '</button>',
    '<div id="ehp-chat-panel" role="dialog" aria-label="EHP Virtual Receptionist">',
    '  <div id="ehp-chat-header">',
    '    <div class="ehp-avatar"><svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg></div>',
    '    <div class="ehp-hinfo"><h3>Aria</h3><p>EHP Virtual Receptionist &bull; Online</p></div>',
    '    <button id="ehp-chat-close" aria-label="Close">&times;</button>',
    '  </div>',
    '  <div id="ehp-chat-messages"></div>',
    '  <div class="ehp-quick-replies" id="ehp-qr-row"></div>',
    '  <div id="ehp-chat-footer">',
    '    <textarea id="ehp-chat-input" rows="1" placeholder="Type a message…" aria-label="Message"></textarea>',
    '    <button id="ehp-chat-send" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></button>',
    '  </div>',
    '</div>',
  ].join('');
  document.body.appendChild(root);

  var btn      = document.getElementById('ehp-chat-btn');
  var panel    = document.getElementById('ehp-chat-panel');
  var closeBtn = document.getElementById('ehp-chat-close');
  var messages = document.getElementById('ehp-chat-messages');
  var input    = document.getElementById('ehp-chat-input');
  var sendBtn  = document.getElementById('ehp-chat-send');
  var qrRow    = document.getElementById('ehp-qr-row');

  /* ── Open / close ──────────────────────────────────────────── */
  var opened = false;
  btn.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('open');
    if (isOpen && !opened) {
      opened = true;
      btn.classList.remove('has-badge');
      greet();
    }
    if (isOpen) setTimeout(function () { input.focus(); }, 260);
  });
  closeBtn.addEventListener('click', function () { panel.classList.remove('open'); });

  /* ── Rendering helpers ─────────────────────────────────────── */
  function addMessage(html, role) {
    var wrap = document.createElement('div');
    wrap.className = 'ehp-msg ' + role;
    var label = document.createElement('span');
    label.className = 'ehp-label';
    label.textContent = role === 'bot' ? 'Aria' : 'You';
    var bubble = document.createElement('div');
    bubble.className = 'ehp-bubble';
    bubble.innerHTML = html;
    wrap.appendChild(label);
    wrap.appendChild(bubble);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
    return wrap;
  }

  function showTyping() {
    var wrap = document.createElement('div');
    wrap.className = 'ehp-msg bot ehp-typing';
    wrap.innerHTML = '<div class="ehp-bubble"><span class="ehp-dot"></span><span class="ehp-dot"></span><span class="ehp-dot"></span></div>';
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
    return wrap;
  }

  function setQR(replies) {
    qrRow.innerHTML = '';
    replies.forEach(function (r) {
      var b = document.createElement('button');
      b.className = 'ehp-qr';
      b.textContent = r;
      b.addEventListener('click', function () { send(r); });
      qrRow.appendChild(b);
    });
  }

  /* ── Greeting ──────────────────────────────────────────────── */
  function greet() {
    setTimeout(function () {
      addMessage("Hi! I'm <strong>Aria</strong>, the virtual receptionist for Expansion Healthcare Partners. How can I help you today?", 'bot');
      setQR(['What services do you offer?', 'Tell me about referral growth', 'Who is Mark Rowlands?', 'How do I contact you?']);
    }, 300);
  }

  /* ── Send ──────────────────────────────────────────────────── */
  function send(text) {
    text = (text !== undefined ? text : input.value).trim();
    if (!text) return;
    input.value = '';
    autoResize();
    setQR([]);

    addMessage(escapeHtml(text), 'user');

    var typing = showTyping();
    setTimeout(function () {
      typing.remove();
      var answer = findAnswer(text);
      addMessage(answer.reply.replace(/\n/g, '<br>'), 'bot');
      setQR(answer.qr || []);
    }, 600 + Math.random() * 300);
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  sendBtn.addEventListener('click', function () { send(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });

  function autoResize() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  }
  input.addEventListener('input', autoResize);

  /* ── Notification badge after 5 s ──────────────────────────── */
  setTimeout(function () {
    if (!opened) btn.classList.add('has-badge');
  }, 5000);

})();
