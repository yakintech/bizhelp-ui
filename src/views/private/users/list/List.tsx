import React, { useEffect, useState } from 'react'
import tokenService from '../../../../utils/auth/tokenService';
import axios from 'axios';
import { baseService } from '../../../../network/baseService';


function List() {

    const [users, setusers] = useState([])

    useEffect(() => {
       
        baseService.get<any>('users').then((res) => {
            console.log("response", res.data);
            
            setusers(res.data)
        }).catch((err) => {
            console.log(err)
        })
        
    }, [])

  return (<>
  <ul>
    {users.map((user:any) => {
      return <li key={user.id}>{user.name}</li>
    })}
  </ul>
  </>
  )
}

export default List