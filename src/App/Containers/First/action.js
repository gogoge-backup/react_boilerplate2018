import TYPES from './action-type'
import { fetchPosts } from './saga'

const incCounter = (step) => {
  return {
    type: TYPES.INC,
    step,
  }
}

const decCounter = (step) => {
  return {
    type: TYPES.DEC,
    step,
  }
}

const fetchPostTask = () => {
  return {
    type: 'SAGA_FETCH',
    task: fetchPosts,
  }
}

export { incCounter, decCounter, fetchPostTask }
