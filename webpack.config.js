var webpack = require('webpack');

module.exports = {
  // context: __dirname + "/app",
   entry: [
     'webpack-dev-server/client?http://0.0.0.0:8080',
     'webpack/hot/only-dev-server',
     "./app/app.js"
   ],
 
  devtool: 'source-map',
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  },
  plugins: [  
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}