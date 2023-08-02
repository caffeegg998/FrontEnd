
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div className='flex justify-end'>
            <button className='btn mr-2'><Link to="/login">Login</Link></button>
            <button className='btn'>Register</button>
        </div>
    );
};


export default Index;