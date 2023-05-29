import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import { Link } from "react-router-dom";

const About = () => {
  //   const aboutRef = useNav("About");
  return (
    // <section ref={aboutRef} id="aboutContainer"></section>
    <section id="aboutContainer">
      <div>
        <div className={"aboutBorder"}>
          {/* TODO: diese classnames auch benutzen und die links stylen  */}
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
