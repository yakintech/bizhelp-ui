
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Detail from './detail'
import AlternativeList from './list/AlternativeList'

function Categories() {
  return (<>
  <Routes>
    <Route path="/" element={<List />} />
    <Route path="/alternative-list" element={<AlternativeList />} />
    <Route path="/:id" element={<Detail />} />
  </Routes>
  </>
  )
}

export default Categories