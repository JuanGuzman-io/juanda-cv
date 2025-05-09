/** @type {import('next').NextConfig} */
const nextConfig = {
  // Añadiendo las optimizaciones recomendadas para Next.js 14.1.0
  reactStrictMode: true,
  swcMinify: true,
  // Mejoras de rendimiento
  poweredByHeader: false,
}

module.exports = nextConfig
