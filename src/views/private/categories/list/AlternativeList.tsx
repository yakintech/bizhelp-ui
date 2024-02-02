import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { categoryService } from '../../../../network/category/categoryService'

function AlternativeList() {

    const { data: response, isLoading } = useQuery("getAllCategories", categoryService.getAll, {

        // refetchInterval: 20000,
        // staleTime: 1000,
    })

    return (<>
        {
            isLoading ? <h1>Loading...</h1> : (
                <ul>
                    {response?.data?.map((category: any) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            )
        }

    </>
    )
}

export default AlternativeList