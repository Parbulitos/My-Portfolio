import Background from "../components/Background.jsx";
import VolumePreview from "../components/VolumePreview.jsx";

export default function Proyects(){
    return(
        <Background child={
            <div className="w-full h-full flex justify-center">
                <div className="flex flex-col w-3/5 items-center">
                    <p className="mono text-8xl text-white mt-32 h-fit text-center">PROYECTOS</p>
                    <VolumePreview/>

                </div>
            </div>}>
        </Background>
    )

}