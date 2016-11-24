// The types of actions that you can dispatch to modify the state of the store
export const types = {
  INCREMENT: 'INCREMENT'
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  increment: () => {
    return {type: types.INCREMENT, payload: 5}
  }
}

// Initial state of the store
const initialState = {
  presses: 0
}

// reducers that handles the possible actions for the state
export const reducer = (state = initialState, action = {}) => {
  // const {todos} = state
  const {type, payload} = action

  const {presses} = state;

  switch (type) {
    case types.INCREMENT:
      return {
        ...state,
        presses: 1,
      }
    case types.DECREMENT:
      return {
        ...state,
        presses: -1,
      }    
  }
  return state
}