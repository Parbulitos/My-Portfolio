import Header from "../components/Header.jsx";
import ProfileImgHolder from "../components/ProfileImgHolder.jsx";
import InfoLanding from "../components/InfoLanding.jsx";
import SocialHolder from "../components/SocialHolder.jsx";

export default function Home(){
    return(
        <div id="lilaBackground" className="w-full h-screen bg-custom-lila p-2">
            <div id="blackBackground" className="w-full h-full bg-custom-black">
                <div id="midFrame" className="max-w-screen-lg h-full mx-auto flex flex-col items-center">
                    <Header/>
                    <ProfileImgHolder/>
                    <InfoLanding/>
                    <SocialHolder/>
                    <p className="mono flex mt-56 text-2xl text-white"><p className="text-custom-lila">cechavarne</p>@gmail.com</p>
                </div>
            </div>
        </div>
    )
}