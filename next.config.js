module.exports = {
    images: {
        domains: ['source.unsplash.com'],
    },
    async rewrites() {
        return [
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap.xml",
            },
            {
                source: "/feed",
                destination: "/api/rss.xml",
            },
            {
                source: "/rss",
                destination: "/api/rss.xml",
            },
            {
                source: "/rss.xml",
                destination: "/api/rss.xml",
            },
        ];
    },
}
