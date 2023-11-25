
export default function Header(){
    return(
        <div id="mainHeaderContainer" className="flex relative inset-x-0 justify-center">
            <div id="pictureAndNameContainer" className="w-full relative rounded-xl overflow-auto p-10 animate-fade-right animate-delay-100">
                <div id="tileContainer" className="max-w-2xl relative mx-auto flex items-center gap-6 rounded-xl bg-slate-800 bg-opacity-50 border-[0.5px] border-gray-600">
                    <img className="w-36 absolute rounded-full -left-[20px] hover:drop-shadow-dark cursor-pointer transition duration-300 ease-in-out" src="../../public/profilePicture.png" alt="Profile Picture"/>
                    <div className="flex flex-col py-5 pl-36">
                        <div className="text-slate-200 text-2xl animate-fade-right animate-delay-150">Carlos Echavarne</div>
                        <div className="text-slate-400 text-xl animate-fade-right animate-delay-[250ms]">Full Stack Web Developer</div>
                    </div>
                </div>
            </div>
        </div>
    )
}