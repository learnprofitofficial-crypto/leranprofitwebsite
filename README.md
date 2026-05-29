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
- Vercel Serverless Functions

## Backend
- `api/submitApplication.js` handles Join application submissions.
- `api/submitContact.js` handles Contact form messages.
- Optional email delivery uses Resend when `RESEND_API_KEY` is configured; both endpoints
  degrade gracefully (log only) when it is not.

## Team
Built by the LearnProfit team.
