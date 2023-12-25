import React, { useState } from "react";
import '../styles/styles.css';
import '../styles/custom-styles.css';

function Stars(props) {
    return (<div id="stars"> 
        <span class="skills-text">{props.text}</span>
        <span class="skills-stars">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
        </span>
    </div>);
}

export default Stars;