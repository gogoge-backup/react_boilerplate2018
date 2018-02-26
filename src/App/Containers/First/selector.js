import { createSelector } from 'reselect'

const firstSelector = (state) => state.first

export const selector = createSelector(firstSelector, (first) => {
  return {
    counter: first.get('counter'),
  }
})
