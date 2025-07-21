/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true, // Disables Image Optimization API (required for static export)
  },
};

export default nextConfig;
