import { createContext, useState } from "react";


export const FavoritesContext = createContext<FavoritesContextType>(null as any)


export const FavoritesProvider = ({ children }: any) => {

    const [favorites, setfavorites] = useState<any>([])

    const addFavorite = (favorite: any) => {
        setfavorites([...favorites, favorite])
    }

    const removeFavorite = (favorite: any) => {
        let filteredFavorites = favorites.filter((fav: any) => fav.id !== favorite.id)
        setfavorites(filteredFavorites)
    }

    const emptyFavorites = () => {
        setfavorites([])
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
