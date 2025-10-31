import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://img.icons8.com/ios-glyphs/24/github.png"),
      new URL("https://img.icons8.com/color/24/google-logo.png"),
    ],
  },
};

export default nextConfig;
