import React, { useState } from "react";
import '../styles/styles.css';
import '../styles/custom-styles.css';
import email from '../assets/email.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Contact() {
    return (<div>
        <section id="contact">
            <div class="container px-4">
                <div class="row gx-4 justify-content-center">
                    <div class="col-lg-8">
                        <h2>Let's keep in touch!</h2>
                        <p class="lead">Feel free to reach out on any of these platforms if you have any inquiries:</p>
                        <div class="email">
                            <img class="email-pic" src={email} alt="email" />
                            <a class="contact-info">michelle.taeeun@berkeley.edu</a>
                        </div>
                        <div class="github">
                            <img class="contact-pic" src={github} alt="github" />
                            <a href="https://github.com/mp1031" class="contact-info">https://github.com/shellywelly</a>
                        </div>
                        <div class="linkedin">
                            <img class="contact-pic" src={linkedin} alt="linkedin" /> 
                            <a href="https://www.linkedin.com/in/tae-eun-park-4ab8bb237/" class="contact-info">https://www.linkedin.com/shellywelly</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

export default Contact;