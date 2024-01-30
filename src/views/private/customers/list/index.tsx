import React, { useEffect, useState } from 'react'
import { baseService } from '../../../../network/baseService'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { CustomerListModel } from './CustomerListModel'

function List() {

    const [customers, setcustomers] = useState<CustomerListModel[]>([])

    useEffect(() => {

        baseService.get('customers').then((res) => {
            
            if(res.statusCode == 200){
                setcustomers(res.data)
            }
          
        })

    }, [])
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70,
        },
        {
            field: 'companyName',
            headerName: 'Company Name',
            width: 200,
        },
        {
            field: 'contactName',
            headerName: 'Contact Name',
            width: 200,
        },
        //go to detail
        {
            field: 'detail',
            headerName: 'Detail',
            width: 200,
            renderCell: (params) => (
                <Link to={`/customers/${params.row.id}`}>Detail</Link>
            ),
        }

    ]


    return (<>
    <DataGrid
        rows={customers}
        columns={columns}
    />
    </>
    )
}

export default List