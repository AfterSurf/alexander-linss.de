import { useState } from "react";

import { Nav } from "./nav";
import { Main } from "./pages";
import IT from "./pages/IT";
import PRIVAT from "./pages/PRIVAT";
import Footer from "./footer/Footer";
import NavProvider from "./context/NavContext";
import "./App.css";

function App(props) {
  const [showImpressum, setShowImpressum] = useState(false);
  console.log("APPprops: ", props);
  if (props.page === "it") {
    return (
      <div className="appContainer">
        <NavProvider>
          <Nav page={props.page} setShowImpressum={setShowImpressum} />
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
  } else if (props.page === "privat") {
    return (
      <div className="appContainer">
        <NavProvider>
          <Nav page={props.page} setShowImpressum={setShowImpressum} />
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
          <Nav page={props.page} setShowImpressum={setShowImpressum} />
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
