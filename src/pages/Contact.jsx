import React from 'react'
import Title from "../components/Title";
import "../css/contact.css"
import { CiLinkedin } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from 'react-router-dom';

const iconsStyle = {
  fontSize: "24px",
  color: "#18d26e",
  borderRadius: "50%",
  padding: "10px", 
  width: "40px", 
  height: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};




const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="bg-contact">
          <Title text1={"Contact"} text2={"Contact me"} />
          <div className="contact-wrapper">
            <div className="col-contact">
              <div className="info-box">
                <FaMapMarkerAlt style={iconsStyle} />
                <div>
                  <h3>My Address</h3>
                  <p>Chennai - 600028 , IND</p>
                </div>
              </div>
            </div>
            <div className="col-contact">
              <div className="info-box" style={{ paddingBottom: "13px" }}>
                <MdOutlineShare style={iconsStyle} />
                <div>
                  <h3>Social Profiles</h3>
                  <div className="social-icons">
                    <Link to="https://www.linkedin.com/in/k-stalin/">
                      <CiLinkedin className="share_icons" />
                    </Link>
                    <Link to="https://github.com/K-Stalin">
                      <FaGithub className="share_icons" />
                    </Link>
                    <Link to="https://www.instagram.com/volley_fellow_2003/">
                      <FaInstagram className="share_icons" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-contact">
              <div className="info-box">
                <MdOutlineMail style={iconsStyle} />
                <div>
                  <h3>Email Me</h3>
                  <p>stalinkumanan@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-contact">
              <div className="info-box">
                <BiPhoneCall style={iconsStyle} />
                <div>
                  <h3>Call Me</h3>
                  <p>+91 7639097966</p>
                </div>
              </div>
            </div>
          </div>
          <form className="form-contact">
            <div>
              <div>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div>
                <input type="text" placeholder="Your Email" required />
              </div>
            </div>
            <div>
              <input type="text" placeholder="Subject" required />
            </div>
            <div>
              <textarea placeholder="Message" />
            </div>
            <div className="send_message_btn">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
