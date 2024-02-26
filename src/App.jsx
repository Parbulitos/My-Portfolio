import Home from "./pages/Home.jsx";
import Proyects from "./pages/Proyects.jsx";
import "@fontsource/jetbrains-mono"; // Defaults to weight 400
import "@fontsource/jetbrains-mono/400.css"; // Specify weight
import "@fontsource/jetbrains-mono/400-italic.css";
import {Routes, Route} from "react-router-dom";

export default function App(){

    return (
        <div className="overflow-hidden">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/proyects" element={<Proyects/>}/>
            </Routes>
        </div>
    )
}