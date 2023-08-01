import PropTypes from "prop-types";
import {Link, useNavigate} from "react-router-dom";

const Index = () => {
    // eslint-disable-next-line react/prop-types
    return (
        <div className='flex justify-end'>
            <button className='btn mr-2'><Link to="/login">Login</Link></button>
            <button className='btn'>Register</button>
        </div>
    );
};

Index.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.shape({
        fullName: PropTypes.string,
    }).isRequired,
};

export default Index;