const path = require('path')
const PUBLIC_FOLDER_PATH = path.resolve('build')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: { main: [path.resolve('src/App/root.js')] },
  output: {
    publicPath: '',
    path: PUBLIC_FOLDER_PATH,
    filename: '[name].[hash].js',
    chunkFilename: '[name].bundle.js',
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
    new CleanWebpackPlugin([path.resolve('build/*')], {
      root: path.resolve(''),
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve('src/'),
      App: path.resolve('src/App/'),
      Api: path.resolve('src/App/Api'),
      Sagas: path.resolve('src/App/sagas'),
      Containers: path.resolve('src/App/Containers'),
      Reducers: path.resolve('src/App/reducers'),
    },
  },
}
