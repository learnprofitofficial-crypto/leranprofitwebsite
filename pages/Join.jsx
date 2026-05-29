import { useState } from "react";
import { submitWeb3Forms } from "../src/web3forms.js";

const perks = [
  { icon: "school", text: "Access to all 4 program levels" },
  { icon: "leaderboard", text: "Virtual portfolio competition (₹1L)" },
  { icon: "newspaper", text: "Monthly investment report" },
  { icon: "workspace_premium", text: "Achievement rank progression" },
  { icon: "bar_chart", text: "Stock pitch & debate competitions" },
  { icon: "group", text: "Network with like-minded investors" },
];

const fields = [
  { label: "Full Name *", key: "name", type: "text", placeholder: "Your name", required: true },
  { label: "Email Address *", key: "email", type: "email", placeholder: "you@example.com", required: true },
  { label: "Year / Grade", key: "grade", type: "text", placeholder: "e.g. Year 11, Grade 12, 1st Year College", required: false },
];

export default function Join() {
  const [form, setForm] = useState({ name: "", email: "", grade: "", why: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitWeb3Forms({
        subject: `New LearnProfit application: ${form.name}`,
        from_name: "LearnProfit Website",
        name: form.name,
        email: form.email,
        grade: form.grade,
        why: form.why,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-hair bg-white/[0.04] px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-mint/50";

  return (
    <section className="container-x py-16">
      <div className="mb-16 text-center">
        <span className="eyebrow">Applications Open</span>
        <h1 className="mx-auto mt-4 font-head text-[clamp(40px,7vw,72px)] font-extrabold leading-[1.1] tracking-tight text-ink">
          Join <span className="text-gradient">LearnProfit</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-body text-xl text-ink-muted">
          Take your first step toward financial mastery. Apply to join the Finance Education &amp;
          Investment Ecosystem.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        {/* Perks */}
        <div>
          <h2 className="mb-8 font-head text-[22px] font-bold text-ink">What you get</h2>
          <div className="space-y-3">
            {perks.map((p) => (
              <div key={p.text} className="flex items-center gap-4 rounded-xl border border-hair bg-card px-5 py-4">
                <span className="material-symbols-outlined text-[22px] text-mint">{p.icon}</span>
                <span className="font-body text-sm text-ink">{p.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-mint/15 bg-gradient-to-br from-mint/[0.08] to-transparent p-7">
            <h3 className="mb-2 font-head font-bold text-ink">Start as a Beginner Analyst</h3>
            <p className="font-body text-sm leading-relaxed text-ink-muted">
              Everyone starts at Level 1 — Money Fundamentals. Your rank grows with your
              contributions. The path to Lead Researcher is earned, not given.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="rounded-xl border border-mint/20 bg-mint/[0.08] px-10 py-16 text-center">
              <div className="mb-4 text-[56px]">🎉</div>
              <h3 className="mb-2 font-head text-2xl font-bold text-ink">Application Submitted!</h3>
              <p className="font-body text-ink-muted">
                Thanks for applying to LearnProfit. We'll be in touch soon. Welcome to the journey.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-xl border border-hair bg-card p-8 md:p-10">
              <h2 className="mb-6 font-head text-[22px] font-bold text-ink">Application Form</h2>
              <div className="space-y-5">
                {fields.map((f) => (
                  <div key={f.key}>
                    <label className="mb-1.5 block font-body text-sm text-ink-muted">{f.label}</label>
                    <input
                      required={f.required}
                      type={f.type}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      className={inputClass}
                    />
                  </div>
                ))}
                <div>
                  <label className="mb-1.5 block font-body text-sm text-ink-muted">
                    Why do you want to join?
                  </label>
                  <textarea
                    rows={4}
                    value={form.why}
                    onChange={(e) => setForm({ ...form, why: e.target.value })}
                    placeholder="Tell us what interests you about finance and investing..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 font-body text-sm text-red-300">
                    ⚠️ {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
