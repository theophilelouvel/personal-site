const colors = require('tailwindcss/colors')
const plugin = require("tailwindcss/plugin");

module.exports = {
	mode: "jit",
	purge: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx, mdx}'],
	darkMode: 'class', // 'media' or 'class'
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			bluegray: colors.blueGray,
			coolgray: colors.coolGray,
			gray: colors.gray,
			truegray: colors.trueGray,
			warmgray: colors.warmGray,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			lightblue: colors.lightBlue,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose
		},
	},
	variants: {
		extend: {
			scale: ['active', 'hover'],
		},
	},
	plugins: [
		plugin(function ({ addVariant, e, postcss }) {
			addVariant("firefox", ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: "-moz-document",
					params: "url-prefix()",
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(
						`firefox${separator}${rule.selector.slice(1)}`
					)}`;
				});
			});
		}),
	],
}
