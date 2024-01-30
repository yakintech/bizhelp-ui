import React, { useContext } from 'react'
import { FavoritesContext } from '../../../contexts/FavoritesContext'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material';

function Favorites() {

  //global state e bağlanıp favorileri çekeceğiz
  const { favorites, removeFavorite, emptyFavorites } = useContext(FavoritesContext);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'unitPrice', headerName: 'Unit Price', width: 130 },
    { field: 'unitsInStock', headerName: 'Stock', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params: any) => (
        <>
          <Button color='error' variant='outlined' onClick={() => removeFavorite(params.row)}>Remove</Button>
        </>
      )
    }
  ];

  return (<>
    <h1>Favorites Page</h1>
    <hr />
    <h1>Length: {favorites.length}</h1>
    <hr />
    {/* <Button onClick={emptyFavorites}>Empty</Button> */}
    <Button color='error' variant='outlined' onClick={() => emptyFavorites()}>Empty</Button>

    <DataGrid
      rows={favorites}
      columns={columns}
    />
  </>
  )
}

export default Favorites