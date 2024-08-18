import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import img from "../pictures/alex_color_MP.jpeg"

const About = () => {
  return (
    <>
    {/* hier gibt die Section zu viel Höhe mit */}
      <section id="aboutContainer">
      <div className="aboutContent">

        <div>
          <h2 className="aboutTitle">Alexander Linß</h2>
          <img className="aboutPic" src={img}/>
          <h4 className="aboutText">Quote: Learn the rules like a pro, break them like an artist. - picasso</h4>
        </div>
            
          
          <div className={"aboutBorder"}>
            <Link className={"itLink"} to="/it">
              IT
            </Link>
            <p className={"aboutStrich"}>|</p>
            <Link className={"privatLink"} to="/privat">
              PRIVAT
            </Link>
          </div>
      </div>
    </section>
  </>

  );
};

export default About;
