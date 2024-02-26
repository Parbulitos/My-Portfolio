import catalogo from "../../public/Catálogo.png"

export default function VolumePreview(){
    return(
        <div id="proyectPreviewContainer" className="w-4/5 min-w-[600px] max-w-[800px] border-2 border-white aspect-video rounded-md mt-14 flex">
            <div className="grid grid-cols-6 gap-2 w-full h-full">
                <div className="bg-slate-500 w-full h-full col-span-3 overflow-hidden">
                    <img src="../../public/Catálogo.png" alt="Catalogo" className="hover:scale-105 transition duration-300"/>
                </div>
                <div className="grid grid-rows-6 w-full h-full gap-2 col-span-3 overflow-hidden">
                    <div className="bg-slate-500 row-span-3 w-full relative overflow-hidden">
                        <img src="../../public/Inicial.png" alt="Catalogo"
                             className="hover:scale-105 transition duration-300"/>
                    </div>
                    <div className="grid grid-cols-2 w-full gap-2">

                    </div>
                </div>
            </div>
        </div>
    )
}