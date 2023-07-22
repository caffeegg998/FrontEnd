import {combineReducers} from "@reduxjs/toolkit";
import bookReducer from "../components/book.slice.js";

const rootReducer = combineReducers({
    data: bookReducer
})
export default rootReducer;