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
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            // creates style nodes from JS strings
            "style-loader",
            // translates CSS into CommonJS
            "css-loader",
            // compiles Sass to CSS, using Node Sass by default
            "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            // Handles image files inserted in HTML and CSS
            loader: 'file-loader',
            options: {
              name: 'images/[name][hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            // Handles the HTML output, particularly useful for inserted assets to be processed by other loaders
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  }
};