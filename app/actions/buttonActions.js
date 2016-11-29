import * as types from './actionTypes';


// in the future, the document title should be related to a component and each export is
// something to do with something in that component

export const buttonActions = {
  increment: () => {
    return {type: types.INCREMENT, payload: 1}
  },
  decrement: () => {
  	return {type: types.DECREMENT, payload: 1}
  },
  set: (animatedAmount) => {
    return {type: types.SET, payload: animatedAmount}
  },
}

