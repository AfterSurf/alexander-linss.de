import React from "react";
import Projekte from "../components/IT/Projekte";
import Home from "../components/IT/Home";
import Impressum from "../components/Impressum"

const IT = ({showImpressum,setShowImpressum}:any) => { // todo
  return (
    <>
        {/* rename: showImpressum */}
      {showImpressum ? 
        <Impressum setShowImpressum={setShowImpressum} showImpressum={!showImpressum} />
       : 
        <></>
      }
      <main className="mainStyle">
        <Home />
        <Projekte />
      </main>
    </>
  );
};

export default IT;
