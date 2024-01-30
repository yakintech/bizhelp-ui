import { createContext, useEffect, useState } from "react";


export const FavoritesContext = createContext<FavoritesContextType>(null as any)


export const FavoritesProvider = ({ children }: any) => {

    const [favorites, setfavorites] = useState<any>([])


    useEffect(() => {
        //burada localstorage dan favorileri alıyoruz
        let favorites = localStorage.getItem('favorites')
        if (favorites) {
            setfavorites(JSON.parse(favorites))
        }
    }
        , [])

    const addFavorite = (favorite: any) => {

        //burada favorilerde aynı ürün var mı diye kontrol edeceğiz
        var favoriteExists = favorites.find((fav: any) => fav.id == favorite.id)

        if (favoriteExists) {
            alert('Bu ürün zaten favorilerinizde mevcut')
            return
        }

        setfavorites([...favorites, favorite])
        //JSON.stringify ile array i json a çeviriyoruz
        localStorage.setItem('favorites', JSON.stringify([...favorites, favorite]))
    }

    const removeFavorite = (favorite: any) => {
        let filteredFavorites = favorites.filter((fav: any) => fav.id !== favorite.id)
        setfavorites(filteredFavorites)
        localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
    }

    const emptyFavorites = () => {
        setfavorites([])
        localStorage.setItem('favorites', JSON.stringify([]))
    }

    return <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, emptyFavorites }}>
        {children}
    </FavoritesContext.Provider>


}

//burada belirttipim proplar globalde kullanılabilir olacak
export type FavoritesContextType = {
    favorites: any,
    addFavorite: (favorite: any) => void,
    removeFavorite: (favorite: any) => void,
    emptyFavorites: () => void
}
