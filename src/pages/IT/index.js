import React from "react";
import Projekte from "./Projekte";
import Home from "./Home";
import Impressum from "./../Impressum";
import References from "./References";
import Interviews from "./Interviews/Interviews";
import "./itStyles.css";

const IT = (props) => {
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
        <Interviews />
        <Projekte />
        {/* <References /> */}
      </main>
    </>
  );
};

export default IT;
