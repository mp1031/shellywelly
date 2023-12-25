import React, { useState } from "react";
import '../styles/styles.css';
import '../styles/custom-styles.css';
import aboutme from '../assets/About-Me.jpg';

function About() {
    return (<section id="about">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>About Me</h2>
                        <div class="about-container">
                            <img id="about-me-pic" src={aboutme} alt="picture of me" />
                            <div id="about-me-text">
                                <p class="lead subtext">Hi, there!</p>
                                <p class="lead subtext">I'm currently a UC Berkeley student pursuing a degree in EE&CS. Throughout my college career, I have been interested in backend web development and connecting it to database for relevant data-fetching. I am also in a track to get the Certificate of Design Innovation, which has exposed me to all the interesting phenomenons that happen in art. I am an ardent advocate for prototyping and documentation, which I believe are fundamental tools for optimizing product design. I hope to bring some of my skills and values to the table. :) </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    </section>);
}

export default About;