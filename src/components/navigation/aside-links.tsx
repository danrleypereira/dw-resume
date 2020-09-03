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

function AsideLinks() {
    return(
        <div className="links-navigation">
            <a
                href="https://github.com/danrleywillyan"
                target="_blank"
                rel="noopener noreferrer"
                title="home link"
                className="nav-profile"
            >
                <div>
                    <img src={perfil} className="" alt="github icon/link" />
                    <h3>Danrley Pereira</h3>
                </div>
            </a>
            <a
                href="https://danrleywillyan-blog.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
                title="linkedin icon/link"
            >
                <div className="nav-link">
                    <img src={account} className="" alt="github icon/link" />
                    <h3>Euzinho</h3>
                </div>
            </a>
            <a
                href="https://www.instagram.com/danrleypereira/"
                target="_blank"
                rel="noopener noreferrer"
                title="instagram icon/link"
            >
                <div className="nav-link">
                    <img src={glasses} className="" alt="github icon/link" />
                    <h3>Habilidades</h3>
                </div>
            </a>
            <a
                href="https://www.facebook.com/danrleywillyan"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook icon/link"
            >
                <div className="nav-link">
                    <img src={briefcase} className="" alt="github icon/link" />
                    <h3>Projetos</h3>
                </div>
            </a>
            <a
                href="https://www.facebook.com/danrleywillyan"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook icon/link"
            >
                <div className="nav-link">
                    <img src={telephone} className="" alt="github icon/link" />
                    <h3>Contato</h3>
                </div>
            </a>
            <a
                href="https://www.facebook.com/danrleywillyan"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook icon/link"
            >
                <div className="nav-link">
                    <img src={resume} className="" alt="github icon/link" />
                    <h3>Resumé PDF</h3>
                </div>
            </a>
            <div className="">
                <a
                    className="block-a"
                    href="https://github.com/danrleywillyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="github icon/link"
                >
                    <img src={github} className="social-midia-icon spin" alt="github icon/link" />
                </a>
                <a
                    className="block-a"
                    href="https://www.linkedin.com/in/danrley-willyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="linkedin icon/link"
                >
                    <img src={linkedin} className="social-midia-icon" alt="linkedin icon/link" />
                </a>
                <a
                    className="block-a"
                    href="https://www.instagram.com/danrleypereira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="instagram icon/link"
                >
                    <img src={instagram} className="social-midia-icon" alt="instagram icon/link" />
                </a>
                <a
                    className="block-a"
                    href="https://www.facebook.com/danrleywillyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="facebook icon/link"
                >
                    <img src={facebook} className="social-midia-icon spin" alt="facebook icon/link" />
                </a>
            </div>
        </div>
    )
}

export default AsideLinks;

