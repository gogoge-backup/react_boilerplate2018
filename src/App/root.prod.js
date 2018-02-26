import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './create-store'

import Main from './Containers/Main'

const initialState = {}
const store = configureStore(initialState)

const Root = () => (
  <Provider store={store}>
    <div>
      <Main />
    </div>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

if (module.hot) {
  // Enable Webpack hot module replacement
  module.hot.accept(Root, () => {
    ReactDOM.render(<Root />, document.getElementById('root'))
  })
}
