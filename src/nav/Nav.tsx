import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinksPrivat, navLinksIT } from "./navLinks";
import "./Nav.css";
import logo from "./AlexanderLinssNone.svg";

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
  } 

  // try
  else {
    return (
    <>      
      <div className="header-content">         
        <a className="logo-link" href="/">
          <img src={logo} alt="Your SVG" className="logo" />
        </a>
      </div>
    </>)
  }

  return (
    <>
      <div className="header-content">
        <a className="logo-link" href="/">
          <img src={logo} alt="Your SVG" className="logo" />
        </a>
        <button
          aria-label="open navigation"
          className="open-nav open-nav-button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {burger}
        </button>
        <nav className={isOpen ? "nav navigation-open" : "nav"}>
          <button
            aria-label="close navigation"
            className="close-nav"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            &times;
          </button>
          <div className="nav-list">
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
