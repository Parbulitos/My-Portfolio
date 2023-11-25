import Header from "../components/Header.jsx";
import Line from "../components/Line.jsx";
import FirstSpan from "../components/FirstSpan.jsx";
import SecondSpan from "../components/SecondSpan.jsx";

export default function Home(){
    return(
        <div id="mainHomeContainer" className="w-full h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory">
            <div id="firstSpanDiv" className="w-full h-screen snap-start pt-[20%]">
                <FirstSpan/>
            </div>
            <div id="secondSpanDiv" className="w-full h-screen snap-start flex items-center justify-center">
                <SecondSpan/>
            </div>
        </div>
    )
}