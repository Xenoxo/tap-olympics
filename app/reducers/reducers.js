import * as types from '../actions/actionTypes';

// Initial state of the store
const initialState = {
  presses: 0
}

// reducers that handles the possible actions for the state
// this reducer is specific to the homescene component, state is (can be) set
// in here, while action must be passed in...the reducer figures out 
// which type to deal with

// reducers return a NEW state and never modifies the old
// the new state is the result of applying the action
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

export const homescene2 = (state = initialState, action = {}) => {
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