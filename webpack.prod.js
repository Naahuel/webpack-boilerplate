/**
 * This is the PROD configuration for webpack
 * It will be used for production mode
 */
'use strict';
const merge  = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});