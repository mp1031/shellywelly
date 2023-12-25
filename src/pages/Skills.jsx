import React, { useState } from "react";
import '../styles/styles.css';
import '../styles/custom-styles.css';
import Stars from "../components/Stars";

function Skills() {
    
    return (<div>
        <section id="skills">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>Skills/Interests</h2>

                        <div class="skills-organize">
                            <div class="left-skills">
                                <p class="lead">Java</p>

                                <div class="skills-container">
                                    <div class="skills java">70%</div>
                                </div>

                                <p class="lead skill-text">Python</p>
                                <div class="skills-container">
                                    <div class="skills python">70%</div>
                                </div>

                                <p class="lead skill-text">Data Structures</p>
                                <div class="skills-container">
                                    <div class="skills data">70%</div>
                                </div>

                                <p class="lead skill-text">HTML/CSS</p>
                                <div class="skills-container">
                                    <div class="skills html-css">60%</div>
                                </div>
                            </div>
                            <div class="right-skills">
                                <p class="lead">React.js</p>
                                <div class="skills-container">
                                    <div class="skills react">65%</div>
                                </div>

                                <p class="lead skill-text">mySQL</p>
                                <div class="skills-container">
                                    <div class="skills mySQL">65%</div>
                                </div>

                                <p class="lead skill-text">MongoDB</p>
                                <div class="skills-container">
                                    <div class="skills mongoDB">65%</div>
                                </div>

                                <p class="lead skill-text">JavaScript</p>
                                <div class="skills-container">
                                    <div class="skills js">55%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default Skills;