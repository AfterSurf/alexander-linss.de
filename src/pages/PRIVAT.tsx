import React from "react";
import Home from "../components/privat/Home";
import Vita from "../components/privat/Vita";
import Impressum from "../components/impressum/Impressum"

import styles from "../components/privat/Privat.module.css";
import { getImpressumProps } from "../components/types/types";

const Privat = ({showImpressum,setShowImpressum}:getImpressumProps) => {
  return (
    <>
      {showImpressum ? (
        <Impressum setShowImpressum={setShowImpressum} showImpressum={showImpressum} />
      ) : (
        <></>
      )}
      <main className={styles.mainStyle}>
        <Home />
        <Vita />
      </main>
    </>
  );
};

export default Privat;
