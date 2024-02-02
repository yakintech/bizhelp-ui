import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { categoryService } from '../../../../network/category/categoryService'

function Add() {

    const [name, setname] = useState("")

    const { mutate, isSuccess } = useMutation("addCategory", categoryService.add, {
        onSuccess: () => {
            alert("Category added successfully")
        },
        onError: (error) => {
            alert("Error: " + error)
        }
    })

    console.log("isSuccess", isSuccess);
    

  return (<>
  <div>
      <div>
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e) => setname(e.target.value)} />
      </div>
      <div>
            <button onClick={() => mutate({ name })}>Add</button>
      </div>
  </div>
  </>)
}

export default Add