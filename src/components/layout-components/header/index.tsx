import React from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../../../contexts/FavoritesContext'
import { CartContext } from '../../../contexts/CartContext'

function Header() {

  const { favorites } = React.useContext(FavoritesContext)
  const {cart} = React.useContext(CartContext)

  return (<>
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/products/create'>Create Product</Link></li>
        <li><Link to='/suppliers'>Suppliers</Link></li>
        <li><Link to='/suppliers/create'>Create Supplier</Link></li>
        <li><Link to='/cart/'>Cart <span style={{ color: 'red' }}>({cart.length})</span></Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/favorites'>Favorites <span style={{ color: 'red' }}>({favorites.length})</span></Link></li>
        <li><Link to='/cart/'>Cart</Link></li>

      </ul>
    </nav>

  </>
  )
}

export default Header