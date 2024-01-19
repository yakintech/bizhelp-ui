import React, { useContext } from 'react'
import { AuthContext, AuthContextType } from '../../../../contexts/AuthContext'

function Login() {

  const { login } = useContext(AuthContext) as AuthContextType


  return (<>
    <h1>Login Page</h1>
    <button onClick={() => login("")}>Login</button>
  </>
  )
}

export default Login