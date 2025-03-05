import React from 'react'
import Title from "../components/Title";
import "../css/project.css"
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="project">
      <div className="container">
        <div className="bg-project">
          <Title text1={"Projects"} text2={"My Works"} />
          <p className="text_project">
            For more Projects Visit{" "}
            <TbArrowBadgeRightFilled className="arrow_right" />{" "}
            <Link to="https://github.com/K-Stalin">
              <span className="github">Github</span>
            </Link>
          </p>
          <div className="project-wrapper">
            <div className="project-info">
              <div>
                <p>
                  ForEver
                  <Link to="https://github.com/K-Stalin/E-Com">
                    <span className="repo">repo</span>
                  </Link>
                </p>
                <p>Dec 2024</p>
              </div>
              <div>
                <p>
                  Build your seamless shopping experience with a powerful MERN
                  stack-based e-commerce platform.
                </p>
              </div>
            </div>
            <div className="project-info">
              <div>
                <p>
                  BridalLash Json Beautifier
                  <Link to="https://github.com/K-Stalin/Bridal_Lash">
                    <span className="repo">repo</span>
                  </Link>
                </p>
                <p>Sep 2024</p>
              </div>
              <div>
                <p>
                  A web-based CRUD application built using HTML, CSS,
                  JavaScript, and JSON web server
                </p>
              </div>
            </div>
            <div className="project-info">
              <div>
                <p>
                  Shipment Rate Calculator
                  <Link to="https://github.com/K-Stalin/Shipment_Rate_Calculation">
                    <span className="repo">repo</span>
                  </Link>
                </p>
                <p>Nov 2024</p>
              </div>
              <div>
                <p>
                  A calculator that allows you to calculate your shipping price.
                  It was not completed fully.
                </p>
              </div>
            </div>
            <div className="project-info">
              <div>
                <p>
                  Learner's Todo_LocalStorage
                  <Link to="https://github.com/K-Stalin/Todo_LocalStorage">
                    <span className="repo">repo</span>
                  </Link>
                </p>
                <p>JAN 2025</p>
              </div>
              <div>
                <p>
                  A simple app that allows you to store your data in
                  LocalStorage.
                </p>
              </div>
            </div>
            <div className="project-info">
              <div>
                <p>
                  Employee Management System (Frontend Only)
                  <Link to="https://github.com/K-Stalin/Employee_Management">
                    <span className="repo">repo</span>
                  </Link>
                </p>
                <p>DEC 2024</p>
              </div>
              <div>
                <p>
                  Employee Management System using HTML, CSS, and JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
