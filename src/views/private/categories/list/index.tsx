import React, { useEffect, useState } from 'react'
import { CategoryModel, categoryService } from '../../../../network/category/categoryService'

function List() {

    const [categories, setcategories] = useState<CategoryModel[]>([])

    useEffect(() => {
        categoryService.getAll().then((res) => {
            console.log(res.data || []);
            
            setcategories(res.data || [])
        })
    }
        , [])


    return (<>
        <h1>Categories</h1>
        <ul>
            {
                categories.map((category) => {
                    return <li key={category.id}>{category.name}</li>
                })
            }
        </ul>
    </>
    )
}

export default List


