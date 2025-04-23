import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "resilient-boar-393.convex.cloud", protocol: "https" },
      { hostname: "resilient-boar-393.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
