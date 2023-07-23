import {BiHomeAlt, BiInfoCircle, BiMoviePlay} from "react-icons/bi";
import NavItem from "./NavItem.jsx";
import {Book} from "../../types/bookcard.type.js";
import {BsBook} from "react-icons/bs";

const defaultIconSize = '1.875rem'

const items = [
    {
        label:'Trang Chủ',
        icon:<BiHomeAlt size={defaultIconSize}/>,

    },
    {
        label:'Sách xem nhiều nhất',
        icon:<BiMoviePlay size={defaultIconSize}/>,
        active:true
    },
    {
        label:'About',
        icon:<BiInfoCircle size={defaultIconSize}/>,
        // active:true
    }
]

const NavItemsContainer = () => <>
    {
        items.map((item,index) => <NavItem item={item} key={index}/> )
    }
</>
const Index = () => {
    return (
        <nav className='col-span-1 bg-cyan-200'>
            <div className='mx-4 justify-between items-center'>

                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>PaperEbook.net</h4>
            </div>
            <ul className='mx-4 my-2'>
                <NavItemsContainer/>
            </ul>
        </nav>
    );
};

export default Index;