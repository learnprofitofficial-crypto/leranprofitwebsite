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

function buildApplicationText({ email, grade, name, why }) {
  return `
New LearnProfit Application
============================

Name:    ${name}
Email:   ${email}
Grade:   ${grade || "Not provided"}

Why they want to join:
${why || "Not provided"}

============================
Submitted via LearnProfit website
  `.trim();
}

async function sendWithResend(application) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return false;
  }

  const to = process.env.APPLICATION_TO_EMAIL || "learn.profit.official@gmail.com";
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
      reply_to: application.email,
      subject: `New LearnProfit application: ${application.name}`,
      text: buildApplicationText(application),
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Resend failed: ${message}`);
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
  const application = {
    name: String(body.name || "").trim(),
    email: String(body.email || "").trim(),
    grade: String(body.grade || "").trim(),
    why: String(body.why || "").trim(),
  };

  if (!application.name || !application.email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  if (!isValidEmail(application.email)) {
    return res.status(400).json({ error: "Enter a valid email address" });
  }

  try {
    const delivered = await sendWithResend(application);

    if (!delivered) {
      console.info("LearnProfit application received", {
        email: application.email,
        grade: application.grade,
        name: application.name,
      });
    }

    return res.status(200).json({
      ok: true,
      delivery: delivered ? "email_sent" : "email_not_configured",
    });
  } catch (error) {
    console.error("Application submission failed", error);
    return res.status(500).json({ error: "Failed to submit application" });
  }
}
