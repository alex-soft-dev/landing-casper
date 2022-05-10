

import * as React from 'react';

import Img1 from '../assets/img/about/rolling/guard.png';
import Img2 from '../assets/img/about/rolling/rect.png';
import Img3 from '../assets/img/about/rolling/rocket.png';

function RotateText ({ text, image }) {
    return (
        <div className='roll-item my-5'>
            <div id="circle">
                <svg version="1.1" viewBox="0 0 400 400">
                    <defs>
                        <path id="circlePath" d="M 200,200 m -150,0 a 150,150 0 0,1 300,0 a 150,150 0 0,1 -300,0"/>
                    </defs>
                    <g>
                        <text fill="#FFF">
                            <textPath xlinkHref="#circlePath">{text}</textPath>
                        </text>
                    </g>
                </svg>
            </div>
            <img className='img-mark' src={image}/>
        </div>
    );
}

function About() {
  return (
    <section className='about my-5 py-5' id="about">
        <div className='over'/>
        <div className='container'>
            <div className='row header'>
                <h5 className='title'>About us</h5>
                <p className='description mt-5'>CasperPad is the first Casper-supported decentralized Launchpad built to launch next level projects on the Casper Network.</p>
                <div className='row rolls my-3 justify-content-center'>
                    <RotateText text="CASPER-SUPPORTED LAUNCHPAD" image={Img1}/>
                    <RotateText text="FAIR ALLOCATION SYSTEM" image={Img2}/>
                    <RotateText text="STRICT LAUNCHPAD SYSTEM" image={Img3}/>
                </div>
            </div>
            <div className='row bottom-para my-5'>
                <div className='left-para col-md-4 mt-5'>
                    <h6 className='title'>Who We Are</h6>
                    <p className='description mt-4'>
                        We are the first key to the Casper Network Ecosystem. 
                        Once we unlock this door, projects can start launching 
                        on the Casper Network through our extensive IDO network
                    </p>
                </div>
                <div className='right-para col-md-4 mt-5'>
                    <h6 className='title'>What We Do</h6>
                    <p className='description mt-4'>
                        We will assist in Blockchain development, marketing, strategies, and listings. 
                        Launching through CasperPad empowers your projects and gives it high legitimacy
                        if you pass our screening systems.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
