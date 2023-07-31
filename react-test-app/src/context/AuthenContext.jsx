import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import http from "../utils/http.js";

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
    const [tokenExpiration, setTokenExpiration] = useState(null);

    useEffect(()=> {
        if(user == null){
            return
        }else {
            let u = JSON.parse(localStorage.getItem("user"))
            let exp = u.accessTokenExpired
            console.log(exp)
            setUser(u)
            setTokenExpiration(exp);
            setLoading(false)
        }

    },[])
    let login = async (username, password) => {
        try {
            const response = await http.post(`login?username=${username}&password=${password}`);
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
    console.log("tokenExp" + tokenExpiration)
    const isTokenExpired = () => {
        return tokenExpiration !== null && Date.now() > tokenExpiration;
    };
    console.log(isTokenExpired())
    useEffect(() => {
        if (isTokenExpired()) {
            logout();
        }
    }, [tokenExpiration]);
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