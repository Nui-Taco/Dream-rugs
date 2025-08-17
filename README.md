# Nui Rugs – MVP

This is a minimal, deploy-ready React + Vite + Tailwind project with i18n, a tabbed Gallery, About, Contact (with Formspree) and FAQ.

## Quick start (local)
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. In Vercel: **Add New Project** → select the repo
   - Framework: **Vite**
   - Root directory: *(project root)*
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add env var (optional): `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourid`

## Contact form
- By default uses a placeholder endpoint `https://formspree.io/f/xyzzzzzz` – replace it with your Formspree form id, or switch to formsubmit.co if preferred.
- First submission will require confirming your email.

## Notes
- Admin uploads are not included in this MVP (Vercel filesystem is ephemeral). For uploads use a storage back-end (e.g. Supabase, S3) – I’ll wire it next step.


## Branding
- Header uses `src/assets/logo.png`. Replace with your final logo as needed.
- Footer and translations use brand name **Dream rugs**.

## Admin (demo)
- Visit `/admin`, password default: `admin123` (set `VITE_ADMIN_PASSWORD` env to override).
- Uploads are stored in browser `localStorage` for demo only and appear in Gallery.
- For production, connect storage (Supabase/S3) — can be added next.

## Contact form
- Uses **formsubmit.co** posting to `ambi.sta@post.cz`. You can later switch to Formspree or your backend.
