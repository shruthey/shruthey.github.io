import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="time-container">
      <div className="time-item-container t0">
        <div className="time-item">
          <div>Christ University</div>
          <div>Bachelor of Technology in Computer Science</div>
          <div>Aug 2016 - May 2020</div>
        </div>
        <FontAwesomeIcon className="time-item-icon" icon={faAnglesRight} />
      </div>

      <div className="time-item-container t1">
        <div className="time-item">
          <div>Oracle Cerner</div>
          <div>Software Intern</div>
          <div>Dec 2019 - Jun 2020</div>
        </div>
        <FontAwesomeIcon className="time-item-icon" icon={faAnglesRight} />
      </div>

      <div className="time-item-container t2">
        <div className="time-item">
          <div>Oracle Cerner</div>
          <div>Software Engineer</div>
          <div>Jun 2020 - Aug 2022</div>
        </div>
        <FontAwesomeIcon className="time-item-icon" icon={faAnglesRight} />
      </div>

      <div className="time-item-container">
        <div className="time-item">
          <div>The University of Texas at Dallas</div>
          <div>Master of Science in Business Analytics</div>
          <div>Aug 2022 - May 2024</div>
        </div>
        <FontAwesomeIcon className="time-item-icon" icon={faAnglesRight} />
      </div>
    </div>
  );
};

export default Timeline;
