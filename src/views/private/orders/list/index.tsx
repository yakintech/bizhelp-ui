import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../../network/axiosInstance'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import dayjs from 'dayjs'

function List() {

    const [orders, setorders] = useState<Order[]>([])

    useEffect(() => {

        axiosInstance.get("/orders")
            .then(res => {
                setorders(res.data)
            })

    }, [])

    const columns : GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            width: 100
        },
        {
            field: "freight",
            headerName: "Freight",
            width: 200
        },
        {
            field: "shipName",
            headerName: "Ship Name",
            width: 200
        },
        {
            field: "orderDate",
            headerName: "Order Date",
            width: 250,
            renderCell: (params) => {
                let orderDate = params.value
                return (<span> {dayjs(orderDate, "YYYY-MM-DD").format("DD MMMM YYYY dddd HH:mm")}</span>)
            }
        },
        {
            field: "requiredDate",
            headerName: "Required Date",
            width: 250,
            renderCell: (params) => {
                let requiredDate = params.value
                return (<span> {dayjs(requiredDate, "YYYY-MM-DD").format("DD MMMM YYYY dddd HH:mm")}</span>)
            }
        },
        {
            field: "shippedDate",
            headerName: "Shipped Date",
            width: 250,
            renderCell: (params) => {
                let shippedDate = params.value
                return (<span> {dayjs(shippedDate, "YYYY-MM-DD").format("DD MMMM YYYY dddd HH:mm")}</span>)
            }
        },
        //difference shipped date and required date
        {
            field:"difference",
            headerName:"Delay",
            width:250,
            renderCell:(params)=>{
                let shippedDate = params.row?.shippedDate
                let requiredDate = params.row?.requiredDate
                let difference = dayjs(shippedDate).diff(dayjs(requiredDate), "days")
                
                if(difference < 0){
                    difference = 0
                }
                return (<span style={{backgroundColor:'red'}}>{difference}</span>)
            }

        }
        //alternative requiredDate oluşturuyorum. Mevcut requiredDate den 3 gün sonra olsun.
        // {
        //     field: "alternativeDate",
        //     headerName: "Alternative Date",
        //     width: 250,
        //     renderCell: (params) => {
        
                
        //         let requiredDate = params.row?.requiredDate
        //         let alternativeDate = dayjs(requiredDate).add(3, "days").format("DD MMMM YYYY dddd HH:mm")
        //         return (<span>{alternativeDate}</span>)

        //     }
        // }
    ]


    return (<>
        <DataGrid
            rows={orders}
            columns={columns}
        />
    </>)
}

export default List



interface Order {
    id: string,
    freight: number,
    shipName: string,
    orderDate: string,
    requiredDate: string,
    shippedDate : string
}





