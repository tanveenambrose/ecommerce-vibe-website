import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
      {
        protocol: 'https',
        hostname: 'makeup-api.herokuapp.com',
      },
      {
        protocol: 'https',
        hostname: 'placeimg.com',
      }
    ],
  },
};

export default nextConfig;
