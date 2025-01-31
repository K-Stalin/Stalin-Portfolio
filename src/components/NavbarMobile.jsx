import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import {  NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";


const NavbarMobile = () => {
  const [showMenuBar, setShowMenuBar] = useState(true);

const navElements = {
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "400",
  color: "rgba(255, 255, 255, 0.7)",
  cursor: "pointer",
};  
 

function handleClick(e) {
  if (e.target.closest("a")) {
    setShowMenuBar(true);
  }
}

     
  return (
    <>
      <div className="navbar_mobile">
        <div className="container">
          <div className="menu_parent">
            <h1>Stalin</h1>
            {showMenuBar ? (
              <IoMenu
                className="menubar"
                onClick={() => setShowMenuBar(false)}
              />
            ) : (
              <IoMdClose
                className="closebtn"
                onClick={() => setShowMenuBar(true)}
              />
            )}
          </div>
        </div>
      </div>
      
      <div
        className="closeBtn_section"
        style={{ display: showMenuBar ? "none" : "block" }}
      >
        <nav className="nav_elements">
          <ul onClick={(e) => handleClick(e)}>
            <li>
              <NavLink style={navElements} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={navElements} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink style={navElements} to="/resume">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink style={navElements} to="/projects">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink style={navElements} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarMobile
