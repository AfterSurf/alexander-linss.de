import React from "react";
import Home from "../../components/PRIVAT/Home";
import Vita from "../../components/PRIVAT/Vita";
import Impressum from "../../components/Impressum"

import styles from "../../components/PRIVAT/privatStyles.module.css";

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
