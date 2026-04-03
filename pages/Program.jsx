import { useState } from "react";
import { Link } from "react-router-dom";

export default function Program() {
  const [menuOpen, setMenuOpen] = useState(false);

  const levels = [
    {
      title: "Level 1",
      subtitle: "Money Fundamentals",
      icon: "school",
      color: "#4edea3",
      topics: ["Beneficial vs detrimental debt", "Credit cards & loan mechanics", "Introduction to personal finance"],
      prereq: "Open to all",
    },
    {
      title: "Level 2",
      subtitle: "Stock Market Fundamentals",
      icon: "trending_up",
      color: "#44d8f1",
      topics: ["Equity shares & ownership", "Stock market operations", "Long-term investing vs trading"],
      prereq: "Level 1 Complete",
      highlight: true,
    },
    {
      title: "Level 3",
      subtitle: "Understanding Companies",
      icon: "analytics",
      color: "#4edea3",
      topics: ["Financial statement analysis", "Revenue & profitability metrics", "Corporate success factors"],
      prereq: "Level 2 Complete",
    },
    {
      title: "Level 4",
      subtitle: "Investment Strategies",
      icon: "workspace_premium",
      color: "#4edea3",
      topics: ["Risk vs return analysis", "Portfolio diversification", "Long-term investment mindset"],
      prereq: "Level 3 + Live Simulation",
    },
  ];

  const steps = [
    { num: "01", title: "Enlistment", desc: "Submit your profile and join the LearnProfit network. Start at Level 1 — Money Fundamentals." },
    { num: "02", title: "Active Learning", desc: "Engage with structured modules, real market data, and weekly club activities." },
    { num: "03", title: "Verification", desc: "Pass milestone assessments and prove your strategy in the portfolio competition." },
    { num: "04", title: "Rank Up", desc: "Earn your analyst rank — from Beginner Analyst all the way to Lead Researcher." },
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
        .ghost-border { border: 1px solid rgba(60,74,66,0.15); }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav" style={{ boxShadow: "0 8px 32px rgba(16,185,129,0.06)" }}>
        <div className="flex justify-between items-center px-8 max-w-7xl mx-auto" style={{ height: "80px" }}>
          <div className="font-headline text-2xl font-black tracking-tighter" style={{ color: "#4edea3" }}>LearnProfit</div>
          <div className="hidden md:flex items-center" style={{ gap: "40px" }}>
            <Link to="/" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Home</Link>
            <Link to="/Program" className="font-headline font-bold tracking-tight" style={{ color: "#4edea3", borderBottom: "2px solid #4edea3", paddingBottom: "4px" }}>Program</Link>
            <Link to="/Activities" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Activities</Link>
            <Link to="/Achievements" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Achievements</Link>
          </div>
          <div className="hidden md:flex items-center" style={{ gap: "24px" }}>
            <Link to="/Join" className="font-headline font-bold" style={{ color: "#cbd5e1" }}>Join Now</Link>
            <Link to="/Join">
              <button className="emerald-gradient font-headline font-bold px-6 py-2.5" style={{ color: "#003824", borderRadius: "9999px", boxShadow: "0 8px 20px rgba(78,222,163,0.2)" }}>
                Get Started
              </button>
            </Link>
          </div>
          <button className="md:hidden" style={{ color: "#cbd5e1" }} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-8 py-4 flex flex-col gap-4 font-headline font-bold" style={{ background: "#0d1326", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Home</Link>
            <Link to="/Program" onClick={() => setMenuOpen(false)} style={{ color: "#4edea3" }}>Program</Link>
            <Link to="/Activities" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Activities</Link>
            <Link to="/Achievements" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Achievements</Link>
            <Link to="/Join" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Join Now</Link>
          </div>
        )}
      </nav>

      <main style={{ paddingTop: "128px", paddingBottom: "96px", flex: 1 }}>

        {/* Hero */}
        <header className="max-w-7xl mx-auto px-8 mb-20">
          <div style={{ maxWidth: "720px" }}>
            <span className="font-headline font-extrabold uppercase text-sm tracking-widest block mb-4" style={{ color: "#4edea3" }}>
              Mastering the Ledger
            </span>
            <h1 className="font-headline font-extrabold tracking-tight leading-tight mb-8" style={{ fontSize: "clamp(40px,7vw,72px)", lineHeight: 1.1, color: "#dee1f7" }}>
              An Integrated Path to{" "}
              <span style={{ background: "linear-gradient(135deg,#4edea3,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Financial Mastery.
              </span>
            </h1>
            <p className="font-body text-xl leading-relaxed" style={{ color: "#bbcabf", maxWidth: "600px" }}>
              Our curriculum is designed to transform novices into sharp market analysts through a rigorous four-level progression system built on real financial knowledge.
            </p>
          </div>
        </header>

        {/* Program Levels */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {levels.map((l, i) => (
              <div key={i} style={{
                borderRadius: "12px",
                backgroundColor: l.highlight ? "#25293a" : "#161b2b",
                padding: "32px",
                border: l.highlight ? `2px solid ${l.color}` : "1px solid rgba(60,74,66,0.15)",
                boxShadow: l.highlight ? `0 20px 40px rgba(78,222,163,0.05)` : "none",
                display: "flex",
                flexDirection: "column",
                gap: "24px"
              }}>
                <div>
                  <span className="material-symbols-outlined mb-4" style={{ color: l.color, fontSize: "40px", display: "block" }}>{l.icon}</span>
                  <h3 className="font-headline font-extrabold mb-1" style={{ fontSize: "22px", color: "#dee1f7" }}>{l.title}</h3>
                  <p className="font-body text-sm" style={{ color: "#bbcabf" }}>{l.subtitle}</p>
                </div>
                <div>
                  <p className="font-headline font-bold uppercase tracking-widest text-xs mb-2" style={{ color: l.color }}>Curriculum</p>
                  <ul className="font-body text-sm space-y-2" style={{ color: "#dee1f7" }}>
                    {l.topics.map((t, j) => (
                      <li key={j}>• {t}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-headline font-bold uppercase tracking-widest text-xs mb-1" style={{ color: l.color }}>Prerequisite</p>
                  <p className="font-body text-sm" style={{ color: "#dee1f7" }}>{l.prereq}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section style={{ backgroundColor: "#090e1c", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="font-headline font-extrabold mb-4" style={{ fontSize: "clamp(28px,5vw,48px)", color: "#dee1f7" }}>How it Works</h2>
                <p className="font-body" style={{ color: "#bbcabf", maxWidth: "440px" }}>From enrollment to your first rank — here's your roadmap.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4" style={{ position: "relative" }}>
              {steps.map((s, i) => (
                <div key={i} style={{ padding: "32px", backgroundColor: i % 2 === 0 ? "#0e1322" : "#161b2b" }}>
                  <div className="font-headline font-bold mb-8 flex items-center justify-center" style={{
                    width: "48px", height: "48px", borderRadius: "9999px",
                    background: i === 0 ? "linear-gradient(135deg,#4edea3,#10b981)" : "transparent",
                    border: i === 0 ? "none" : "2px solid #4edea3",
                    color: i === 0 ? "#003824" : "#4edea3",
                    position: "relative", zIndex: 10,
                    boxShadow: i === 0 ? "0 8px 20px rgba(78,222,163,0.3)" : "none"
                  }}>{s.num}</div>
                  <h4 className="font-headline font-bold mb-3" style={{ fontSize: "20px", color: "#dee1f7" }}>{s.title}</h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#bbcabf" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-8" style={{ padding: "128px 32px" }}>
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", backgroundColor: "#2f3445", padding: "clamp(48px,8vw,96px)", textAlign: "center" }}>
            <div style={{ position: "relative", zIndex: 10, maxWidth: "560px", margin: "0 auto" }}>
              <h2 className="font-headline font-extrabold mb-8" style={{ fontSize: "clamp(28px,5vw,48px)", color: "#dee1f7" }}>
                Ready to evolve your financial intelligence?
              </h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/Join">
                  <button className="emerald-gradient font-headline font-bold text-lg px-10 py-4" style={{ color: "#003824", borderRadius: "9999px" }}>
                    Get Started Today
                  </button>
                </Link>
                <Link to="/Activities">
                  <button className="font-headline font-bold text-lg px-10 py-4 ghost-border" style={{ color: "#dee1f7", borderRadius: "9999px" }}>
                    Explore Activities
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#090e1c", borderTop: "1px solid rgba(51,65,85,0.5)", padding: "48px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto font-body text-sm leading-relaxed">
          <div className="space-y-4">
            <div className="font-headline font-bold text-xl" style={{ color: "#e2e8f0" }}>LearnProfit</div>
            <p style={{ color: "#64748b", maxWidth: "280px" }}>Finance Education & Investment Club — building the next generation of analysts.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Home", "Program", "Activities", "Achievements", "Join Us"].map((item, i) => (
              <a key={i} href="#" style={{ color: "#64748b", display: "block" }}>{item}</a>
            ))}
          </div>
          <div className="md:text-right space-y-4">
            <div style={{ color: "#64748b" }}>© 2025 LearnProfit. All rights reserved.</div>
            <div className="flex md:justify-end gap-6" style={{ color: "#64748b" }}>
              <span className="material-symbols-outlined cursor-pointer">language</span>
              <span className="material-symbols-outlined cursor-pointer">hub</span>
              <span className="material-symbols-outlined cursor-pointer">account_balance_wallet</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
