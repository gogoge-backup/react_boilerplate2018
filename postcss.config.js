const path = require('path')
// const webpackConfig = require('./webpack.config')
module.exports = (ctx) => {
  // Below are ctx format
  // one input css have one ctx like below
  // {
  //    cwd: <current folder>,
  //    env: 'development',
  //    file:
  //      { extname: '.css',
  //        dirname: <css locate>,
  //        basename: <file name of each css files> },
  //    options: {} // reference to webpack.config.js postcss-loader
  // }
  const configs = {
    // from: path.join(__dirname, 'src'),
    plugins: {
      'postcss-import': {
        // @import will use this path as root to find the files
        // default value is postcss['from']
        // root: path.resolve('src'),

        // @import will search files in the list
        path: [path.resolve('src'), path.resolve('node_modules')],

        // @import will use webpack's resolve to find the files
        // addDependencyTo: webpackConfig,

        // DO NOT USE `root` with `addDependencyTo` altogether, the `root` key will be replaced
      },
      precss: {},
      // precss include postcss-mixins, and postcss-simple-vars
      // postcss-mixins must set before postcss-simple-vars and postcss-nested.
      'postcss-mixins': {},
      'postcss-simple-vars': {
        // variables: function () {
        // return require('./src/app/css/variables-with-js')
        // }
      },
      'postcss-nested': {},
      'postcss-cssnext': {
        // include postcss-nested
        // browsers: ['last 2 versions', '> 5%'],
      },
      // 'postcss-for': {},
    },
  }

  return configs
}
