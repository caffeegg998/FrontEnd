
import './App.css'
import Dashboard from "./page/Dashboard/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./page/Home/index.jsx";


const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />}/>
                <Route path='dashboard' element={<Dashboard />}/>
            </Routes>


        </BrowserRouter>

       )
}

export default App
