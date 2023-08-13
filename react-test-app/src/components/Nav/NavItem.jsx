// export interface Item{
//     label: string;
//     icon: JSX.Element;
//     active?:boolean
// }

import PropTypes from 'prop-types';

const NavItem = ({item,onItemClick}) => {
    const { label, icon, active } = item;
    return (
        <li className={`flex p-2 justify-end items-center cursor-pointer ${active ? ' bg-primary text-white'  : ''}`}
        onClick={onItemClick}>
            <h3 className='mr-2'>{label}</h3>
            {icon}
        </li>
    );
};

//Định nghĩa kiểu dữ liệu
NavItem.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        active: PropTypes.bool,
    }).isRequired,
    onItemClick: PropTypes.func.isRequired,
};
export default NavItem;