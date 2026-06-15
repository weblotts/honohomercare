/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/honohomercare",
  assetPrefix: "/honohomercare",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
