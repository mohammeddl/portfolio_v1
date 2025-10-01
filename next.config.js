/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: ['med.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Remove experimental features that are causing problems
  // experimental: {
  //   newNextLinkBehavior: true,
  //   scrollRestoration: true
  // },
  
  // Add API routes for placeholder images
  async rewrites() {
    return [
      {
        source: '/api/placeholder/:width/:height',
        destination: '/_next/image?url=/api/placeholder.png&w=:width&h=:height&q=75',
      },
    ];
  },
  
  // Add placeholder image API route
  async headers() {
    return [
      {
        source: '/api/placeholder.png',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/png',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig