import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Request from './request'
import Dashboard from './dashboard'
import Suppliers from './suppliers'

function PrivateLayout() { 
  return (<>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/request/*" element={<Request />} />
      <Route path='/suppliers/*' element={<Suppliers/>} />
      {/* <Route path="/education/*" element={<></>} /> */}
    </Routes>

  </>
  )
}

export default PrivateLayout