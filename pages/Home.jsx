import { Link } from "react-router-dom";

const accent = {
  mint: { text: "text-mint", tile: "bg-mint/10 border-mint/30" },
  sky: { text: "text-sky", tile: "bg-sky/10 border-sky/30" },
  violet: { text: "text-violet", tile: "bg-violet/10 border-violet/30" },
  amber: { text: "text-amber", tile: "bg-amber/10 border-amber/30" },
  coral: { text: "text-coral", tile: "bg-coral/10 border-coral/30" },
};

const updates = [
  {
    icon: "campaign",
    color: "mint",
    label: "Applications Open",
    date: "April 2026",
    title: "Applications are now open for the new batch!",
    body: "We are accepting new members for both the Money Basics Track (Class 6 and 7) and the Markets and Investing Track (Class 8 to 12). Spots are limited so apply early.",
    cta: { label: "Apply Now", to: "/join" },
  },
  {
    icon: "leaderboard",
    color: "sky",
    label: "Competition",
    date: "Ongoing",
    title: "Portfolio Competition is live!",
    body: "Level 4 members are now managing their virtual Rs 1,00,000 portfolios. The three month competition is underway. Follow along as our members make real investment decisions and track their performance.",
  },
  {
    icon: "event",
    color: "violet",
    label: "New Session",
    date: "Every Week",
    title: "Weekly learning sessions are running every Friday.",
    body: "All members join our weekly sessions where we cover curriculum, discuss market news, and work through activities together. New members are always welcome to attend before applying.",
    cta: { label: "Contact Us →", to: "/contact", ghost: true },
  },
  {
    icon: "military_tech",
    color: "amber",
    label: "Achievement",
    date: "Ongoing",
    title: "Members are leveling up across the program.",
    body: "As members complete levels and put in real work, they climb the rank system — from Beginner Analyst toward Lead Researcher. Progress here is earned, not handed out.",
  },
];

const problems = [
  {
    icon: "school",
    color: "coral",
    title: "No finance in school",
    body: "Most school curriculums have zero mandatory financial literacy classes. Students graduate clueless about money.",
  },
  {
    icon: "credit_card",
    color: "mint",
    title: "Debt starts young",
    body: "1 in 3 young adults carry credit card debt before age 25, not because they are irresponsible, but because nobody taught them.",
  },
  {
    icon: "trending_down",
    color: "amber",
    title: "Wealth gap widens",
    body: "Families with money teach their kids about investing. Everyone else finds out too late. That cycle has to break somewhere.",
  },
];

const pillars = [
  {
    icon: "groups",
    color: "mint",
    title: "100% Student Run",
    body: "Founded and operated by high school students. No corporate agenda. No adult gatekeeping.",
  },
  {
    icon: "school",
    color: "sky",
    title: "Structured Learning",
    body: "A 4 level program that takes you from money basics all the way to stock market investing, step by step.",
  },
  {
    icon: "emoji_events",
    color: "violet",
    title: "Real Competitions",
    body: "Virtual portfolio challenges, stock pitch debates, finance quizzes. Learning that actually sticks.",
  },
  {
    icon: "workspace_premium",
    color: "amber",
    title: "Recognized Progress",
    body: "Earn ranks as you grow. Your effort and knowledge are tracked and celebrated.",
  },
];

const tracks = [
  {
    icon: "eco",
    color: "mint",
    grade: "Class 6 and 7",
    badge: "Beginner",
    body: "We start from zero. You will learn what money actually is, how banks work, what saving means, and why some people end up in debt. Everything is explained simply with no jargon.",
    takeaway: "You will finish knowing more about money than most adults.",
  },
  {
    icon: "rocket_launch",
    color: "sky",
    grade: "Class 8 to 12",
    badge: "Intermediate to Advanced",
    body: "You will go deeper. Stock markets, company analysis, investment strategies, reading financial statements, and building your own portfolio. This is where it gets seriously useful.",
    takeaway: "You will leave with real finance knowledge most finance graduates spend years learning.",
  },
];

const benefits = [
  {
    icon: "sentiment_satisfied",
    color: "mint",
    title: "You will stop being scared of money",
    body: "Most people avoid thinking about finances because it feels complicated. We make it simple, clear, and actually interesting.",
  },
  {
    icon: "trending_up",
    color: "sky",
    title: "You will understand the stock market",
    body: "Not just what it is, but how to use it. How to research a company, make an investment case, and manage risk.",
  },
  {
    icon: "star",
    color: "violet",
    title: "You will stand out",
    body: "Financial literacy at your age is rare. It makes you a stronger applicant, a smarter adult, and a more confident thinker.",
  },
  {
    icon: "description",
    color: "amber",
    title: "You will contribute real work",
    body: "Monthly investment reports, stock pitches, debates. This goes on your profile as actual output, not just membership.",
  },
  {
    icon: "groups",
    color: "mint",
    title: "You will find your people",
    body: "A community of students who care about the same things you do. That network will matter more than you think.",
  },
  {
    icon: "bolt",
    color: "sky",
    title: "You will start early",
    body: "The best time to learn investing is before you have money to lose. We give you a safe environment to practice before it counts.",
  },
];

function Eyebrow({ color = "coral", children, className = "" }) {
  return (
    <span
      className={`font-head text-sm font-extrabold uppercase tracking-widest ${accent[color].text} ${className}`}
    >
      {children}
    </span>
  );
}

function IconTile({ icon, color, size = "h-11 w-11" }) {
  return (
    <span
      className={`flex ${size} items-center justify-center rounded-lg border ${accent[color].tile}`}
    >
      <span className={`material-symbols-outlined text-[22px] ${accent[color].text}`}>{icon}</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-mint/10 blur-[160px]" />
        <div className="container-x relative z-10 flex flex-col items-center pb-28 pt-20 text-center">
          <Eyebrow color="mint" className="mb-6">
            Open to students from Class 6 onwards
          </Eyebrow>
          <h1 className="max-w-4xl font-head text-[clamp(40px,6.5vw,68px)] font-extrabold leading-[1.08] tracking-tight text-ink">
            The finance education{" "}
            <span className="text-gradient">your school never gave you.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink-muted">
            LearnProfit is a student-driven finance ecosystem that teaches you how money actually works. Not
            theory from a textbook. Real knowledge. Real skills. From budgeting and debt to stocks and
            investing.
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-faint">
            Run entirely by high school students, for students of all ages. No prior knowledge needed.
            Just curiosity.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/join" className="btn-primary px-8 py-3.5 text-base">
              Apply to Join
            </Link>
            <Link to="/program" className="btn-ghost px-8 py-3.5 text-base">
              See the Program
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="border-t border-hair bg-abyss py-24">
        <div className="container-x">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Latest Updates</Eyebrow>
              <h2 className="mt-3 font-head text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight text-ink">
                What is happening at LearnProfit
              </h2>
            </div>
            <span className="flex items-center gap-2 font-body text-sm text-mint">
              <span className="h-2 w-2 rounded-full bg-mint" />
              Ecosystem is active
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {updates.map((u) => (
              <article
                key={u.title}
                className="flex flex-col rounded-2xl border border-hair bg-card p-7 transition-colors hover:border-mint/30"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconTile icon={u.icon} color={u.color} />
                    <span className={`font-head text-sm font-bold ${accent[u.color].text}`}>
                      {u.label}
                    </span>
                  </div>
                  <span className="font-body text-xs text-ink-faint">{u.date}</span>
                </div>
                <h3 className="mb-3 font-head text-xl font-bold text-ink">{u.title}</h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">{u.body}</p>
                {u.cta &&
                  (u.cta.ghost ? (
                    <Link
                      to={u.cta.to}
                      className="mt-5 font-head text-sm font-bold text-mint transition-colors hover:text-mint/80"
                    >
                      {u.cta.label}
                    </Link>
                  ) : (
                    <Link to={u.cta.to} className="btn-primary mt-6 px-6 py-2.5 text-center text-sm">
                      {u.cta.label}
                    </Link>
                  ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-28">
        <div className="container-x">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Eyebrow>Why this exists</Eyebrow>
            <h2 className="mt-3 font-head text-[clamp(28px,4.5vw,44px)] font-extrabold tracking-tight text-ink">
              Nobody teaches students about money. And it shows.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink-muted">
              By the time most people learn how credit cards, loans, and investing work, they have
              already made expensive mistakes. School teaches calculus but not compound interest.
              History but not how to read a payslip. LearnProfit exists to close that gap, starting
              early.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-hair bg-card p-8">
                <IconTile icon={p.icon} color={p.color} />
                <h3 className="mb-3 mt-5 font-head text-lg font-bold text-ink">{p.title}</h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are */}
      <section className="border-y border-hair bg-abyss py-28">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>What we are</Eyebrow>
            <h2 className="mt-3 font-head text-[clamp(28px,4vw,42px)] font-extrabold leading-tight tracking-tight text-ink">
              A student-driven ecosystem that actually teaches you how to think about money.
            </h2>
            <div className="mt-6 space-y-5 font-body text-base leading-relaxed text-ink-muted">
              <p>
                LearnProfit is not a class. It is not a course you watch on YouTube. It is an active
                ecosystem where students learn together, compete, debate, research, and grow.
              </p>
              <p>
                We start from the very basics, things like what is a bank account, what is debt, how
                does a credit card actually work, and we build all the way up to reading company
                financials and building an investment portfolio.
              </p>
              <p>
                Whether you are in Class 6 or Class 12, there is a place for you here. And everything
                is taught by fellow students, not adults with a script.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 rounded-2xl border border-hair bg-card p-6"
              >
                <IconTile icon={p.icon} color={p.color} />
                <div>
                  <h3 className="mb-1 font-head text-base font-bold text-ink">{p.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-28">
        <div className="container-x">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow>Who it is for</Eyebrow>
            <h2 className="mt-3 font-head text-[clamp(28px,4.5vw,44px)] font-extrabold tracking-tight text-ink">
              Built for every stage of school.
            </h2>
            <p className="mt-5 font-body text-lg text-ink-muted">
              We meet you where you are. No prior knowledge needed at any level.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {tracks.map((t) => (
              <div key={t.grade} className="rounded-2xl border border-hair bg-card p-8">
                <div className="mb-5 flex items-center gap-4">
                  <IconTile icon={t.icon} color={t.color} />
                  <div>
                    <h3 className="font-head text-xl font-bold text-ink">{t.grade}</h3>
                    <span
                      className={`font-head text-xs font-bold uppercase tracking-wide ${accent[t.color].text}`}
                    >
                      {t.badge}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed text-ink-muted">{t.body}</p>
                <div
                  className={`mt-6 rounded-xl border ${accent[t.color].tile} p-4`}
                >
                  <p className="font-head text-xs font-bold uppercase tracking-widest text-ink-faint">
                    What you walk away with
                  </p>
                  <p className="mt-1.5 font-body text-sm text-ink">{t.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-body text-sm text-ink-faint">
            Open to all students from Class 6 upwards. Age 11 and above welcome.
          </p>
        </div>
      </section>

      {/* How it helps you */}
      <section className="border-y border-hair bg-abyss py-28">
        <div className="container-x">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow>How it helps you</Eyebrow>
            <h2 className="mt-3 font-head text-[clamp(28px,4.5vw,44px)] font-extrabold tracking-tight text-ink">
              This will actually change how you think about money.
            </h2>
            <p className="mt-5 font-body text-lg text-ink-muted">
              The things you learn here will actually change how you make decisions with money, for
              the rest of your life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-hair bg-card p-7">
                <IconTile icon={b.icon} color={b.color} />
                <h3 className="mb-2 mt-5 font-head text-base font-bold text-ink">{b.title}</h3>
                <p className="font-body text-sm leading-relaxed text-ink-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28">
        <div className="container-x text-center">
          <h2 className="mx-auto max-w-2xl font-head text-[clamp(30px,5vw,52px)] font-extrabold tracking-tight text-ink">
            Ready to actually learn about money?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-ink-muted">
            Applications are open. Everyone starts at Level 1 and grows from there. No experience
            needed.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/join" className="btn-primary px-9 py-4 text-base">
              Apply Now
            </Link>
            <Link to="/about" className="btn-ghost px-9 py-4 text-base">
              Meet the Founders
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
