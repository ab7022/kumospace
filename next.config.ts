import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    JWT_SECRET: 'Abdul',
  },
  images: {
    domains: [
      "raw.githubusercontent.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "assets.aceternity.com",
      "ui-avatars.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
}
};

export default nextConfig;
