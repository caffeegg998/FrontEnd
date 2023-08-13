
import {BiHomeAlt, BiInfoCircle, BiMoviePlay} from "react-icons/bi";
import NavItem from "../Nav/NavItem.jsx";
import {useState} from "react";

const defaultIconSize = '1.875rem'

const items = [
    {
        label:'Sách của tôi',
        icon:<BiHomeAlt size={defaultIconSize}/>,
        active:false
    },
    {
        label:'Quản lý sách',
        icon:<BiMoviePlay size={defaultIconSize}/>,
        active:false
    },
    {
        label:'Thông tin cá nhân',
        icon:<BiInfoCircle size={defaultIconSize}/>,
        active:false
    }
]

const NavAuth = ({activeIndex,setActiveIndex}) => {
    const handleItemClick = (index) => {
        setActiveIndex(index); // Cập nhật trạng thái active khi người dùng nhấp vào một mục
    };

    return (
        <nav className='col-span-2 bg-cyan-200 h-full'>
            <div className='mx-4 justify-between items-center'>

                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>DANH MỤC SÁCH</h4>
            </div>
            <div className='block items-center my-2'>
                <ul className=''>
                    {items.map((item,index) =>
                        <NavItem
                            item={{ ...item, active: activeIndex === index }}
                            key={index}
                            onItemClick={() => handleItemClick(index)}/> )}
                </ul>
            </div>
        </nav>
    );
};

export default NavAuth;