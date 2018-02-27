import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'Reducers/root'
import createHistory from 'history/createHashHistory'
import DevTools from 'Containers/DevTools'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

export const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware() // for saga

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(historyMiddleware, sagaMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('Reducers/root.js', () =>
      store.replaceReducer(require('Reducers/root.js').default)
    )
  }
  store.sagaRun = sagaMiddleware.run
  return store
}
