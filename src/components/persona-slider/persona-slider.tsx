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

    useEffect(() => {
        const interval = setInterval(() => {
            const nextPersona = currentPersona + 1
            if ((nextPersona) === cards.length) setCurrentPersona(0)
            else {
                setCurrentPersona(nextPersona);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [currentPersona])

    return (
        <div className="persona-slider">
            <div className='persona'>
                <div className='persona-title'>
                    <h1>{cards[currentPersona].persona}</h1>
                </div>
                <img className='img-flex'
                    src={cards[currentPersona].picture}
                    alt={cards[currentPersona].persona} />
            </div>
        </div>
    );
}

export default PersonasSlider;



