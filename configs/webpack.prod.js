const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const WebpackMonitor = require('webpack-monitor')
const path = require('path')
const PUBLIC_FOLDER_PATH = path.resolve('build')
module.exports = merge(common, {
  mode: 'production',
  entry: {
    vendor: [
      'history',
      'immutable',
      'prop-types',
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-saga',
      'reselect',
    ],
  },
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
                localIdentName: 'purify_[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: PUBLIC_FOLDER_PATH,
      filename: 'index.html',
      favicon: 'assets/favicon.ico',
      inject: 'body', // auto inject the bundle files
      template: path.resolve('template.html'),
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css?[hash]-[chunkhash]-[contenthash]',
      disable: false,
      allChunks: true,
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'build/*.html')),
      purifyOptions: {
        whitelist: ['*purify*'],
      },
    }),
    new CompressionPlugin(),
    new WebpackMonitor({
      capture: true, // -> default 'true'
      target: '../reports/build-report.json', // default -> '../monitor/stats.json'
      launch: true, // -> default 'false'
      port: 3030, // default -> 8081
    }),
  ],
})
