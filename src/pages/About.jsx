import React from "react";
import Title from "../components/Title";
import "../css/about.css";
import { FaAngleRight } from "react-icons/fa6";
import profile from "../../public/assets/profile.png";
import { IoMdFitness } from "react-icons/io";
import { FaRainbow } from "react-icons/fa";
import { MdOutlineCellTower } from "react-icons/md";
import { IoHardwareChip } from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="bg-color">
          <Title text1={"ABOUT"} text2={"Learn more about me"} />
          <div className="about-wrapper">
            <div>
              <img src={profile} width="100%" height="100%" alt="Profile" />
            </div>
            <div>
              <h3 className="dev">Dev & Tech Enthusiast</h3>
              <p className="passionate">
                I'm a passionate tech enthusiast with a deep love for crafting
                seamless web applications and an insatiable curiosity to explore
                the vast realms of full-stack development using the MERN stack
                (MongoDB, Express.js, React, and Node.js). As a developer at
                heart, I thrive on building innovative, user-centric solutions
                that harness the power of modern web technologies to solve
                real-world challenges.
              </p>
              <div className="adrress">
                <div>
                  <ul>
                    <li>
                      <FaAngleRight style={{ color: "#18d26e" }} />
                      <strong>Phone:</strong>
                      <span>+91 7639097966</span>
                    </li>
                    <li>
                      <FaAngleRight style={{ color: "#18d26e" }} />
                      <strong>City:</strong>
                      <span>Chennai, India</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <FaAngleRight style={{ color: "#18d26e" }} />
                      <strong>Email:</strong>
                      <span>stalinkumanan1@gmail.com</span>
                    </li>
                    <li>
                      <FaAngleRight style={{ color: "#18d26e" }} />
                      <strong>Collobration:</strong>
                      <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="beyond">
                Beyond my academic endeavors, I also hold a strong commitment to
                a healthy lifestyle. Being a fitness enthusiast, I firmly
                believe that regular exercise is essential for overall
                well-being. Whether it's going for a refreshing jog in the
                morning or hitting the gym to challenge myself, I always make
                time to stay active and keep my mind sharp
              </p>
            </div>
          </div>
          <Title text1={"skills"} />
          <div className="row-skill">
            <div className="col">
              <div className="progress">
                <span className="skill">
                  JavaScript & JAVA PROGRAMMING <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  MongoDB <i className="val">50%</i>
                </span>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  React <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrapper">
                  <div className="progress-bar" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="progress">
                <span className="skill">
                  Express.js <i className="val">40%</i>
                </span>

                <div className="progress-bar-wrapper">
                  <div className="progress-bar" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  HTML & CSS <i className="val">80%</i>
                </span>

                <div className="progress-bar-wrapper">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Web Development , Git & Opensource Technologies
                  <i className="val">70%</i>
                </span>

                <div className="progress-bar-wrapper">
                  <div className="progress-bar" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <Title text1={"INTERESTS"} />
          <div className="interest-container">
            <div>
              <div className="icon-box">
                <IoHardwareChip
                  style={{
                    color: "#b2904f",
                    fontSize: "32px",
                    paddingRight: "10px",
                    lineHeight: "1",
                  }}
                />
                <h3>HARDWARE</h3>
              </div>
            </div>
            <div>
              <div className="icon-box">
                <FaTv
                  style={{
                    color: "#ffbb2c",
                    fontSize: "32px",
                    paddingRight: "10px",
                    lineHeight: "1",
                  }}
                />
                <h3>TECHNOLOGIES</h3>
              </div>
            </div>
            <div>
              <div className="icon-box">
                <IoMdFitness
                  style={{
                    color: "#e361ff",
                    fontSize: "32px",
                    paddingRight: "10px",
                    lineHeight: "1",
                  }}
                />
                <h3>Fitness</h3>
              </div>
            </div>
            <div>
              <div className="icon-box">
                <FaRainbow
                  style={{
                    color: "#29cc61",
                    fontSize: "32px",
                    paddingRight: "10px",
                    lineHeight: "1",
                  }}
                />
                <h3>Social Works</h3>
              </div>
            </div>
            <div>
              <div className="icon-box">
                <MdOutlineEventNote
                  style={{
                    color: "#e80368",
                    fontSize: "32px",
                    paddingRight: "10px",
                    lineHeight: "1",
                  }}
                />
                <h3>Entrepreneurship</h3>
              </div>
            </div>
            <div>
              <div className="icon-box">
                <MdOutlineCellTower
                  style={{
                    color: "#ff5828",
                    fontSize: "32px",
                    paddingRight: "10px",
                    lineHeight: "1",
                  }}
                />
                <h3>Voluntering</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
