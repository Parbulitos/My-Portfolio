import {Route, Routes} from 'react-router-dom';
import Home from "./views/Home.jsx";
import SecondView from "./views/SecondView.jsx";
import Header from "./components/Header.jsx";
export default function App(){

    return(
        <>
            <div className="w-full h-full bg-dark-background">
                <div className="w-full h-full">
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/SecondView" element={<SecondView/>}></Route>
                    </Routes>
                </div>
            </div>
        </>
    )
}