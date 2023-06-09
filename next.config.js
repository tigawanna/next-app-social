/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "127.0.0.1",
      "https://tigawanna-pocketbase.fly.dev",
      "images.unsplash.com"
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig
