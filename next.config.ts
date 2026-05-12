import type { NextConfig } from "next";

function normalizeBasePath(raw: string | undefined): string | undefined {
  if (!raw || raw === "/") return undefined;
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  const trimmed = withSlash.replace(/\/+$/, "");
  return trimmed === "" ? undefined : trimmed;
}

const exportBasePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH,
);

const nextConfig: NextConfig = {
  output: "export",
  ...(exportBasePath ? { basePath: exportBasePath } : {}),
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
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "**.supabase.co", pathname: "/**" },
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/**" },
    ],
  },
};

export default nextConfig;
