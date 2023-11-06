import ProfileImg from "../assets/MarcoDiaz.jpg"
import GithubLogo from "../assets/GithubLogo.png"
export default function Header(){
    return(
        <div className="w-full h-fit px-6 py-2 flex justify-between fixed z-40 font-ubuntuMono items-center bg-emerald-500 border-solid bg-opacity-75 drop-shadow-darker">
            <div className="flex items-center">
                <div className="h-full rounded-full w-fit">
                    <img src={ProfileImg} className="h-14 aspect-square border rounded-full hover:cursor-pointer transition ease-linear hover:shadow-darker hover:scale-small duration-short" alt="Parbulitos Logo"/>
                </div>
                <div className="h-full p-2 mx-2 flex items-center text-3xl font-semibold rounded hover:cursor-pointer transition ease-linear hover:text-slate-300 hover:shadow-dark hover:scale-small duration-short">
                    PROJECTS
                </div>
                <div className="h-4/5 p-2 mx-2 flex items-center text-3xl font-semibold rounded hover:cursor-pointer transition ease-linear hover:text-slate-300 hover:shadow-dark hover:scale-small duration-short">
                    ABOUT ME
                </div>
            </div>
            <div>
                <img src={GithubLogo} className="h-12 rounded-full hover:cursor-pointer transition ease-linear hover:shadow-dark hover:scale-small duration-short" alt="GithubLogo"/>
            </div>
        </div>
    )
}