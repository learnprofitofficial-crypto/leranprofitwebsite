import { Link } from "react-router-dom";

const C = {
  mint: {
    text: "text-mint",
    tile: "bg-mint/10 border-mint/30",
    arrow: "text-mint",
    header: "border-mint/20 bg-gradient-to-br from-mint/[0.07] to-transparent",
  },
  sky: {
    text: "text-sky",
    tile: "bg-sky/10 border-sky/30",
    arrow: "text-sky",
    header: "border-sky/20 bg-gradient-to-br from-sky/[0.07] to-transparent",
  },
};

const tracks = [
  {
    color: "mint",
    icon: "directions_run",
    grade: "Class 6 and 7",
    title: "Money Basics Track",
    desc: "You have probably never been taught what money actually is, where it comes from, or how people end up rich or broke. This track starts from scratch and gives you a real foundation. Think of it as the finance class school never gave you.",
    forWho: "Ages 11 to 13",
    forNote: "No prior knowledge needed at all",
    levels: [
      {
        n: 1,
        icon: "payments",
        title: "Understanding Money",
        desc: "We start with the most basic question: what even is money? From there you will learn how banks work, what saving actually means, and why adults are always stressed about bills.",
        cover: [
          "What money is and how it is created",
          "How banks work and what they do with your money",
          "Saving vs spending and why it matters",
          "What inflation is and how it affects you",
          "Introduction to budgeting",
        ],
        takeaway: "You will understand money better than most people twice your age.",
      },
      {
        n: 2,
        icon: "credit_card",
        title: "Debt, Credit and Financial Traps",
        desc: "This is the stuff nobody warns you about. How credit cards work, what happens when you borrow money, and why so many people end up in financial trouble before they are 30.",
        cover: [
          "What debt is and when it is good vs bad",
          "How credit cards actually work",
          "Interest rates explained simply",
          "Loans, EMIs and how banks make money from you",
          "How to avoid common financial mistakes",
        ],
        takeaway: "You will know how to spot a financial trap before you fall into one.",
      },
    ],
  },
  {
    color: "sky",
    icon: "trending_up",
    grade: "Class 8 to 12",
    title: "Markets and Investing Track",
    desc: "Now we go deeper. This track is for students who are ready to understand how the stock market works, how to analyse companies, and how real investors make decisions. This is the kind of knowledge that takes most people years in the workforce to pick up.",
    forWho: "Ages 13 to 18",
    forNote: "Money Basics Track recommended first",
    levels: [
      {
        n: 1,
        icon: "show_chart",
        title: "How the Stock Market Works",
        desc: "Before you can invest, you need to understand what you are actually buying when you buy a stock. This level breaks down the stock market so it finally makes sense.",
        cover: [
          "What a stock is and what it means to own a share",
          "How the stock market works day to day",
          "Bulls, bears and what market cycles look like",
          "Long term investing vs short term trading",
          "What an index fund is and why most investors use them",
        ],
        takeaway: "You will be able to explain the stock market to anyone, including your parents.",
      },
      {
        n: 2,
        icon: "analytics",
        title: "Reading and Analysing Companies",
        desc: "This is where it gets seriously interesting. You will learn to look at a company like an investor does, not just a customer. What makes a business good or bad? How do you know if it is worth buying?",
        cover: [
          "How to read a basic income statement and balance sheet",
          "Revenue, profit and what the difference means",
          "Key financial ratios investors actually use",
          "What makes a business model strong or weak",
          "How to research a company from scratch",
        ],
        takeaway: "You will know how to form an opinion on a company with actual evidence.",
      },
      {
        n: 3,
        icon: "account_balance",
        title: "Building an Investment Strategy",
        desc: "Knowledge is useless without a strategy. Here you learn how to think like an investor, manage risk, and make decisions you can defend.",
        cover: [
          "Risk vs return and how to balance them",
          "Portfolio diversification explained properly",
          "Growth investing vs value investing",
          "How to decide when to buy and when to sell",
          "Building a personal investment thesis",
        ],
        takeaway: "You will have a real investment framework, not just a hunch.",
      },
      {
        n: 4,
        icon: "emoji_events",
        title: "Live Portfolio Competition",
        desc: "Everything comes together here. You manage a virtual portfolio of one lakh rupees over three months, make real decisions, and compete against other members. This is where theory becomes skill.",
        cover: [
          "Managing a live virtual portfolio of Rs 1,00,000",
          "Weekly portfolio reviews and adjustments",
          "Presenting your investment thesis to the community",
          "Learning from wins and losses in real time",
          "Final rank based on returns and strategy quality",
        ],
        takeaway: "You will have simulated the experience of being an actual investor.",
      },
    ],
  },
];

const steps = [
  { num: "01", title: "Apply", desc: "Fill in the short application form. Takes two minutes." },
  { num: "02", title: "Get placed", desc: "We look at your grade and place you in the right track." },
  { num: "03", title: "Start learning", desc: "Join sessions, activities and discussions with the community." },
  { num: "04", title: "Grow your rank", desc: "As you learn and contribute, your rank goes up." },
];

function LevelCard({ level, color }) {
  const c = C[color];
  return (
    <div className="rounded-2xl border border-hair bg-card p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-lg border ${c.tile}`}>
          <span className={`material-symbols-outlined text-[22px] ${c.text}`}>{level.icon}</span>
        </span>
        <div>
          <span className={`font-head text-xs font-bold uppercase tracking-widest ${c.text}`}>
            Level {level.n}
          </span>
          <h4 className="font-head text-lg font-bold text-ink">{level.title}</h4>
        </div>
      </div>
      <p className="mb-5 font-body text-sm leading-relaxed text-ink-muted">{level.desc}</p>
      <p className="mb-3 font-head text-xs font-bold uppercase tracking-widest text-ink-faint">
        What you will cover
      </p>
      <ul className="space-y-2">
        {level.cover.map((item) => (
          <li key={item} className="flex gap-2 font-body text-sm text-ink">
            <span className={`${c.arrow} flex-shrink-0`}>→</span>
            {item}
          </li>
        ))}
      </ul>
      <p className={`mt-5 font-body text-sm italic ${c.text}`}>
        You will leave knowing: {level.takeaway}
      </p>
    </div>
  );
}

export default function Program() {
  return (
    <>
      {/* Hero */}
      <section className="container-x pb-16 pt-12 text-center">
        <span className="inline-block rounded-full bg-mint/10 px-4 py-1 font-head text-sm font-bold tracking-wide text-mint">
          The LearnProfit Curriculum
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl font-head text-[clamp(40px,6.5vw,68px)] font-extrabold leading-[1.1] tracking-tight text-ink">
          What you will actually learn.
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-muted">
          Our program is split into two clear tracks based on where you are in school. Both tracks
          build real financial knowledge from the ground up, no experience needed to start.
        </p>
      </section>

      {/* Tracks */}
      {tracks.map((t) => {
        const c = C[t.color];
        return (
          <section key={t.title} className="container-x pb-8 pt-8">
            {/* Track header */}
            <div className={`mb-6 rounded-2xl border p-9 ${c.header}`}>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`material-symbols-outlined text-[28px] ${c.text}`}>{t.icon}</span>
                    <span className={`font-head text-xl font-extrabold ${c.text}`}>{t.grade}</span>
                  </div>
                  <h2 className="mb-4 font-head text-3xl font-extrabold text-ink">{t.title}</h2>
                  <p className="max-w-2xl font-body text-base leading-relaxed text-ink-muted">
                    {t.desc}
                  </p>
                </div>
                <div className="self-start rounded-xl border border-hair bg-navy/40 p-5">
                  <p className="font-head text-xs font-bold uppercase tracking-widest text-ink-faint">
                    Who this is for
                  </p>
                  <p className={`mt-1.5 font-head text-lg font-bold ${c.text}`}>{t.forWho}</p>
                  <p className="mt-1 font-body text-sm text-ink-muted">{t.forNote}</p>
                </div>
              </div>
            </div>

            {/* Levels */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {t.levels.map((lvl) => (
                <LevelCard key={lvl.title} level={lvl} color={t.color} />
              ))}
            </div>
          </section>
        );
      })}

      {/* How to get started */}
      <section className="mt-16 border-t border-hair bg-abyss py-24">
        <div className="container-x text-center">
          <h2 className="font-head text-3xl font-extrabold text-ink md:text-4xl">How to get started</h2>
          <p className="mt-3 font-body text-ink-muted">Simple. Four steps and you are in.</p>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-hair bg-card p-7 text-center">
                <p className="font-head text-3xl font-extrabold text-mint">{s.num}</p>
                <h4 className="mt-3 font-head text-lg font-bold text-ink">{s.title}</h4>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink-muted">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/join" className="btn-primary mt-12 inline-block px-10 py-4 text-base">
            Apply Now
          </Link>
        </div>
      </section>
    </>
  );
}
