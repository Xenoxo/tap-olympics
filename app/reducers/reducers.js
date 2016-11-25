import * as types from '../actions/actionTypes';

// Initial state of the store
const initialState = {
  presses: 0
}

// reducers that handles the possible actions for the state
export const homescene = (state = initialState, action = {}) => {
  // const {todos} = state
  const {type, payload} = action

  const {presses} = state;

  switch (type) {
    case types.INCREMENT:
      return {
        ...state,
        presses: state.presses + 1,
      }
    case types.DECREMENT:
      return {
        ...state,
        presses: state.presses - 1,
      }
  }
  return state
}