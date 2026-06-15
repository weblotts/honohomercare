/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/honohomercare",
  assetPrefix: "/honohomercare",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;
