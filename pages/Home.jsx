import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0e1322", color: "#dee1f7", fontFamily: "Inter, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; font-style: normal; }
        .font-headline { font-family: 'Manrope', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .glass-nav { background: rgba(14,19,34,0.8); backdrop-filter: blur(20px); }
        .primary-gradient-cta { background: linear-gradient(135deg, #4edea3 0%, #10b981 100%); }
        .emerald-gradient { background: linear-gradient(135deg, #4edea3 0%, #10b981 100%); }
        .ghost-border { border: 1px solid rgba(60,74,66,0.15); }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-nav" style={{ boxShadow: "0 8px 32px rgba(16,185,129,0.06)" }}>
        <div className="flex justify-between items-center px-8 max-w-7xl mx-auto" style={{ height: "80px" }}>
          <div className="font-headline text-2xl font-black tracking-tighter" style={{ color: "#4edea3" }}>LearnProfit</div>
          <div className="hidden md:flex items-center" style={{ gap: "40px" }}>
            <Link to="/" className="font-headline font-bold tracking-tight" style={{ color: "#4edea3", borderBottom: "2px solid #4edea3", paddingBottom: "4px" }}>Home</Link>
            <Link to="/Program" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Program</Link>
            <Link to="/Activities" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Activities</Link>
            <Link to="/Achievements" className="font-headline font-bold tracking-tight" style={{ color: "#cbd5e1" }}>Achievements</Link>
          </div>
          <div className="hidden md:flex items-center" style={{ gap: "24px" }}>
            <Link to="/Join" className="font-headline font-bold" style={{ color: "#cbd5e1" }}>Join Now</Link>
            <Link to="/Join">
              <button className="primary-gradient-cta font-headline font-bold px-8 py-3 tracking-tight" style={{ color: "#003824", borderRadius: "9999px", boxShadow: "0 8px 20px rgba(78,222,163,0.2)" }}>
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
            <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: "#4edea3" }}>Home</Link>
            <Link to="/Program" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Program</Link>
            <Link to="/Activities" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Activities</Link>
            <Link to="/Achievements" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Achievements</Link>
            <Link to="/Join" onClick={() => setMenuOpen(false)} style={{ color: "#cbd5e1" }}>Join Now</Link>
          </div>
        )}
      </nav>

      <main style={{ paddingTop: "80px", flex: 1 }}>

        {/* Hero */}
        <section style={{ paddingTop: "80px", paddingBottom: "128px", overflow: "hidden", position: "relative" }}>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div style={{ zIndex: 10 }}>
              <span className="font-headline font-bold inline-block text-sm tracking-widest mb-6" style={{ color: "#4edea3", background: "rgba(78,222,163,0.1)", padding: "4px 16px", borderRadius: "9999px" }}>
                THE ARCHITECTURAL ALPHA
              </span>
              <h1 className="font-headline font-extrabold tracking-tight leading-tight mb-8" style={{ fontSize: "clamp(48px,7vw,72px)", lineHeight: 1.1, color: "#dee1f7" }}>
                Learn Finance.<br />Build Wealth.<br />
                <span style={{ background: "linear-gradient(to right, #4edea3, #44d8f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Lead Markets.
                </span>
              </h1>
              <p className="font-body text-xl leading-relaxed mb-10" style={{ color: "#bbcabf", maxWidth: "480px" }}>
                A high-end finance club for the next generation. Institutional-grade education, real market simulations, and a community of future analysts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/Join">
                  <button className="primary-gradient-cta font-headline font-bold text-lg px-10 py-4" style={{ color: "#003824", borderRadius: "9999px" }}>
                    Get Started
                  </button>
                </Link>
                <Link to="/Program">
                  <button className="font-headline font-bold text-lg px-10 py-4" style={{ borderRadius: "9999px", border: "1px solid rgba(60,74,66,0.3)", color: "#dee1f7" }}>
                    View Curriculum
                  </button>
                </Link>
              </div>
            </div>
            <div style={{ position: "relative", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(78,222,163,0.1)", filter: "blur(120px)", borderRadius: "9999px", transform: "scale(0.75)" }} />
              <div style={{ position: "relative", zIndex: 10, width: "100%", borderRadius: "12px", overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.5)", border: "1px solid rgba(60,74,66,0.2)" }}>
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
                  alt="Trading interface"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px", padding: "24px", background: "rgba(14,19,34,0.8)", backdropFilter: "blur(20px)", borderRadius: "12px", border: "1px solid rgba(60,74,66,0.1)" }}>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-headline font-bold uppercase tracking-widest text-xs mb-1" style={{ color: "#64748b" }}>Portfolio Growth</p>
                      <h3 className="font-headline font-bold text-2xl" style={{ color: "#dee1f7" }}>
                        +12.4% <span className="font-normal text-sm" style={{ color: "#4edea3" }}>this month</span>
                      </h3>
                    </div>
                    <div className="flex items-end gap-1" style={{ height: "48px", width: "96px" }}>
                      {[40, 60, 100, 80].map((h, i) => (
                        <div key={i} style={{ flex: 1, height: `${h}%`, background: `rgba(78,222,163,${0.3 + i * 0.2})`, borderRadius: "2px 2px 0 0" }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "80px 0", backgroundColor: "#090e1c" }}>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "4", label: "Program Levels", color: "#4edea3" },
              { val: "₹1L", label: "Virtual Portfolio", color: "#44d8f1" },
              { val: "3mo", label: "Competition Period", color: "#4edea3" },
              { val: "∞", label: "Growth Potential", color: "#44d8f1" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "32px", borderRadius: "8px", backgroundColor: "#161b2b", borderBottom: `2px solid ${s.color}33` }}>
                <p className="font-headline font-extrabold text-4xl mb-2" style={{ color: s.color }}>{s.val}</p>
                <p className="font-headline font-bold text-sm tracking-tight" style={{ color: "#bbcabf" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Bento Grid */}
        <section style={{ padding: "128px 0" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline font-extrabold tracking-tight mb-6" style={{ fontSize: "clamp(32px,5vw,48px)", color: "#dee1f7" }}>
                Everything You Need to Master Finance
              </h2>
              <div style={{ width: "96px", height: "6px", background: "#4edea3", margin: "0 auto", borderRadius: "9999px" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ minHeight: "auto" }}>
              {/* Core Education - wide */}
              <div className="md:col-span-8 group" style={{ borderRadius: "12px", backgroundColor: "#25293a", padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden", minHeight: "280px" }}>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <span className="material-symbols-outlined mb-6" style={{ color: "#4edea3", fontSize: "40px", display: "block" }}>school</span>
                  <h3 className="font-headline font-bold mb-4" style={{ fontSize: "28px", color: "#dee1f7" }}>Core Finance Education</h3>
                  <p className="font-body text-lg leading-relaxed" style={{ color: "#bbcabf", maxWidth: "440px" }}>
                    Master everything from money fundamentals to advanced investment strategies through our structured four-level curriculum.
                  </p>
                </div>
              </div>
              {/* Portfolio Competition */}
              <div className="md:col-span-4" style={{ borderRadius: "12px", backgroundColor: "#1a1f2f", padding: "40px", border: "1px solid rgba(60,74,66,0.1)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span className="material-symbols-outlined mb-6" style={{ color: "#44d8f1", fontSize: "40px", display: "block" }}>leaderboard</span>
                <h3 className="font-headline font-bold mb-4" style={{ fontSize: "22px", color: "#dee1f7" }}>Portfolio Competition</h3>
                <p className="font-body leading-relaxed" style={{ color: "#bbcabf" }}>
                  Compete with peers using your ₹1L virtual portfolio over 3 months. Ranked by returns, risk management, and consistency.
                </p>
              </div>
              {/* Stock Pitch */}
              <div className="md:col-span-4" style={{ borderRadius: "12px", backgroundColor: "#161b2b", padding: "40px", border: "1px solid rgba(60,74,66,0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span className="material-symbols-outlined mb-6" style={{ color: "#4edea3", fontSize: "40px", display: "block" }}>forum</span>
                  <h3 className="font-headline font-bold mb-4" style={{ fontSize: "22px", color: "#dee1f7" }}>Stock Pitch & Debate</h3>
                </div>
                <p className="font-body leading-relaxed" style={{ color: "#bbcabf" }}>
                  Present investment theses and argue both sides of market debates. Build conviction and analytical sharpness.
                </p>
              </div>
              {/* Monthly Report */}
              <div className="md:col-span-8" style={{ borderRadius: "12px", background: "linear-gradient(135deg, #25293a, #2f3445)", padding: "40px", border: "1px solid rgba(60,74,66,0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline font-bold mb-4" style={{ fontSize: "28px", color: "#dee1f7" }}>Monthly Investment Report</h3>
                    <p className="font-body text-lg leading-relaxed" style={{ color: "#bbcabf", maxWidth: "380px" }}>
                      Members collaboratively publish market overviews, stock analyses, and economic insights every month.
                    </p>
                  </div>
                  <div style={{ background: "rgba(78,222,163,0.1)", padding: "16px", borderRadius: "12px" }}>
                    <span className="material-symbols-outlined" style={{ color: "#4edea3", fontSize: "32px" }}>analytics</span>
                  </div>
                </div>
                <div style={{ marginTop: "32px", background: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "16px", height: "80px", border: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "flex-end", gap: "8px" }}>
                  {[40, 60, 50, 20, 80, 65, 100].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: `rgba(78,222,163,${0.1 + i * 0.1})`, borderRadius: "2px 2px 0 0" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "128px 0", backgroundColor: "#0e1322" }}>
          <div className="max-w-5xl mx-auto px-8" style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "-96px", left: "-96px", width: "256px", height: "256px", background: "rgba(78,222,163,0.05)", filter: "blur(100px)", borderRadius: "9999px" }} />
            <div style={{ position: "absolute", bottom: "-96px", right: "-96px", width: "256px", height: "256px", background: "rgba(68,216,241,0.05)", filter: "blur(100px)", borderRadius: "9999px" }} />
            <div style={{ position: "relative", zIndex: 10, backgroundColor: "#25293a", borderRadius: "24px", padding: "clamp(48px,8vw,96px)", textAlign: "center", border: "1px solid rgba(60,74,66,0.1)", boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>
              <h2 className="font-headline font-extrabold mb-8" style={{ fontSize: "clamp(28px,5vw,48px)", color: "#dee1f7" }}>
                Ready to Start Your Journey?
              </h2>
              <p className="font-body text-xl mb-12 mx-auto" style={{ color: "#bbcabf", maxWidth: "560px" }}>
                Join LearnProfit and take your first step toward financial mastery. Start as a Beginner Analyst — rise to Lead Researcher.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link to="/Join">
                  <button className="primary-gradient-cta font-headline font-bold text-xl px-12 py-5" style={{ color: "#003824", borderRadius: "9999px" }}>
                    Claim Your ₹1L Portfolio
                  </button>
                </Link>
                <Link to="/Program">
                  <button className="font-headline font-bold text-xl px-12 py-5" style={{ borderRadius: "9999px", border: "1px solid #4edea3", color: "#4edea3" }}>
                    View Program
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#090e1c", borderTop: "1px solid rgba(51,65,85,0.5)", padding: "48px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto items-start">
          <div>
            <div className="font-headline font-bold text-xl mb-6" style={{ color: "#e2e8f0" }}>LearnProfit</div>
            <p className="font-body text-sm leading-relaxed" style={{ color: "#64748b", maxWidth: "280px" }}>
              The Finance Education & Investment Club — building the next generation of investors and analysts.
            </p>
            <p className="font-body text-xs mt-4" style={{ color: "#475569" }}>
              Partners: Aryam Goyal · Maheen Syeda · Udantika Dhar · Aayushman Dhar Dixit M
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Home", "Program", "Activities", "Achievements", "Join Us"].map((item, i) => (
              <a key={i} href="#" className="font-body text-sm" style={{ color: "#64748b" }}>{item}</a>
            ))}
          </div>
          <div className="flex flex-col md:items-end">
            <p className="font-body text-sm md:text-right" style={{ color: "#64748b" }}>© 2025 LearnProfit. All rights reserved.</p>
            <div className="flex gap-4 mt-6" style={{ opacity: 0.8 }}>
              <span className="material-symbols-outlined cursor-pointer" style={{ color: "#94a3b8" }}>language</span>
              <span className="material-symbols-outlined cursor-pointer" style={{ color: "#94a3b8" }}>share</span>
              <span className="material-symbols-outlined cursor-pointer" style={{ color: "#94a3b8" }}>hub</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
