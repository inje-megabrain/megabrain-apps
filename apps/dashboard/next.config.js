/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@megabrain/core', '@megabrain/ui'],
  output: 'standalone',
};

module.exports = nextConfig;
