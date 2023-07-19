import PropTypes from "prop-types";
import {BiTime} from "react-icons/bi";

const Moviecard = ({movie}) => {
    const { src,title,main,runtime} = movie;
    return <div className='card'>
        <img src={src} className='w-full'/>
        <div className='p-4 text-white'>
            <h4>{title}</h4>
            <p>{main}</p>
        </div>
        <div className='badge'>
            <BiTime/>
            <p>{runtime}</p>
        </div>
    </div>
};

Moviecard.propTypes = {
    movie: PropTypes.shape({
        src: PropTypes.any.isRequired,
        title: PropTypes.string.isRequired,
        main: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
    }).isRequired,
};

export default Moviecard