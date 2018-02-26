import TYPES from './action-type'

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

export { incCounter, decCounter }
