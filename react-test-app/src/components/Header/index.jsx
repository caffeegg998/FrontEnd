import AuthButtons from "../AuthButtons/index.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Home from "../../page/Home/index.jsx";
import {BiHomeAlt2} from "react-icons/bi";

const Index = () => {
    return (
        <>
            <header>
                <nav className="px-4 lg:px-6 py-3 bg-primary">
                    <div className="grid grid-cols-12 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <div className='col-span-2 flex justify-start'>
                            <a href="/" className="flex items-center">
                                <img
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    className="mr-3 h-6 sm:h-9"
                                    alt="Flowbite Logo"
                                />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PAPEREBOOK.NET</span>
                            </a>
                        </div>
                        <div className="col-span-1 flex justify-center md:hidden lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <a href="#"
                               className="block flex col-span-1 py-2 text-xl pr-4 pl-3 text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-white" aria-current="page">
                                <BiHomeAlt2 size={40}/></a>
                        </div>
                        <div className="col-span-5 lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <SearchBar/>
                        </div>
                        <div className="col-span-1 lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        </div>
                        <div className=" col-span-2 flex justify-end lg:order-2">
                            <AuthButtons/>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
};

export default Index;