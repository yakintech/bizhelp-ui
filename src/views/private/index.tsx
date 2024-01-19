import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Request from './request'
import Dashboard from './dashboard'

function PrivateLayout() { 
  return (<>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/request/*" element={<Request />} />
      {/* <Route path="/education/*" element={<></>} /> */}
    </Routes>

  </>
  )
}

export default PrivateLayout