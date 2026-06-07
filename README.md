# PitchIQ Landing Page

Marketing site for PitchIQ — AI-powered strike zone detection and pitch prediction for high school baseball teams.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                  # Next.js app router (layout, page, globals)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, Features, Team, etc.)
│   └── ui/               # Reusable UI primitives
└── lib/
    └── constants.ts      # All copy, stats, and team data
```

## Customizing Content

All placeholder copy lives in `src/lib/constants.ts`. Update team names, metrics, FAQ answers, and feature descriptions there — no need to hunt through components.

## Deploy to Vercel

1. Push this repo to GitHub:
   ```bash
   git add .
   git commit -m "Add PitchIQ landing page"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and import the repository.

3. Vercel auto-detects Next.js — click Deploy. You'll get a `*.vercel.app` URL immediately.

4. (Optional) Add a custom domain in Vercel project settings → Domains.

## Waitlist Form

The waitlist form currently shows a success message client-side. To collect real emails, wire it to:

- [Formspree](https://formspree.io/) — drop in a form action URL
- [Resend](https://resend.com/) — via a Vercel serverless function
- A Google Form — redirect on submit

## License

Private — PitchIQ team use only.
