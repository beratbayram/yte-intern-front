import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
import {ActivityProvider} from "./Home/ActivityContext";

export default function App() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/home" element={
                    <ActivityProvider>
                        <Home/>
                    </ActivityProvider>
                }/>
            </Routes>
        </BrowserRouter>
        <ToastContainer theme="colored" autoClose={2500}/>
    </>
}
