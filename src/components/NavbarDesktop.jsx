import React from 'react'
import {  NavLink } from "react-router-dom";

const NavbarDesktop = () => {

const navElements = {
      fontFamily: "Poppins",
    fontSize: '16px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.7)',
    cursor:'pointer'
}  

 

  return (
    <div className="navbar_desk">
      <div className="container">
        <div className="navbarDesktop">
          <h1>Stalin K</h1>
          <nav>
            <ul>
              <li>
                <NavLink className="absent" style={navElements} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="absent" style={navElements} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="absent" style={navElements} to="/resume">
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink className="absent" style={navElements} to="/projects">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink className="absent"  style={navElements} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktop
