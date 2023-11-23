
export default function Header(){
    return(
        <div id="mainHeaderContainer" className="w-full flex justify-center">
            <div id="pictureAndNameContainer" className="w-full h-fit ml-[2%] max-w-2xl relative rounded-r-[20px] flex bg-slate-800 bg-opacity-50 overflow-visible border-[0.5px] border-gray-600 animate-fade-right">
                <img src="../../public/profilePicture.png" alt="Profile picture" className="w-32 h-auto absolute -left-[20px] -top-[20px] rounded-full hover:drop-shadow-dark cursor-pointer transition duration-100 ease-in-out"/>
                <div id="namesContainer" className="ml-32 py-3 ">
                    <div id="name" className="text-white text-3xl animate-fade-right animate-delay-200">
                        Carlos Echavarne
                    </div>
                    <div id="username" className="text-gray-400 text-xl animate-fade-right animate-delay-300">
                        Full stack web developer
                    </div>
                </div>
            </div>
        </div>
    )
}