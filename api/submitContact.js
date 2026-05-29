function parseBody(req) {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }

  return req.body;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMessageText({ email, name, subject, message }) {
  return `
New LearnProfit Contact Message
================================

Name:    ${name}
Email:   ${email}
Subject: ${subject || "Not provided"}

Message:
${message}

================================
Submitted via LearnProfit website
  `.trim();
}

async function sendWithResend(payload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return false;
  }

  const to = process.env.CONTACT_TO_EMAIL || "learn.profit.official@gmail.com";
  const from = process.env.APPLICATION_FROM_EMAIL || "LearnProfit <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `New LearnProfit message: ${payload.subject || payload.name}`,
      text: buildMessageText(payload),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend failed: ${detail}`);
  }

  return true;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = parseBody(req);
  const payload = {
    name: String(body.name || "").trim(),
    email: String(body.email || "").trim(),
    subject: String(body.subject || "").trim(),
    message: String(body.message || "").trim(),
  };

  if (!payload.name || !payload.email || !payload.message) {
    return res.status(400).json({ error: "Name, email and message are required" });
  }

  if (!isValidEmail(payload.email)) {
    return res.status(400).json({ error: "Enter a valid email address" });
  }

  try {
    const delivered = await sendWithResend(payload);

    if (!delivered) {
      console.info("LearnProfit contact message received", {
        email: payload.email,
        name: payload.name,
        subject: payload.subject,
      });
    }

    return res.status(200).json({
      ok: true,
      delivery: delivered ? "email_sent" : "email_not_configured",
    });
  } catch (error) {
    console.error("Contact submission failed", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
