const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const PORT = 3000
const path = require('path')
app.use(static(path.resolve('build'), {}))
app.listen(PORT)
