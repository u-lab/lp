/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

const withPlugins = require('next-compose-plugins');
const withExportImages = require('next-export-optimize-images');

module.exports = withPlugins([withExportImages], nextConfig);
