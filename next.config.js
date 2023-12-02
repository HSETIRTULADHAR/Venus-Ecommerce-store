/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://127.0.0.1:3000",
    DB_URI: "mongodb+srv://ecommerce:NePaL530351@cluster0.0mporsl.mongodb.net/buyitnow?retryWrites=true&w=majority",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
