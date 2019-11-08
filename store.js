import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  lastUpdate: 0,
  light: false,
  productCart: {}
}

export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return Object.assign({}, state, {
        productCart: action.product
      })
    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
  return setInterval(() => {
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
  }, 1000)
}

export const addToCart = (product) => dispatch => {
  return dispatch({ type: actionTypes.ADD_TO_CART, product })
}

export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
