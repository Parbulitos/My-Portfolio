import CharacterRandomizer from "./CharacterRandomizer.jsx";

export default function InfoLanding(){
    return(
        <div className="w-full mt-8">
            <div className="flex w-fit mx-auto">
                <CharacterRandomizer character={"C"}/>
                <CharacterRandomizer character={"a"}/>
                <CharacterRandomizer character={"r"}/>
                <CharacterRandomizer character={"l"}/>
                <CharacterRandomizer character={"o"}/>
                <CharacterRandomizer character={"s"}/>
                <div className="w-4"></div>
                <CharacterRandomizer character={"E"}/>
                <CharacterRandomizer character={"c"}/>
                <CharacterRandomizer character={"h"}/>
                <CharacterRandomizer character={"a"}/>
                <CharacterRandomizer character={"v"}/>
                <CharacterRandomizer character={"a"}/>
                <CharacterRandomizer character={"r"}/>
                <CharacterRandomizer character={"n"}/>
                <CharacterRandomizer character={"e"}/>
                <div className="w-4"></div>
                <CharacterRandomizer character={"R"}/>
                <CharacterRandomizer character={"a"}/>
                <CharacterRandomizer character={"m"}/>
                <CharacterRandomizer character={"o"}/>
                <CharacterRandomizer character={"n"}/>
                <CharacterRandomizer character={"e"}/>
                <CharacterRandomizer character={"s"}/>
            </div>
            <p className="mono text-2xl text-center max-w-lg mx-auto text-white">Desarrollador de software, putero y estafador!</p>
        </div>
    )
}