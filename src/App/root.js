import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Containers/Main'
import Second from './Containers/Second'

const Root = () => (
  <div>
    <Main />
    <Second />
  </div>
)

ReactDOM.render(<Root />, document.getElementById('root'))

if (module.hot) {
  // Enable Webpack hot module replacement
  module.hot.accept(Root, () => {
    ReactDOM.render(<Root />, document.getElementById('root'))
  })
}
