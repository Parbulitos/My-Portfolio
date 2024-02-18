// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export default function CharacterRandomizer({character}){
    const [randomCharacter, setRandomCharacter] = useState(getRandomCharacter());

    useEffect(() => {
        setRandomCharacter(getRandomCharacter)
        const intervalID = setInterval(function(){
                setRandomCharacter(getRandomCharacter)
            },80
        )
        //wait random time to set character
        setTimeout(function(){
            clearInterval(intervalID)
            setRandomCharacter(character)
            setTimeout(function(){
                const secondIntervalID = setInterval(function(){
                    const nestedIntervalID = setInterval(function(){
                        setRandomCharacter(getRandomCharacter)
                    },30)
                    setTimeout(function(){
                        clearInterval(nestedIntervalID)
                    },1000)
                    setTimeout(function(){
                        const nestedSecondIntervalID = setInterval(function(){
                            setRandomCharacter(getRandomCharacter)
                        },30)
                        setTimeout(function(){
                            clearInterval(nestedSecondIntervalID)
                            setRandomCharacter(character)
                        },(Math.floor(Math.random() * 10) + 1)*30)
                    },1000)
                },8000)
            },1000)
        },(Math.floor(Math.random() * 10) + 1)*100)

    }, []);

    function getRandomCharacter() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Puedes ajustar según tus necesidades
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    }

    return(
        <div className="text-custom-lila mono text-3xl">
            {randomCharacter}
        </div>
    )
}