import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dos root layouts (es, en): el 404 global no puede componerse desde un layout.
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
