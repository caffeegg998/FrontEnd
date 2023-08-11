
import {Link} from "react-router-dom";

const Index = () => {
    return (

            <div className='flex'>
                <button className='mr-2 text-gray-400 text-2xl hover:text-white'><Link to="/login">Đăng nhập</Link></button>
                <p className='text-white text-2xl'>/</p>
                <button className='text-gray-400 hover:text-white text-2xl'><Link to="/register"> Đăng ký</Link></button>
            </div>
    );
};
export default Index;