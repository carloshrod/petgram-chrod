const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	output: {
		filename: 'app.bundle.js',
		publicPath: '/',
	},
	devServer: { historyApiFallback: true },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new WebpackPwaManifestPlugin({
			name: 'PetGram - Tu app de fotos de mascotas',
			shortName: 'PetGram 🐶',
			description:
				'Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente',
			background_color: '#fff',
			theme_color: '#b1a',
			icons: [
				{
					src: path.resolve('src/assets/icon.png'),
					sizes: [96, 128, 192, 256, 384, 512],
				},
				{
					src: path.resolve('src/assets/icon.png'),
					size: '1024x1024',
					purpose: 'maskable',
				},
			],
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			maximumFileSizeToCacheInBytes: 6000000,
			runtimeCaching: [
				{
					urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'images',
					},
				},
				{
					urlPattern: /https:\/\/petgram-jdb-api.vercel.app\/graphql/,
					handler: 'NetworkFirst',
					options: {
						cacheName: 'api',
					},
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/',
						},
					},
				],
			},
		],
	},
};
