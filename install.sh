#!/bin/bash

# Tojar Install Script for cPanel (Node.js enabled)

echo "🛠 Installing Tojar dependencies..."
npm install

echo "⚙️ Building project..."
npm run build

echo "📁 Copying files to deployment folder (~/nodeapp/tojar)..."
mkdir -p ~/nodeapp/tojar
cp -r * ~/nodeapp/tojar

echo "📦 Setting environment variables..."
cat > ~/nodeapp/tojar/.env <<EOL
# Replace with real values
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
RESEND_API_KEY=your-resend-key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx
EOL

echo "✅ Done. Now go to cPanel → Application Manager"
echo "➡️ Create a new Node.js app pointing to: ~/nodeapp/tojar"
echo "➡️ Set startup file: .output/server/index.mjs"
echo "➡️ Run command: npm run start"

echo "🚀 Tojar is ready to launch!"
