import { Button } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BYZButton from '../../../../components/core-componens/button'
import BYZGrid from '../../../../components/core-componens/grid'



function List() {

    const [products, setproducts] = useState([])

    //data grid localization



    useEffect(() => {

        loadProducts()

    }, [])

    const removeProduct = (id: number) => {
        //Ürünü silmek için web servise istek atacağız. Ürün silindikten sonra ürün listesini güncellememiz gerekiyor.

        const confirm = window.confirm('Are you sure?')
        if (!confirm) return

        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                loadProducts()
                // let filteredProducts = products.filter(p => p.id !== id)
                // setproducts(filteredProducts)
            })

    }


    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })
    }

    const gridColumns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200
        },
        {
            field: 'unitPrice',
            headerName: 'Unit Price',
            width: 200,
            renderCell: (params: any) => {
                return <span>{params.value.toFixed(2)} TRY</span>
            }
        },
        {
            field: 'unitsInStock',
            headerName: 'Units In Stock',
            width: 200
        },
        {
            field: 'unitsInStock',
            headerName: 'Units In Stock',
            width: 200
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 200,
            renderCell: (params: any) => {
                // return <Button onClick={() => removeProduct(params.id)} variant="outlined" color="error">Delete</Button>
                return <BYZButton backColor='blue' onClick={() => removeProduct(params.id)} color="error">Delete</BYZButton>
            }
        }
    ]


    return (<>

        <BYZGrid
            gridHeight={1000}
            gridTitle='Products'
            rows={products}
            columns={gridColumns}
        />



    </>
    )
}

export default List