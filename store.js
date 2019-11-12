import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  lastUpdate: 0,
  light: false,
  productCart: {},
  discountPercentage: 0
}

export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  SET_DISCOUNT: 'SET_DISCOUNT'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return Object.assign({}, state, {
        productCart: action.product
      })
    case actionTypes.SET_DISCOUNT:
      return Object.assign({}, state, {
        discountPercentage: action.discountPercentage
      })
    default:
      return state
  }
}

// ACTIONS
export const addToCart = (product) => dispatch => {
  return dispatch({ type: actionTypes.ADD_TO_CART, product })
}

export const setDiscount = (discountPercentage) => dispatch => {
  return dispatch({ type: actionTypes.SET_DISCOUNT, discountPercentage })
}

export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
