'use strict';

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const merge = require('webpack-merge');
const baseConf = require('./webpack.common')

module.exports = merge(baseConf, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
})