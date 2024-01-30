import { GridColDef } from '@mui/x-data-grid'
import { useContext, useEffect, useState } from 'react'
import BYZButton from '../../../../components/core-componens/button'
import BYZGrid from '../../../../components/core-componens/grid'
import { axiosInstance } from '../../../../network/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../../../../contexts/FavoritesContext'
import { Button } from '@mui/material'
import { CartContext, CartModel } from '../../../../contexts/CartContext'


function List() {

    const [products, setproducts] = useState([])

    const { addtoCart } = useContext(CartContext)


    const navigate = useNavigate()

    const { addFavorite, favorites, removeFavorite } = useContext(FavoritesContext)

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


    const addProductToCart = (item : any) => {

        let newCartItem : CartModel = {
            id : item.id,
            name : item.name,
            price : item.unitPrice,
            quantity : 1
        }

        addtoCart(newCartItem)

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
            field: 'delete',
            headerName: 'Delete',
            width: 200,
            renderCell: (params: any) => {
                // return <Button onClick={() => removeProduct(params.id)} variant="outlined" color="error">Delete</Button>
                return <BYZButton onClick={() => removeProduct(params.id)} color="error">Delete</BYZButton>
            }
        },
        {
            field: "detail",
            headerName: "Detail",
            width: 150,
            renderCell: (params: any) => {
                return <BYZButton onClick={() => navigate(`/products/${params.id}`)} color="primary"> Detail</BYZButton>
            }
        },
        {
            field: "addtofav",
            headerName: "Add to Fav",
            width: 150,
            renderCell: (params: any) => {

                var favoriteExists = favorites.find((fav: any) => fav.id == params.row.id)

                if (favoriteExists) {
                    return <Button onClick={() => removeFavorite(params.row)} variant='outlined' color='error'>Remove</Button>
                }
                else {
                    return <Button onClick={() => addFavorite(params.row)} variant='outlined'>Add to fav</Button>
                }


            }
        },
        {
            field: "addtocart",
            headerName: "Add to Cart",
            width: 150,
            renderCell: (params: any) => {
                return <BYZButton onClick={() => addProductToCart(params.row)} color="success"> Add to Cart</BYZButton>
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