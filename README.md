# LearnProfit Website

Official website for **LearnProfit** - Finance Education & Investment Club.

## Pages
- **Home** - Hero, latest updates, why it exists, tracks, benefits
- **Program** - Two tracks (Money Basics / Markets & Investing) with levels
- **Activities** - Portfolio competition, debates, quizzes
- **Achievements** - Rank system, certificates, partners
- **About** - Story, problem/solution, founders, vision
- **Contact** - Info cards + message form
- **Join** - Application form

## Architecture
- Shared `src/components/Layout.jsx` (Navbar + Footer + nested routes) wraps every page.
- Design tokens live in `tailwind.config.js`; reusable classes in `src/index.css`.

## Tech Stack
- Vite
- React
- Tailwind CSS
- React Router

## Forms / email
- Both the Join and Contact forms submit directly to **Web3Forms**
  (`https://api.web3forms.com/submit`) from the frontend — no backend needed.
- The access key lives in `src/web3forms.js`. It is public-safe by design (Web3Forms
  applies spam protection server-side). Get a free key at https://web3forms.com by
  entering the destination Gmail; messages are delivered straight to that inbox.

## Team
Built by the LearnProfit team.
