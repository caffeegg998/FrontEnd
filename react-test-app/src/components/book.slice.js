


import {current} from "immer";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import Book from "../types/bookcard.type.js";
// import axios from "axios";
import http from "../utils/http.js";
import initialBookList from "../types/bookcard.type.js";

const initialState = {
    bookList: Book,
    editingBook: null,
    loading: false,
    currentRequestId: undefined
}

export const getBookList = createAsyncThunk('book/list-book', async (_,thunkApi)=> {
    try {
        // Gọi API để lấy danh sách sách từ server (Ví dụ: sử dụng Axios)
        const response = await http.get('book/list-book', {
                signal:thunkApi.signal
            }
        )
        // const response = await axios.get('http://localhost:8082/api/book/list-book')
        // Trả về dữ liệu từ API
        console.log(response.data)
        return response.data;
    } catch (error) {
        // Nếu xảy ra lỗi trong quá trình gọi API hoặc xử lý dữ liệu, hãy throw lỗi
        throw new Error('Error fetching book list: ' + error.message);
    }
});
// console.log("get listbook:" + getBookList())

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getBookList.pending,(state) => {
                state.loading = true;
                state.error= null;
            })
            .addCase(getBookList.fulfilled,(state, action) => {
                state.loading = false;
                state.bookList = action.payload
            })
            .addCase(getBookList.rejected,(state,action)=> {
                state.loading = false;
                state.error = action.error.message;
            })
            // .addMatcher<PendingAction>(
            //     (action) => action.type.endsWith('/pending'),
            //     (state, action) => {
            //         state.loading = true
            //         state.currentRequestId = action.meta.requestId
            //     }
            // )
            // .addMatcher<RejectedAction | FulfilledAction>(
            //     (action) => action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled'),
            //     (state, action) => {
            //         if (state.loading && state.currentRequestId === action.meta.requestId) {
            //             state.loading = false
            //             state.currentRequestId = undefined
            //         }
            //     }
            // )
            .addDefaultCase((state, action) => {
                console.log(`action type: ${action.type}`, current(state))
            })
    }
})
export default bookSlice.reducer;
