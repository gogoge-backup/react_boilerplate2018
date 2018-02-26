if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rootWithOutDevTools')
} else {
  module.exports = require('./rootWithDevTools')
}
