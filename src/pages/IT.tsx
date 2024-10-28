import React from "react";
import Projekte from "../components/IT/Projekte";
import Home from "../components/IT/Home";
import Impressum from "../components/Impressum"

import { getImpressumProps } from "../components/types/types";



const IT = ({showImpressum,setShowImpressum}:getImpressumProps) => {
  return (
    <>
      {showImpressum ? 
        <Impressum setShowImpressum={setShowImpressum} showImpressum={showImpressum} />
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
