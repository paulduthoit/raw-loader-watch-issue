const path = require('path');

const presets = [
	[
		'@babel/preset-env',
		{
			'targets': {
				'node': 'current'
			}
		}
	],
	'@babel/preset-react'
];

const plugins = [
	[
		'babel-plugin-inline-import',
		{
			'extensions': [ '.md' ]
		}
	]
];

module.exports = { presets, plugins };