import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (<>
    <nav>
        <ul>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/products/create'>Create Product</Link></li>
        </ul>
    </nav>
  
  </>
  )
}

export default Header