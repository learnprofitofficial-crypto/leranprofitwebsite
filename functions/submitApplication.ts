import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    const { name, email, grade, why } = body;

    if (!name || !email) {
      return Response.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Get Gmail access token
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');

    // Build RFC 2822 email
    const to = 'learn.profit.official@gmail.com';
    const subject = `New Application: ${name}`;
    const bodyText = `
New LearnProfit Application
============================

Name:    ${name}
Email:   ${email}
Grade:   ${grade || 'Not provided'}

Why they want to join:
${why || 'Not provided'}

============================
Submitted via learnprofit.app
    `.trim();

    const emailLines = [
      `To: ${to}`,
      `From: LearnProfit Bot <learn.profit.official@gmail.com>`,
      `Reply-To: ${name} <${email}>`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/plain; charset=UTF-8`,
      ``,
      bodyText,
    ];

    const rawEmail = emailLines.join('\r\n');
    const encoded = btoa(unescape(encodeURIComponent(rawEmail)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const gmailRes = await fetch(
      'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ raw: encoded }),
      }
    );

    if (!gmailRes.ok) {
      const err = await gmailRes.text();
      console.error('Gmail send error:', err);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ ok: true, message: 'Application sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});
