import background from "../../public/background.jpg";

export default function Background({child}){
    return (
        <div className="h-screen overflow-auto">
            <div id="lilaBackground" className="w-full h-screen bg-custom-lila p-2 snap-center">
                <div id="blackBackground" className="w-full h-full relative z-10 rounded-t-md"
                     style={{backgroundImage: `url(${background})`}}>
                    <div id="filterDiv"
                         className="w-full h-full backdrop-blur-2xl backdrop-brightness-[20%] rounded-t-md">
                        {child}
                    </div>
                </div>
            </div>
        </div>
    )
}