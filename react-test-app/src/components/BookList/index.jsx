import {Fragment, useEffect} from "react";
import {Provider, useDispatch, useSelector} from 'react-redux'
// import {useAppDispatch} from "../../store/store.js";

import BookCard from "./BookCard.jsx";
import {store} from "../../store/store.js";
import {getBookList} from "../book.slice.js";
import SkeletonPost from "../SkeletonPost/index.js";

export default function Index() {
    const dispath = useDispatch();
    const bookList = useSelector((state)=> state.book.data.bookList.data)
    const loading = useSelector((state)=> state.book.data.loading)
    // const error = useSelector((state) => state.store.errors)
    console.log(bookList)
    console.log(loading)

    useEffect(() => {
        const promise = dispath(getBookList())
        return () => {
            promise.abort()
        }
    }, [dispath])
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
                    <BookCard book={book} key={book.id}/>)}
            </div>
            <div className='flex justify-center'>
                <button className='btn hover:scale-125 transition ease-out duration-500'>
                    Xem thêm
                </button>
            </div>
            </Provider>
        </>
        // <div className='bg-white py-6 sm:py-8 lg:py-12'>
        //     <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        //         <div className='mb-10 md:mb-16'>
        //             <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Được Dev Blog</h2>
        //             <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
        //                 Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
        //             </p>
        //         </div>
        //         <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
        //             {loading && (
        //                 <Fragment>
        //                     <SkeletonPost />
        //                     <SkeletonPost />
        //                 </Fragment>
        //             )}
        //
        //             {!loading &&
        //                 postList.map((post) => (
        //                     <PostItem post={post} key={post.id} handleDelete={handleDelete} handleStartEditing={handleStartEditing} />
        //                 ))}
        //         </div>
        //     </div>
        // </div>
    )
}