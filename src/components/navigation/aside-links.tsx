import React from 'react';
import perfil from '../../assets/perfil1-nav.png';

import telephone from '../../assets/navigation/telephone.png';
import glasses from '../../assets/navigation/glasses.png';
import account from '../../assets/navigation/account-50.png';
import briefcase from '../../assets/navigation/briefcase.svg';
import resume from '../../assets/navigation/resume-80.png';


import facebook from '../../assets/social-midias/facebook.svg';
import linkedin from '../../assets/social-midias/linkedin.svg';
import github from '../../assets/social-midias/github.svg';
import instagram from '../../assets/social-midias/instagram.svg';

import './navigation.css';

const items = [
    {
        href: "https://github.com/danrleywillyan",
        title: "home link",
        icon: perfil,
        alt: "",
        text: "Danrley Pereira"
    },
    {
        href: "https://danrleywillyan-blog.firebaseapp.com",
        title: "linkedin icon/link",
        icon: account,
        alt: "github icon/link",
        text: "Euzinho"
    },
    {
        href: "https://www.instagram.com/danrleypereira/",
        title: "instagram icon/link",
        icon: glasses,
        alt: "github icon/link",
        text: "Habilidades"
    },
    {
        href: "https://www.facebook.com/danrleywillyan",
        title: "facebook icon/link",
        icon: briefcase,
        alt: "github icon/link",
        text: "Projetos"
    },
    {
        href: "https://www.facebook.com/danrleywillyan",
        title: "facebook icon/link",
        icon: telephone,
        alt: "github icon/link",
        text: "Contato"
    },
    {
        href: "https://drive.google.com/file/d/1igtaG0Y6VysFgfO8Mw80EIuDYMKrw8ua/view?usp=sharing",
        title: "resume link",
        icon: resume,
        alt: "download de currículo",
        text: "Curriculum"
    }
]

const socialMidias = [
    {
        link: "https://github.com/danrleywillyan",
        name: "github icon/link",
        icon: github,
        spin: true
    },
    {
        link: "https://www.linkedin.com/in/danrley-willyan/",
        name: "linkedin icon/link",
        icon: linkedin,
        spin: false
    },
    {
        link: "https://www.instagram.com/danrleypereira",
        name: "instagram icon/link",
        icon: instagram,
        spin: false
    },
    {
        link: "https://www.facebook.com/danrleywillyan",
        name: "facebook icon/link",
        icon: facebook,
        spin: true
    }
]

function AsideLinks() {
    return (
        <div className="links-navigation">
            {
                items.map((item, index) => {
                    return (
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item.title}
                            className={index == 0 ? "nav-profile" : ""}
                        >
                            <div className={index == 0 ? "" : "nav-link"}>
                                <img src={item.icon} className="" alt={item.alt} />
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

