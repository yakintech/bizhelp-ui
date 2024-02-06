import React, { useContext } from 'react'
import { AuthContext, AuthContextType } from '../../../contexts/AuthContext'
import './style.css'
import { h1Style } from './style'
import styles from './styles.module.css'
import { Title, Wrapper } from '../../../components/core-componens/display/title'

function Dashboard() {

  const { logout } = useContext(AuthContext) as AuthContextType


  return (<>
  <Wrapper>
    <Title>
      Dashboard
    </Title>
  </Wrapper>
    {/* <h1 style={h1Style}>Dashboard</h1> */}
    <h3 className={styles.title}  >Dashboard</h3>
    <button onClick={() => logout()}>Logout</button>
    {/* <h1 style={h1Style}>Türkiye</h1> */}
  </>
  )
}

export default Dashboard