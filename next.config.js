/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "images.pexels.com",
        },
      ],
    },
  };

module.exports = nextConfig
