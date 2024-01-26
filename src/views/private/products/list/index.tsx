import { GridColDef } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import BYZButton from '../../../../components/core-componens/button'
import BYZGrid from '../../../../components/core-componens/grid'
import { axiosInstance } from '../../../../network/axiosInstance'
import { useNavigate } from 'react-router-dom'


function List() {

    const [products, setproducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        loadProducts()
    }, [])

    const removeProduct = (id: number) => {
        //Ürünü silmek için web servise istek atacağız. Ürün silindikten sonra ürün listesini güncellememiz gerekiyor.

        const confirm = window.confirm('Are you sure?')
        if (!confirm) return

        

        axiosInstance.delete(`products/${id}`)
            .then(res => {
                loadProducts()
                // let filteredProducts = products.filter(p => p.id !== id)
                // setproducts(filteredProducts)
            })

    }


    const loadProducts = () => {
        axiosInstance.get('products')
            .then(res => {
                setproducts(res.data)
            })
    }

    const gridColumns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200
        },
        {
            field: 'unitPrice',
            headerName: 'Unit Price',
            width: 200,
            renderCell: (params: any) => {
                return <span>{params.value.toFixed(2)} TRY</span>
            }
        },
        {
            field: 'unitsInStock',
            headerName: 'Units In Stock',
            width: 200
        },
        {
            field: 'unitsInStock',
            headerName: 'Units In Stock',
            width: 200
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 200,
            renderCell: (params: any) => {
                // return <Button onClick={() => removeProduct(params.id)} variant="outlined" color="error">Delete</Button>
                return <BYZButton onClick={() => removeProduct(params.id)} color="error">Delete</BYZButton>
            }
        },
        {
            field:"detail",
            headerName:"Detail",
            width:200,
            renderCell:(params:any)=>{
                return <BYZButton onClick={() => navigate(`/products/${params.id}`)}  color="primary"> Detail</BYZButton>
            }
        }
    ]


    return (<>

        <BYZGrid
            gridHeight={400}
            gridTitle='Products'
            rows={products}
            columns={gridColumns}
        />



    </>
    )
}

export default List