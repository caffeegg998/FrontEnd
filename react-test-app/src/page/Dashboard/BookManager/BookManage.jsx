import AddBook from "../../../components/AddBook/AddBook.jsx";
import {useEffect, useState} from "react";
import {RiAddCircleLine} from "react-icons/ri";
import ListTableBook from "../../../components/ListTableBook/ListTableBook.jsx";
import {BookProvider} from "../../../context/BookContext/BookContext.jsx";

const BookManage = ({user}) => {
    const [showAddBook, setShowAddBook] = useState(false);

    const toggleAddBook = () => {
        setShowAddBook(!showAddBook);
    };
    const toggleEditBook = () => {
        setShowAddBook(true)
    }

    const cancelHandle = () => {
        setShowAddBook(false)
    }

    // useEffect(() => {
    //     setShowAddBook(false)
    // },  toggleEditBook);



    return (
        <>
            <section className="bg-cyan-50 h-full">
                <div className="max-w-4xl px-4 mx-auto">
                    <h3 className='border-b font-medium border-primary mb-3 pt-4'>Quản lý sách</h3>
                    <button
                        type="submit"
                        onClick={toggleAddBook}
                        className="mb-3 text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:outline-none font-bold text-sm rounded-lg text-sm py-1 px-2 text-center"
                    >
                        <RiAddCircleLine className='mr-1'/>
                        Thêm sách
                    </button>
                    <BookProvider>
                        {showAddBook && <AddBook cancelHandle={cancelHandle}/>}
                        <ListTableBook user={user} toggleEditBook={toggleEditBook}/>
                    </BookProvider>
                </div>
            </section>
        </>
    );
};

export default BookManage;