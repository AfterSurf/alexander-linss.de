import React from "react";
import Home from "../components/privat/Home";
import Vita from "../components/privat/Vita";
import Impressum from "../components/impressum/Impressum"

import { getImpressumProps } from "../components/types/types";

const Privat = ({showImpressum,setShowImpressum}:getImpressumProps) => {
  return (
    <>
      {showImpressum ? (
        <Impressum setShowImpressum={setShowImpressum} showImpressum={showImpressum} />
      ) : (
        <></>
      )}
      <main>
        <Home />
        <Vita />
      </main>
    </>
  );
};

export default Privat;
