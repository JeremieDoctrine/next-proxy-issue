let nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://not-existing-host:4000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;