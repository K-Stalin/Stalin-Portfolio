import React  from 'react'
import { CiLinkedin } from "react-icons/ci";
import {  Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Home = () => {

  const navElements = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.7)",
    cursor: "pointer",
  };  
 


 
  return (
    <>
      <div className="container">
        <div className="home_parent">
          <div className="home_page">
            <h1 className="name">Stalin K</h1>
            <h3 className="description">
              I'm a passionate {"  "}
              <span style={{ borderBottom: "2px solid #18d26e" }}>
                Full Stack Web Developer
              </span>{" "}
              from Chennai, IND
            </h3>
            <nav className="home_elements">
              <ul>
                <li>
                  <NavLink style={navElements} to="/" className="present">
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
            <div className="social_media">
              <ul>
                <li>
                  <Link to="https://www.linkedin.com/in/k-stalin/">
                    <CiLinkedin className="social_icons" />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/K-Stalin">
                    <FaGithub className="social_icons" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/volley_fellow_2003/">
                    <FaInstagram className="social_icons" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
