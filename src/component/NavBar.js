import React, { Component } from 'react';
import './NavBar.styles.css';
import { Link } from 'react-router-dom'


class NavBar extends Component {

    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/about">
                    <h4>Tam Dang </h4>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/capstone">
                            Capstone
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/experience">
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/skills">
                        Skills
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/education">
                        Education
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/resume">
                        Resume
                    </Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;