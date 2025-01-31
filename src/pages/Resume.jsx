import React from 'react'
import Title from '../components/Title'
import "../css/resume.css"

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <div className="bg-resume">
          <Title text1={"REsume"} text2={"CHECK MY RESUME"} />
          <div className="resume-wrapper">
            <div className="col">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item">
                <h4 className="resume-title">Stalin K</h4>
                <br />
                <p> </p>
                <ul>
                  <li>Chennai , India</li>
                  <li>+91 7639097966</li>
                  <li>stalinkumanan@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Engineering</h4>
                <h5>2021 - Present</h5>
                <p>
                  <em>Anna University, Thanjavur.</em>
                </p>
                <p>
                  ▪️ I am pursuing a degree in Mechanical Engineering, but I
                  dedicate countless hours to exploring my passion for computers
                  and technological innovation. The main aim of this program is
                  to create quality professionals and research fellows who can
                  work in every sector of the world by implementing the
                  technology of computer systems.
                  <br />
                  ▪️ Relevant Coursework: JavaScript , Python , Operating
                  Systems and Web Development.
                </p>
              </div>
              <div className="resume-item">
                <h4>High School</h4>
                <h5>2019 -2020</h5>
                <p>
                  <em>Saraswathi Vidhyalaya, Muthupet, India</em>
                </p>
                <p>
                  Completed my High School with Major in
                  <br />
                  Biology
                  <br />
                  Maths , Physics and Chemistry.
                </p>
              </div>
            </div>
            <div className="col">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Frontend Developer Intern</h4>
                <h5>Aug 2024 </h5>
                <p>
                  <em>SIT , Chennai, IND</em>
                </p>
                <p>
                  <b>Project: BridalLash Json Beautifier</b>
                </p>
                <p> </p>
                <ul>
                  <li>
                    Collaborated with developers and senior software engineers
                    as a Frontend Developer.
                  </li>
                  <li>
                    Worked on building a CRUD application using JSON web server
                    and implementing the MVC pattern.
                  </li>
                  <li>
                    Designed and developed user interfaces with clean and
                    efficient code to enhance user experience.
                  </li>
                  <li>
                    Gained hands-on experience in frontend development
                    methodologies, ensuring seamless data integration and
                    application functionality.
                  </li>
                  <p></p>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Full Stack Developer Intern</h4>
                <h5>Sep 2024 - Dec 2024</h5>
                <p>
                  <em>CloudlightCorp, Chennai, IND</em>
                </p>
                <p>
                  <b>
                    <b>Project: ForEver </b>
                  </b>
                </p>
                <p> </p>
                <ul>
                  <li>
                    Developed an end-to-end e-commerce application with
                    essential functionalities.
                  </li>
                  <li>
                    Search and Filter Capabilities: Implemented advanced search
                    and filter options to help users find products efficiently
                    based on categories, price ranges, and ratings.
                  </li>
                  <li>
                    Stripe Payment Gateway Integration: Integrated Stripe for
                    secure and seamless online payment processing.
                  </li>
                  <li>
                    Cloudinary Integration: Utilized Cloudinary for efficient
                    product image uploads, storage, and optimization.
                  </li>
                </ul>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume
