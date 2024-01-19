import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({ children }: any) => {

    const [isAuth, setisAuth] = useState(false);
    const [userId, setuserId] = useState('');
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        
            const isAuth = localStorage.getItem('isAuth');
            if (isAuth === 'true') {
                setisAuth(true);
                setLoading(false)
            } else {
                setisAuth(false);
                setLoading(false)
            }
       

    }, [])


    const login = (userId: string) => {
        setisAuth(true);
        setuserId(userId);
        localStorage.setItem('isAuth', 'true');
    }

    const logout = () => {
        setisAuth(false);
        setuserId('');
        localStorage.setItem('isAuth', 'false');
    }

    return <AuthContext.Provider value={{ isAuth, userId, login, logout, loading, setLoading }}>
        {children}
    </AuthContext.Provider>

}


export type AuthContextType = {
    isAuth: boolean,
    userId: string,
    login: (userId: string) => void,
    logout: () => void
    loading: boolean
    setLoading: (loading: boolean) => void
}

