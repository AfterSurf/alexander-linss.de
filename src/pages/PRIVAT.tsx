import React from "react";
import Home from "../components/PRIVAT/Home";
import Vita from "../components/PRIVAT/Vita";
import Impressum from "../components/Impressum"

import styles from "../components/PRIVAT/privatStyles.module.css";
import { getImpressumProps } from "../components/types/types";

const PRIVAT = ({showImpressum,setShowImpressum}:getImpressumProps) => {
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

export default PRIVAT;
