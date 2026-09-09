// Reignland Media — shared behaviour for local SEO landing pages
// Ported verbatim from the live index.html (quote modal + rainbow cycle).

// cycle logo palette word-by-word across .rainbow elements
document.querySelectorAll('.rainbow').forEach(el => {
  let i = el.querySelector('.lead') ? 2 : 0;
  [...el.childNodes].forEach(node => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const frag = document.createDocumentFragment();
    node.textContent.trim().split(/\s+/).filter(Boolean).forEach(w => {
      const s = document.createElement('span');
      s.className = 'w' + (i++ % 3);
      s.textContent = w;
      frag.appendChild(s);
      frag.appendChild(document.createTextNode(' '));
    });
    node.replaceWith(frag);
  });
});

// hero video: ONLY resume on first touch — no load()/play() calls at load time
const heroVid = document.querySelector('.hero video');
if (heroVid) {
  const resume = () => { heroVid.muted = true; heroVid.play().catch(() => {}); };
  document.addEventListener('touchend', resume, { once: true });
  document.addEventListener('click', resume, { once: true });
}

// ---------- QUOTE MODAL ----------
const qmodal = document.getElementById('qmodal');
const qform = document.getElementById('qform');
const qdone = document.getElementById('qdone');
if (qmodal && qform && qdone) {
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    if (!a.href.includes('quote')) return;
    a.addEventListener('click', e => { e.preventDefault(); qmodal.classList.add('open'); });
  });
  document.getElementById('qclose').addEventListener('click', () => qmodal.classList.remove('open'));
  qmodal.addEventListener('click', e => { if (e.target === qmodal) qmodal.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') qmodal.classList.remove('open'); });
  if (location.search.includes('quote=open')) qmodal.classList.add('open');

  qform.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('qsend');
    btn.textContent = 'sending...';
    const data = Object.fromEntries(new FormData(qform).entries());
    data._subject = 'FPV quote request — ' + (data.name || 'website');
    try {
      const r = await fetch('https://formsubmit.co/ajax/admin_derrick@proton.me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!r.ok) throw new Error('relay ' + r.status);
      qform.style.display = 'none';
      qdone.style.display = 'block';
    } catch (err) {
      // relay failed — fall back to the visitor's own mail client with prefilled body
      const body = encodeURIComponent(
        'Name: ' + (data.name || '') + '\nPhone: ' + (data.phone || '') +
        '\nEmail: ' + (data.email || '') + '\nService: ' + (data.service || '') +
        '\nTimeframe: ' + (data.timeframe || '') + '\nLocation: ' + (data.location || '') +
        '\n\n' + (data.message || ''));
      location.href = 'mailto:admin_derrick@proton.me?subject=' + encodeURIComponent('FPV quote request') + '&body=' + body;
    }
  });
}