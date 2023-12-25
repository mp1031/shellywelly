import React, { useState } from "react";
import '../styles/styles.css';
import '../styles/custom-styles.css';

function Experience() {
    return (<div>
        <section id="experience">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>Experience</h2>
                        <div class="timeline">
                            <div class="exp-container exp-left">
                                <div class="exp-text">
                                    <h2 class="exp-title">May 2023 - Present</h2>
                                    <h2 class="exp-pos">Software Developer</h2>
                                    <h2 class="exp-loc"><i class="fa fa-map-marker"></i> Open Heart Kitchen</h2>
                                    <div class="exp-description">
                                        <ul>
                                            <li>Designing full stack web app for Open Heart Kitchen to manage employee work shifts</li>
                                            <li>Developing a dashboard, admin access model, and auto-assign shift algorithm for employees using React</li>
                                            <li>Building a mySQL and Express.js backend for data fetching, sorting, and editing functionalities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="exp-container exp-right">
                                <div class="exp-text">
                                <div class="exp-text">
                                    <h2 class="exp-title">Oct 2019 - Present</h2>
                                    <h2 class="exp-pos">Tutor</h2>
                                    <h2 class="exp-loc"><i class="fa fa-map-marker"></i> Private</h2>
                                    <div class="exp-description">
                                        <ul>
                                            <li>Creating a weekly lesson plan integrating visual resources, review/preview tactics, and educational games</li>
                                            <li>Teaching 10+ students in topics including elementary reading/math, pre-algebra, algebra 2, trig, and pre-calculus</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="exp-container exp-left">
                                <div class="exp-text">
                                    <h2 class="exp-title">March 2023 - Dec 2023</h2>
                                    <h2 class="exp-pos">Website Manager</h2>
                                    <h2 class="exp-loc"><i class="fa fa-map-marker"></i> FAST (Fashion And Student Trends)</h2>
                                    <div class="exp-description">
                                        <ul>
                                            <li>Managed FAST’s Instagram of over 3K followers to portray an array of styles among the Berkeley community</li>
                                            <li>Constructed a website that aligns with FAST values of inclusivity and boasts designs custom-made by students</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="exp-container exp-right">
                                <div class="exp-text">
                                <div class="exp-text">
                                    <h2 class="exp-title">May 2023 - Dec 2023</h2>
                                    <h2 class="exp-pos">Social Media Officer</h2>
                                    <h2 class="exp-loc"><i class="fa fa-map-marker"></i> SWE (Society of Women Engineers)</h2>
                                    <div class="exp-description">
                                        <ul>
                                            <li>Managed social media account through Canva + Figma designs to publicize support for women in STEM</li>
                                            <li>Participated in the secretary department to promote SWE events through monthly podcast episodes</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="exp-container exp-left">
                                <div class="exp-text">
                                    <h2 class="exp-title">Aug 2018 - May 2022</h2>
                                    <h2 class="exp-pos">Senior Mentor</h2>
                                    <h2 class="exp-loc"><i class="fa fa-map-marker"></i> VEX Competition Robotics</h2>
                                    <div class="exp-description">
                                        <ul>
                                            <li>Tested various types of metal, pneumatics and sensors to build a collaborative product</li>
                                            <li>Worked with CAD files and CNC routers to create custom polycarb pieces and optimize prototype design</li>
                                            <li>Qualified for the VEX World Championships 4x to showcase our team’s documentation process</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default Experience;