import React from "react";
import Projekte from "./Projekte";
import Home from "./Home";
import Impressum from "./../Impressum";
import "./../Page.css";

const IT = (props) => {
  return (
    <>
      {props.showImpressum ? (
        <Impressum setShowImpressum={props.setShowImpressum} />
      ) : (
        <></>
      )}
      <main className="mainStyle">
        <Home />
        <Projekte />
      </main>
    </>
  );
};

export default IT;
