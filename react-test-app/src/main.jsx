// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import {store} from "./store/store.js";
import {Provider} from "react-redux";
import {AuthenProvider} from "./context/AuthenContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
        <AuthenProvider>
            <App />
        </AuthenProvider>
    </Provider>
  // </React.StrictMode>,
)
