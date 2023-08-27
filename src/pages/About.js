import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";

const About = () => {
  return (

    <section id="aboutContainer">
      <div>
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
  );
};

export default About;
