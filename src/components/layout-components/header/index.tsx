import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (<>
    <nav>
        <ul style={{display:'flex', justifyContent:'space-between'}}>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/products/create'>Create Product</Link></li>
            <li><Link to='/suppliers'>Suppliers</Link></li>
            <li><Link to='/suppliers/create'>Create Supplier</Link></li>
            <li><Link to='/orders'>Orders</Link></li>
            <li><Link to='/orders/create'>Create Order</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
        </ul>
    </nav>
  
  </>
  )
}

export default Header