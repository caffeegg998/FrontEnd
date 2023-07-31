
import './App.css'
import Dashboard from "./components/Dashboard/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login.jsx";


const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<Login />}/>
                <Route path='dashboard' element={<Dashboard />}/>
            </Routes>


        </BrowserRouter>

       )
}

export default App
