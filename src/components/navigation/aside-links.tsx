import React from 'react';
import perfil from 'assets/perfil1-nav.jpeg';

import telephone from 'assets/navigation/telephone.png';
import glasses from 'assets/navigation/glasses.png';
import account from 'assets/navigation/account-50.png';
import briefcase from 'assets/navigation/briefcase.svg';
import resume from 'assets/navigation/resume-80.png';


// import facebook from 'assets/social-midias/facebook.svg';
// import linkedin from 'assets/social-midias/linkedin.svg';
// import github from 'assets/social-midias/github.svg';
// import instagram from 'assets/social-midias/instagram.svg';

import './navigation.css';
import { socialMidias } from 'components/social-midia-aside/aside-social-midia';

const items = [
    {
        href: "https://www.instagram.com/danrleypereira/",
        title: "instagram",
        icon: perfil,
        text: "Danrley Pereira"
    },
    {
        href: "https://danrleypereira.com/",
        title: "meu outro site",
        icon: account,
        text: "Euzinho"
    },
    {
        href: "https://www.linkedin.com/in/danrleypereira/",
        title: "linkedin",
        icon: glasses,
        text: "Habilidades"
    },
    {
        href: "https://github.com/danrleypereira",
        title: "github",
        icon: briefcase,
        text: "Projetos"
    },
    {
        href: "https://api.whatsapp.com/send?phone=5561994234712&text=Hey%2C%20I%20just%20found%20you%20on%20danrleypereira.com",
        title: "whatsapp",
        icon: telephone,
        text: "Contato"
    },
    {
        href: "https://drive.google.com/file/d/1ttJdxKq7AHNH7vfELLP7LU1qy5fabv3C/view?usp=sharing",
        title: "Curriculum",
        icon: resume,
        text: "Curriculum"
    }
]

function AsideLinks() {
    return (
        <div className="links-navigation">
            {
                items.map((item, index) => {
                    return (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item.title}
                            className={index === 0 ? "nav-profile" : ""}
                        >
                            <div className={index === 0 ? "" : "nav-link"}>
                                <img src={item.icon} className="" alt={item.title} />
                                <h3>{item.text}</h3>
                            </div>
                        </a>
                    )
                })
            }
            <div className="">
                {
                    socialMidias.map((midia, index) => {
                        return (
                            <a
                                className='block-a'
                                key={index}
                                href={midia.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={midia.name}
                            >
                                <img
                                    src={midia.icon}
                                    className={`social-midia-icon ${midia.spin && 'spin'}`}
                                    alt={midia.name}
                                />
                            </a>
                        )
                    })
                }
                {/* <a
                    className="block-a"
                    href="https://github.com/danrleywillyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="github icon/link"
                >
                    <img src={github} className="social-midia-icon spin" alt="github icon/link" />
                </a>*/}
            </div>
        </div>
    )
}

export default AsideLinks;

