import React, { useEffect, useState } from 'react'
import { CategoryModel } from '../../../../model/category'
import { categoryService } from '../../../../network/category/categoryService'
import { useParams } from 'react-router-dom'

function Detail() {

    const [detail, setdetail] = useState<CategoryModel>({} as CategoryModel)

    const { id } = useParams()

    useEffect(() => {
        categoryService.getById(id).then((res) => {
            setdetail(res.data || {} as CategoryModel)
        })
    }
        , [])

    return (<>
        <h1>Id: {detail.id}</h1>
        <h1>Name: {detail.name}</h1>
        <h1>Description: {detail.description}</h1>
    </>
    )
}

export default Detail