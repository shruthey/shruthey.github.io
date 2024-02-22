import React from "react";
import "./DialogBox.css";

const DialogBox = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="dialog">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <p>This is your dialog content.</p>
      </div>
    </div>
  );
};

export default DialogBox;
