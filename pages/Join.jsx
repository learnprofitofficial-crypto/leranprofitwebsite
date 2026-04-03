import { useState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", grade: "", why: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/functions/submitApplication", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const perks = [
    { icon: "school", text: "Access to all 4 program levels" },
    { icon: "leaderboard", text: "Virtual portfolio competition (₹1L)" },
    { icon: "newspaper", text: "Monthly investment report" },
    { icon: "workspace_premium", text: "Achievement rank progression" },
    { icon: "bar_chart", text: "Stock pitch & debate competitions" },
    { icon: "group", text: "Network with like-minded investors" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e1322", color: "#dee1f7", fontFamily: "Inter, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; font-style: normal; }
        .font-headline { font-family: 'Manrope', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .glass-nav { background: rgba(14,19,34,0.8); backdrop-filter: blur(20px); }
        .emerald-gradient { background: linear-gradient(135deg, #4edea3 0%, #10b981 100%); }
        input, textarea { outline: none; }
        input:focus, textarea:focus { border-color: rgba(78,222,163,0.5) !important; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav" style={{ boxShadow: "0 8px 32px rgba(16,185,129,0.06)" }}>
        <div className="flex justify-between items-center px-8 max-w-7xl mx-auto" style={{ height: "80px" }}>
          <div className="font-headline text-2xl font-black tracking-tighter" style={{ color: "#4edea3" }}>LearnProfit</div>
          <div className="hidden md:flex items-center" style={{ gap: "40px" }}>
            <Link to="/" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Home</Link>
            <Link to="/Program" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Program</Link>
            <Link to="/Activities" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Activities</Link>
            <Link to="/Achievements" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Achievements</Link>
          </div>
          <div className="hidden md:flex items-center" style={{ gap: "24px" }}>
            <Link to="/Join">
              <button className="emerald-gradient font-headline font-bold px-6 py-2.5" style={{ color: "#003824", borderRadius: "9999px" }}>Join Now</button>
            </Link>
          </div>
          <button className="md:hidden" style={{ color: "#cbd5e1" }} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-8 py-4 flex flex-col gap-4 font-headline font-bold" style={{ background: "#0d1326", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Home</Link>
            <Link to="/Program" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Program</Link>
            <Link to="/Activities" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Activities</Link>
            <Link to="/Achievements" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Achievements</Link>
          </div>
        )}
      </nav>

      <main style={{ paddingTop: "128px", paddingBottom: "96px", flex: 1 }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="font-headline font-extrabold uppercase text-sm tracking-widest block mb-4" style={{ color: "#4edea3" }}>
              Applications Open
            </span>
            <h1 className="font-headline font-extrabold tracking-tight mb-4" style={{ fontSize: "clamp(40px,7vw,72px)", color: "#dee1f7", lineHeight: 1.1 }}>
              Join{" "}
              <span style={{ background: "linear-gradient(135deg,#4edea3,#44d8f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                LearnProfit
              </span>
            </h1>
            <p className="font-body text-xl mx-auto" style={{ color: "#bbcabf", maxWidth: "520px" }}>
              Take your first step toward financial mastery. Apply to join the Finance Education & Investment Club.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Perks */}
            <div>
              <h2 className="font-headline font-bold mb-8" style={{ fontSize: "22px", color: "#dee1f7" }}>What you get</h2>
              <div className="space-y-3">
                {perks.map((p, i) => (
                  <div key={i} className="flex items-center gap-4" style={{ backgroundColor: "#1a1f2f", borderRadius: "12px", padding: "16px 20px", border: "1px solid rgba(60,74,66,0.1)" }}>
                    <span className="material-symbols-outlined" style={{ color: "#4edea3", fontSize: "22px" }}>{p.icon}</span>
                    <span className="font-body text-sm" style={{ color: "#dee1f7" }}>{p.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "24px", background: "linear-gradient(135deg, rgba(78,222,163,0.08), transparent)", borderRadius: "12px", padding: "28px", border: "1px solid rgba(78,222,163,0.15)" }}>
                <h3 className="font-headline font-bold mb-2" style={{ color: "#dee1f7" }}>Start as a Beginner Analyst</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#bbcabf" }}>
                  Everyone starts at Level 1 — Money Fundamentals. Your rank grows with your contributions. The path to Lead Researcher is earned, not given.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ backgroundColor: "rgba(78,222,163,0.08)", borderRadius: "12px", padding: "60px 40px", textAlign: "center", border: "1px solid rgba(78,222,163,0.2)" }}>
                  <div style={{ fontSize: "56px", marginBottom: "16px" }}>🎉</div>
                  <h3 className="font-headline font-bold mb-2" style={{ fontSize: "26px", color: "#dee1f7" }}>Application Submitted!</h3>
                  <p className="font-body" style={{ color: "#bbcabf" }}>Thanks for applying to LearnProfit. We'll be in touch soon. Welcome to the journey.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ backgroundColor: "#1a1f2f", borderRadius: "12px", padding: "40px", border: "1px solid rgba(60,74,66,0.1)" }}>
                  <h2 className="font-headline font-bold mb-6" style={{ fontSize: "22px", color: "#dee1f7" }}>Application Form</h2>
                  <div className="space-y-5">
                    {[
                      { label: "Full Name *", key: "name", type: "text", placeholder: "Your name" },
                      { label: "Email Address *", key: "email", type: "email", placeholder: "you@example.com" },
                      { label: "Year / Grade", key: "grade", type: "text", placeholder: "e.g. Year 11, Grade 12, 1st Year College" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="font-body text-sm block mb-1.5" style={{ color: "#bbcabf" }}>{f.label}</label>
                        <input
                          required={f.label.includes("*")}
                          type={f.type}
                          value={form[f.key]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          placeholder={f.placeholder}
                          className="w-full font-body"
                          style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(60,74,66,0.3)", borderRadius: "8px", padding: "12px 16px", color: "#dee1f7", fontSize: "14px" }}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="font-body text-sm block mb-1.5" style={{ color: "#bbcabf" }}>Why do you want to join?</label>
                      <textarea
                        rows={4}
                        value={form.why}
                        onChange={(e) => setForm({ ...form, why: e.target.value })}
                        placeholder="Tell us what interests you about finance and investing..."
                        className="w-full font-body"
                        style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(60,74,66,0.3)", borderRadius: "8px", padding: "12px 16px", color: "#dee1f7", fontSize: "14px", resize: "none" }}
                      />
                    </div>

                    {error && (
                      <p className="font-body text-sm" style={{ color: "#f87171", background: "rgba(248,113,113,0.08)", padding: "12px 16px", borderRadius: "8px", border: "1px solid rgba(248,113,113,0.2)" }}>
                        ⚠️ {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full font-headline font-bold emerald-gradient"
                      style={{ color: "#003824", padding: "16px", borderRadius: "9999px", fontSize: "18px", opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer", border: "none" }}
                    >
                      {loading ? "Submitting..." : "Submit Application →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#090e1c", borderTop: "1px solid rgba(51,65,85,0.5)", padding: "48px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto font-body text-sm">
          <div>
            <div className="font-headline font-bold text-xl mb-4" style={{ color: "#e2e8f0" }}>LearnProfit</div>
            <p style={{ color: "#64748b" }}>Finance Education & Investment Club.</p>
            <p style={{ color: "#475569", marginTop: "8px", fontSize: "12px" }}>Partners: Aryam Goyal · Maheen Syeda · Udantika Dhar · Aayushman Dhar Dixit M</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Home", "Program", "Activities", "Achievements"].map((item, i) => (
              <a key={i} href="#" style={{ color: "#64748b" }}>{item}</a>
            ))}
          </div>
          <div className="md:text-right" style={{ color: "#64748b" }}>© 2025 LearnProfit. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
