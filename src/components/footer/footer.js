import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
       
          Deepanshi
        
      </span>
      {/* <div className="iconContainer">
        <a href="https://www.instagram.com/roadsidecoder/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/c/RoadsideCoder" target="__blank">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>  */}
    </div>
  );
};

export default Footer;