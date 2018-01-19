import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import logo from '../logo.jpeg';

export default class NavBar extends Component {
    render() {
        return (
                <Appbar>
                    <div className="mui-container">
                        <ul className="main-nav">
                            <li>
                                <NavLink to="/" className="logo">
                                    <img style={{width:'70%', height:'70%'}} src={logo} alt="Logo"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/login">
                                    <Button size="small" color="primary">Login/Signup </Button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/login" >
                                    <Button size="small" color="primary">Add Property </Button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>     
                </Appbar>
        );
    }
}
// <nav>
//             <div className="nav-wrapper container">
//                 <NavLink to="/" className="brand-logo" exact={true}>Logo</NavLink>
//                 <ul id="nav-mobile" className="right hide-on-med-and-down">
//                 <li>
//                     <NavLink to="/login">Login/Register</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/login" className="btn waves-effect waves-light">Offer Property</NavLink>
//                 </li>
//                 </ul>
//             </div>
//             </nav>
