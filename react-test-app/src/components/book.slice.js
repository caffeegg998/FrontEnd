


import {current} from "immer";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import axios from "axios";
import http from "../utils/http.js";
import initialBookList from "../types/bookcard.type.js";

// const initialState = {
//     bookList: initialBookList,
//
// }
const initialState = {
    bookList: {
        data: initialBookList,
        msg: "Mặc định",

    },
    editingBook: null,
    loading: false,
    currentRequestId: undefined
};

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

export const addBook = createAsyncThunk('blog/addBook', async (formdata, thunkAPI) => {
    try {
        const response = await http.post('book/add-book-file', formdata, {
            signal: thunkAPI.signal,
            headers: {
                'Content-Type': 'multipart/form-data', // Định dạng là form data
            },
        })
        return response.data
    } catch (error) {
        if (error.name === 'AxiosError' && error.response.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
        throw error
    }
})
// console.log("get listbook:" + getBookList())

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        startEditingPost: (state, action) => {
            const postId = action.payload
            const foundPost = state.postList.find((post) => post.id === postId) || null
            state.editingPost = foundPost
        },
    },
    extraReducers(builder) {
        builder
            // .addCase(getBookList.pending,(state) => {
            //     state.loading = true;
            //     state.error= null;
            // })
            .addCase(getBookList.fulfilled,(state, action) => {
                state.loading = false;
                state.bookList = action.payload
            })
            .addCase(addBook.fulfilled, (state, action) => {
                state.bookList.push(action.payload)
            })
            // .addCase(getBookList.rejected,(state,action)=> {
            //     state.loading = false;
            //     state.error = action.error.message;
            // })


            .addDefaultCase((state, action) => {
                console.log(`action type: ${action.type}`, current(state))
            })
    }
})
export default bookSlice.reducer;
