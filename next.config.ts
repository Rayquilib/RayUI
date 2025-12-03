import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],

  // Performance optimizations for faster development
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@tabler/icons-react",
      "recharts",
      "date-fns",
    ],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Enable persistent caching for faster rebuilds
      config.cache = {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },

  async redirects() {
    return [
      // Redirect common OG image paths that crawlers might try
      {
        source: "/og",
        destination: "/opengraph-image.png",
        permanent: true,
      },
      {
        source: "/og.png",
        destination: "/opengraph-image.png",
        permanent: true,
      },
      {
        source: "/og-image",
        destination: "/opengraph-image.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
