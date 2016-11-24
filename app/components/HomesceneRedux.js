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


/*// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  remove: (index) => {
    return {type: types.REMOVE, payload: index}
  }
}*/

// Initial state of the store
const initialState = {
  presses: 0
}

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.

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
  console.log(state)
  return state
}