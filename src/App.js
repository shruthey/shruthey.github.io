import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLaptop,
  faCode,
  faMobileRetro,
  faHouseChimney,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Timeline from "./Timeline/Timeline";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="nav-container">
          <div className="icon-container">
            <span className="icon">SS</span>
            <span>Shruthi Srinivas</span>
          </div>
          <ul className="nav-bar">
            <li>
              <Link className="list-item" to="/home">
                <a className="list-item-label">Home</a>
                <FontAwesomeIcon icon={faHouseChimney} />
              </Link>
            </li>
            <li>
              <Link className="list-item" to="/timeline">
                Timeline
                <FontAwesomeIcon icon={faLaptop} />
              </Link>
            </li>
            <li>
              <Link className="list-item" to="/projects">
                Projects
                <FontAwesomeIcon icon={faCode} />
              </Link>
            </li>
            <li>
              <Link className="list-item" to="/Contact">
                Say Hello!
                <FontAwesomeIcon icon={faMobileRetro} />
              </Link>
            </li>
          </ul>
          <div className="links">
            <FontAwesomeIcon className="link" icon={faLinkedin} />
            <FontAwesomeIcon className="link" icon={faTwitter} />
            <FontAwesomeIcon className="link" icon={faEnvelope} />
          </div>
        </div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
