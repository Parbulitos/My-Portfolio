import ProfileImg from "../assets/MarcoDiaz.jpg"
export default function Header(){
    return(
        <div className="w-full px-6 py-2 flex items-center bg-emerald-500 border-solid bg-opacity-75 drop-shadow-darker">
            <div className="w-fit drop-shadow-dark rounded-full ">
                <img src={ProfileImg} className="w-18 aspect-square border-2 drop-shadow-md rounded-full hover:cursor-pointer hover:scale-small transition-transform duration-medium"/>
            </div>
            <div className="h-14 p-2 mx-2 flex items-center font-barlow text-3xl rounded hover:cursor-pointer transition ease-linear hover:text-slate-300 hover:shadow-dark hover:scale-small  duration-short">
                PROJECTS
            </div>
            <div className="h-14 w-auto p-2 mx-2 flex items-center font-barlow text-3xl rounded hover:cursor-pointer transition ease-linear hover:text-slate-300 hover:shadow-dark hover:scale-small  duration-short">
                ABOUT ME
            </div>
        </div>
    )
}