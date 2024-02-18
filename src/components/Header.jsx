import HeaderButton from "./HeaderButton.jsx";

export default function Header(){

    return(
        <div id="mainHeaderContainer" className="w-fit h-fit text-white flex gap-20 max-w-2xl mt-20">
            <HeaderButton label={"HOME"}/>
            <HeaderButton label={"PROYECTOS"}/>
            <HeaderButton label={"EXPERIENCIA"}/>
        </div>
    )
}