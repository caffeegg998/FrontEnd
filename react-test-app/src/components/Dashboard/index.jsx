
import Nav from "../Nav/index.jsx";
import AuthButtons from "../AuthButtons/index.jsx";
import Header from "../Header/index.jsx";
import BookList from "../BookList/index.jsx";
import CreateBook from "../CreateBook/index.js";
import {useContext} from "react";
import {AuthenContext} from "../../context/AuthenContext.jsx";
import {Navigate} from "react-router-dom";

const Index = () => {
    let {user,logout} = useContext(AuthenContext);
    if(user){
        return (
            <>
                <div className='grid grid-cols-5'>
                    <Nav />
                    <main className='col-span-4 bg-cyan-50 px-12 py-6'>
                        <AuthButtons />
                        <Header />
                        <BookList />
                        <CreateBook />
                    </main>
                </div>
            </>
        );
    }
    else{
        return (<Navigate to="/login"/>)
    }

};

export default Index;