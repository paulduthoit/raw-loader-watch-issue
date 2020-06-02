const path = require('path');

module.exports = {
	entry: {
		vendor: [ '@babel/polyfill', 'react' ],
		app: [ path.join(__dirname, '/src/index.js') ]
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-inline-import-loader',
					{
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/preset-env', '@babel/preset-react' ]
						}
					}
				]
			}
		]
	},
};