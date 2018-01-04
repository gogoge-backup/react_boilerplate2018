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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader?sourceMap',
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
