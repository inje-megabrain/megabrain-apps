/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@megabrain/core', '@megabrain/ui', '@megabrain/toolkit-notion'],
  output: 'standalone',
};

module.exports = nextConfig;
