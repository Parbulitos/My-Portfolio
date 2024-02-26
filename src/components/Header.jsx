import HeaderButton from "./HeaderButton.jsx";
import strings from "../strings/es.json"
import {useNavigate} from "react-router-dom";

export default function Header(){
    const navigate = useNavigate()
    return(
        <div id="mainHeaderContainer" className="w-fit h-fit text-white flex gap-20 max-w-2xl mt-20">
            <HeaderButton label={strings.home}/>
            <HeaderButton label={strings.projects} onClick={()=>{navigate("/proyects")}}/>
            <HeaderButton label={strings.experience}/>
        </div>
    )
}