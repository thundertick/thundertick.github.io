var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	module: {
		loaders: [
		{
			test: /\.scss$/,
			loader:ExtractTextPlugin.extract("style","css!sass")
		}
		]
	},
	plugins: [
		new ExtractTextPlugin("./css/bundle.css")
	],
	entry: {
		bundle: "./precompiled/js/index.js"
	},
	output: {
		path: __dirname,
		filename: "./js/[name].js"
	},
};