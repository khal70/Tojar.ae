/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  output: 'standalone',
  poweredByHeader: false,
}

module.exports = nextConfig
