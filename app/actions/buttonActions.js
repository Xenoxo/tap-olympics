import * as types from './actionTypes';

// Helper functions to dispatch actions, optionally with payloads
export const buttonActions = {
  increment: () => {
    return {type: types.INCREMENT, payload: 5}
  },
  decrement: () => {
  	return {type: types.DECREMENT, payload: -5}
  }
}

// a set of actions specific to the button module/component. This takes an action type
// as well as any additional optional parameters and returns a function which is passed into
// a reducer