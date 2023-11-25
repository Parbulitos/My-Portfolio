import Home from "./views/Home.jsx";
import Line from "./components/Line.jsx";

export default function App(){

    return (
        <div id="background" className="bg-[url('../public/background.jpg')] bg-fixed bg-cover bg-no-repeat">
            <div id="mainAppContainer" className="w-full h-screen flex backdrop-blur-2xl  backdrop-brightness-[0.4] justify-center">
                <div id="mainViewContainer" className="w-[60%] h-screen overflow-y-scroll overflow-x-visible no-scrollbar">
                    <Home/>
                </div>
            </div>
        </div>
    )
}