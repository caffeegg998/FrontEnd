
import Nav from "../../components/Nav/index.jsx";
import AuthButtons from "../../components/AuthButtons/index.jsx";
import Header from "../../components/Header/index.jsx";
import BookList from "../../components/BookList/index.jsx";
import SideBar2 from "../../components/SideBar2/SideBar2.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {BookProvider} from "../../context/BookContext/BookContext.jsx";

const Index = () => {
    return (
        <>

            <div className='bg-blue-100'>
                <Header />
                <div className='grid grid-cols-12 flex flex-wrap justify-between mx-auto max-w-screen-2xl'>
                    <div className='col-span-2'><Nav/></div>
                    <div className='col-span-8'>
                        <div className='grid grid-cols-8'>
                            <main className='col-span-8 bg-cyan-50 px-9 pb-16'>
                                <BookList source = "Home"  />
                            </main>
                        </div>
                    </div>
                    <div className='col-span-2 flex'>
                        <SideBar2/>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    );
};

export default Index;