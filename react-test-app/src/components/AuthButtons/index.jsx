
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div className='flex justify-end'>
            <button className='btn mr-2'><Link to="/login">Đăng nhập</Link></button>
            <button className='btn'><Link to="/register">Đăng ký</Link></button>
        </div>
    );
};
export default Index;