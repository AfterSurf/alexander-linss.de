import React from "react";
import styles from "../Page.module.css";
import {  Link } from "react-router-dom";
import img from "../../pictures/alex_color_MP.jpeg";

const LandingPage = () => {
  return (
    <>
      <section id="aboutContainer">
        <div className={styles.aboutContent}>
          <div>
            <h2 className={styles.aboutTitle}>Alexander Linß</h2>
            <img
              className={styles.aboutPic}
              src={img}
              alt="profile alex at montpellier"
            />
          </div>

          <div className={styles.aboutBorder}>
            <Link className={styles.itLink} to="/it">
              TECH
            </Link>
            <p className={styles.aboutStrich}>|</p>
            <Link className={styles.privatLink} to="/privat">
              PRIVAT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
