var path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV||'development';

module.exports={
  entry: './client/main.js',
	output: {
		path: path.resolve(__dirname, 'public', 'build'),
    publicPath: '/build',
    filename: 'bundle.js'
	},
	module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
            use: {
            	loader: "babel-loader",
            	options: {
              presets: [["es2015", { "modules": false }],"react","stage-0"],
        		  plugins: ['transform-decorators-legacy' ]
            }
          }
          
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        use: [
          {
              loader: 'file-loader'
          }
        ]
      }
    ]
  }
};