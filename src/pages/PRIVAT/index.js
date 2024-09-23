import React from "react";
import Home from "./Home";
import Vita from "./Vita";
import Impressum from "./../Impressum";

import styles from "./privatStyles.module.css";

const PRIVAT = (props) => {
  return (
    <>
      {props.showImpressum ? (
        <Impressum setShowImpressum={props.setShowImpressum} />
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
