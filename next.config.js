/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    // Modern image formats are more performant
    formats: ['image/avif', 'image/webp'],
  },
  // Enable experimental features (if needed)
  experimental: {
    // Uncomment features you want to enable
    // typedRoutes: true,
    // serverActions: {
    //   bodySizeLimit: '2mb',
    // },
  },
}

module.exports = nextConfig
