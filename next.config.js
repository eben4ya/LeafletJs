/** @type {import('next').NextConfig} */
const nextConfig = {
  // add next js rewrite
  async rewrites() {
    return [
      {
        source: "/map",
        destination: "https://maps.google.com",
      },
    ];
  },
};

module.exports = nextConfig;
