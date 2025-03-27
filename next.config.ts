// This file is deprecated. Please use next.config.js instead.
// All configurations have been merged into next.config.js

import type { NextConfig } from 'next'
import dotenv from 'dotenv'

dotenv.config()

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.vmpowerdecks.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'vmpowerdecks.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'vmpowerdecks.com',
        port: '',
        pathname: '**',
      },
    ],
    // Disable Next.js image optimization to fix image loading issues
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  productionBrowserSourceMaps: true,

  // Add redirects to handle common scenarios
  async redirects() {
    return [
      // Redirect from non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'vmpowerdecks.com',
          },
        ],
        destination: 'https://www.vmpowerdecks.com/:path*',
        permanent: true,
      },
      // Redirect index.html to root
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // Redirect index.php to root
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      // Redirect HTTP to HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.vmpowerdecks.com/:path*',
        permanent: true,
      },
      // Handle trailing slashes consistently
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
