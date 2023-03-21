import React from "react";
import { Home, Contact, Impressum } from "..";
import "../Page.css";

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
        <Contact />
      </main>
    </>
  );
};

export default PRIVAT;
