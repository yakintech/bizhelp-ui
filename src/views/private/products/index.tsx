import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './create'
import List from './list'
import Detail from './detail'


function Products() {
  return (<>
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create" element={<Create />} />
      <Route path='/:id' element={<Detail />} />
    </Routes>
  </>
  )
}

export default Products