import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store'

export default (props) => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(addToCart(props.product))}>Agregar al carrito</button>
    </div>
  )
}
