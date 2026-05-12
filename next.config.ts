import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/cart", destination: "/koszyk", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
      { source: "/help", destination: "/pomoc", permanent: true },
      { source: "/shipping", destination: "/wysylka", permanent: true },
      {
        source: "/privacy-policy",
        destination: "/polityka-prywatnosci",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/koszyk", destination: "/cart" },
      { source: "/kontakt", destination: "/contact" },
      { source: "/pomoc", destination: "/help" },
      { source: "/wysylka", destination: "/shipping" },
      {
        source: "/polityka-prywatnosci",
        destination: "/privacy-policy",
      },
    ];
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "**.supabase.co", pathname: "/**" },
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/**" },
    ],
  },
};

export default nextConfig;
