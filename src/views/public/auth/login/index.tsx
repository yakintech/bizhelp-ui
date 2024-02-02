import React, { useContext, useState } from 'react'
import { AuthContext, AuthContextType } from '../../../../contexts/AuthContext'
import { LoginServices } from '../../../../network/auth/login'

function Login() {

  const { login } = useContext(AuthContext) as AuthContextType

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const userLogin = () => {

    LoginServices.login(email, password).then((res) => {
      if (res != null) {
        login(res.token)
      }
    })
  }


  return (<>
    <h1>Login Page</h1>
    <hr />
    <div>
      <label>Email</label>
      <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
    </div>
    <div>
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
    </div>

    <button onClick={() => userLogin()}>Login</button>
  </>
  )
}

export default Login