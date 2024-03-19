import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )

    const login = async (user)=>{
        const res = await axios.post("https://blog-rui-backend.onrender.com/login", user,{ withCredentials: true })
        setCurrentUser(res.data)
    }

    const logout = async (user)=>{
        const res = await axios.post("https://blog-rui-backend.onrender.com/logout", user,{ withCredentials: true })
        console.log(res);
        setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
