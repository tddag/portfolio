import React, { Component } from 'react';
import NavBar from './component/NavBar';
import Capstone from './component/Capstone';
import Footer from './component/Footer';
import Projects from './component/Projects';
import Credentials from './component/Credentials';

import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './component/About'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/credentials" component={Credentials} />
          <Route path="/capstone" component={Capstone} />
          <Route path="/projects" component={Projects}/>}/>
          <Route path="/resume" component={About}/>}/>
          <Route path="*" component={About}/>}/>

        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
