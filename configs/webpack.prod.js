const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const PUBLIC_FOLDER_PATH = path.resolve('build')

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader?sourceMap',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true, // default is false
                sourceMap: true,
                importLoaders: 1,
                // alias: {
                //  'MAIN':'src/App/Containers/Main'
                // },
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: PUBLIC_FOLDER_PATH,
      filename: 'index.html',
      inject: 'body', // auto inject the bundle files
      template: path.resolve('template.html'),
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css?[hash]-[chunkhash]-[contenthash]',
      disable: false,
      allChunks: true,
    }),
  ],
})
