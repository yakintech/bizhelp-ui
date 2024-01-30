import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'

function Orders() {
  return (<>
    <Routes>
        <Route path='/' element={<List/>} />
    </Routes>
  
  </>
  )
}

export default Orders