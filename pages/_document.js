import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" className="light">
				<Head>
				</Head>
				<body className="bg-white dark:bg-bluegray-900">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}