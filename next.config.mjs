/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5224/api/:path*',
      },
    ];
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};

module.exports = nextConfig;