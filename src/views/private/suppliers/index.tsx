import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './create/index'
import List from './list'


function Suppliers() {
    return (<>

        <Routes>
            <Route path="/create" element={<Create />} />
            <Route path='/' element={<List/>} />
        </Routes>
    </>
    )
}

export default Suppliers