import React from 'react';
import logo from '../../assets/logo.svg';
import './about.css';

import AsideLinks from '../../components/navigation/aside-links';

function About() {
  return (
      <div className="wrap-div">
        <div className="aside">
            <AsideLinks/>
        </div>
        <div className="about">
            <p>jkljkldsfakljsfdakjlfdsajk lkjafdskljadsfkljçasfd
                kljadsflkjçafdsadsflkjçjadsflkjç
                kljdsfalkjfadsdsfaflkjçjafdskljç
                kjlfdsakljadsdsakljfsdakljfdsakljfdsakjlfdasjklfdasjkl
                kjlfsdalsadkljfsklsdkaljsjklsfdjklfdsjkkljfdljkafl
                jafsjkfakljafdfaslkjasdlkjdfaslkjfadslkjçadfslkjçadfsçalkjdsçklajdfs
                kjalflaljkçalafslakjfdslkjçafdslkjçafdslkjçafsdlk
            </p>
            <h1>Serviços</h1>
        
        </div>
    </div>
  );
}

export default About;