const path = require('path');

module.exports = {
	entry: {
		vendor: [ '@babel/polyfill' ],
		app: [ path.join(__dirname, '/src/index.js') ]
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				options: {
					presets: [ '@babel/preset-env' ]
				}
			},
			{
				loader: 'raw-loader',
				test: /\.md$/i
			}
		]
	}
};