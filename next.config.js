/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi-test-gmw9x.ondigitalocean.app',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
