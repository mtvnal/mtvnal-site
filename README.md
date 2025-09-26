# MTVNAL Site (Next.js + Tailwind)

This is a ready-to-deploy Next.js landing page for MTVNAL.

## Quick Start (no terminal needed)

1. **Download** this folder as a ZIP.
2. **Create a GitHub repo** (github.com -> New -> name it `mtvnal-site`).
3. **Upload the files** from the ZIP to the repo (drag & drop in GitHub web).
4. Open **Vercel** -> New Project -> **Import Git Repository** -> pick `mtvnal-site` -> Deploy.
5. In Vercel Project Settings -> **Domains**, connect `mtvnal.com` or `mtvnal.studio`.

## Editing Content

- Edit page content in `app/page.tsx`.
- Change colors and styles with Tailwind classes in the same file or `styles/globals.css`.
- Replace social links (`href="#"`) with your real profiles.
- Connect the newsletter forms by replacing the `onSubmit` alert with your email provider embed/script.

## Dev (optional)

If you want to run locally later:
```bash
npm install
npm run dev
```
