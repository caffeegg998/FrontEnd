


import {current} from "immer";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import axios from "axios";
import http from "../../utils/http.js";
import initialBookList from "../../types/bookcard.type.js";

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
        // console.log(response.data)
        return response.data;
    } catch (error) {
        // Nếu xảy ra lỗi trong quá trình gọi API hoặc xử lý dữ liệu, hãy throw lỗi
        throw new Error('Error fetching book list: ' + error.message);
    }
});

export const addBook = createAsyncThunk('book/add-book-file', async (formData, thunkAPI) => {
    try {
        const response = await http.post('book/add-book-file', formData, {
            signal: thunkAPI.signal,
            headers: {
                'Content-Type': 'multipart/form-data', // Định dạng là form data
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            // headers: {
            //     'Content-Type': 'multipart/form-data', // Định dạng là form data
            // },
        })
        return response.data
    } catch (error) {
        if (error.name === 'AxiosError' && error.response.status === 500) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
        throw error
    }
})
export const updateBook = createAsyncThunk(
    'book/updateBook',
    async (formData, thunkAPI) => {
        try {
            const response = await http.put(`book/`, formData, {
                signal: thunkAPI.signal,
                headers: {
                    'Content-Type': 'multipart/form-data', // Định dạng là form data
                },
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
            })
            return response.data
        } catch (error) {
            if (error.name === 'AxiosError' && error.response.status === 500) {
                return thunkAPI.rejectWithValue(error.response.data)
            }
            throw error
        }
    }
)
export const deleteBook = createAsyncThunk('book/deleteBook', async (bookId, thunkAPI) => {
    const response = await http.delete(`book/${bookId}`, {
        signal: thunkAPI.signal
    })
    return response.data
})

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setEditBook: (state, action) => {
            const bookId = action.payload
            // const foundBook = state.data
            state.editingBook =  bookId
        },
        cancelEditingPost: (state) => {
            state.editingBook = null
        }
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
            // .addCase(addBook.pending, (state) => {
            //     // Xử lý trạng thái loading nếu cần
            // })
            .addCase(addBook.fulfilled, (state, action) => {
                state.bookList.data.push(action.payload.data)
            })
            .addCase(deleteBook.fulfilled, (state, action) => {
                const bookId = action.meta.arg
                const deleteBookIndex = state.bookList.data.findIndex((book) => book.id === bookId)
                if (deleteBookIndex !== -1) {
                    state.bookList.data.splice(deleteBookIndex, 1)
                }
            })
            .addCase(updateBook.fulfilled, (state, action) => {
                state.bookList.data.find((post, index) => {
                    if (post.id === action.payload.data.id) {
                        state.bookList.data[index] = action.payload.data
                        return true
                    }
                    return false
                })
                state.editingPost = null
            })
            // .addCase(addBook.rejected, (state, action) => {
            //     // Xử lý khi API gọi bị lỗi, nếu cần
            // })
            // .addCase(getBookList.rejected,(state,action)=> {
            //     state.loading = false;
            //     state.error = action.error.message;
            // })


            .addDefaultCase((state, action) => {
                // console.log(`action type: ${action.type}`, current(state))
            })
    }
})
export const {setEditBook,cancelEditingPost } = bookSlice.actions
export default bookSlice.reducer;
