import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="nav-container">
        <div className="icon-container">
          <span className="icon">SS</span>
          <span>Shruthi Srinivas</span>
        </div>
        <ul className="nav-bar">
          <li>
            <Link className="list-item" to="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/Education">
              Education
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/Work">
              Work Experience
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/Home">
              Projects
            </Link>
          </li>
          <li>
            <Link className="list-item" to="/Contact">
              Say Hello!
            </Link>
          </li>
        </ul>
        <div className="links">
          <FontAwesomeIcon className="link" icon={faLinkedin} />
          <FontAwesomeIcon className="link" icon={faTwitter} />
          <FontAwesomeIcon className="link" icon={faEnvelope} />
        </div>
      </div>

      <div className="name-container">
        <div className="name">
          <span>Hi!</span>
          <br />
          <span>I'm Shruthi,</span>
          <br />
          <span>web developer</span>
        </div>
        <div className="tagline">Software Engineer | Full-Stack Developer</div>
      </div>
    </div>
  );
};

export default Home;
