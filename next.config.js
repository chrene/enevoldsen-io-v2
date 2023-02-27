/** @type {import('next').NextConfig} */

const withOptimizedImages = require('next-optimized-images')

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      }
    ]
  },
}

module.exports = withOptimizedImages(nextConfig);
