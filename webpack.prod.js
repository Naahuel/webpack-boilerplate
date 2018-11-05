/**
 * This is the PROD configuration for webpack
 * It will be used for production mode
 */
'use strict';
const merge  = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
      rules: [{
          test: /\.scss$/,
          use: [
              // fallback to style-loader in development
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
          ]
      }]
  }
});