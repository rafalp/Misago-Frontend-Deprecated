'use strict'

const merge = require('webpack-merge');
const baseConf = require('./webpack.common')

module.exports = merge(baseConf, {
  watch: true
})