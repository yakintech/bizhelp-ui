import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function List() {

    const [products, setproducts] = useState([])


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data)
            })

    }, [])

    const gridColumns = [
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
            width: 200
        },
        {
            field: 'unitsInStock',
            headerName: 'Units In Stock',
            width: 200
        }
    ]


    return (<>
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={products}
                columns={gridColumns}
            />
        </div>


    </>
    )
}

export default List