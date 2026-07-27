import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// pictures
import engineer from 'assets/engineer-min.png';
import educator from 'assets/educator-min.png';
import citizen from 'assets/citizen-min.png';

import './personas.css'

const cards = [
    {
        picture: engineer,
        key: "engineer",
    },
    {
        picture: educator,
        key: "educator",
    },
    {
        picture: citizen,
        key: "citizen",
    }
]


const PersonasSlider = () => {
    const { t } = useTranslation();
    const [currentPersona, setCurrentPersona] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const nextPersona = currentPersona + 1
            if ((nextPersona) === cards.length) setCurrentPersona(0)
            else {
                setCurrentPersona(nextPersona);
            }
        }, 4500);
        return () => clearInterval(interval);
    }, [currentPersona])

    const label = t(`personas.${cards[currentPersona].key}`);

    return (
        <div className="persona-slider">
            <div className='persona'>
                <div className='persona-title'>
                    <h1>{label}</h1>
                </div>
                <img className='img-flex'
                    loading="lazy"
                    src={cards[currentPersona].picture}
                    alt={label} />
            </div>
        </div>
    );
}

export default PersonasSlider;
