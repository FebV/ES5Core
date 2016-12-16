const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './index.js'
    ],
  output: {
    filename: 'bundle.js',
    path: './',
  },
  devServer: {
    hot: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}