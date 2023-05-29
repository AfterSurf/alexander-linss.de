import React, { useState } from "react";
import NavLink from "./NavLink";
import { navLinksHome, navLinksPrivat, navLinksIT } from "./navLinks";
import "./Nav.css";

const Nav = (props) => {
  let navArray = [];

  if (props.page === "it") {
    navArray = navLinksIT;
  } else if (props.page === "privat") {
    navArray = navLinksPrivat;
  }
  // } else {
  // 	navArray = navLinksHome
  // }

  const [isOpen, setIsOpen] = useState(false);
  const setShowImpressum = props.setShowImpressum;
  return (
    <>
      <div class="header-content">
        <a class="logo-link" href="/">
          {/* <img src={logo} alt="" class="logo"></img> */}
          <p className="logo">[ L O G O ]</p>
        </a>
        <button
          aria-label="open navigation"
          class="open-nav open-nav-button"
          onClick={() => {
            console.log("clicked open");
            setIsOpen(true);
          }}
        >
          &#9776;
        </button>
        <nav className={isOpen ? "nav navigation-open" : "nav"}>
          <button
            aria-label="close navigation"
            class="close-nav"
            onClick={() => {
              console.log("clicked close");
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
