import React from "react";
import {NavLink } from "react-router-dom";
// import { UseCounter} from "./UseCounteri";
// import {CounterOne} from "./UseCounter";
import {FaBars, FaTimes} from 'react-icons/fa';
import './NavBar.css'
import { useState } from "react";
// import ErrorBoundary from "./ErrorBoundary";
// import NotFound from "./NotFound"

function NavBar () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return <>
    <nav className="navbar">
        <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <NavLink exact to="./UseCounter"  activeClassName="active" className="nav-links" onClick={handleClick}>Custom Hook Counter</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="./CounterOne" activeClassName="active"  className="nav-links" onClick={handleClick}>useReducer</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="./ErrorBoundary" activeClassName="active"  className="nav-links" onClick={handleClick}>ErrorBoundary</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="./NotFound" activeClassName="active"  className="nav-links" onClick={handleClick}>About</NavLink>
                </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
            <i >{click ? <FaTimes/>  :   <FaBars/>}</i>
            </div>
        </div>

   </nav>
    </>}

export default NavBar;