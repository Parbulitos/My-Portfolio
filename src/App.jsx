import {Route, Routes} from 'react-router-dom';
import Home from "./views/Home.jsx";
import SecondView from "./views/SecondView.jsx";
import Header from "./components/Header.jsx";
export default function App(){

    return(
        <>
            <div className="w-full h-fit bg-dark-background bg-auto bg-fixed">
                <div className="w-full h-fit min-h-screen text-center">
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