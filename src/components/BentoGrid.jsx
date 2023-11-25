import Tech from "./Tech.jsx";
import React, {useRef, useEffect, useState} from "react";

export default function BentoGrid(){

    return(
        <div id="mainBentoGridContainer" className="w-full grid justify-center grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:p-6 animate-fade animate-delay-150 ">
            <div className="animate-jump-in animate-ease-in-out animate-delay-100 lg:order-1 sm:order-1">
                <Tech url="../../public/HTMLLogo.png" alt="HTML Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-200 lg:order-2 order-2">
                <Tech url="../../public/CSSLogo.png" alt="CSS Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-300 col-span-2 lg:order-3 order-4">
                <Tech url="../../public/ReactLogo.png" alt="React Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-[180ms] col-span-2 lg:order-4 order-7">
                <Tech url="../../public/JavaLogo.png" alt="Java Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150 lg:order-5 order-3">
                <Tech url="../../public/JavaScriptLogo.png" alt="JavaScript Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150 lg:order-6 order-6">
                <Tech url="../../public/TailwindLogo.png" alt="Tailwind Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-300 col-span-3 lg:order-7 order-11">
                <Tech url="../../public/SpringLogo.png" alt="Spring Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150 lg:order-8 order-5">
                <Tech url="../../public/GitLogo.png" alt="Git Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150 lg:col-span-1 col-span-2 lg:order-9 order-8">
                <Tech url="../../public/MySQLLogo.png" alt="MySQL Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-150 lg:col-span-2 col-span-3 lg:order-10 order-10">
                <Tech url="../../public/AWSWhiteLogo.png" alt="AWS Logo"/>
            </div>
            <div className="animate-jump-in animate-ease-in-out animate-delay-[150ms] lg:order-11 order-9">
                <Tech url="../../public/PostgreSQLLogo.png" alt="PostgreSQL Logo"/>
            </div>

        </div>
    )
}