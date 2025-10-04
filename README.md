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
[Detailed instructions →](docs/deployment-guide.md)

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

### 🔌 cPanel & Shared Hosting (Node.js App)
1. Deploy with build artifact:
   ```bash
   npm run deploy:standalone
   ```
   The standalone bundle is created in `dist/standalone`.
2. Upload the **contents** of `dist/standalone` to your hosting space (e.g. via File Manager or SFTP).
3. In cPanel:
   - Open **Application Manager → Create Application**
   - Set the document root to the uploaded folder
   - Runtime: Node.js 18+
   - Startup file: `server.js`
   - Application URL: `/`
   - Command: `node server.js`
4. Add environment variables inside the cPanel app (same as Vercel list above) and restart the app.
5. Ensure ports are open (default 3000) or configure a reverse proxy as required by your host.

### 🐳 Docker
```bash
docker-compose up --build
```

---

## 🔧 Scripts

- `npm run dev` — local dev
- `npm run build` — build app
- `npm test` — run unit tests (Vitest)
- `npm run test:unit` — run unit tests directly
- `npm run test:e2e` — run Playwright end-to-end suite
- `npm run package:standalone` — collect standalone output after `npm run build`
- `npm run deploy:standalone` — build + bundle for generic Node hosting
- `npm run start` — run in prod
- `node scripts/seed.js` — seed demo data

---

## 🧪 Testing

### Vitest
```bash
npm run test:unit
```

### Playwright
```bash
npx playwright install
npm run test:e2e
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

