import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [60, 75, 85],
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
