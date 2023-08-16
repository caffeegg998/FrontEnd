import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import {deleteBook, getBookList, getBookListByCreator, setEditBook} from "../../slice/book.slice.js";
import {set} from "react-hook-form";
import {Fragment, useEffect} from "react";


const ListTableBook = ({user,toggleEditBook}) => {
    const dispath = useDispatch()
    const bookList = useSelector((state)=> state.book.data.bookList.data)
    const loading = useSelector((state)=> state.book.data.loading)

    const handleEdit = (book) => {
        dispath(setEditBook(book))
        toggleEditBook()
    }



    console.log(bookList)
    console.log(loading)
    const handleDelete = (bookId) => {
        dispath(deleteBook(bookId))
    }

    useEffect(() => {
        if(user){
            const promise = dispath(getBookListByCreator())
            return () => {
                promise.abort()
            }
        }
    }, [dispath])

    console.log(bookList)
    return (
        <>
            <div className="relative overflow-x-auto  mb-3 drop-shadow rounded-2xl shadow-2xl bg-cyan-200 p-6">
                <div className='flex justify-between mb-2'>
                    <h3 className='mb-2 text-xl font-medium'>Danh sách</h3>
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                className=" border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 pl-10 p-2.5"
                                placeholder="Tìm kiếm theo: Tiêu đề, tác giả, series, năm xuất bản"
                                required=""
                            />
                        </div>
                        <button
                            type="submit"
                            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>

                </div>
                <table className="w-full text-sm text-left text-white">
                    <thead className="text-xs text-white bg-primary whitespace-nowrap">
                    <tr>
                        <th scope="col" className="p-1 text-center">
                            STT
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tiêu đề
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tác giả
                        </th>
                        <th scope="col" className="">
                            Series
                        </th>
                        <th scope="col" className="px-6 py-3">
                            NXB
                        </th>
                        <th scope="col" className="">
                            Năm xuất bản
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Thể loại
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Định dạng
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading && (
                        <Fragment>
                            <tr className="cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600">
                                <td className="p-1"><div className="h-4 bg-gray-300 mb-6 rounded"></div></td>
                                <td
                                    scope="row"
                                    className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap"><div className="h-4 bg-gray-300 mb-6 rounded"></div></td>
                                <td className="whitespace-nowrap"><div className="h-4 bg-gray-300 mb-6 rounded"></div></td>
                                <td className="px-6 py-4 whitespace-nowrap"><div className="h-4 bg-gray-300 mb-6 rounded"></div></td>
                                <td className=""><div className="h-4 bg-gray-300 mb-6 rounded"></div></td>
                                <td className=""><div className="h-4 bg-gray-300 mb-6 rounded"></div></td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                    /
                                    <div className="h-4 bg-gray-300 mb-6 rounded"></div>
                                </td>
                            </tr>
                        </Fragment>
                    )}
                    { !loading &&
                        bookList?.map((book) => (
                        <tr key={book.id} className="cursor-pointer border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600" onClick={() => handleEdit(book)}>
                            <td className="p-1">{book.id}</td>
                            <td
                                scope="row"
                                className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {book.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
                            <td className="whitespace-nowrap">{book.series}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.publisher}</td>
                            <td className="">{book.publicationYear}</td>
                            <td className="">{book?.category.map((category) => (<a key={category.id} className='mr-1 cursor-pointer hover:underline'>{category.name}|</a>))}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => handleEdit(book)}
                                >
                                    Sửa
                                </a>
                                /
                                <a
                                    href="#"
                                    className="font-medium text-red-600 hover:underline"
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Xóa
                                </a>
                            </td>
                        </tr>
                    ))}


                    </tbody>
                </table>
                <nav
                    className="flex items-center justify-between pt-4"
                    aria-label="Table navigation"
                >
    <span className="text-sm font-normal text-black">
      Showing{" "}
        <span className="font-semibold text-black">1-10</span>{" "}
        of{" "}
        <span className="font-semibold text-black">1000</span>
    </span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Previous
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-current="page"
                                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            >
                                3
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                4
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                5
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};
ListTableBook.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
        bookUrl: PropTypes.string.isRequired,
        coverUrl: PropTypes.string.isRequired,
        format: PropTypes.string.isRequired,
        series: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        publicationYear: PropTypes.number.isRequired,
        category: PropTypes.object.isRequired,
    }).isRequired,
};
export default ListTableBook;