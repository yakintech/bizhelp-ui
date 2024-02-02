import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseService } from '../../../../network/baseService'
import { CustomerDetailModel } from './CustomerDetailModel'

function Detail() {

    const [detail, setdetail] = useState<CustomerDetailModel>({} as CustomerDetailModel)

    const { id } = useParams()

    useEffect(() => {
      
        baseService.getById('customers', id?.toUpperCase()).then((res) => {
           // setdetail(res.data)
        })
    
      
    }, [])
    

    return (<>
    <h1>Detail</h1>
    <p>{detail.companyName}</p>
    <p>{detail.contactName}</p>
    <p>{detail.contactTitle}</p>
    </>
    )
}

export default Detail

