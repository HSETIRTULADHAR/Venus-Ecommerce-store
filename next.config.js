/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://venus-ecommerce-store-1ldc9zz6i-hsetirtuladhar.vercel.app/",
    DB_URI: "mongodb+srv://ecommerce:NePaL530351@cluster0.0mporsl.mongodb.net/?retryWrites=true&w=majority/",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
