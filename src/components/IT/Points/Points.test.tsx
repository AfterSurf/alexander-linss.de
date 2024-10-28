import React from "react";
import { render } from "@testing-library/react";
import Points from "./Points";



describe("Points component", () => {
  it("should render Aufgabe component correctly", () => {    

    const title = "title";
    const alternativtitle = "alternativtitle";
    const component = React.Component
    

    render(<Points title={title} Component={component} alternativTitle={alternativtitle}/>);
    // add more!
  });
});