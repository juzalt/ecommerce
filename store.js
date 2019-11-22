import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  lastUpdate: 0,
  light: false,
  productCart: {},
  discountPercentage: 0,
  finalPrice: 0,
  amountDiscounted: 0
}

export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  SET_DISCOUNT: 'SET_DISCOUNT',
  SET_FINAL_PRICE: 'SET_FINAL_PRICE',
  SET_AMOUNT_DISCOUNTED: 'SET_AMOUNT_DISCOUNTED'
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
    case actionTypes.SET_FINAL_PRICE:
      return Object.assign({}, state, {
        finalPrice: action.finalPrice
      })
    case actionTypes.SET_AMOUNT_DISCOUNTED:
      console.log(action)
      return Object.assign({}, state, {
        amountDiscounted: action.amountDiscounted
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

export const setFinalPrice = (finalPrice) => dispatch => {
  return dispatch({ type: actionTypes.SET_FINAL_PRICE, finalPrice })
}

export const setAmountDiscounted = (amountDiscounted) => dispatch => {
  return dispatch({ type: actionTypes.SET_AMOUNT_DISCOUNTED, amountDiscounted })
}

export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
