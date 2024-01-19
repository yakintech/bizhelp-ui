import React, { useContext } from 'react'
import PrivateLayout from './private';
import PublicLayout from './public';
import { AuthContext, AuthContextType } from '../contexts/AuthContext';

function Views() {

  const { isAuth, loading } = useContext(AuthContext) as AuthContextType
  
  return (<>
    {
      loading ? <h1>loading...</h1> : isAuth ? <PrivateLayout /> : <PublicLayout />
    }
  </>)
}

export default Views



