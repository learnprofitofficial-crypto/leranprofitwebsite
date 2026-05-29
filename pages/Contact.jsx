import { useState } from "react";
import { submitWeb3Forms } from "../src/web3forms.js";

const EMAIL = "learn.profit.official@gmail.com";

const reachAbout = [
  "Questions about the program or curriculum",
  "Collaboration & partnership inquiries",
  "Application status or follow-ups",
  "General feedback or ideas",
  "Press or media inquiries",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | sent
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      await submitWeb3Forms({
        subject: form.subject || `New LearnProfit message from ${form.name}`,
        from_name: "LearnProfit Website",
        name: form.name,
        email: form.email,
        message_subject: form.subject,
        message: form.message,
      });
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-hair bg-white/[0.04] px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-mint/50";

  return (
    <>
      {/* Hero */}
      <section className="container-x pb-16 pt-12 text-center">
        <span className="eyebrow">Get in Touch</span>
        <h1 className="mx-auto mt-5 max-w-3xl font-head text-[clamp(40px,6.5vw,68px)] font-extrabold leading-[1.08] tracking-tight text-ink">
          We're real people. <span className="text-gradient">We actually reply.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-body text-lg leading-relaxed text-ink-muted">
          Whether you have a question, a collaboration idea, or just want to know more — our inbox is
          open. We respond to every message.
        </p>
      </section>

      {/* Info + Form */}
      <section className="container-x pb-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          {/* Left: info cards */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-mint/15 bg-gradient-to-br from-mint/[0.08] to-transparent p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-mint">mail</span>
                <h3 className="font-head text-lg font-bold text-ink">Official Email</h3>
              </div>
              <a href={`mailto:${EMAIL}`} className="font-head text-base font-bold text-mint hover:underline">
                {EMAIL}
              </a>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                This is our official inbox. All messages go directly to the founding team.
              </p>
            </div>

            <div className="rounded-2xl border border-hair bg-card p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-sky">schedule</span>
                <h3 className="font-head text-lg font-bold text-ink">Response Time</h3>
              </div>
              <p className="font-head text-2xl font-extrabold text-sky">3–4 Working Days</p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">
                We're students too — but we take every message seriously. Expect a proper reply within
                3 to 4 working days.
              </p>
            </div>

            <div className="rounded-2xl border border-hair bg-card p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-violet">mark_email_unread</span>
                <h3 className="font-head text-lg font-bold text-ink">No Reply? Follow Up.</h3>
              </div>
              <p className="font-body text-sm leading-relaxed text-ink-muted">
                If you haven't heard back after 4 working days, you are absolutely encouraged to send a
                follow-up email. We want to hear from you — sometimes things slip through, and a
                follow-up is always welcome.
              </p>
              <div className="mt-5 rounded-lg border border-violet/30 bg-violet/10 px-4 py-3">
                <span className="font-body text-sm text-ink">✅ Follow-ups are officially encouraged.</span>
              </div>
            </div>

            <div className="rounded-2xl border border-hair bg-card p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-amber">help</span>
                <h3 className="font-head text-lg font-bold text-ink">What to reach out about</h3>
              </div>
              <ul className="space-y-2.5">
                {reachAbout.map((item) => (
                  <li key={item} className="flex gap-2 font-body text-sm text-ink-muted">
                    <span className="flex-shrink-0 text-mint">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-hair bg-card p-8 md:p-10">
            {status === "sent" ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 text-[56px]">📨</div>
                <h2 className="font-head text-2xl font-bold text-ink">Message sent!</h2>
                <p className="mt-2 max-w-sm font-body text-ink-muted">
                  Thanks for reaching out. We'll get back to you within 3–4 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="font-head text-2xl font-bold text-ink">Send us a message</h2>
                <p className="mt-1 font-body text-sm text-ink-muted">
                  Or email us directly at{" "}
                  <a href={`mailto:${EMAIL}`} className="text-mint hover:underline">
                    {EMAIL}
                  </a>
                </p>

                <div className="mt-7 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-body text-sm text-ink-muted">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-body text-sm text-ink-muted">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-sm text-ink-muted">Subject *</label>
                    <input
                      required
                      type="text"
                      value={form.subject}
                      onChange={update("subject")}
                      placeholder="e.g. Question about the program, Collaboration idea..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-sm text-ink-muted">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Write your message here..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="rounded-lg border border-hair bg-white/[0.03] px-4 py-3">
                    <p className="font-body text-sm leading-relaxed text-ink-muted">
                      <span className="text-sky">ℹ</span> We respond within{" "}
                      <span className="font-semibold text-mint">3–4 working days</span>. No reply?
                      You're welcome to follow up — we officially encourage it.
                    </p>
                  </div>

                  {error && (
                    <p className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 font-body text-sm text-red-300">
                      ⚠️ {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Send Message →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
