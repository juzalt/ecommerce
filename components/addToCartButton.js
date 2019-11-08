import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store'
import Link from 'next/link';


export default (props) => {
  const dispatch = useDispatch()

  return (
    <div>
      <Link href="cart" as="carro">
        <button onClick={() => dispatch(addToCart(props.product))}>Agregar al carrito</button>
      </Link>
    </div>
  )
}
