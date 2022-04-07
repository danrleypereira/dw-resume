import React, { useEffect, useState } from 'react';

// pictures
import engineer from 'assets/engineer1013_1265.png';
import educator from 'assets/educator1013_1267.png';
import citizen from 'assets/citizen1013_1266.png';

import './personas.css'

const cards = [
    {
        picture: engineer,
        persona: "Engenheiro",
    },
    {
        picture: educator,
        persona: "Educador",
    },
    {
        picture: citizen,
        persona: "Cidadão",
    }
]


const PersonasSlider = () => {
    const [currentPersona, setCurrentPersona] = useState(0)
    const [nextPersona, setNextPersona] = useState(1)

    useEffect(() => {
        console.log("effect");
        // interval(undefined)

        const interval = setInterval(() => {
            if ((nextPersona + 1) === cards.length) { setCurrentPersona(nextPersona); setNextPersona(0); }
            else {
                setCurrentPersona(nextPersona);
                setNextPersona(nextPersona + 1)
            }
        }, 1000);
        return () => clearInterval(interval);
        // timer()
    }, [])

    useEffect(() => {
        console.log(currentPersona);
        const interval = setInterval(() => {
            if ((nextPersona + 1) === cards.length) { setCurrentPersona(nextPersona); setNextPersona(0); }
            else {
                setCurrentPersona(nextPersona);
                setNextPersona(nextPersona + 1)
            }
        }, 1000);
    }, [currentPersona])

    const interval = (stop: string | undefined) => {
        const interval = setInterval(() => {
            if ((nextPersona + 1) === cards.length) { setCurrentPersona(nextPersona); setNextPersona(0); }
            else {
                setCurrentPersona(nextPersona);
                setNextPersona(nextPersona + 1)
            }
        }, 3000)
        if (stop != undefined) clearInterval(interval)

    }

    const timer = () => {
        setTimeout(() => {
            if ((nextPersona + 1) === cards.length) { setCurrentPersona(nextPersona); setNextPersona(0); }
            else {
                setCurrentPersona(nextPersona);
                setNextPersona(nextPersona + 1)
            }
        }, 2000)
    }

    return (
        <div className="persona-slider scene">
            <div className='cube'>
                <div className='persona face front'>
                    <h1 className='persona-title'>{cards[currentPersona].persona}</h1>
                    <img className='img-flex'
                        src={cards[currentPersona].picture}
                        alt={cards[currentPersona].persona} />
                    <div className='card-body'>
                        ouioskl kljaslkfdj oiuwoilks oialkj kladjsfklaowljdiofaj; llosljalksi
                    </div>
                </div>
                {/* <div className="face right">back</div> */}
                {/* <div className='persona face back'>
                    <h1 className='persona-title'>{cards[nextPersona].persona}</h1>
                    <img className='img-flex'
                        src={cards[nextPersona].picture}
                        alt={cards[nextPersona].persona} />
                    <div className='card-body'>
                        ouioskl kljaslkfdj oiuwoilks oialkj kladjsfklaowljdiofaj; llosljalksi
                    </div>
                </div> */}
                {/* <div className="face left">left</div>
                <div className="face top">top</div>
                <div className="face bottom">bottom</div> */}
            </div>
            {/* {
                cards.map((card, index) => {
                    return (
                        <div key={index}>
                            <img
                                src={card.picture}
                                alt={card.persona} />
                        </div>
                    )
                })
            } */}
        </div>
    );
}

export default PersonasSlider;



