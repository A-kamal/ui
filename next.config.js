/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/img/**/*',
      },
      {
        protocol: 'https',
        hostname: 'assets.cairo360.com',
        pathname: '/app/**/*',
      }
    ]
  }
}

module.exports = nextConfig
