import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Containers/Main'
import Second from './Containers/Second'
import { Provider } from 'react-redux'
import configureStore from './create-store'
import DevTools from './Containers/DevTools'

const initialState = {}
const store = configureStore(initialState)

const Root = () => (
  <Provider store={store}>
    <div>
      <Main />
      <Second />
      <DevTools />
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
