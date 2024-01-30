import { createContext, useState } from "react";



export const CartContext = createContext<CartContextType>({} as CartContextType)


export const CartContextProvider = ({ children }: any) => {

    const [cart, setcart] = useState<CartModel[]>([])

    //add to cart, remove from cart, clear cart, get total, get cart items

    const addtoCart = (item: CartModel) => {

        //eğer ürün sepette varsa miktarı bir arttır yoksa sepete yeni obje ekle
        var cartItem = cart.find(q => q.id == item.id);

        if (cartItem) {
            cartItem.quantity = cartItem.quantity + 1
            setcart([...cart])
        }
        else {
            item.kdvPrice = item.price * 1.2
            setcart([...cart, item])
        }

    }

    const removeFromCart = (id: number) => {

        var filteredCart = cart.filter(q => q.id != id)
        setcart(filteredCart)

    }

    const clearCart = () => {
        setcart([])
    }

    const getTotalPrice = () : number => {
        var totalPrice = 0;

        cart.forEach(item => {
            totalPrice = totalPrice + (item.quantity * item.price)
        })

        return totalPrice;
    }

    return <CartContext.Provider value={{ cart, addtoCart, removeFromCart, clearCart, getTotalPrice }}>
        {children}
    </CartContext.Provider>


}


export type CartContextType = {
    cart: CartModel[]
    addtoCart : (item: CartModel) => void
    removeFromCart : (id: number) => void
    clearCart : () => void
    getTotalPrice: () => number
}



export interface CartModel {
    id: number;
    name: string;
    price: number;
    quantity: number;
    kdvPrice?: number;
}