# 🛍️ Tojar — Fullstack E-commerce Platform

A complete, production-ready eCommerce app with admin panel, Stripe checkout, Supabase backend, email notifications, and testing coverage.

---

## ✅ Features

- Modern **Next.js 14 App Router**
- Full **Admin Panel** (CRUD for products, categories, orders, etc.)
- Customer-side cart, checkout, and search
- **Supabase** backend (auth, DB, storage)
- **Stripe** for payments + webhooks
- **Resend** for emails, **Slack** for admin alerts
- Fully **tested** (Vitest + Playwright)
- Mobile-first, RTL-ready, Arabic i18n support
- CI/CD via GitHub Actions
- Universal deploy: Vercel, Docker, VPS, and **cPanel**

---

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo on [vercel.com](https://vercel.com/)
3. Set the following ENV variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `RESEND_API_KEY`
   - `SLACK_WEBHOOK_URL`
   - `NEXT_PUBLIC_BASE_URL=https://tojar.ae`

### 🔌 cPanel (Node.js App)
1. Upload and extract the project
2. Run:
   ```bash
   bash install.sh
   ```
3. In cPanel:
   - Go to **Application Manager**
   - Create Node.js app at `~/nodeapp/tojar`
   - Startup file: `.output/server/index.mjs`
   - Run command: `npm run start`

### 🐳 Docker
```bash
docker-compose up --build
```

---

## 🔧 Scripts

- `npm run dev` — local dev
- `npm run build` — build app
- `npm run start` — run in prod
- `node scripts/seed.js` — seed demo data

---

## 🧪 Testing

### Vitest
```bash
npx vitest run
```

### Playwright
```bash
npx playwright install
npx playwright test
```

---

## 📂 Folder Structure

```
app/          # All pages (admin, auth, cart, etc.)
components/   # UI components
lib/          # Supabase, Stripe, Email, Slack
scripts/      # Seeder
public/       # Logo, images
```

---

## 📬 Email & Invoice

- Order emails: Resend.com
- PDF invoice: `lib/invoice.ts`
- Admin alerts: Slack webhook
- Templates: `lib/emailTemplate.ts`

---

## 🌐 i18n / Arabic Support

- `/en`, `/ar` routes supported
- Translate `public/locales/ar/common.json`
- RTL-ready layout

---

## 📦 Deployment Logos/Favicon

Tojar’s official logo is embedded:
- `/public/images/logo-green.png`

---

Built with ❤️ for Tojar.ae

