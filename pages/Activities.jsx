import { useState } from "react";
import { Link } from "react-router-dom";

export default function Activities() {
  const [menuOpen, setMenuOpen] = useState(false);

  const regular = [
    {
      icon: "leaderboard",
      title: "Portfolio Competition",
      tag: "3 Months · Ongoing",
      tagColor: "#4edea3",
      desc: "Participants manage virtual portfolios of ₹1,00,000 over three months. Performance tracked on a comprehensive leaderboard.",
      points: ["Best overall return on investment", "Optimal risk management practices", "Most consistent investment strategy"],
    },
    {
      icon: "business",
      title: "Company of the Week",
      tag: "Weekly",
      tagColor: "#44d8f1",
      desc: "Each week, a member presents a detailed analysis of a selected company — building real analytical and evaluation skills.",
      points: ["Business operations & industry positioning", "Revenue performance & growth trajectory", "Final investment verdict with rationale"],
    },
    {
      icon: "forum",
      title: "Stock Debate",
      tag: "Regular",
      tagColor: "#a78bfa",
      desc: "Members argue opposing investment perspectives on companies or sectors. E.g. Tesla is overvalued vs Tesla will continue strong growth.",
      points: ["Builds argumentation skills", "Develops financial reasoning", "Cultivates critical thinking"],
    },
    {
      icon: "quiz",
      title: "Finance Quiz",
      tag: "Monthly",
      tagColor: "#f59e0b",
      desc: "A monthly quiz evaluating knowledge across markets, companies, and investment principles. Top performers earn recognition certificates.",
      points: ["Tests market knowledge", "Covers companies & sectors", "Recognition certificates for top performers"],
    },
  ];

  const highImpact = [
    {
      icon: "newspaper",
      title: "Monthly Investment Report",
      desc: "Members collaboratively publish a comprehensive monthly report — market overview, three stock analyses, portfolio performance, and economic insights.",
    },
    {
      icon: "bar_chart",
      title: "Stock Pitch Competition",
      desc: "Present structured investment pitches — company overview, growth potential, risk analysis, and final recommendation. The most compelling pitch wins.",
    },
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
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav" style={{ boxShadow: "0 8px 32px rgba(16,185,129,0.06)" }}>
        <div className="flex justify-between items-center px-8 max-w-7xl mx-auto" style={{ height: "80px" }}>
          <div className="font-headline text-2xl font-black tracking-tighter" style={{ color: "#4edea3" }}>LearnProfit</div>
          <div className="hidden md:flex items-center" style={{ gap: "40px" }}>
            <Link to="/" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Home</Link>
            <Link to="/Program" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Program</Link>
            <Link to="/Activities" className="font-headline font-bold tracking-tight" style={{ color: "#4edea3", borderBottom: "2px solid #4edea3", paddingBottom: "4px" }}>Activities</Link>
            <Link to="/Achievements" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Achievements</Link>
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
            <Link to="/Activities" onClick={() => setMenuOpen(false)} style={{ color: "#4edea3" }}>Activities</Link>
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
              Practical Skill Development
            </span>
            <h1 className="font-headline font-extrabold tracking-tight leading-tight mb-8" style={{ fontSize: "clamp(40px,7vw,72px)", lineHeight: 1.1, color: "#dee1f7" }}>
              Learn by{" "}
              <span style={{ background: "linear-gradient(135deg,#4edea3,#44d8f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Doing.
              </span>
            </h1>
            <p className="font-body text-xl leading-relaxed" style={{ color: "#bbcabf", maxWidth: "600px" }}>
              Real competitions, real analysis, real debates — every activity is designed to sharpen your edge as an investor and analyst.
            </p>
          </div>
        </header>

        {/* Regular Activities */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <h2 className="font-headline font-extrabold mb-12 text-center" style={{ fontSize: "32px", color: "#dee1f7" }}>Regular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regular.map((a, i) => (
              <div key={i} style={{ borderRadius: "12px", backgroundColor: "#1a1f2f", padding: "40px", border: "1px solid rgba(60,74,66,0.1)" }}>
                <div className="flex items-start justify-between mb-6">
                  <span className="material-symbols-outlined" style={{ color: a.tagColor, fontSize: "40px" }}>{a.icon}</span>
                  <span className="font-headline font-bold text-xs px-3 py-1" style={{ color: a.tagColor, background: `${a.tagColor}15`, borderRadius: "9999px", border: `1px solid ${a.tagColor}30` }}>{a.tag}</span>
                </div>
                <h3 className="font-headline font-bold mb-3" style={{ fontSize: "22px", color: "#dee1f7" }}>{a.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "#bbcabf" }}>{a.desc}</p>
                <ul className="space-y-2">
                  {a.points.map((p, j) => (
                    <li key={j} className="font-body text-sm flex items-center gap-2" style={{ color: "#dee1f7" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#4edea3", flexShrink: 0, display: "inline-block" }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* High Impact */}
        <section style={{ backgroundColor: "#090e1c", padding: "96px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline font-extrabold mb-12 text-center" style={{ fontSize: "32px", color: "#dee1f7" }}>High-Impact Additions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {highImpact.map((h, i) => (
                <div key={i} style={{ borderRadius: "12px", background: "linear-gradient(135deg, rgba(78,222,163,0.08), transparent)", padding: "40px", border: "1px solid rgba(78,222,163,0.15)" }}>
                  <span className="material-symbols-outlined mb-6" style={{ color: "#4edea3", fontSize: "40px", display: "block" }}>{h.icon}</span>
                  <h3 className="font-headline font-bold mb-3" style={{ fontSize: "22px", color: "#dee1f7" }}>{h.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#bbcabf" }}>{h.desc}</p>
                </div>
              ))}
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
