import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from 'App/create-store'

import Main from 'Containers/Main'

import sagaWatchers from 'Sagas'

const initialState = {}

const render = (store) => {
  // saga start listen
  store.sagaRun(sagaWatchers)
  const Root = () => (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  )
  ReactDOM.render(<Root />, document.getElementById('root'))
}
const store = configureStore(initialState)

render(store)
