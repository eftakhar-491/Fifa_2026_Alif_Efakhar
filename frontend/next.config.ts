import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "a-static.besthdwallpaper.com",
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
    ],
  },
  // images: {
  //   remotePatterns: [
  //     new URL("https://img.icons8.com/ios-glyphs/24/github.png"),
  //     new URL("https://img.icons8.com/color/24/google-logo.png"),

  //     new URL(
  //       "https://a-static.besthdwallpaper.com/fifa-world-cup-with-soccer-ball-on-green-field-in-stadium-wallpaper-1680x1050-95465_5.jpg"
  //     ),
  //   ],
  // },
};

export default nextConfig;
