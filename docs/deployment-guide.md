# Universal Deployment Guide

This guide explains how to deploy the Tojar storefront and admin console to a variety of environments — from managed platforms like Vercel to traditional shared hosting such as cPanel.

> **Prerequisites**
> - Node.js 18 or newer
> - npm 9+
> - Environment variables listed below
>
> | Key | Description |
> | --- | --- |
> | `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
> | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key for client APIs |
> | `SUPABASE_SERVICE_ROLE_KEY` | Service role key for backend tasks |
> | `STRIPE_SECRET_KEY` | Stripe secret API key |
> | `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
> | `RESEND_API_KEY` | Resend email API key |
> | `SLACK_WEBHOOK_URL` | Optional Slack alert webhook |
> | `NEXT_PUBLIC_BASE_URL` | Public origin (https://example.com) |

## 1. Vercel (Recommended)
1. Push the repository to GitHub or GitLab.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add the environment variables from the table above.
4. Trigger a deploy — the default `npm run build` command is sufficient.

Vercel handles automatic HTTPS, CDN, and zero-downtime rollouts.

## 2. Docker / Container Platforms
1. Build the production image:
   ```bash
   docker-compose up --build
   ```
2. Or manually:
   ```bash
   docker build -t tojar:latest .
   docker run -p 3000:3000 --env-file .env.production tojar:latest
   ```
3. Point your load balancer to port `3000`.

## 3. Generic Node.js Hosting / VPS
1. Install dependencies and build:
   ```bash
   npm ci
   npm run deploy:standalone
   ```
2. Upload the `dist/standalone` directory to the server or sync it via `rsync`.
3. Install process manager (optional):
   ```bash
   npm install -g pm2
   pm2 start server.js --name tojar -- cwd /path/to/dist/standalone --update-env
   ```
4. Configure environment variables in your systemd service, `.env` file, or PM2 ecosystem file.
5. Expose port `3000` or proxy via Nginx/Apache.

## 4. cPanel & Shared Hosting
1. Build the standalone bundle locally:
   ```bash
   npm run deploy:standalone
   ```
2. Zip the contents of `dist/standalone` and upload via the cPanel File Manager or SFTP.
3. In **Application Manager → Create Application**:
   - **Application mode**: Production
   - **Node.js version**: 18+
   - **Application root**: folder that contains the uploaded bundle
   - **Application startup file**: `server.js`
   - **Application URL**: `/`
   - **Application startup command**: `node server.js`
4. Define the required environment variables in the cPanel app settings.
5. Restart the application. Logs are available under **cPanel → Application Manager → View Logs**.

### Handling Background Jobs
Use cPanel cron jobs or an external worker to invoke `/api/webhook` or Supabase edge functions if you need scheduled tasks. The production bundle is stateless and does not run background jobs by default.

## 5. Static Export (Limited)
The application relies on Supabase and dynamic routes. Full static export (`next export`) is not supported, but marketing-only sections can be prerendered by enabling ISR on a per-page basis if required.

---

Need help? Open an issue with your hosting provider’s requirements and we can extend this guide.
