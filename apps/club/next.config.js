/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@megabrain/core', '@megabrain/ui', '@megabrain/toolkit-notion'],
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },

      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
