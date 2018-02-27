import TYPES from './action-type'
import { fromJS } from 'immutable'
const initialState = fromJS({
  counter: 0,
})

function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.INC: {
      return state.set('counter', state.get('counter') + action.step)
    }
    case TYPES.DEC: {
      return state.set('counter', state.get('counter') - action.step)
    }
    case 'FETCH_POSTS_SUCCESS':
      console.warn(action.result)
      return state
    default:
      return state
  }
}

export default reducer
