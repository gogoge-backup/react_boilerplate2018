import { combineReducers } from 'redux'
import { reducer as first } from 'Containers/First/'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  first,
  rotuer: routerReducer,
})

export default reducers
