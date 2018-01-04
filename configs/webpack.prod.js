const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const PUBLIC_FOLDER_PATH = path.resolve('build')

module.exports = merge(common, {
  // devtool: 'source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      // source map
      filename: '[name].js.map',
      exclude: ['vendor.js'],
      module: true,
      columns: true,
      lineToLine: false,
    }),
    new HtmlWebpackPlugin({
      path: PUBLIC_FOLDER_PATH,
      filename: 'index.html',
      inject: 'body', // auto inject the bundle files
      template: path.resolve('template.html'),
    }),
  ],
})
