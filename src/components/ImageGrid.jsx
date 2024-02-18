export  default function ImageGrid({variant}){
    return(
        <div className="w-full h-full">
            {variant === "1" &&
                <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-6 w-full h-full">
                    <div className="w-full h-full bg-slate-400 rounded-lg overflow-hidden relative">
                        <img src="../../public/DENA0769.JPG" className="absolute -top-10"/>
                    </div>
                    <div className="w-full h-full bg-slate-400 rounded-lg overflow-hidden relative">
                        <img src="../../public/DENA0740.JPEG" className="absolute -top-44"/>
                    </div>
                    <div className="w-full h-full bg-slate-400 row-span-2 rounded-lg overflow-hidden relative">
                        <img src="../../public/IMG_3827.jpg"/>
                    </div>
                </div>
            }{variant === "2" &&
            <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-6 w-full h-full">
                <div className="w-full h-full bg-slate-400 row-span-2 rounded-lg overflow-hidden relative">
                    <img src="../../public/IMG_1368.JPG" className="absolute -top-20"/>
                </div>
                <div className="w-full h-full bg-slate-400 rounded-lg overflow-hidden relative">
                    <img src="../../public/IMG_3855.jpg" className="absolute -top-10"/>
                </div>
                <div className="w-full h-full bg-slate-400 rounded-lg overflow-hidden relative">
                    <img src="../../public/IMG_3556.jpg" className="absolute -top-4"/>
                </div>
            </div>
        }
        </div>
    )
}