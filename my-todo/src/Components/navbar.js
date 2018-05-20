import React, { Component } from 'react';
import logo from './logo.svg';
import './navbar.css'

class Navbar extends Component{
    render(){
        return(
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top App-logo" alt=""/>
                        { this.props.title }
                    </a>
                </nav>
        );
    }
}

export default Navbar;