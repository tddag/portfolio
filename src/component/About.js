import React, { Component } from 'react';
import './About.styles.css';

let profile = require('./../assets/images/profile4.JPG');
class About extends Component {

    render() {
        return (
            <div>
                <div class="about-img">
                    <div class="flowing-text">
                        <strong> Hey, I'm Tam Dang</strong> <br/>
                        <i> Full Stack Developer</i>
                    </div>
                </div>
                <div class="main">
                    <h1> Bio</h1>

                </div>
                
            </div>
        )
    }
}

export default About