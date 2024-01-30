import React, { useState } from 'react'
import { axiosInstance } from '../../../../network/axiosInstance'
import dayjs from 'dayjs'

function Add() {

    const [freight, setfreight] = useState<number>(0)
    const [shipName, setshipName] = useState<string>("")
    const [orderDate, setorderDate] = useState<string>("")

    //Tue Jan 30 2024 10:46:08 GMT+0300 (GMT+03:00)


    const add = () => {

        let orderDate2 = dayjs(orderDate).format("YYYY-MM-DD")

        let newOrder = {
            freight,
            shipName,
            orderDate : orderDate2
        }

        

        axiosInstance.post("/orders", newOrder)
            .then(res => {
                console.log(res.data)
            })
        
    }

  return (<>
        <h2>Add Order</h2>
        <hr />
        <div>
            <label htmlFor="">Freight</label>
            <input type="number" value={freight} onChange={(e) => setfreight(Number(e.target.value))} />
        </div>
        <div>
            <label htmlFor="">Ship Name</label>
            <input type="text" value={shipName} onChange={(e) => setshipName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Order Date</label>
            <input type="date" value={orderDate} onChange={(e) => setorderDate(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

  </>
  )
}

export default Add

