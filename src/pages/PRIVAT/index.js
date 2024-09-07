import React from "react";
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
      <main className="mainStyle">
        <Home />
        <Vita />
      </main>
    </>
  );
};

export default PRIVAT;
