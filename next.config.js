/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    compiler: {
        styledComponents: {
            ssr: true,
        },
    },
    experimental: {
        images: {
            allowFutureImage: true
        },
    },
};

module.exports = nextConfig;
