const path = require('path')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

const baseDir = path.dirname(__dirname)
const buildDir = path.resolve(baseDir, 'dist', 'misago')

module.exports = {
  entry: path.resolve(baseDir, 'js/index.js'),
  output: {
    path: buildDir,
    filename: 'js/index.js',
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
            presets: ['env', 'react', 'stage-2']
          }
        }
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin()
  ]
}
