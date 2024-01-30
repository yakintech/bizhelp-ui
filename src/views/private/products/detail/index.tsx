import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../../../network/axiosInstance'
import { FavoritesContext } from '../../../../contexts/FavoritesContext'

function Detail() {

  const [detail, setdetail] = useState<any>({})

  const {addFavorite, favorites, removeFavorite} = useContext(FavoritesContext)

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {

    axiosInstance.get(`products/${id}`)
      .then(res => {
        setdetail(res.data)
      })

  }, [])


  return (<>
    <h1>Detail Page</h1>
    <button onClick={() => navigate(-1)}>Go back!</button>
    <h2>Id: {detail.id}</h2>
    <h3>Name: {detail.name}</h3>
    <p>Price: {detail.unitPrice}</p>
    <p>Stock: {detail.unitsInStock}</p>
    <p>Quantity Per Unit: {detail.quantityPerUnit}</p>
    {
      favorites.find((fav: any) => fav.id == detail.id) ?
        <button onClick={() => removeFavorite(detail)}>Remove from Favorites</button>
        :
        <button onClick={() => addFavorite(detail)}>Add to Favorites</button>
    }
  </>
  )
}

export default Detail