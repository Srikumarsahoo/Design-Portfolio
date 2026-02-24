/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress all responses
  compress: true,

  // Optimize images automatically
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF first, then WebP fallback
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // Cache images for 1 year
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  // Experimental performance flags
  experimental: {
    optimizeCss: true,         // Minify CSS
    optimizePackageImports: [  // Tree-shake heavy icon libraries
      'react-icons',
      'framer-motion',
    ],
  },

  // Security + performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // HTML pages — don't cache aggressively
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig