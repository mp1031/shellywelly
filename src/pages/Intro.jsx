import React, { useState } from "react";
import '../styles/styles.css';
import '../styles/custom-styles.css';

import me from '../assets/Intro-Pic.png';
import resume from '../assets/Tae_Eun_Michelle_Park_Resume.pdf';

function Intro() {
    return (<div>
        <section id="intro">
            <div class="custom-intro position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div id ="intro-text">
                    <h1 id="hello"><i>Hello, </i></h1>
                    <div id="name-intro"> <span>I am</span> <span id="name">Michelle!</span></div>
                    <div id="bio">
                        <p>UC Berkeley student studying</p>
                        <p>Electrical Engineering & Computer Science</p>
                    </div>
                    <a class="btn btn-lg btn-dark resume" href={resume} download="Michelle_Park_Resume"><i class="fa fa-download"></i> Resume</a>
                </div>
                <img id="intro-pic" src={me} alt="shelly welly logo"/>
            </div>
        </section>
    </div>);
}

export default Intro;


