import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './create'

function Products() {
  return (<>
    <Routes>
        <Route path="/create" element={<Create />} />
    </Routes>
  </>
  )
}

export default Products