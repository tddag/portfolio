import React, { Component } from 'react';
import './Capstone.styles.css';
import { Table } from 'reactstrap';

let capstoneImg = require('./../assets/images/capstone.jpg')
class Capstone extends Component {

    componentDidMount() {     
        let aboutBar = document.getElementById("aboutbar");
        let sticky = aboutBar.offsetTop;

        window.onscroll = function() {myFunction()};
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                aboutBar.classList.add("sticky")
              } else {
                aboutBar.classList.remove("sticky");
              }
        }     
    }

    render() {
        return (
            <div>
                <div class="experience-img">
                    <div class="flowing-center">
                        <strong> Capstone Project</strong>
                    </div>
                </div>
                <div class="content">
                    <div id="aboutbar" class="col-left">
                        <h2 class="title"> About </h2>
                        <a href="#projectvision"> PROJECT VISION</a>
                        <a href="#"> PROJECT REQUIREMENTS</a>
                        <a href="#"> PROJECT PLAN</a>
                        <a href="#"> REQUIREMENTS ANALYSIS AND DESIGN</a>
                        <a href="#"> WIREFRAMES/MOCK UPS</a>
                        <a href="#"> STATUS REPORTS</a>
                        <a href="#"> SYSTEM IMPLEMENTATION</a>
                    </div>
                    <div class="col-right">
                        <div class="col-right-content">
                            <h2 id="projectvision"> Project Vision</h2>
                            <h5> 1. Purpose</h5>
                            <p> This project is to establish a presence for JC Consulting.  The goal is to establish a web presence that will allow JC Consulting to have their operations run online.  This will enable them to broaden their operations and clients, both companies looking to hire new employees and potential workers looking for said jobs.  The current aim is to allow for both sides of the firm’s interests to create their own online profile and then be matched by JC Consulting in an easy and straightforward manner.</p>
                            <h5> 2. Scope </h5>
                            <ul>
                                <li> Responsive and friendly GUI </li>
                                <li> Login/logout and AUTH mechanisms</li>
                                <li> Auto-generated documents for both employers and employees</li>
                                <li> Current system analyzation and assessment</li>
                                <li> Website support and maintenance</li>
                                <li> Non-relational Database </li>                         
                            </ul>
                            <h5> 3. User Summary </h5>
                            <Table bordered>
                                <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Description</th>
                                    <th>Responsibitities</th>
                                    <th>Stakeholder</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> Administrators </td> 
                                    <td>Employees for JC Consulting responsible for the website/database</td>
                                    <td>Maintain system efficiency and solve any issues that might arise in the database. Keep database information up to date. Link clients with contractors.</td>
                                    <td>JC Consulting</td>
                                </tr>
                                <tr>
                                    <td>Clients</td> 
                                    <td>Companies looking to JC Consulting to find employees</td>
                                    <td>Enter job offers. Choose contractors from those connected from Administrators (or reject choices)</td>
                                    <td>Clients</td>
                                </tr>
                                <tr>
                                    <td>Contractors</td>
                                    <td>Individuals looking to JC Consulting to help them find work.</td>
                                    <td>Enter resumes and keep up to date. Inform of interest in particular job offers. Accept or reject connected opportunities</td>
                                    <td>Contractors</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div class="col-right-content"> 
                            <h2 id="projectrequirements"> Project Requirements</h2>
                        </div>
                        <div class="col-right-content"> </div>
                        <div class="col-right-content"> </div>
                        <div class="col-right-content"> </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Capstone