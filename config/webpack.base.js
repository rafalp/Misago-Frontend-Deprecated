const path = require('path')

const baseDir = path.dirname(__dirname)
const buildDir = path.resolve(baseDir, 'dist', 'misago')

module.exports = {
  entry: path.resolve(baseDir, 'js/index.js'),
  output: {
    path: buildDir,
    filename: 'js/misago.js'
  },
  module : {
    rules: [
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
  }
}
