import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Impressum from "./../Impressum";
import "./privatStyles.css";

const PRIVAT = (props) => {
  return (
    <>
      {props.showImpressum ? (
        <Impressum setShowImpressum={props.setShowImpressum} />
      ) : (
        <></>
      )}
      {/* checken wo mainstyles genau gesetzt wird */}
      <main className="mainStyle">
        <Home />
        <Contact />
      </main>
    </>
  );
};

export default PRIVAT;
