import { createStore, compose } from 'redux'
import rootReducer from './reducers/root'
import DevTools from './Containers/DevTools'

const devEnhancer = compose(
  // Middleware you want to use in development:
  // applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, devEnhancer)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers/root.js', () =>
      store.replaceReducer(require('./reducers/root.js').default)
    )
  }

  return store
}
