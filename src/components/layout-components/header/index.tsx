import React from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../../../contexts/FavoritesContext'

function Header() {

  const { favorites } = React.useContext(FavoritesContext)

  return (<>
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/products/create'>Create Product</Link></li>
        <li><Link to='/suppliers'>Suppliers</Link></li>
        <li><Link to='/suppliers/create'>Create Supplier</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/favorites'>Favorites <span style={{ color: 'red' }}>({favorites.length})</span></Link></li>
        <li><Link to='/orders/create'>Create Order</Link></li>
      </ul>
    </nav>

  </>
  )
}

export default Header