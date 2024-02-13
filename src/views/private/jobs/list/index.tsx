import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function List() {

    const [jobs, setjobs] = useState([])

    useEffect(() => {
      
        axios.get('http://localhost:3000/jobs')
        .then(res => {
            setjobs(res.data)
        })

    }, [])
    

  
  return (<>
    <DataGrid
        rows={jobs}
        columns={[
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'title', headerName: 'Title', width: 130 },
            { field: 'description', headerName: 'Description', width: 130 },
            { field: 'location', headerName: 'Location', width: 130 },
            { field: 'salary', headerName: 'Salary', width: 130 },
            { field: 'type', headerName: 'Type', width: 130 },
            { field: 'company', headerName: 'Company', width: 130 },
            { field: 'email', headerName: 'Email', width: 130 },
            { field: 'phone', headerName: 'Phone', width: 130 },
            { field: 'website', headerName: 'Website', width: 130 },
            { field: 'created_at', headerName: 'Created At', width: 130 },
            { field: 'updated_at', headerName: 'Updated At', width: 130 },
        ]}
        />
  </>
  )
}

export default List