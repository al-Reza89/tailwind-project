/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://ocw.mit.edu/ocw-www/"],
  },
};

module.exports = nextConfig;
