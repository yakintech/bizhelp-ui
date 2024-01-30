import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../../../network/axiosInstance'

function Detail() {

  const [detail, setdetail] = useState<any>({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {

    axiosInstance.get(`products/${id}`)
      .then(res => {
        setdetail(res.data)
      })

  }, [])


  //name, unitPrice, unitsInStock, quantityPerUnit, categoryId
  return (<>
    <h1>Detail Page</h1>
    <button onClick={() => navigate(-1)}>Go back!</button>
    <h2>Id: {detail.id}</h2>
    <h3>Name: {detail.name}</h3>
    <p>Price: {detail.unitPrice}</p>
    <p>Stock: {detail.unitsInStock}</p>
    <p>Quantity Per Unit: {detail.quantityPerUnit}</p>
  </>
  )
}

export default Detail