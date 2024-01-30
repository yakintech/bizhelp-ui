import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material';

function CartPage() {

    const { cart, removeFromCart, getTotalPrice, clearCart } = useContext(CartContext)


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params: any) => (
                <>
                    <Button color='error' variant='outlined' onClick={() => removeFromCart(params.row?.id)}>Remove</Button>
                </>
            )
        }
    ];

    let totalPrice = getTotalPrice();

    return (<>
        <h1>Total Price: <span>{totalPrice.toFixed(2)}</span></h1>
        <hr />
        <Button color='error' variant='outlined' onClick={clearCart}>Clear</Button>
        <DataGrid
            rows={cart}
            columns={columns}
        />

    </>
    )
}

export default CartPage