const ranks = [
  {
    rank: "Beginner Analyst",
    icon: "🌱",
    level: 1,
    color: "#64748b",
    desc: "Your starting point. Learn the fundamentals, participate in community activities, and begin building your financial knowledge.",
  },
  {
    rank: "Junior Analyst",
    icon: "📊",
    level: 2,
    color: "#44d8f1",
    desc: "Demonstrated consistent participation. You've started presenting company analyses or contributing to community discussions.",
  },
  {
    rank: "Senior Analyst",
    icon: "📈",
    level: 3,
    color: "#4edea3",
    desc: "A recognized contributor. You've published research reports and made your mark in competitive events.",
  },
  {
    rank: "Lead Researcher",
    icon: "🏆",
    level: 4,
    color: "#f59e0b",
    desc: "The pinnacle of LearnProfit achievement. You lead research, mentor others, and consistently drive the community forward.",
  },
];

const certificates = [
  {
    icon: "military_tech",
    title: "Finance Quiz Certificate",
    desc: "Earned by outstanding performers in the monthly Finance Quiz. Recognition of exceptional knowledge.",
    text: "text-sky",
    tile: "bg-sky/10 border-sky/30",
  },
  {
    icon: "star",
    title: "Stock Pitch Winner Certificate",
    desc: "Awarded to the winner of the Stock Pitch Competition for the most compelling investment thesis.",
    text: "text-mint",
    tile: "bg-mint/10 border-mint/30",
  },
  {
    icon: "verified",
    title: "Portfolio Champion Certificate",
    desc: "Given to the top performer of the 3-month virtual portfolio competition based on returns and strategy.",
    text: "text-violet",
    tile: "bg-violet/10 border-violet/30",
  },
];

const criteria = [
  { icon: "mic", title: "Present Company Analyses", desc: "Deliver weekly company presentations to the community" },
  { icon: "description", title: "Publish Research Reports", desc: "Contribute to the monthly investment report" },
  { icon: "emoji_events", title: "Win Competitive Events", desc: "Top the portfolio competition or stock pitch contest" },
  { icon: "chat", title: "Consistent Contributions", desc: "Actively engage in discussions and community activities" },
];

const partners = [
  { name: "Aryam Goyal", initials: "AG" },
  { name: "Maheen Syeda", initials: "MS" },
  { name: "Udantika Dhar", initials: "UD" },
  { name: "Aayushman Dhar Dixit M", initials: "AD" },
];

export default function Achievements() {
  return (
    <>
      {/* Hero */}
      <section className="container-x pb-16 pt-12">
        <div className="max-w-3xl">
          <span className="font-head text-sm font-extrabold uppercase tracking-widest text-amber">
            Achievement System
          </span>
          <h1 className="mt-4 font-head text-[clamp(40px,7vw,72px)] font-extrabold leading-[1.1] tracking-tight text-ink">
            Earn Your{" "}
            <span className="bg-gradient-to-r from-amber to-[#f97316] bg-clip-text text-transparent">
              Rank.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-xl leading-relaxed text-ink-muted">
            Progress through achievement ranks, earn recognition certificates, and build a track
            record that proves your financial mastery.
          </p>
        </div>
      </section>

      {/* Rank Progression */}
      <section className="container-x pb-24">
        <h2 className="mb-12 font-head text-3xl font-extrabold text-ink">Rank Progression</h2>
        <div className="space-y-4">
          {ranks.map((r) => (
            <div
              key={r.rank}
              className="flex items-start gap-6 rounded-2xl border border-hair bg-card px-8 py-7"
            >
              <div
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${r.color}40, ${r.color}20)`,
                  border: `1px solid ${r.color}40`,
                }}
              >
                {r.icon}
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="font-head text-xl font-bold text-ink">{r.rank}</h3>
                  <span
                    className="rounded-full px-2 py-0.5 font-head text-xs font-bold"
                    style={{ color: r.color, background: `${r.color}15`, border: `1px solid ${r.color}30` }}
                  >
                    Level {r.level}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed text-ink-muted">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="border-y border-hair bg-abyss py-24">
        <div className="container-x">
          <div className="mb-14 text-center">
            <span className="font-head text-sm font-extrabold uppercase tracking-widest text-amber">
              Certificates
            </span>
            <h2 className="mt-3 font-head text-[clamp(28px,4vw,40px)] font-extrabold text-ink">
              Complete the Course. Earn Your Certificate.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-ink-muted">
              Upon finishing the program and winning competitive events, members receive official
              LearnProfit recognition certificates.
            </p>
          </div>

          {/* Featured banner */}
          <div className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center gap-8 rounded-2xl border border-amber/25 bg-gradient-to-br from-amber/[0.12] to-[#f97316]/[0.08] px-12 py-10">
            <div className="text-[56px]">🎓</div>
            <div className="min-w-[240px] flex-1">
              <h3 className="mb-2 font-head text-2xl font-extrabold text-ink">
                Course Completion Certificate
              </h3>
              <p className="font-body text-ink-muted">
                Complete all 4 levels of the LearnProfit curriculum — from Money Fundamentals to
                Investment Strategies — and receive an official certificate recognizing your financial
                education.
              </p>
            </div>
            <div className="flex-shrink-0 rounded-xl border border-amber/30 bg-amber/15 px-5 py-3">
              <span className="font-head text-sm font-bold text-amber">All 4 Levels ✓</span>
            </div>
          </div>

          {/* Other certificates */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
            {certificates.map((c) => (
              <div key={c.title} className="rounded-2xl border border-hair bg-panel p-7">
                <span className={`flex h-11 w-11 items-center justify-center rounded-lg border ${c.tile}`}>
                  <span className={`material-symbols-outlined text-[22px] ${c.text}`}>{c.icon}</span>
                </span>
                <h3 className="mb-2 mt-4 font-head text-base font-bold text-ink">{c.title}</h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Level Up */}
      <section className="container-x py-24">
        <h2 className="mb-12 text-center font-head text-3xl font-extrabold text-ink">How to Level Up</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {criteria.map((c) => (
            <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-hair bg-card p-6">
              <span className="material-symbols-outlined flex-shrink-0 text-[28px] text-mint">
                {c.icon}
              </span>
              <div>
                <h3 className="mb-1 font-head font-bold text-ink">{c.title}</h3>
                <p className="font-body text-sm text-ink-muted">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-hair bg-abyss py-24">
        <div className="container-x text-center">
          <h2 className="mb-3 font-head text-3xl font-extrabold text-ink">Program Partners</h2>
          <p className="mb-12 font-body text-ink-muted">
            This initiative is proudly supported by our distinguished partners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="min-w-[160px] rounded-2xl border border-hair bg-card px-8 py-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full gradient-mint font-head text-sm font-bold text-[#003824]">
                  {p.initials}
                </div>
                <div className="font-head text-sm font-bold text-ink">{p.name}</div>
                <div className="mt-1 font-body text-xs text-ink-faint">Program Partner</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
