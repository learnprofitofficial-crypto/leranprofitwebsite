import { useState } from "react";
import { Link } from "react-router-dom";

export default function Achievements() {
  const [menuOpen, setMenuOpen] = useState(false);

  const ranks = [
    { rank: "Beginner Analyst", icon: "🌱", level: 1, color: "#64748b", desc: "Your starting point. Learn the fundamentals, participate in club activities, and begin building your financial knowledge." },
    { rank: "Junior Analyst", icon: "📊", level: 2, color: "#44d8f1", desc: "Demonstrated consistent participation. You've started presenting company analyses or contributing to club discussions." },
    { rank: "Senior Analyst", icon: "📈", level: 3, color: "#4edea3", desc: "A recognized contributor. You've published research reports and made your mark in competitive events." },
    { rank: "Lead Researcher", icon: "🏆", level: 4, color: "#f59e0b", desc: "The pinnacle of LearnProfit achievement. You lead research, mentor others, and consistently drive the club forward." },
  ];

  const criteria = [
    { icon: "mic", title: "Present Company Analyses", desc: "Deliver weekly company presentations to the club" },
    { icon: "description", title: "Publish Research Reports", desc: "Contribute to the monthly investment report" },
    { icon: "emoji_events", title: "Win Competitive Events", desc: "Top the portfolio competition or stock pitch contest" },
    { icon: "chat", title: "Consistent Contributions", desc: "Actively engage in discussions and club activities" },
  ];

  const certificates = [
    { icon: "workspace_premium", title: "Course Completion Certificate", desc: "Awarded upon completing all 4 program levels — Money Fundamentals through Investment Strategies.", color: "#f59e0b" },
    { icon: "military_tech", title: "Finance Quiz Certificate", desc: "Earned by outstanding performers in the monthly Finance Quiz. Recognition of exceptional knowledge.", color: "#44d8f1" },
    { icon: "star", title: "Stock Pitch Winner Certificate", desc: "Awarded to the winner of the Stock Pitch Competition for the most compelling investment thesis.", color: "#4edea3" },
    { icon: "verified", title: "Portfolio Champion Certificate", desc: "Given to the top performer of the 3-month virtual portfolio competition based on returns and strategy.", color: "#a78bfa" },
  ];

  const partners = [
    { name: "Aryam Goyal", initials: "AG" },
    { name: "Maheen Syeda", initials: "MS" },
    { name: "Udantika Dhar", initials: "UD" },
    { name: "Aayushman Dhar Dixit M", initials: "AD" },
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
        .cert-card:hover { border-color: rgba(78,222,163,0.3) !important; transform: translateY(-2px); }
        .cert-card { transition: all 0.2s ease; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav" style={{ boxShadow: "0 8px 32px rgba(16,185,129,0.06)" }}>
        <div className="flex justify-between items-center px-8 max-w-7xl mx-auto" style={{ height: "80px" }}>
          <div className="font-headline text-2xl font-black tracking-tighter" style={{ color: "#4edea3" }}>LearnProfit</div>
          <div className="hidden md:flex items-center" style={{ gap: "40px" }}>
            <Link to="/" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Home</Link>
            <Link to="/Program" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Program</Link>
            <Link to="/Activities" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Activities</Link>
            <Link to="/Achievements" className="font-headline font-bold tracking-tight" style={{ color: "#4edea3", borderBottom: "2px solid #4edea3", paddingBottom: "4px" }}>Achievements</Link>
          </div>
          <div className="hidden md:flex items-center" style={{ gap: "24px" }}>
            <Link to="/Join" className="font-headline font-bold" style={{ color: "#cbd5e1" }}>Join Now</Link>
            <Link to="/Join">
              <button className="emerald-gradient font-headline font-bold px-6 py-2.5" style={{ color: "#003824", borderRadius: "9999px" }}>Get Started</button>
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
            <Link to="/Achievements" onClick={() => setMenuOpen(false)} style={{ color: "#4edea3" }}>Achievements</Link>
            <Link to="/Join" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Join Now</Link>
          </div>
        )}
      </nav>

      <main style={{ paddingTop: "128px", paddingBottom: "96px", flex: 1 }}>

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-8 mb-20">
          <div style={{ maxWidth: "720px" }}>
            <span className="font-headline font-extrabold uppercase text-sm tracking-widest block mb-4" style={{ color: "#f59e0b" }}>
              Achievement System
            </span>
            <h1 className="font-headline font-extrabold tracking-tight leading-tight mb-8" style={{ fontSize: "clamp(40px,7vw,72px)", lineHeight: 1.1, color: "#dee1f7" }}>
              Earn Your{" "}
              <span style={{ background: "linear-gradient(135deg,#f59e0b,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Rank.
              </span>
            </h1>
            <p className="font-body text-xl leading-relaxed" style={{ color: "#bbcabf", maxWidth: "600px" }}>
              Progress through achievement ranks, earn recognition certificates, and build a track record that proves your financial mastery.
            </p>
          </div>
        </header>

        {/* Rank Progression */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <h2 className="font-headline font-extrabold mb-12" style={{ fontSize: "32px", color: "#dee1f7" }}>Rank Progression</h2>
          <div className="space-y-4">
            {ranks.map((r, i) => (
              <div key={i} className="flex items-start gap-6" style={{ backgroundColor: "#1a1f2f", borderRadius: "12px", padding: "28px 32px", border: "1px solid rgba(60,74,66,0.1)" }}>
                <div className="flex items-center justify-center flex-shrink-0 text-2xl" style={{ width: "56px", height: "56px", borderRadius: "12px", background: `linear-gradient(135deg, ${r.color}40, ${r.color}20)`, border: `1px solid ${r.color}40` }}>
                  {r.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-headline font-bold" style={{ fontSize: "20px", color: "#dee1f7" }}>{r.rank}</h3>
                    <span className="font-headline font-bold text-xs px-2 py-0.5" style={{ color: r.color, background: `${r.color}15`, borderRadius: "9999px", border: `1px solid ${r.color}30` }}>
                      Level {r.level}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#bbcabf" }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section style={{ backgroundColor: "#090e1c", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-14">
              <span className="font-headline font-extrabold uppercase text-sm tracking-widest block mb-4" style={{ color: "#f59e0b" }}>
                Certificates
              </span>
              <h2 className="font-headline font-extrabold mb-4" style={{ fontSize: "clamp(28px,4vw,40px)", color: "#dee1f7" }}>
                Complete the Course. Earn Your Certificate.
              </h2>
              <p className="font-body text-lg mx-auto" style={{ color: "#bbcabf", maxWidth: "560px" }}>
                Upon finishing the program and winning competitive events, members receive official LearnProfit recognition certificates.
              </p>
            </div>

            {/* Featured Certificate Banner */}
            <div className="mb-8 mx-auto max-w-4xl" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(249,115,22,0.08))", borderRadius: "16px", padding: "40px 48px", border: "1px solid rgba(245,158,11,0.25)", display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "56px" }}>🎓</div>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h3 className="font-headline font-extrabold mb-2" style={{ fontSize: "24px", color: "#dee1f7" }}>
                  Course Completion Certificate
                </h3>
                <p className="font-body" style={{ color: "#bbcabf" }}>
                  Complete all 4 levels of the LearnProfit curriculum — from Money Fundamentals to Investment Strategies — and receive an official certificate recognizing your financial education.
                </p>
              </div>
              <div style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "12px", padding: "12px 20px", flexShrink: 0 }}>
                <span className="font-headline font-bold text-sm" style={{ color: "#f59e0b" }}>All 4 Levels ✓</span>
              </div>
            </div>

            {/* Other Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {certificates.slice(1).map((c, i) => (
                <div key={i} className="cert-card" style={{ backgroundColor: "#161b2b", borderRadius: "12px", padding: "28px", border: "1px solid rgba(60,74,66,0.15)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${c.color}15`, border: `1px solid ${c.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: c.color, fontSize: "22px" }}>{c.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-headline font-bold mb-2" style={{ fontSize: "16px", color: "#dee1f7" }}>{c.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#bbcabf" }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Level Up */}
        <section style={{ padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline font-extrabold mb-12 text-center" style={{ fontSize: "32px", color: "#dee1f7" }}>How to Level Up</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {criteria.map((c, i) => (
                <div key={i} className="flex items-start gap-4" style={{ backgroundColor: "#1a1f2f", borderRadius: "12px", padding: "24px", border: "1px solid rgba(60,74,66,0.1)" }}>
                  <span className="material-symbols-outlined" style={{ color: "#4edea3", fontSize: "28px", flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <h3 className="font-headline font-bold mb-1" style={{ color: "#dee1f7" }}>{c.title}</h3>
                    <p className="font-body text-sm" style={{ color: "#bbcabf" }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section style={{ backgroundColor: "#090e1c", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h2 className="font-headline font-extrabold mb-3" style={{ fontSize: "32px", color: "#dee1f7" }}>Program Partners</h2>
              <p className="font-body mb-12" style={{ color: "#bbcabf" }}>This initiative is proudly supported by our distinguished partners.</p>
              <div className="flex flex-wrap justify-center gap-4">
                {partners.map((p, i) => (
                  <div key={i} style={{ backgroundColor: "#1a1f2f", borderRadius: "12px", padding: "24px 32px", border: "1px solid rgba(60,74,66,0.1)", textAlign: "center", minWidth: "160px" }}>
                    <div className="font-headline font-bold text-sm mx-auto mb-3 flex items-center justify-center" style={{ width: "44px", height: "44px", borderRadius: "9999px", background: "linear-gradient(135deg,#4edea3,#44d8f1)", color: "#003824" }}>
                      {p.initials}
                    </div>
                    <div className="font-headline font-bold text-sm" style={{ color: "#dee1f7" }}>{p.name}</div>
                    <div className="font-body text-xs mt-1" style={{ color: "#64748b" }}>Program Partner</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#090e1c", borderTop: "1px solid rgba(51,65,85,0.5)", padding: "48px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto font-body text-sm">
          <div>
            <div className="font-headline font-bold text-xl mb-4" style={{ color: "#e2e8f0" }}>LearnProfit</div>
            <p style={{ color: "#64748b" }}>Finance Education & Investment Club.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Home", "Program", "Activities", "Achievements", "Join Us"].map((item, i) => (
              <a key={i} href="#" style={{ color: "#64748b" }}>{item}</a>
            ))}
          </div>
          <div className="md:text-right" style={{ color: "#64748b" }}>© 2025 LearnProfit. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
