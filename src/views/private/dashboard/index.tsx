import React, { useContext } from 'react'
import { AuthContext, AuthContextType } from '../../../contexts/AuthContext'

function Dashboard() {

  const { logout } = useContext(AuthContext) as AuthContextType


  return (<>
    <h1>Dashboard</h1>
    <button onClick={() => logout()}>Logout</button>
  </>
  )
}

export default Dashboard