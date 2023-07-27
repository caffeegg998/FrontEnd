import {Fragment, useEffect} from "react";
import {Provider, useDispatch, useSelector} from 'react-redux'
// import {useAppDispatch} from "../../store/store.js";

import BookCard from "./BookCard.jsx";
import {store} from "../../store/store.js";
import {deleteBook, getBookList, setEditBook} from "../book.slice.js";
import SkeletonPost from "../SkeletonPost/index.js";

export default function Index() {
    const dispath = useDispatch();
    const bookList = useSelector((state)=> state.book.data.bookList.data)
    const loading = useSelector((state)=> state.book.data.loading)
    // const error = useSelector((state) => state.store.errors)
    // console.log(bookList)
    // console.log(loading)
    // const isMountedRef = useRef(true);
    useEffect(() => {
        const promise = dispath(getBookList())
        return () => {
            promise.abort()
        }
    }, [dispath])
    const handleDelete = (bookId) => {
        dispath(deleteBook(bookId))
    }
    const handleStartEditing = (book) => {
        dispath(setEditBook(book))
    }
    // // console.log(bookList)
    return (
        <>
           <Provider store={store}>
            <h3 className='border-b border-primary mt-12 mb-6 pb-4'>Trending</h3>
            <div className='grid grid-cols-4 gap-10 mb-12 '>
                {loading && (
                    <Fragment>
                        <SkeletonPost />
                        <SkeletonPost />
                    </Fragment>
                )}
                {!loading &&
                    bookList.map((book)=>
                    <BookCard book={book} key={book.id} handleDelete={handleDelete} handleStartEditing={handleStartEditing}/>)}
            </div>
            <div className='flex justify-center'>
                <button className='btn hover:scale-125 transition ease-out duration-500'>
                    Xem thêm
                </button>
            </div>
            </Provider>
        </>
    )
}