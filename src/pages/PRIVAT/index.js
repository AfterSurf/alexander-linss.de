import React from "react";
import Contact from "./Contact/Contact";
import Home from "./Home";
import Vita from "./Vita";
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
        {/* <Contact /> */}
      </main>
    </>
  );
};

export default PRIVAT;
