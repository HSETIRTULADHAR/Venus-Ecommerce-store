/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://w29qbvkj-3000.asse.devtunnels.ms/",
    DB_URI: "mongodb://atlas-sql-64b954f61dc5d758be03f009-qasyc.a.query.mongodb.net/buyitnow?ssl=true&authSource=admin",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
