import ProfileImg from "../assets/MarcoDiaz.jpg"
export default function Header(){
    return(
        <div className="w-full h-fit px-6 py-2 flex fixed z-40 font-ubuntuMono items-center bg-emerald-500 border-solid bg-opacity-75 drop-shadow-darker">
            <div className="h-full rounded-full">
                <img src={ProfileImg} className="h-18 aspect-square border rounded-full hover:cursor-pointer transition ease-linear hover:text-slate-300 hover:shadow-darker hover:scale-small duration-short" alt="Error loading resource"/>
            </div>
            <div className="h-full p-2 mx-2 flex items-center text-3xl font-semibold rounded hover:cursor-pointer transition ease-linear hover:text-slate-300 hover:shadow-dark hover:scale-small duration-short">
                PROJECTS
            </div>
            <div className="h-4/5 p-2 mx-2 flex items-center text-3xl font-semibold rounded hover:cursor-pointer transition ease-linear hover:text-slate-300 hover:shadow-dark hover:scale-small duration-short">
                ABOUT ME
            </div>
        </div>
    )
}