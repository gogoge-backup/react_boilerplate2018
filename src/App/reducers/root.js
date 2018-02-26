import { combineReducers } from 'redux'
import { reducer as main } from '../Containers/Main/'
// import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  main,
  // rotuer: routerReducer,
})

export default reducers
