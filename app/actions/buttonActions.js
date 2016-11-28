import * as types from './actionTypes';


// in the future, the document title should be related to a component and each export is
// something to do with something in that component
export const buttonActions = {
  increment: () => {
    return {type: types.INCREMENT, payload: 5}
  },
  decrement: () => {
  	return {type: types.DECREMENT, payload: -5}
  }
}
