/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://twitter.com/Ulab_uu',
                permanent: false,
            },
        ];
    },
};

const withPlugins = require('next-compose-plugins');
const withExportImages = require('next-export-optimize-images');

module.exports = withPlugins([withExportImages], nextConfig);
