import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import { productFormValidationSchema } from '../validations'
import { ProductFormModel } from '../models/productFormModel'
import axios from 'axios'

function Create() {


    const {
        register,
        handleSubmit,
        formState: { errors, submitCount}
    } = useForm<ProductFormModel>({
        resolver: yupResolver(productFormValidationSchema),
    })


    const add = (data: ProductFormModel) => {

        if (submitCount >= 0 && submitCount < 3) {
            axios.post('https://northwind.vercel.app/api/products', data)
                .then(res => {
                    console.log(res)
                })
        }

    }

    return (<>
        <h1>{submitCount}</h1>
        <form onSubmit={handleSubmit(add)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register('name')} />
                <p style={{ color: 'red' }}>{errors.name?.message}</p>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" {...register('unitPrice')} />
                <p style={{ color: 'red' }}>{errors.unitPrice?.message}</p>
            </div>
            <div>
                <button type="submit">Save</button>
            </div>
        </form>

    </>
    )
}

export default Create