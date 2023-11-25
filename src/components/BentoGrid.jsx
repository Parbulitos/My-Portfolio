import Tech from "./Tech.jsx";
import React, {useRef, useEffect, useState} from "react";

export default function BentoGrid(){

    return(
        <div id="mainBentoGridContainer" className="w-full grid justify-center grid-cols-4 gap-4 p-6 animate-fade animate-delay-150">
            <div className="animate-jump-in animate-ease-in-out animate-delay-100">
                <Tech url="../../public/HTMLLogo.png" alt="HTML Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-200">
                <Tech url="../../public/CSSLogo.png" alt="CSS Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-300 col-span-2">
                <Tech url="../../public/ReactLogo.png" alt="React Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-[180ms] col-span-2">
                <Tech url="../../public/JavaLogo.png" alt="Java Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150">
                <Tech url="../../public/JavaScriptLogo.png" alt="JavaScript Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150">
                <Tech url="../../public/TailwindLogo.png" alt="Tailwind Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-300 col-span-3">
                <Tech url="../../public/SpringLogo.png" alt="Spring Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150">
                <Tech url="../../public/GitLogo.png" alt="Git Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150">
                <Tech url="../../public/MySQLLogo.png" alt="MySQL Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150 col-span-2">
                <Tech url="../../public/AWSLogo.png" alt="AWS Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-[150ms]">
                <Tech url="../../public/PostgreSQLLogo.png" alt="PostgreSQL Logo"/>
            </div>

        </div>
    )
}