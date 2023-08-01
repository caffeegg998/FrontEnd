
import Nav from "../../components/Nav/index.jsx";
import AuthButtons from "../../components/AuthButtons/index.jsx";
import Header from "../../components/Header/index.jsx";
import BookList from "../../components/BookList/index.jsx";
import {useContext} from "react";
import {AuthenContext} from "../../context/AuthenContext.jsx";

const Index = () => {
    return (
        <>
            <div className='grid grid-cols-5'>
                <Nav />
                <main className='col-span-4 bg-cyan-50 px-12 py-6'>
                    <AuthButtons />
                    <Header />
                    <BookList source = "Home"  />
                </main>
            </div>
        </>
    );
};

export default Index;