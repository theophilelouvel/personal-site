module.exports = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
      {
        source: "/atom",
        destination: "/api/atom",
      },
    ];
  },
}