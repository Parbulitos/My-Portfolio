import HeaderButton from "./HeaderButton.jsx";
import strings from "../strings/es.json"

export default function Header(){

    return(
        <div id="mainHeaderContainer" className="w-fit h-fit text-white flex gap-20 max-w-2xl mt-20">
            <HeaderButton label={strings.home}/>
            <HeaderButton label={strings.projects}/>
            <HeaderButton label={strings.experience}/>
        </div>
    )
}