const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: { ssr: true, displayName: true } },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@theme': path.resolve(__dirname, 'src/theme'),
    };
    return config;
  },
};

module.exports = nextConfig;
