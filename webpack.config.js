const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './index.js',

  mode: "production",

  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname)
  },

  optimization: {
    minimize: false,
    sideEffects: false
  }
}
