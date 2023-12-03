/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://venus-ecommerce-store-jo1b.vercel.app/",
    DB_URI: "mongodb+srv://ecommerce:NePaL530351@cluster0.0mporsl.mongodb.net/buyitnow?retryWrites=true&w=majority",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
