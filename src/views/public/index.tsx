import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/login'
import ForgotPassword from './auth/forgot-password'

function PublicLayout() {
  return (<>
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>

  </>
  )
}

export default PublicLayout