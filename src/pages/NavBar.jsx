import React, { useState } from "react";
import '../styles/styles.css';
import '../styles/custom-styles.css';
import logo from '../assets/Logo.png';

function NavBar() {
    return (<div>
        <nav class="navbar navbar-expand-lg bg-custom fixed-top" id="mainNav">
                <div class="container px-4">
                    <a class="navbar-brand" href="#page-top"><img height="50" src={logo} alt="shelly welly logo"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link text-light" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link text-light" href="#skills">Skills</a></li>
                            <li class="nav-item"><a class="nav-link text-light" href="#experience">Experience</a></li>
                            <li class="nav-item"><a class="nav-link text-light" href="#projects">Projects</a></li>
                            <li class="nav-item"><a class="nav-link text-light" href="#blog">Blog</a></li>
                            <li class="nav-item"><a class="nav-link text-light" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>);
}

export default NavBar;