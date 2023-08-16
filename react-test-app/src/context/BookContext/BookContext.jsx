import {createContext} from "react";
import PropTypes from "prop-types";
import {axiosInstance} from "../../utils/http.js";

export const BookContext = createContext({
    getCategory: () => {}
})
BookProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export function BookProvider({children}){

    let getCategory = async () => {
        try {
            const response = await axiosInstance.get(`book/category/list-category`)
            return response.data
        }
        catch (err){
            console.log("Error:" + err)
        }
    }

    return <BookContext.Provider value={
        {
            getCategory
        }
    }>
        {children}
    </BookContext.Provider>
}
