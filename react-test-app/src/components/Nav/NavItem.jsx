// export interface Item{
//     label: string;
//     icon: JSX.Element;
//     active?:boolean
// }

import PropTypes from 'prop-types';

const NavItem = ({ item }) => {
    const { label, icon, active } = item;
    return (
        <li className={`flex p-2 justify-end items-center cursor-pointer ${active ? ' bg-primary text-white'  : ''}`}>
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
};
export default NavItem;