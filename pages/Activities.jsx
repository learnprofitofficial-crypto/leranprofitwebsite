const accent = {
  mint: { text: "text-mint", tile: "bg-mint/10 border-mint/30", dot: "bg-mint" },
  sky: { text: "text-sky", tile: "bg-sky/10 border-sky/30", dot: "bg-sky" },
  violet: { text: "text-violet", tile: "bg-violet/10 border-violet/30", dot: "bg-violet" },
  amber: { text: "text-amber", tile: "bg-amber/10 border-amber/30", dot: "bg-amber" },
};

const regular = [
  {
    icon: "leaderboard",
    color: "mint",
    title: "Portfolio Competition",
    tag: "3 Months · Ongoing",
    desc: "Participants manage virtual portfolios of ₹1,00,000 over three months. Performance tracked on a comprehensive leaderboard.",
    points: [
      "Best overall return on investment",
      "Optimal risk management practices",
      "Most consistent investment strategy",
    ],
  },
  {
    icon: "business",
    color: "sky",
    title: "Company of the Week",
    tag: "Weekly",
    desc: "Each week, a member presents a detailed analysis of a selected company — building real analytical and evaluation skills.",
    points: [
      "Business operations & industry positioning",
      "Revenue performance & growth trajectory",
      "Final investment verdict with rationale",
    ],
  },
  {
    icon: "forum",
    color: "violet",
    title: "Stock Debate",
    tag: "Regular",
    desc: "Members argue opposing investment perspectives on companies or sectors. E.g. Tesla is overvalued vs Tesla will continue strong growth.",
    points: [
      "Builds argumentation skills",
      "Develops financial reasoning",
      "Cultivates critical thinking",
    ],
  },
  {
    icon: "quiz",
    color: "amber",
    title: "Finance Quiz",
    tag: "Monthly",
    desc: "A monthly quiz evaluating knowledge across markets, companies, and investment principles. Top performers earn recognition certificates.",
    points: [
      "Tests market knowledge",
      "Covers companies & sectors",
      "Recognition certificates for top performers",
    ],
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

export default function Activities() {
  return (
    <>
      {/* Hero */}
      <section className="container-x pb-16 pt-12">
        <div className="max-w-3xl">
          <span className="eyebrow">Practical Skill Development</span>
          <h1 className="mt-4 font-head text-[clamp(40px,7vw,72px)] font-extrabold leading-[1.1] tracking-tight text-ink">
            Learn by <span className="text-gradient">Doing.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-xl leading-relaxed text-ink-muted">
            Real competitions, real analysis, real debates — every activity is designed to sharpen
            your edge as an investor and analyst.
          </p>
        </div>
      </section>

      {/* Regular Activities */}
      <section className="container-x pb-24">
        <h2 className="mb-12 text-center font-head text-3xl font-extrabold text-ink">
          Regular Activities
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {regular.map((a) => (
            <div key={a.title} className="rounded-2xl border border-hair bg-card p-9">
              <div className="mb-6 flex items-start justify-between">
                <span className={`material-symbols-outlined text-[40px] ${accent[a.color].text}`}>
                  {a.icon}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 font-head text-xs font-bold ${accent[a.color].tile} ${accent[a.color].text}`}
                >
                  {a.tag}
                </span>
              </div>
              <h3 className="mb-3 font-head text-[22px] font-bold text-ink">{a.title}</h3>
              <p className="mb-5 font-body text-sm leading-relaxed text-ink-muted">{a.desc}</p>
              <ul className="space-y-2">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 font-body text-sm text-ink">
                    <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${accent[a.color].dot}`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* High Impact */}
      <section className="border-y border-hair bg-abyss py-24">
        <div className="container-x">
          <h2 className="mb-12 text-center font-head text-3xl font-extrabold text-ink">
            High-Impact Additions
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {highImpact.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-mint/15 bg-gradient-to-br from-mint/[0.08] to-transparent p-9"
              >
                <span className="material-symbols-outlined mb-6 block text-[40px] text-mint">
                  {h.icon}
                </span>
                <h3 className="mb-3 font-head text-[22px] font-bold text-ink">{h.title}</h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
