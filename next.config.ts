import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint for specific files or directories
    ignoreDuringBuilds: false, 
    
  },
};

export default nextConfig;