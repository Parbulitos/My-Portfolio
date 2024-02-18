import Header from "../components/Header.jsx";
import ProfileImgHolder from "../components/ProfileImgHolder.jsx";
import InfoLanding from "../components/InfoLanding.jsx";
import SocialHolder from "../components/SocialHolder.jsx";
import background from "../../public/background.jpg"
import InfoTile from "../components/InfoTile.jsx";
import ImageGrid from "../components/ImageGrid.jsx";
import esString from "../strings/es.json"

export default function Home(){
    return(
        <div className="h-screen overflow-auto">
            <div id="lilaBackground" className="w-full h-screen bg-custom-lila p-2 snap-center">
                <div id="blackBackground" className="w-full h-full relative z-10 rounded-t-md"
                     style={{backgroundImage: `url(${background})`}}>
                    <div id="filterDiv"
                         className="w-full h-full backdrop-blur-2xl backdrop-brightness-[20%] rounded-t-md">
                        <div id="midFrame" className="max-w-screen-lg h-full mx-auto flex flex-col items-center">
                            <Header/>
                            <ProfileImgHolder/>
                            <InfoLanding/>
                            <SocialHolder/>
                            <p className="mono flex text-2xl text-white mt-28"><p
                                className="text-custom-lila">cechavarne</p>@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen flex flex-col bg-custom-lila p-2 items-center justify-center snap-center gap-3">
                <div className="w-full max-w-[1400px] flex flex-col gap-3">
                    <p className="mono text-6xl w-full text-start px-12 font-bold">{esString.aboutMe}</p>
                    <div className="grid grid-cols-2 gap-6 w-full px-12 max-w-[1400px]">
                        <div className="w-full h-[350px] mx-auto rounded-lg bg-cover bg-center"
                             style={{backgroundImage: `url(${background})`}}>
                            <InfoTile isFirstTile={true}/>
                        </div>
                        <div className="w-full h-[350px] mx-auto rounded-lg ">
                            <ImageGrid variant={"1"}/>
                        </div>
                        <div className="w-full h-[350px] mx-auto rounded-lg">
                            <ImageGrid variant={"2"}/>
                        </div>
                        <div className="w-full h-[350px] mx-auto rounded-lg bg-cover bg-center"
                             style={{backgroundImage: `url(${background})`}}>
                            <InfoTile isSecondTile={true}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}