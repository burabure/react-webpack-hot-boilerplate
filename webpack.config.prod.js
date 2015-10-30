const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry  : [
    './app/client/index.jsx'
  ],
  output: {
    path      : path.join(__dirname, 'public'),
    filename  : 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test   : /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }]
  }
};
