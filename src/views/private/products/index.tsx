import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './create'
import List from './list'


function Products() {
  return (<>
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </>
  )
}

export default Products