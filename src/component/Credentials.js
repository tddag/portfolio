import React, { Component } from 'react';
import './Credentials.styles.css';

require('./../assets/images/bridge.jpg');
class Credentials extends Component {
    render() {
        return (
            <div>
                <div class="credentials-img">
                    <div class="credentials-flowing-text">
                        <strong> CREDENTIALS</strong>
                    </div>

                </div>
                <div class="main">
                    <h1> Certificates/Degrees</h1>
                    <p> This certificate is to verify the knowledge of computer hardware and software, as well as operating systems, networking concepts, mobile devices, IT security, and troubleshooting</p>
                    <div class="ctfc-img">
                        <a href="https://1drv.ms/b/s!Ap4a76M6iNAWiRgPSswUPZDPaH_G" target="_blank">
                            <img src={require("./../assets/images/itessentials.png")}></img>
                        </a>
                    </div>
                    <br/>
                    <h1> Academic Record/Transcript | 3.87/4.00 </h1>
                    <p> During past 5 semesters, performed and maintained a good studying status</p>
                    <div class="ctfc-img">
                        <a href="https://1drv.ms/u/s!Ap4a76M6iNAWhY9sRTaqcCo_3McI4Q" target="_blank">
                            <img src={require("./../assets/images/record.png")}></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Credentials