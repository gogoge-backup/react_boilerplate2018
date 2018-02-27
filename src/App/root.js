if (process.env.NODE_ENV === 'production') {
  module.exports = require('App/root.prod')
} else {
  module.exports = require('App/root.dev')
}
