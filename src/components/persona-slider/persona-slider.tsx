import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// pictures
import educatorSmall from 'assets/educator-480.webp';
import educator from 'assets/educator-800.webp';
import educatorLarge from 'assets/educator-1200.webp';
import citizenSmall from 'assets/citizen-480.webp';
import citizen from 'assets/citizen-800.webp';
import citizenLarge from 'assets/citizen-1200.webp';

import './personas.css'

const cards = [
    {
        picture: `${process.env.PUBLIC_URL}/static/media/engineer-800.24686784f37f.webp`,
        srcSet: `${process.env.PUBLIC_URL}/static/media/engineer-480.7a43f9b9068e.webp 480w, ${process.env.PUBLIC_URL}/static/media/engineer-800.24686784f37f.webp 800w, ${process.env.PUBLIC_URL}/static/media/engineer-1200.a1cd6534071f.webp 1013w`,
        width: 1013,
        height: 1265,
        key: "engineer",
    },
    {
        picture: educator,
        srcSet: `${educatorSmall} 480w, ${educator} 800w, ${educatorLarge} 1200w`,
        width: 1214,
        height: 1518,
        key: "educator",
    },
    {
        picture: citizen,
        srcSet: `${citizenSmall} 480w, ${citizen} 800w, ${citizenLarge} 1055w`,
        width: 1055,
        height: 1318,
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
                    loading="eager"
                    {...{ fetchpriority: currentPersona === 0 ? 'high' : 'auto' }}
                    decoding="async"
                    src={cards[currentPersona].picture}
                    srcSet={cards[currentPersona].srcSet}
                    sizes="(max-width: 991.98px) 70vw, min(70vw, 65.6vh)"
                    width={cards[currentPersona].width}
                    height={cards[currentPersona].height}
                    alt={label} />
            </div>
        </div>
    );
}

export default PersonasSlider;
