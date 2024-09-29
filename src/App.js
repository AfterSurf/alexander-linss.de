import React from "react";
import { useState } from "react";

import { Nav } from "./nav";
import { Main } from "./pages";
import IT from "./pages/IT";
import PRIVAT from "./pages/PRIVAT";
import Footer from "./footer/Footer";
import NavProvider from "./context/NavContext";
import "./index.css";

function App({page}) {
  const [showImpressum, setShowImpressum] = useState(false);
  if (page === "it") {
    return (
      <div className="appContainer">
        <NavProvider>
          <Nav page={page} setShowImpressum={setShowImpressum} />
          <IT
            showImpressum={showImpressum}
            setShowImpressum={setShowImpressum}
          />
          <Footer
            showImpressum={showImpressum}
            setShowImpressum={setShowImpressum}
          />
        </NavProvider>
      </div>
    );
  } else if (page === "privat") {
    return (
      <div className="appContainer">
        <NavProvider>
          <Nav page={page} setShowImpressum={setShowImpressum} />
          <PRIVAT
            showImpressum={showImpressum}
            setShowImpressum={setShowImpressum}
          />
          <Footer
            showImpressum={showImpressum}
            setShowImpressum={setShowImpressum}
          />
        </NavProvider>
      </div>
    );
  } else {
    return (
      <div className="appContainer">
        <NavProvider>
          {/* <Nav page={page} setShowImpressum={setShowImpressum} /> */}
          <Main
            showImpressum={showImpressum}
            setShowImpressum={setShowImpressum}
          />
          <Footer
            showImpressum={showImpressum}
            setShowImpressum={setShowImpressum}
          />
        </NavProvider>
      </div>
    );
  }
}

export default App;
