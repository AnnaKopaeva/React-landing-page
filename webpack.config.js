const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = {
	entry: PATHS.source + '/index.js',
	output: {
		path: PATHS.build,
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader?name=images/[name].[ext]'
			}, {
				test: /\.js$/,
				loaders: ['react-hot-loader', 'babel-loader'],
				include: path.join(__dirname, 'source')
			}
		]
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common'
		// }),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'source-map',
	resolve: {
	    modules: ['node_modules', 'source'],
	},
};

const developmentConfig = {
	devServer: {
		stats: 'errors-only',
		inline: true,
		port: 9000,
		hot: true,
		contentBase: './build'
	}
};

module.exports = function(env) {
	if (env === 'production'){
		return merge([
			common,
			{
				module: {
					rules: [
						{
							test: /\.sass$/,
							use: ExtractTextPlugin.extract ({
								publicPath: '../',
								fallback: 'style-loader',
								use: ['css-loader', 'sass-loader'],
							}),
						}, {
							test: /\.css$/,
							use: ExtractTextPlugin.extract ({
								fallback: 'style-loader',
								use: ['css-loader']
							}),
						}
					]
				},
				plugins: [
					new ExtractTextPlugin('./css/[name].css'),
					// new webpack.optimize.UglifyJsPlugin({
					// 	sourceMap: true,
					// 	compress: {
					// 		warnings: false
					// 	}
					// })
				]
			}
		])
	};
	if (env === 'development'){
		return merge([
			common,
			developmentConfig,
			{
				module: {
					rules: [
						{
							test: /\.sass$/,
							use: [
								'style-loader',
								'css-loader',
								'sass-loader'
							]
						}, {
							test: /\.css$/,
							use: [
								'style-loader',
								'css-loader'
							]
						}
					]
				}
			}
		])
	}
};