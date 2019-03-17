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
                    <p> I am currently in the final semester of Computer Programming Analyst at George Brown College.
                        My specialities are web development and mobile development using most popular technologies such as React, Angular,
                        Node.js, MongoDB. I'm addicted to new technologies and interested in how things implemented. In the mean time, I work on side project
                        and learn about new languages or frameworks.  
                    </p>
                    <br/> <br/>
                    <h1> My life motto: "Carpe Diem" </h1>
                    <p> I believe that I am a hard worker who takes pride in my accomplishments whether it be something big or small.
                        If I focus my mind on something I can accomplish just about anything. I believe that achieving goals that challenge me are
                        the ones that give me the biggest sense of accomplishment and fullfilment.
                    </p>
                    <br/>
                    <p> As I am about to finish the final semester at George Brown College, I can look at my past courses at see how much I have learned.
                        What I would like to do when I graduate is work for a software company. I want to work as a software developer for 2-3 years, delivering high 
                        quality programs. After that, I want to manage my own start-up that I would be working for. Even though I could create my venture straight out of school, 
                        I think that it is important to understand how the operation works from multiple view points. This is also give me the opportunity to see what I enjoy doing the most. 
                    </p>
                </div>
                
            </div>
        )
    }
}

export default About