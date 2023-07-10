/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["localhost", "encrypted-tbn3.gstatic.com","encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
