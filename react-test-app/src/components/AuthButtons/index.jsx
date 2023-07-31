import PropTypes from "prop-types";

const Index = (props) => {
    // eslint-disable-next-line react/prop-types
    let {user} = props
    let {logout} = props
    return (
        <div className='flex justify-end'>
            <button className='btn mr-2' onClick={logout}>Logout</button>
            <button className='btn'>{user?.fullName}</button>
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