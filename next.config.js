/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://w29qbvkj-3000.asse.devtunnels.ms/",
    DB_URI: "https://w29qbvkj-27017.asse.devtunnels.ms/buyitnow",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
