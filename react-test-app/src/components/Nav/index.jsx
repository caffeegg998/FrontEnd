import {BiHomeAlt, BiInfoCircle, BiMoviePlay} from "react-icons/bi";
import NavItem from "./NavItem.jsx";
import {Book} from "../../types/bookcard.type.js";
import {BsBook} from "react-icons/bs";

const defaultIconSize = '1.875rem'

const items = [
    {
        label:'Trang Chủ',
        icon:<BiHomeAlt size={defaultIconSize}/>,
        active:false
    },
    {
        label:'Xem Nhiều',
        icon:<BiMoviePlay size={defaultIconSize}/>,
        active:false
    },
    {
        label:'About',
        icon:<BiInfoCircle size={defaultIconSize}/>,
        active:false
    }
]

const NavItemsContainer = () => <>
    {
        items.map((item,index) => <NavItem item={item} key={index}/> )
    }
</>
const Index = () => {
    return (
        <nav className='col-span-2 bg-cyan-200 h-full'>
            <div className='mx-4 justify-between items-center'>

                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>DANH MỤC SÁCH</h4>
            </div>
            <ul className='mx-4 my-2'>
                <NavItemsContainer/>
            </ul>
        </nav>
    );
};

export default Index;