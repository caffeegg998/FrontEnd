import {createContext, useState} from "react";
import PropTypes from "prop-types";


export const AuthenContext = createContext({
    token: "",
    user: null,
    login: () => {},
    logout: () => {}
})
AuthenProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export function AuthenProvider({children}){
    let [token,setToken] = useState("")
    let [user,setUser] = useState(null)

    let login = async (username,password) => {
        let token = "123456"
        let user = {
            id:1,name:"Admin"
        }
        setToken(token)
        setUser(user)
    };
    let logout = () => {
        setToken("");
        setUser(null);
    };
    return <AuthenContext.Provider value={
        {
            token,
            user,
            login,
            logout
        }
    }>
        {children}
    </AuthenContext.Provider>
}