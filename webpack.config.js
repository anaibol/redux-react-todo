var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // context: __dirname + "/app",
   entry: [
     'webpack-dev-server/client?http://0.0.0.0:8080',
     'webpack/hot/only-dev-server',
     "./app/app.js"
   ],
  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: ['', '.css', '.scss', '.js', '.jsx', '.json'],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["eslint-loader"]
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      // {
			// 	test: /\.s?css$/,
			// 	loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
			// }
    ],
  },
  plugins: ([
    new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		// new ExtractTextPlugin('style.css', { allChunks: true }),
		new webpack.optimize.DedupePlugin(),
		// new HtmlWebpackPlugin()
	]).concat(process.env.ENVIRONMENT==='production' ? [] : [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			output: { comments: false },
      compress: {
        warnings: false
      }
		})
	]),
  stats: { colors: true },
	devtool: 'source-map',
	devServer: {
		port: process.env.PORT || 8080,
		contentBase: './app/',
		historyApiFallback: true,
    progress: true,
    watch: true,
    colors: true,
    hot: true,
    inline: true
	}
}
