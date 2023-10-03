/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.weatherapi.com',
            },
        ],
    },
};

module.exports = nextConfig;
