import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./Welcome/Welcome";

// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome/>} />
            </Routes>
        </BrowserRouter>
    )
}
