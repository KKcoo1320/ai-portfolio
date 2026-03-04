/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "ai-portfolio";
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isProd && isGithubPages ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
