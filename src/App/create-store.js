import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root'

const preloadedState = {}
const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware()
  // historyMiddleware,
  // sagaMiddleware,
  // thunkMiddleware,
  // loggerMiddleware
)

export default store
