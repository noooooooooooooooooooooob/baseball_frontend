/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:80/api/:path*'
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/account/signin',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
