import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Request from './request'
import Dashboard from './dashboard'
import Suppliers from './suppliers'
import Products from './products'
import Header from '../../components/layout-components/header'
import Footer from '../../components/layout-components/footer'
import Orders from './orders'
import Favorites from './favorites'
import CartPage from './cart'
import Customers from './customers'
import Categories from './categories'
import GithubProfile from './github'
import Users from './users'
import Jobs from './jobs'

function PrivateLayout() {
  return (<>
    <Header />

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/request/*" element={<Request />} />
      <Route path='/suppliers/*' element={<Suppliers />} />
      <Route path='/products/*' element={<Products />} />
      <Route path='/orders/*' element={<Orders/>} />
      <Route path='/favorites/*' element={<Favorites/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/customers/*' element={<Customers/>} />
      <Route path='/categories/*' element={<Categories/>} />
      <Route path='/github' element={<GithubProfile/>} />
      <Route path='/users/*' element={<Users/>} />
      <Route path='/jobs/*' element={<Jobs/>} />
      {/* <Route path="/education/*" element={<></>} /> */}
    </Routes>

    <Footer />

  </>
  )
}

export default PrivateLayout