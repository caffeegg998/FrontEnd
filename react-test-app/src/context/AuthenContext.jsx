import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {axiosInstance} from "../utils/http.js";

export const AuthenContext = createContext({

    loading:true,
    user: null,
    login: () => {},
    logout: () => {},
    register: ()=> {},
    activeToken: () => {},
    forgotPassword: () => {},
    resetPassword: () => {}
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
            const { accessToken, refreshToken, fullName ,accessTokenExpired, userName} = response.data.data;
            // console.log(response.data.data)
            let user = { accessToken, refreshToken, fullName,accessTokenExpired,userName};
            console.log(user)
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login failure if needed
        }
    };
    let register = async (fullName,username,password,email) => {
        try {
            const requestBody = {
                user: {
                fullName: fullName,
                username: username,
                password: password,
                email: email
                }
            };
            const response = await axiosInstance.post('customer/register',requestBody)
            return response.data
        } catch (error){
            console.error('Error:', error.message);
        }
    }
    let forgotPassword = async (email) => {
        try {
            const requestBody = {
                email: email
            };
            const response = await axiosInstance.post('customer/password-reset-request',requestBody)
            return response.data
        } catch (error){
            console.error('Error:', error.message);
        }
    }
    let resetPassword = async (resetToken,newPassword) => {
        try {
            const requestBody = {
                newPassword: newPassword
            };
            const response = await axiosInstance.post(`customer/reset-password?token=${resetToken}`,requestBody)
            return response.data
        } catch (error){
            console.error('Error:', error.message);
        }
    }
    let activeToken = async (activeToken) => {
        try {
            const response = await axiosInstance.get(`customer/verifyEmail?token=${activeToken}`);
            console.log(response.data)
            return response.data
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login failure if needed
        }
    }
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
            logout,
            register,
            activeToken,
            forgotPassword,
            resetPassword
        }
    }>
        {children}
    </AuthenContext.Provider>
}