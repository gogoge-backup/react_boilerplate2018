const Koa = require('koa')
const app = new Koa()

const webpackConfig = require('./configs/webpack.dev.js')
const webpack = require('webpack')
const bundle = webpack(webpackConfig)

const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware')

const PORT = 3000

const devMiddlewareConfig = {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
}

app.use(devMiddleware(bundle, devMiddlewareConfig))
app.use(
  hotMiddleware(bundle, {
    // log: console.log,
    // path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
  })
)

app.listen(PORT)
