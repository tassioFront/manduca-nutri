/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["tsx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/adds",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
