import { render } from "@testing-library/react";
import Aufgabe from "./Aufgabe";



describe("Aufgabe component", () => {
  it("should render Aufgabe component correctly", () => {    

    const title = "title";
    const description = "description";
    const img = "https://link2Image.com";
    const link2project = "link2project"

    render(<Aufgabe title={title} description={description} img={img} link2project={link2project}/>);
    // add more!
  });
});