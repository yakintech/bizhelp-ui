import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Request from './request'
import Dashboard from './dashboard'
import Suppliers from './suppliers'
import Products from './products'
import Header from '../../components/layout-components/header'
import Footer from '../../components/layout-components/footer'

function PrivateLayout() {
  return (<>
    <Header />

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/request/*" element={<Request />} />
      <Route path='/suppliers/*' element={<Suppliers />} />
      <Route path='/products/*' element={<Products />} />
      {/* <Route path="/education/*" element={<></>} /> */}
    </Routes>

    <Footer />

  </>
  )
}

export default PrivateLayout