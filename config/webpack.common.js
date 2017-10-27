'use strict'

const path = require('path')
const webpack = require('webpack')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin');

const baseDir = path.dirname(__dirname)
const buildDir = path.resolve(baseDir, 'dist', 'misago')

module.exports = {
  entry: path.resolve(baseDir, 'js/index.js'),
  output: {
    path: buildDir,
    filename: '[name].js',
    library: 'misago'
  },
  module : {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: require('./eslint.config')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  'targets': {
                    'browsers': ['last 2 versions', 'safari >= 9']
                  }
                }
              ],
              'flow',
              'react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract([
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(baseDir, 'config/postcss.config.js')
              }
            },
          },
          'sass-loader'
        ])
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=iconfont/[name].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      misago: path.resolve(baseDir, 'js')
    }
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        // This prevents stylesheet resources with the .css or .scss extension
        // from being moved from their original chunk to the vendor chunk
        if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
          return false;
        }
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new StyleLintPlugin({
      configFile: path.resolve(baseDir, 'config/stylelint.config.js'),
      emitErrors: false,
      syntax: 'scss',
      quiet: false
    })
  ]
}
