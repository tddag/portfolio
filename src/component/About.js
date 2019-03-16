import React, { Component } from 'react';
import './About.styles.css';

require('./../assets/images/IMG_7964.JPG');
class About extends Component {

    render() {
        return (
            <div>
                <div class="about-img">
                    <div class="flowing-text">
                        <strong> HEY, I'M TAM DANG</strong>
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