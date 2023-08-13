import PropTypes from "prop-types";
import {IoMdBook} from "react-icons/io";
import {RiDeleteBin6Line} from "react-icons/ri";
import {FiEdit} from "react-icons/fi";
import {setEditBook} from "../../slice/book.slice.js";
import {useDispatch} from "react-redux";
// import {Book} from "../../types/bookcard.type.js"
const BookCard = ({book,handleDelete, handleStartEditing,source}) => {
    const dispath = useDispatch()
    const { id,title,author,coverUrl,format} = book;
    if(source === "Home"){
        return <div className='card block items-center my-auto'>
                    <img src={`http://localhost:8082/api/book/download/${coverUrl}`} className='w-full'/>
                    <div className='py-2 px-2 text-white '>
                        <h4 className='text-sm'>{title}</h4>
                        <p className='text-xs'>{author}</p>
                    </div>
                    <div className='badge'>
                        <IoMdBook/>
                        <p >{format}</p>
                    </div>
        </div>
    }
    else{
        return <div className='card'>
            <img src={`http://localhost:8082/api/book/download/${coverUrl}`} className='w-full'/>
            <div className='p-4 text-white'>
                <h4>{title}</h4>
                <p>{author}</p>
            </div>
            <div className='badge'>
                <IoMdBook/>
                <p >{format}</p>
            </div>
            <div className='flex justify-end'>
                <button
                    className='flex btn mr-2 text-white border-white hover:text-red-600 hover:border-red-600'
                    onClick={() => handleDelete(id)}>
                    <RiDeleteBin6Line/>DELETE
                </button>
                <button
                    className='flex btn mr-2 text-white border-white hover:text-yellow-400 hover:border-yellow-400'
                    onClick={() => dispath(setEditBook(book))}
                ><FiEdit />EDIT</button>
            </div>

        </div>
    }
};

BookCard.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        bookUrl: PropTypes.string.isRequired,
        coverUrl: PropTypes.string.isRequired,
        format: PropTypes.string.isRequired,
    }).isRequired,
};
export default BookCard;
