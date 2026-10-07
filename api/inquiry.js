// POST /api/inquiry: delivers a catering / private-event inquiry to staff.
// Delivery uses whichever is configured in Vercel env vars, in order:
//   SLACK_WEBHOOK_URL                      -> posts to a Slack channel
//   RESEND_API_KEY + INQUIRY_EMAIL (+ INQUIRY_FROM) -> sends an email
// With neither set it returns 503 and the page shows the phone number instead.
const clean = (v, cap = 200) => String(v == null ? '' : v).replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, cap);

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false, error: 'Method not allowed' }); }
  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  b = b || {};
  if (clean(b.company)) return res.status(200).json({ ok: true }); // honeypot

  const d = {
    name: clean(b.name, 120), phone: clean(b.phone, 60), email: clean(b.email, 160),
    type: clean(b.type, 80), guests: clean(b.guests, 20), location: clean(b.location, 40),
    date: clean(b.date, 40), details: clean(b.details, 2000)
  };
  if (!d.name || !d.phone || !d.email) return res.status(400).json({ ok: false, error: 'Please add your name, phone and email.' });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) return res.status(400).json({ ok: false, error: 'That email address does not look right.' });

  const text = `New Ghazni inquiry\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nEvent: ${d.type}\nGuests: ${d.guests}\nLocation: ${d.location}\nDate: ${d.date}\nDetails: ${d.details}`;
  try {
    if (process.env.SLACK_WEBHOOK_URL) {
      const r = await fetch(process.env.SLACK_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) });
      if (!r.ok) throw new Error('slack ' + r.status);
      return res.status(200).json({ ok: true });
    }
    if (process.env.RESEND_API_KEY && process.env.INQUIRY_EMAIL) {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + process.env.RESEND_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: process.env.INQUIRY_FROM || 'Ghazni Website <onboarding@resend.dev>', to: [process.env.INQUIRY_EMAIL], reply_to: d.email, subject: `Inquiry: ${d.type || 'event'} (${d.guests || '?'} guests)`, text })
      });
      if (!r.ok) throw new Error('resend ' + r.status);
      return res.status(200).json({ ok: true });
    }
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'delivery_failed' });
  }
  return res.status(503).json({ ok: false, error: 'not_configured' });
};
