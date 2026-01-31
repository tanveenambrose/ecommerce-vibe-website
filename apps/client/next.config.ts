import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
      },
      {
        protocol: 'https',
        hostname: 'api.escuelajs.co',
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
