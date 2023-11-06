export default function Home(){

    return(
        <div className="h-screen static overflow-x-hidden overflow-y-scroll snap-y snap-mandatory no-scrollbar">
            <div className="h-screen snap-start relative">
                <div className="w-full h-full absolute bg-gray-600 opacity-50 z-20">

                </div>
                <div className="">
                    <div className="h-screen relative bg-galery1 bg-cover animate-get-in z-10">

                    </div>
                </div>
            </div>
            <div className="h-screen bg-cyan-400 bg-opacity-50 backdrop-blur-md snap-start">

            </div>
            <div className="w-4/5 h-screen min-h-[70vh] inline-block border border-b-0 border-gray-400 rounded-t-2xl backdrop-blur-md shadow-content snap-start">

            </div>
        </div>
    )
}