import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../../network/axiosInstance'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

function List() {

    const [suppliers, setsuppliers] = useState<Supplier[]>([])

    useEffect(() => {
        axiosInstance.get('suppliers')
            .then(res => {
                setsuppliers(res.data)
            })
    }, [])


    const columns: GridColDef[] = [
        {
            headerName: 'ID',
            field: 'id',
            width: 100
        },
        {
            headerName: 'Company Name',
            field: 'companyName',
            width: 200
        },
        {
            headerName: 'Contact Name',
            field: 'contactName',
            width: 200
        },
        {
            headerName: 'Contact Title',
            field: 'contactTitle',
            width: 200
        },
        {
            field: 'address',
            headerName: 'City',
            width: 200,
            renderCell: (params: any) => {
                return <span>{params.value?.city}</span>
            }
        },
        {
            field: "address",
            headerName : "Country",
            width: 200,
            renderCell: (params:any) => {
                return <span>{params.value?.country}</span>
            }
        }
    ]

    return (<>
        <DataGrid
            rows={suppliers}
            columns={columns}
        />
    </>
    )
}

export default List


interface Supplier {
    id: number,
    companyName: string,
    contactName: string,
    contactTitle: string,
    address: Address
}



interface Address {
    street: string,
    city: string,
    region: string,
    postalCode: string,
    country: string,
    phone: string
}