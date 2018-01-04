const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

const devModeEntryFiles = isDevelopment
  ? ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']
  : []

module.exports = {
  entry: [...devModeEntryFiles, __dirname + '/src/App/root.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      // source map
      filename: '[name].js.map',
      exclude: ['vendor.js'],
      module: true,
      columns: true,
      lineToLine: false,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'boilerplate',
      template: 'index.html',
    }),
  ],
}
