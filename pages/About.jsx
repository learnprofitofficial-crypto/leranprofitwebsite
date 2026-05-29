import { Link } from "react-router-dom";

const accent = {
  mint: { text: "text-mint", tile: "bg-mint/10 border-mint/30" },
  sky: { text: "text-sky", tile: "bg-sky/10 border-sky/30" },
  violet: { text: "text-violet", tile: "bg-violet/10 border-violet/30" },
  amber: { text: "text-amber", tile: "bg-amber/10 border-amber/30" },
};

const stats = [
  { val: "93%", desc: "of high school students have never learned about investing" },
  { val: "1 in 3", desc: "young adults carry credit card debt before age 25" },
  { val: "0", desc: "mandatory personal finance classes in most school curricula" },
];

const solutions = [
  {
    icon: "school",
    color: "mint",
    title: "Structured Curriculum",
    desc: "Four progressive levels — from understanding debt and credit to analysing stocks and building diversified portfolios. No fluff. No filler.",
  },
  {
    icon: "emoji_events",
    color: "violet",
    title: "Real Competition",
    desc: "A ₹1L virtual portfolio competition, stock pitch battles, and finance quizzes that simulate the pressure and discipline of real investing.",
  },
  {
    icon: "description",
    color: "sky",
    title: "Published Research",
    desc: "Every month, members co-author an investment report — market analysis, stock picks, economic commentary. Real work, real output.",
  },
];

const founders = [
  {
    initials: "MS",
    name: "Maheen Syeda",
    color: "sky",
    quote: "Finance isn't a subject — it's a superpower. And it shouldn't only belong to the people who can afford to learn it.",
  },
  {
    initials: "AG",
    name: "Aryam Goyal",
    color: "mint",
    quote: "We didn't wait to graduate or get a degree. We saw the gap and built the bridge ourselves.",
  },
  {
    initials: "UD",
    name: "Udantika Dhar",
    color: "violet",
    quote: "Every great investor started somewhere. We're building the place where that somewhere actually exists.",
  },
  {
    initials: "AD",
    name: "Aayushman Dhar Dixit M",
    color: "amber",
    quote: "Students teaching students — that's not a limitation. That's the whole point.",
  },
];

const rhythm = [
  {
    tag: "Weekly",
    color: "mint",
    title: "Company of the Week",
    desc: "One member presents a full company breakdown — operations, financials, investment verdict. Real research, peer-reviewed on the spot.",
  },
  {
    tag: "Weekly",
    color: "mint",
    title: "Stock Debate",
    desc: "Two sides, one stock. Members argue bull vs bear cases, building the argumentation instincts every analyst needs.",
  },
  {
    tag: "Monthly",
    color: "sky",
    title: "Finance Quiz",
    desc: "A competitive knowledge test covering markets, companies, and macroeconomics. Top performers get recognized.",
  },
  {
    tag: "Monthly",
    color: "sky",
    title: "Investment Report",
    desc: "A collaborative publication — market overview, stock picks, and economic insights. Published and real.",
  },
  {
    tag: "3 Months",
    color: "violet",
    title: "Portfolio Competition",
    desc: "₹1,00,000 virtual portfolio. Tracked over 90 days. Ranked on returns, risk management, and strategy consistency.",
  },
];

const values = [
  {
    icon: "bolt",
    color: "mint",
    title: "Bias Toward Action",
    desc: "We don't theorize. We build, compete, analyze, and iterate. Learning happens by doing — not by watching.",
  },
  {
    icon: "groups",
    color: "sky",
    title: "Student-Led, Always",
    desc: "No corporate agenda. No textbook fluff. Every session, report, and competition is designed by students, for students.",
  },
  {
    icon: "track_changes",
    color: "violet",
    title: "Real Stakes",
    desc: "Virtual portfolios. Live pitches. Actual debates. We simulate the real financial world because comfort zones don't compound.",
  },
  {
    icon: "psychology",
    color: "amber",
    title: "Curiosity Over Credentials",
    desc: "You don't need a finance background to join. You need a hunger to understand how money actually works.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="container-x pb-20 pt-12 text-center">
        <span className="eyebrow">Our Story</span>
        <h1 className="mx-auto mt-5 max-w-4xl font-head text-[clamp(36px,6vw,64px)] font-extrabold leading-[1.1] tracking-tight text-ink">
          Four students. No permission.{" "}
          <span className="text-gradient">A whole movement.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-muted">
          We didn't wait for a teacher to assign this. We didn't wait to graduate. We saw something
          broken and decided — right now, as students — to fix it ourselves.
        </p>
      </section>

      {/* The Problem */}
      <section className="container-x py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-head text-sm font-extrabold uppercase tracking-widest text-coral">
              The Problem
            </span>
            <h2 className="mt-3 font-head text-[clamp(28px,4vw,42px)] font-extrabold leading-tight tracking-tight text-ink">
              Most students graduate knowing nothing about money.
            </h2>
            <div className="mt-6 space-y-5 font-body text-base leading-relaxed text-ink-muted">
              <p>
                Schools teach calculus. Schools teach history. But ask a student how a stock works,
                what compound interest actually means, or how to read a balance sheet — and you'll get
                silence.
              </p>
              <p>
                Financial literacy isn't a privilege — but the way the world is set up, it might as
                well be. Wealthy families pass down investing knowledge. Everyone else figures it out
                too late, too expensively, or never.
              </p>
            </div>
          </div>
          <div className="space-y-6 rounded-2xl border border-hair bg-card p-9">
            {stats.map((s) => (
              <div key={s.val}>
                <p className="font-head text-4xl font-extrabold text-coral">{s.val}</p>
                <p className="mt-1 font-body text-sm text-ink-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="container-x py-16">
        <span className="font-head text-sm font-extrabold uppercase tracking-widest text-mint">
          Our Solution
        </span>
        <h2 className="mt-3 max-w-2xl font-head text-[clamp(28px,4vw,42px)] font-extrabold leading-tight tracking-tight text-ink">
          A student-driven ecosystem that actually teaches you how to think about money.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-hair bg-card p-8">
              <span className={`flex h-11 w-11 items-center justify-center rounded-lg border ${accent[s.color].tile}`}>
                <span className={`material-symbols-outlined text-[22px] ${accent[s.color].text}`}>
                  {s.icon}
                </span>
              </span>
              <h3 className="mb-2 mt-5 font-head text-lg font-bold text-ink">{s.title}</h3>
              <p className="font-body text-sm leading-relaxed text-ink-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student-led banner */}
      <section className="container-x py-16">
        <div className="rounded-3xl border border-mint/15 bg-gradient-to-br from-mint/[0.08] to-transparent p-[clamp(32px,6vw,72px)] text-center">
          <span className="material-symbols-outlined mb-5 text-[40px] text-mint">diversity_3</span>
          <h2 className="mx-auto max-w-3xl font-head text-[clamp(24px,3.5vw,36px)] font-extrabold leading-tight text-ink">
            This is 100% student-led. That's not a disclaimer — that's the whole point.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-ink-muted">
            No adult committee. No corporate sponsor calling the shots. Every curriculum decision,
            every competition, every report — designed, run, and executed by students who are learning
            right alongside you. We're not teaching from a podium. We're building in the trenches.
          </p>
        </div>
      </section>

      {/* The Founders */}
      <section className="border-y border-hair bg-abyss py-24">
        <div className="container-x">
          <div className="mb-12 text-center">
            <span className="font-head text-sm font-extrabold uppercase tracking-widest text-mint">
              The Founders
            </span>
            <h2 className="mt-3 font-head text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight text-ink">
              Meet the people who started this.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-ink-muted">
              Not professors. Not finance executives. Just four students who decided the gap in
              financial education was too big to ignore.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {founders.map((f) => (
              <div key={f.name} className="rounded-2xl border border-hair bg-card p-7">
                <div className="mb-4 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border font-head text-sm font-bold ${accent[f.color].tile} ${accent[f.color].text}`}>
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="font-head text-base font-bold text-ink">{f.name}</h3>
                    <span className={`font-head text-xs font-bold ${accent[f.color].text}`}>
                      High School Student
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm italic leading-relaxed text-ink-muted">
                  “{f.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we actually do */}
      <section className="container-x py-24">
        <span className="font-head text-sm font-extrabold uppercase tracking-widest text-mint">
          Execution
        </span>
        <h2 className="mt-3 font-head text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight text-ink">
          What we actually do — every single week
        </h2>
        <p className="mt-3 max-w-2xl font-body text-ink-muted">
          We don't just talk about finance. We practice it. Here's the rhythm that keeps LearnProfit
          running.
        </p>
        <div className="mt-10 space-y-4">
          {rhythm.map((r) => (
            <div
              key={r.title}
              className="flex flex-col gap-3 rounded-2xl border border-hair bg-card p-6 sm:flex-row sm:items-center"
            >
              <span
                className={`w-fit flex-shrink-0 rounded-full border px-3 py-1 font-head text-xs font-bold ${accent[r.color].tile} ${accent[r.color].text}`}
              >
                {r.tag}
              </span>
              <div>
                <h3 className="font-head text-base font-bold text-ink">{r.title}</h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-ink-muted">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision + Values */}
      <section className="border-y border-hair bg-abyss py-24">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <span className="font-head text-sm font-extrabold uppercase tracking-widest text-mint">
              Vision
            </span>
            <h2 className="mt-3 font-head text-[clamp(28px,4vw,40px)] font-extrabold leading-tight tracking-tight text-ink">
              A generation that doesn't need to be taught money by their mistakes.
            </h2>
            <div className="mt-6 space-y-5 font-body text-base leading-relaxed text-ink-muted">
              <p>
                We want every student — regardless of their background, their school, or their
                family's wealth — to walk into adulthood knowing exactly how money works and how to
                make it work for them.
              </p>
              <p>
                LearnProfit isn't just a project. It's proof that students don't need to wait for the
                system to change. We are the change — and we're just getting started.
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-6 font-head text-xl font-bold text-ink">Values &amp; Mindset</h3>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4 rounded-2xl border border-hair bg-card p-6">
                  <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border ${accent[v.color].tile}`}>
                    <span className={`material-symbols-outlined text-[22px] ${accent[v.color].text}`}>
                      {v.icon}
                    </span>
                  </span>
                  <div>
                    <h4 className="mb-1 font-head text-base font-bold text-ink">{v.title}</h4>
                    <p className="font-body text-sm leading-relaxed text-ink-muted">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-x py-28 text-center">
        <h2 className="mx-auto max-w-2xl font-head text-[clamp(30px,5vw,52px)] font-extrabold tracking-tight text-ink">
          You found us for a reason.
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg text-ink-muted">
          If something on this page made you think — “I wish I had this” — then you already know what
          to do.
        </p>
        <Link to="/join" className="btn-primary mt-10 inline-block px-10 py-4 text-base">
          Apply to Join LearnProfit →
        </Link>
      </section>
    </>
  );
}
