import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from 'App/create-store'

import Main from 'Containers/Main'

import sagas from 'Sagas/fetch'

const initialState = {}

const render = (store) => {
  // saga start listen
  store.sagaRun(sagas)
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
