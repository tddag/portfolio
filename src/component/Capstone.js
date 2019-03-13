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
                        <a href="#projectrequirements"> PROJECT REQUIREMENTS</a>
                        <a href="#projectplan"> PROJECT PLAN</a>
                        <a href="#requirementsanalysis"> REQUIREMENTS ANALYSIS AND DESIGN</a>
                        <a href="#wireframes"> WIREFRAMES/MOCK UPS</a>
                        <a href="#wireframes"> SYSTEM IMPLEMENTATION</a>
                    </div>
                    <div class="col-right">
                        <div id="projectvision" class="col-right-content">
                            <h2> Project Vision</h2>
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
                            <Table bordered striped>
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
                        <div id="projectrequirements" class="col-right-content"> 
                            <h2> Project Requirements</h2>
                            <h5> 1. Business Context Diagram</h5>
                            <img src={require('../assets/images/contextdiagram.png')} alt="Context Diagram"></img>
                            <Table bordered>
                                <thead>
                                <tr>
                                    <th>Requirement Scope Area</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> JC Consulting Website </td> 
                                    <td> Area responsible for providing storage, analysis, recommendation to users. e.g: job positions, best fit candidate etc</td>
                                </tr>
                                </tbody>
                            </Table>

                            <Table bordered striped>
                                <thead>
                                <tr>
                                    <th>External Entity</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> JC Company </td> 
                                    <td> External area that collects user inputs, uses machine learning or other mechanisms to search for appropriate match</td>
                                </tr>
                                <tr>
                                    <td> Candidate </td> 
                                    <td> Candidate or job seeker who can enter input, view, download or delete related data</td>
                                </tr>
                                <tr>
                                    <td> Client </td> 
                                    <td> Client or employer who can enter input, view, download or delete related data</td>
                                </tr>
                                </tbody>
                            </Table>

                            <Table bordered striped>
                                <thead>
                                <tr>
                                    <th>Information Flows</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> Candidate Data </td> 
                                    <td> Any data or document in an electronic format that the candidate can upload, download, store, view or delete through JC Consulting Website. E.g. resume, work experience, skills, etc</td>
                                </tr>
                                <tr>
                                    <td> Client Data </td> 
                                    <td> Any data or document in an electronic format that the client can upload, download, store, view or delete through JC Consulting Website. E.g. job positions, job requirement, etc</td>
                                </tr>
                                <tr>
                                    <td> Processed Data </td> 
                                    <td> Data which has been analyzed and generated by JC Company. Candidate and Client can view their processed data. E.g. list of suitable jobs/candidates</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div id="projectplan" class="col-right-content">
                            <h2> Project Plan</h2>
                            <h5> 1. Task Listing (WBS- Work Breakdown Structure </h5>
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th> Reference </th>
                                        <th> Tasks </th>
                                        <th> Duration</th>
                                        <th> Dependency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> A </td>
                                        <td> JC Consulting Website</td>
                                        <td> Two weeks </td>
                                        <td></td>    
                                    </tr>
                                    <tr>
                                        <td> B </td>
                                        <td> Candidate Database</td>
                                        <td> Two weeks </td>
                                        <td></td>    
                                    </tr>
                                    <tr>
                                        <td> C </td>
                                        <td> Candidate Applications</td>
                                        <td> Three weeks </td>
                                        <td> A, B</td>    
                                    </tr>
                                    <tr>
                                        <td> A </td>
                                        <td> Matching Application</td>
                                        <td> Three weeks </td>
                                        <td> A, B, C</td>    
                                    </tr>
                                    <tr>
                                        <td> A </td>
                                        <td> Testing</td>
                                        <td> Eight weeks </td>
                                        <td> A, B, C, D</td>    
                                    </tr>
                                </tbody>   
                            </Table>
                            <h5> 2. Gantt Chart </h5>
                            <img src={require('./../assets/images/ganttchart.png')} alt="Gantt Chart"></img>
                            <h5> 3. Milestones </h5>
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th> Major Activity or Milestone </th>
                                        <th> Estimated Milestone Target date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> Website set up and ready for added applications</td>
                                        <td> Week 2</td>
                                    </tr>
                                    <tr>
                                        <td> Database built and functional</td>
                                        <td> Week 3 </td>
                                    </tr>
                                    <tr>
                                        <td>Candidate applications built </td>
                                        <td> Week 6 </td>
                                    </tr>
                                    <tr>
                                        <td> Matching application finished and matched to Client applications and database</td>
                                        <td> Week 9</td>
                                    </tr>
                                    <tr>
                                        <td> Testing finished, product ready.</td>
                                        <td> Week 10</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div id="requirementsanalysis" class="col-right-content"> 
                            <h2> Requirement Analysis and Design</h2>
                            <h5> 1. Normalized Data Model Diagram</h5>
                            <img src={require('./../assets/images/modeldiagram.png')} alt="Model Diagram"></img>
                            <h5> 2. Activity Diagrams</h5>
                            <img src={require('./../assets/images/activitydiagram.png')} alt="Activity Diagram"></img>
                            <h5> 3. Sequence Diagram </h5>
                            <img src={require('./../assets/images/sequencediagram.png')} alt="Sequence Diagram"></img>
                            <h5> 4. UML Class Diagram </h5>
                            <img src={require('./../assets/images/classdiagram.png')} alt="Class Diagram"></img>
                            <h5> 5. Data Flow Diagram </h5>
                            <img src={require('./../assets/images/flowdiagram.png')} alt="Data Flow Diagram"></img>

                        </div>
                        <div id="wireframes" class="col-right-content"> 
                            <h2>Wireframes/ Mockups</h2>
                            <img src={require('./../assets/images/mockups/mockup1.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup2.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup3.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup4.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup5.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup6.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup7.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup8.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup9.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup10.png')} alt="Mockup1"></img>
                            <img src={require('./../assets/images/mockups/mockup11.png')} alt="Mockup1"></img>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Capstone