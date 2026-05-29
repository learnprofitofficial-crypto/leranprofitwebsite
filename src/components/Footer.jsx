import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/program", label: "Program" },
  { to: "/activities", label: "Activities" },
  { to: "/achievements", label: "Achievements" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hair bg-abyss py-14">
      <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-mint text-[#003824]">
              <span className="material-symbols-outlined text-[20px]">trending_up</span>
            </span>
            <span className="font-head text-lg font-extrabold text-ink">LearnProfit</span>
          </div>
          <p className="max-w-[320px] font-body text-sm leading-relaxed text-ink-faint">
            Finance Education &amp; Investment Club.
          </p>
          <p className="mt-3 max-w-[320px] font-body text-xs leading-relaxed text-ink-dim">
            Founded by Maheen Syeda · Aryam Goyal · Udantika Dhar · Aayushman Dhar Dixit M
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-body text-sm text-ink-faint transition-colors hover:text-mint"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col md:items-end">
          <a
            href="mailto:learn.profit.official@gmail.com"
            className="font-body text-sm text-ink-muted transition-colors hover:text-mint md:text-right"
          >
            learn.profit.official@gmail.com
          </a>
          <p className="mt-3 font-body text-sm text-ink-faint md:text-right">
            © 2025 LearnProfit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
