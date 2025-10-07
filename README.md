# Rich AF Microsite Starter (Next.js + Tailwind)

Use this to create temporary, client‑specific pages and attach them to your Squarespace site via a subdomain.

## 0) What you get
- Next.js 14 + Tailwind
- Dynamic route at `/client/[slug]` (demo at `/client/quintana-roo`)
- Optional Basic Auth (protect `/client/*`)
- `noindex` by default for client routes unless you set `NEXT_PUBLIC_INDEX_CLIENT=true`

## 1) Deploy (Vercel)
1. Push this repo to GitHub.
2. In Vercel → **New Project → Import from GitHub** → Deploy.
3. Visit `/client/quintana-roo`.

### Password-protect (optional)
Set in Vercel → Project → Settings → Environment Variables:
- `BASIC_AUTH_USER=youruser`
- `BASIC_AUTH_PASS=yourpass`
- `NEXT_PUBLIC_CLIENTS_OPEN=false` (default) to enforce auth.

## 2) Connect to Squarespace (subdomain)
1. In Vercel: **Project → Settings → Domains → Add** `trips.richaf.global` (or any subdomain).
2. In Squarespace: **Settings → Domains → Advanced DNS** add CNAME:
   - **Host/Name**: `trips`
   - **Value/Points to**: `cname.vercel-dns.com`
3. After DNS propagates, your page is live at:
   `https://trips.richaf.global/client/quintana-roo`
4. In Squarespace: **Pages → Add → Link** to that URL.

## 3) Create a new client page
- Duplicate the component (e.g., `components/RichAFQuintanaRoo.tsx`) or pass data to a generic component.
- Link it at `/client/<client-slug>` (no extra DNS work).
- When done, delete the route; page disappears.

## 4) Replit workflow
- Clone this repo into Replit.
- Edit code live, preview on the Replit URL.
- **Commit & push** to GitHub from Replit.
- Vercel auto‑deploys from GitHub.

---
© Rich AF Travel
