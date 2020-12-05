module.exports = {
    async rewrites() {
        return [
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap.xml",
            },
            {
                source: "/rss.xml",
                destination: "/api/rss.xml",
            },
        ];
    },
}