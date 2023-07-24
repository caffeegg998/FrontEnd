
import './App.css'
import Nav from "./components/Nav/index.jsx";
import AuthButtons from "./components/AuthButtons/index.jsx";
import Header from "./components/Header/index.jsx";
import BookList from "./components/BookList/index.jsx";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import CreateBook from "./components/CreateBook/index.js";

const App = () => {


    return (

        <div className='grid grid-cols-5'>
            <Nav />
            <main className='col-span-4 bg-cyan-50 px-12 py-6'>
                <Provider store={store}>
                    <AuthButtons />
                    <Header />
                    <BookList />
                    <CreateBook />
                </Provider>
            </main>

        </div>)
}

export default App
