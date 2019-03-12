import React, { Component } from 'react';
import NavBar from './component/NavBar';
import Capstone from './component/Capstone';
import Footer from './component/Footer';
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
          <Route exact path="/capstone" component={Capstone} />
          <Route path="/experience" component={About}/>}/>
          <Route path="/projects" component={About}/>}/>
          <Route path="/skills" component={About}/>}/>
          <Route path="/education" component={About}/>}/>
          <Route path="/contact" component={About}/>}/>
          <Route path="/resume" component={About}/>}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
