import React from "react";
import Projekte from "../../components/IT/Projekte";
import Home from "../../components/IT/Home";
import Impressum from "../../components/Impressum"

const IT = ({showImpressum,setShowImpressum}) => {
  return (
    <>
      {showImpressum ? (
        <Impressum setShowImpressum={setShowImpressum} />
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
