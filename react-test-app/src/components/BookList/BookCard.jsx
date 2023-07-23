import PropTypes from "prop-types";
import {IoMdBook} from "react-icons/io";
// import {Book} from "../../types/bookcard.type.js"

const BookCard = ({book}) => {
    const { title,author,coverUrl,format} = book;
    return <div className='card'>
        <img src={`http://localhost:8082/api/book/download/${coverUrl}`} className='w-full'/>
        <div className='p-4 text-white'>
            <h4>{title}</h4>
            <p>{author}</p>
        </div>
        <div className='badge'>
            <IoMdBook/>
            <p>{format}</p>
        </div>
    </div>
};

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        bookUrl: PropTypes.string.isRequired,
        coverUrl: PropTypes.string.isRequired,
        format: PropTypes.string.isRequired,
    }).isRequired,
};
export default BookCard;
