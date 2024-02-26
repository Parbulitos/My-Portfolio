import esString from "../strings/es.json"
export default function InfoTile({isFirstTile, isSecondTile}){

    return(
        <div className="w-full h-full mono text-white text-lg backdrop-blur-md backdrop-brightness-[25%] rounded-lg p-9 py-6 ">
            {isFirstTile &&
                <div className="flex flex-col gap-3">
                    <p>
                        {[esString.name, esString.lastName]}
                    </p>
                    <p className="text-custom-lila">
                        {esString.birthDate}
                    </p>
                    <p>
                        {esString.location}
                    </p>
                    <p className="gap-3">
                        {[esString.graduateAt, esString.degree, esString.at, esString.college,". ", esString.interestedAt, esString.fieldOfInterest, esString.descriptionEnding,"."]}
                    </p>
                </div>
            }
            {isSecondTile &&
                <div className="flex flex-col">
                    <code>
                        <span className="text-custom-lila">{esString.languages}{": {"}</span>
                        <br/>
                        <span className="ml-8">{esString.spanish}{": "}{esString.native}</span>
                        <br/>
                        <span className="ml-8">{esString.english}{": "}{esString.veryHigh}</span>
                        <br/>
                        <span className="ml-8">{esString.valencian}{": "}{esString.veryHigh}</span>
                        <br/>
                        <span className="ml-8">{esString.german}{": "}{esString.low}</span>
                        <br/>
                        <span className="text-custom-lila">{"}"}</span>
                    </code>
                    <code>
                        <span className="text-custom-lila">{esString.studies}{":"}{" {"}</span>
                        <br/>
                        <span className="ml-8">{esString.college}</span>
                        <br/>
                        <span className="ml-8">{esString.tuCollege}</span>
                        <br/>
                        <span className="text-custom-lila">{"}"}</span>
                    </code>
                </div>
            }
        </div>
    )
}