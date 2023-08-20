
import './App.css'
import Dashboard from "./page/Dashboard/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./page/Login/Login.jsx";
import Home from "./page/Home/index.jsx";
import Register from "./page/Register/Register.jsx";
import ForgotRequest from "./page/ForgotPassword/ForgotRequest/ForgotRequest.jsx";
import ForgotResponse from "./page/ForgotPassword/ForgotResponse/ForgotResponse.jsx";
import RegSuccess from "./page/Register/RegSuccess.jsx";
import ActiveAccount from "./page/Register/ActiveAccount.jsx";
import ResendActiveAccount from "./page/Register/ResendActiveAccount.jsx";
import BookDetail from "./page/BookDetail/BookDetail.jsx";
import {BookProvider} from "./context/BookContext/BookContext.jsx";


const App = () => {


    return (
        <BookProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />}/>
                <Route path='dashboard' element={<Dashboard />}/>
                <Route path='register' element={<Register />}/>
                <Route path='regsuccess' element={<RegSuccess/> }/>
                <Route path='forgotRequest' element={<ForgotRequest />}/>
                <Route path='forgotResponse' element={<ForgotResponse />}/>
                <Route path='active-account' element={<ActiveAccount />}/>
                <Route path='resend-active-account' element={<ResendActiveAccount />}/>
                    {/* Các tuyến khác */}
                    <Route path="/book-detail/:id" element={<BookDetail />} />
                    {/* ... Các tuyến khác */}
            </Routes>
        </BrowserRouter>
        </BookProvider>

       )
}

export default App
