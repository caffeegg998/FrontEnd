import {createContext} from "react";
import PropTypes from "prop-types";
import {axiosInstance} from "../../utils/http.js";

export const BookContext = createContext({
    getCategory: () => {},
    getBookDetail:() => {},
    getRatingByBookId:() => {},
    RatingBookByUser:() => {}
})
BookProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export function BookProvider({children}){

    let RatingBookByUser = async (bookId,rating) => {
        try {
            const requestBody = {
                rating: rating
            };
            const response = await axiosInstance.post(`book-ratings/${bookId}`,requestBody)
            console.log(response)
            return response
        }
        catch (err){
            console.log("Error:" + err)
        }
    }
    let getRatingByBookId = async (bookId) => {
        try {
            const response = await axiosInstance.get(`book-ratings/statistics?bookId=${bookId}`)
            return response.data
        }
        catch (err){
            console.log("Error:" + err)
        }
    }

    let getCategory = async () => {
        try {
            const response = await axiosInstance.get(`book/category/list-category`)
            return response.data
        }
        catch (err){
            console.log("Error:" + err)
        }
    }

    let getBookDetail = async (id) => {
        try {
            const response = await axiosInstance.get(`book/get-book/?id=${id}`)
            console.log(response)
            return response.data
        }
        catch (err){
            console.log("Error:" + err)
        }
    }

    return <BookContext.Provider value={
        {
            getCategory,
            getBookDetail,
            getRatingByBookId,
            RatingBookByUser
        }
    }>
        {children}
    </BookContext.Provider>
}
