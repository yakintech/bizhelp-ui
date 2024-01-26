import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './create/index'

function Suppliers() {
    return (<>

        <Routes>
            <Route path="/create" element={<Create />} />
        </Routes>
    </>
    )
}

export default Suppliers