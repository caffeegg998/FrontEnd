import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {axiosInstance} from "../utils/http.js";

export const AuthenContext = createContext({
    loading:true,
    user: null,
    login: () => {},
    logout: () => {}
})
AuthenProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export function AuthenProvider({children}){
    let [user,setUser] = useState(null)
    let [loading,setLoading] = useState(true)

    useEffect(()=> {
            let u = JSON.parse(localStorage.getItem("user"))
            setUser(u)
            setLoading(false)

    },[])
    let login = async (username, password) => {
        try {
            const response = await axiosInstance.post(`login?username=${username}&password=${password}`);
            const { accessToken, refreshToken, fullName ,accessTokenExpired} = response.data.data;
            // console.log(response.data.data)
            let user = { accessToken, refreshToken, fullName,accessTokenExpired };
            // console.log(user)
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login failure if needed
        }
    };
    let logout = () => {
        // setToken("");
        setUser(null);
        // localStorage.removeItem("token")
        localStorage.removeItem("user")
    };


    return <AuthenContext.Provider value={
        {
            loading,
            user,
            login,
            logout
        }
    }>
        {children}
    </AuthenContext.Provider>
}