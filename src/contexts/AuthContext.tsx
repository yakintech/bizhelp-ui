import axios from "axios";
import { createContext, useEffect, useState } from "react";
import tokenService from "../utils/auth/tokenService";


export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({ children }: any) => {

    const [isAuth, setisAuth] = useState(false);
    const [userId, setuserId] = useState('');
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        
            const token = tokenService.getToken();


            if (token) {
                axios.get('http://localhost:8080/api/users', {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    if (res.data) {
                        setisAuth(true);
                    }
                    setLoading(false);
                }
                ).catch(() => {
                    setLoading(false);
                })
            }
            else {
                setLoading(false);

            }
       

    }, [])


    const login = (token:string) => {
        setisAuth(true);
        tokenService.setToken(token);
    }

    const logout = () => {
        setisAuth(false);
        setuserId('');
        tokenService.removeToken();
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

