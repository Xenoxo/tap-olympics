import * as types from '../actions/actionTypes';
import {
  Animated,
  Easing
} from 'react-native';
// reducers that handles the possible actions for the state
// this reducer is specific to the homescene component, state is (can be) set
// in here, while action must be passed in...the reducer figures out 
// which type to deal with

// reducers return a NEW state and never modifies the old
// the new state is the result of applying the action
const initialState = {
  presses: 0,
  progress: new Animated.Value(300),
}

// initialState for this value is going to be 300

// reducer that takes increment and adds 30

export const homescene = (state = initialState, action = {}) => {
  // const {todos} = state
  const {type, payload} = action

  const {presses} = state;

  switch (type) {
    case types.INCREMENT:
      return {
        ...state,
        presses: state.presses + payload,
      }
    case types.DECREMENT:
      return {
        ...state,
        presses: state.presses - payload,
      }
  }
  return state
}


/*export const timerRelated = (state = initialState, action = {}) => {
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
}*/