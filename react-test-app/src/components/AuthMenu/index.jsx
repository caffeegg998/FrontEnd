import PropTypes from "prop-types";
import {useState} from "react";

const Index = (props) => {
    let {user} = props
    let {logout} = props
    Index.propTypes = {
        logout: PropTypes.func.isRequired,
        user: PropTypes.shape({
            fullName: PropTypes.string,
        }).isRequired,
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };


        return (
            <div className="dropdown flex justify-end">
                <button
                    onClick={toggleDropdown}
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="hover"
                    className="dropdown-toggle text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    {user?.fullName}{" "}
                    <svg
                        className="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                {isDropdownOpen && (
                    <div
                        id="dropdownHover"
                        className="absolute my-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownHoverButton"
                        >
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Earnings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={logout}
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        )

};
export default Index;