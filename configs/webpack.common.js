const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [path.resolve('src/App/root.js')],
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    publicPath: '',
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
  ],
}
