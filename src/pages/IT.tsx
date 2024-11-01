import React from "react";
import Projekte from "../components/it/Projekte";
import Home from "../components/it/Home";
import Impressum from "../components/impressum/Impressum"

import { getImpressumProps } from "../components/types/types";



const It = ({showImpressum,setShowImpressum}:getImpressumProps) => {
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

export default It;
