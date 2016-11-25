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