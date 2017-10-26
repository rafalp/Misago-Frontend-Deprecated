'use strict'

const path = require('path')

const baseDir = path.dirname(__dirname)

module.exports = {
  roots: [
    path.resolve(baseDir, 'js')
  ],
  transform: {
    '^.+\\.jsx?$': './jest.transformer'
  }
};