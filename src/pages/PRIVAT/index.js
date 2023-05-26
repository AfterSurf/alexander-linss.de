import React from "react";
import Contact from "./Contact";
import Home from "./Home";
import Vita from "./Vita";
import CollegeBlock from "./CollegeBlock";
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
        <Vita />
        <Contact />
        <CollegeBlock />
      </main>
    </>
  );
};

export default PRIVAT;
