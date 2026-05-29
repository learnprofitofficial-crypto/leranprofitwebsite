import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/program", label: "Program" },
  { to: "/activities", label: "Activities" },
  { to: "/achievements", label: "Achievements" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-mint text-[#003824]">
        <span className="material-symbols-outlined text-[22px]">trending_up</span>
      </span>
      <span className="font-head text-xl font-extrabold tracking-tight text-ink">LearnProfit</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-head text-sm font-bold tracking-tight transition-colors ${
      isActive ? "text-mint" : "text-ink-muted hover:text-ink"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full glass-nav shadow-nav">
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/join" className="btn-primary px-6 py-2.5 text-sm">
            Join Now
          </Link>
        </div>

        <button
          className="text-ink lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/5 bg-[#0d1326] px-8 py-5 font-head font-bold lg:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "text-mint" : "text-ink-muted")}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/join" onClick={() => setOpen(false)} className="btn-primary mt-2 px-6 py-2.5 text-center">
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
}
