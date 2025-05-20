/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Allows use of unoptimized images
    domains: [], // Add any external domains for images here if needed
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