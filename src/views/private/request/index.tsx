import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequestList from './request-list'
import CreateRequest from './create-request'

function Request() {

    return (<>
        <Routes>
            <Route path='/' element={<RequestList />} />
            <Route path='/create' element={<CreateRequest />} />
        </Routes>
    </>
    )
}

export default Request