import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Add from './add'

function Orders() {
  return (<>
    <Routes>
        <Route path='/' element={<List/>} />
        <Route path='/add' element={<Add/>} />
    </Routes>
  
  </>
  )
}

export default Orders