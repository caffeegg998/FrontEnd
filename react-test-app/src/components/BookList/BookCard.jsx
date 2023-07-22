import PropTypes from "prop-types";
import {BiTime} from "react-icons/bi";
// import {Book} from "../../types/bookcard.type.js"

const BookCard = ({post}) => {
    const { title,author,bookUrl} = post;
    return <div className='card'>
        <img src={bookUrl} className='w-full'/>
        <div className='p-4 text-white'>
            <h4>{title}</h4>
            <p>{author}</p>
        </div>
        <div className='badge'>
            <BiTime/>
            {/*<p>{runtime}</p>*/}
        </div>
    </div>
};

BookCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        bookUrl: PropTypes.string.isRequired,
    }).isRequired,
};
export default BookCard;
