'use strict';

const path = require('path')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin');

const baseDir = path.dirname(__dirname)
const buildDir = path.resolve(baseDir, 'dist', 'misago')

module.exports = {
  entry: [
    path.resolve(baseDir, 'js/index.js'),
    path.resolve(baseDir, 'scss/style.scss')
  ],
  output: {
    path: buildDir,
    filename: 'index.js',
    library: 'misago'
  },
  module : {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: require('./eslint')
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
