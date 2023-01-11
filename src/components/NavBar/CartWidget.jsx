import React from 'react'
import { Link } from 'react-router-dom'

export default function CartWidget() {
  return (
    <>
        <Link to="/carrito" className='carrito-nav'>🛒</Link>
    </>
  )
}
