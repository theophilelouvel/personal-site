module.exports = {
	future: {
		webpack5: true,
	},
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
	webpack: (config, { dev, isServer }) => {
		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
		}

		return config;
	},
}
