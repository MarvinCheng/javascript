const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const APP_DIR = path.resolve(__dirname, "src");
module.exports = {
	context: __dirname,
	entry: APP_DIR+ '/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								strictMath: true,
							},
						},
					},
				],
			},
			{
			 	test: /\.(ttf|png|svg|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'images',
				},
	       },
		]
	},
	output: {
		path: path.resolve( __dirname, "dist" ),
		filename: 'main.less.js',
		publicPath: '/',
	},
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		open: true,
		overlay: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve( __dirname, 'public/index.html' ),
			filename: 'index.html'
		})
	]
};
