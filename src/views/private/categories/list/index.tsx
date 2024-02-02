import React, { useEffect, useState } from 'react'
import { categoryService } from '../../../../network/category/categoryService'
import { DataGrid } from '@mui/x-data-grid'
import { CategoryModel } from '../../../../model/category'
import { Link } from 'react-router-dom'

function List() {

    const [categories, setcategories] = useState<CategoryModel[]>([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        categoryService.getAll().then((res) => {
            setcategories(res.data || [])
            setloading(false)
        })
    }
        , [])


    return (<>
    <ul>
        {
            categories.map((category) => {
                return <li key={category.id}>{category.name}</li>
            })
        }
    </ul>

        {
            loading ? <h1>Loading...</h1> : <>
            <h1>Categories</h1>
            <hr />
            <DataGrid
                rows={categories}
                columns={[
                    { field: 'id', headerName: 'ID', width: 70 },
                    { field: 'name', headerName: 'Name', width: 150 },
                    { field: 'description', headerName: 'Description', width: 230 },
                    {
                        field: 'goToDetail', headerName: 'Detail', width: 100, renderCell: (params) => {
                            return <Link to={`/categories/${params.row.id}`}>Detail</Link>
                        }
                    }
                ]}
            />
        </>
    }

    </>
    )
}

export default List


