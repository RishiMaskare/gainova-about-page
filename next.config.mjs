// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'undraw.co',
        pathname: '/api/**',
      },
    ],
  },
};

export default nextConfig;
