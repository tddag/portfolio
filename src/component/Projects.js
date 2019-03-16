import React, { Component } from 'react';
import './Projects.styles.css';

require('./../assets/images/projects.png')
class Projects extends Component {
    render() {
        return(
            <div>
                <div class="projects-img">
                    <div class="projects-flowing-text">
                        <p> <strong> I LOVE BUILDING COOL THINGS </strong></p>
                    </div>

                </div>
                <div class="flex-wrapper">
                    <h2> PROJECTS </h2>
                    <p> A list of my top code projects, including web development and mobile development.
                            All the projects are available fully open-sourced on GitHub. Some have a demo version  </p>
                    <div onClick={() => window.open('https://taha-chatapp.herokuapp.com/rooms', '_blank')}>
                        <a href='https://taha-chatapp.herokuapp.com/rooms' target='_blank'>
                            <img src={require('./../assets/images/chatapp.png')} alt="Chat App"></img>
                        </a> 
                        <div class="centered"> 
                            <h1> <strong> CHAT APP  </strong> </h1>
                            <p> Using MEARN stack and Socket.IO to build an interactive chat app</p>
                            <button> View the demo here </button>
                            <button onClick={() => window.open('https://github.com/tddag/advancedChatApp', '_blank')}> View the source code </button>

                        </div>
                    </div>
                    <div onClick={() => window.open('https://github.com/tddag/roadAssistanceProject', '_blank')}>
                        <a href='https://github.com/tddag/roadAssistanceProject' target='_blank'>
                            <img src={require('./../assets/images/roadassistance.png')} alt="Road Assistance"></img>
                        </a> 
                        <div class="centered"> 
                            <h1> <strong> ROAD ASSISTANCE  </strong> </h1>  
                            <p> Applying ASP technology to have an app for auto repair company</p>
                            <button> View the source code  </button>

                        </div>
                    </div>
                    <div onClick={() => window.open('https://github.com/tddag/conferenceApp', '_blank')}>
                        <a href='https://github.com/tddag/conferenceApp' target='_blank'>
                            <img src={require('./../assets/images/conferenceapp.png')} alt="Conference App"></img>
                        </a> 
                        <div class="centered"> 
                            <h1> <strong> CONFERENCE APP  </strong> </h1>  
                            <p> An Android app allows user to see the lists of upcoming conferences, attendees, sponsors, and direction to specific locations</p>
                            <button> View the source code  </button>
                        </div>
                    </div>
                    <div onClick={() => window.open('https://github.com/tddag/personalRestaurantGuide', '_blank')}>
                        <a href='https://github.com/tddag/personalRestaurantGuide' target='_blank'>
                            <img src={require('./../assets/images/restaurantapp.png')} alt="Restaurant App"></img>
                        </a> 
                        <div class="centered"> 
                            <h1> <strong> RESTAURANT APP  </strong> </h1>  
                            <p> An android app allows users to add their favourite restaurant to the list, rate, give feedback and get direction to the restaurant</p>
                            <button> View the source code  </button>
                        </div>
                    </div>
                    <div onClick={() => window.open('https://github.com/tddag/videoStoreApp', '_blank')}>
                        <a href='https://github.com/tddag/videoStoreApp' target='_blank'>
                            <img src={require('./../assets/images/videostoreapp.png')} alt="Video Store App"></img>
                        </a> 
                        <div class="centered"> 
                            <h1> <strong> VIDEO STORE APP  </strong> </h1>  
                            <p> Built with Angular and Node.js to store videos. Users are able to reserve, add, update, delete videos</p>
                            <button> View the source code  </button>
                        </div>
                    </div>
                    <div onClick={() => window.open('https://td-kitchen-app.herokuapp.com/', '_blank')}>
                        <a href='https://td-kitchen-app.herokuapp.com/' target='_blank'>
                            <img src={require('./../assets/images/kitchenapp.png')} alt="Video Store App"></img>
                        </a> 
                        <div class="centered"> 
                            <h1> <strong> KITCHEN APP  </strong> </h1>  
                            <p> Kitchen app built with MEARN stack and SOCKET.IO allows the chief and server interact to each other when food is done </p>
                            <button> View the demo here  </button>
                            <button onClick={() => window.open('https://github.com/tddag/kitchenApp', '_blank')}> View the source code </button>
                        </div>
                    </div>
                    <div onClick={() => window.open('https://td-shopping-list.herokuapp.com/', '_blank')}>
                        <a href='https://td-shopping-list.herokuapp.com/' target='_blank'>
                            <img src={require('./../assets/images/shoppinglistapp.png')} alt="Video Store App"></img>
                        </a> 
                        <div class="centered"> 
                            <h1> <strong> SHOPPING LIST  </strong> </h1>  
                            <p> Implementing MERN stack and Redux to build an app enables users to add or remove shopping items from the list</p>
                            <button> View the demo here  </button>
                            <button onClick={() => window.open('https://github.com/tddag/shoppingList.', '_blank')}> View the source code </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects