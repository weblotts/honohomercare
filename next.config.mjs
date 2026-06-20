/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/honohomercare" : "",
  assetPrefix: isProd ? "/honohomercare" : "",
  images: {
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;
