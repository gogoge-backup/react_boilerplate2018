import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'Reducers/root'
import createHistory from 'history/createHashHistory'
import DevTools from 'Containers/DevTools'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory()
const middleware = routerMiddleware(history)

const devEnhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(middleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, devEnhancer)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('Reducers/root.js', () =>
      store.replaceReducer(require('Reducers/root.js').default)
    )
  }

  return store
}
