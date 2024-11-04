import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinksPrivat, navLinksIT } from "./navLinks";
import logo from "./AlexanderLinssNone.svg";

import style from "./Nav.module.scss"


type NavInputProps = {
  page: string, 
  setShowImpressum: Function
}

const Nav = ({ page, setShowImpressum }: NavInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  let navArray = [];

  const burger = <>&#9776;</>

  if (page === "it") {
    navArray = navLinksIT;
  } else if (page === "privat") {
    navArray = navLinksPrivat;
  } else {
    return (
    <>      
      <div className={style.header_content}>         
        <a className={style.logo_link} href="/">
          <img src={logo} alt="Your SVG" className={style.logo} />
        </a>
      </div>
    </>)
  }

  return (
    <>
      <div className={style.header_content}>
        <a className={style.logo_link} href="/">
          <img src={logo} alt="Your SVG" className={style.logo} />
        </a>
        <button
          aria-label="open navigation"
          className={`${style.open_nav} ${style.open_nav_button}`}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {burger}
        </button>
        <nav className={isOpen ? `${style.nav} ${style.navigation_open}` : style.nav}>
          <button
            aria-label="close navigation"
            className={style.close_nav}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            &times;
          </button>
          <div className={style.nav_list}>
            {navArray?.map(({ navLinkId, scrollToId }, idx) => (
              <NavLink
                key={idx}
                setShowImpressum={setShowImpressum}
                navLinkId={navLinkId}
                scrollToId={scrollToId}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;