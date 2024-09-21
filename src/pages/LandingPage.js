import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import img from "../pictures/alex_color_MP.jpeg"

const LandingPage = () => {
  return (
    <>
      <section id="aboutContainer">
      <div className="aboutContent">

        <div>
          <h2 className="aboutTitle">Alexander Linß</h2>
          <img className="aboutPic" src={img} alt=""/>

          {/* <h4 className="aboutText">Darf ich mich vorstellen?</h4> */}
          {/* <h4 className="aboutText">"Zu überzeugen</h4>
          <h4 className="aboutText">fällt keinem Überzeugten schwer"</h4>
          <h4 className="aboutTextAutor">- F. Schiller</h4> */}

        </div>
            
          
          <div className={"aboutBorder"}>
            <Link className={"itLink"} to="/it">
              TECH
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

export default LandingPage;
