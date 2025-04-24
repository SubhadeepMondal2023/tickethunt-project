import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "resilient-boar-393.convex.cloud", protocol: "https" }, // Dev environment
      { hostname: "robust-toad-572.convex.cloud", protocol: "https" },    // Production environment
    ],
  },
};

export default nextConfig;