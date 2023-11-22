export default function Home(){
    return(
        <div id="mainHomeContainer" className="w-full h-fit px-4 py-4 overflow-visible">
            <div id="pictureAndNameContainer" className="w-[95%] ml-[5%] relative overflow-visible bg-slate-800 rounded-2xl justify-right">
                <img src="../../public/profilePicture.png" alt="Profile picture" className="w-[25%] h-auto -left-6 -top-3 absolute object-contain rounded-full"/>
                <div id="namesContainer" className="w-full h-full py-[5%] pl-[35%]">
                    <div id="name" className="text-white text-3xl">
                        Carlos Echavarne
                    </div>
                    <div id="username" className="text-gray-600 text-xl">
                        Parbulitos
                    </div>
                </div>
            </div>
        </div>
    )
}