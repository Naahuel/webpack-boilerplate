/**
 * This is the base configuration for webpack
 * It will be used in all enviornments
 */
'use strict';
const path                = require('path');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};