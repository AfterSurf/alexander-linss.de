import React from "react";
import styles from "./Footer.module.css"

type FooterInputProps = {
  setShowImpressum: Function,
  showImpressum: Boolean
}

export default function Footer({setShowImpressum, showImpressum}: FooterInputProps) {
  return (
    <>
      <div className={styles.footer}>
        <p
          onClick={() => {
            setShowImpressum(!showImpressum);
          }}
         className={styles.impressum}>
          Impressum
        </p>
        <p> &copy; 2024 Alexander Linß</p>
      </div>
    </>
  );
}
