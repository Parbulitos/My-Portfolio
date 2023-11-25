import React, {useEffect} from "react";

export default function Tech({url,alt,width}){
    return(
        <div id="mainTechContainer" className="flex items-center justify-center bg-slate-800 rounded-2xl p-4 hover:drop-shadow-dark hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer bg-opacity-70 border-[0.5px] border-gray-600">
            <img src={url} alt={alt} className="lg:h-36 rounded-md h-24 object-contain"/>
        </div>
    )
}