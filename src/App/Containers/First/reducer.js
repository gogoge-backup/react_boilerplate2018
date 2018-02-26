import TYPES from './action-type'

const initialState = {
  counter: 0,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.INC: {
      return Object.assign({}, state, {
        counter: state.counter + action.step,
      })
    }
    case TYPES.DEC: {
      return Object.assign({}, state, {
        counter: state.counter - action.step,
      })
    }
    default:
      return state
  }
}

export default reducer
