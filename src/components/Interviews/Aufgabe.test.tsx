import { render, screen } from "@testing-library/react";
import Aufgabe from "./Aufgabe";



describe("Aufgabe component", () => {
  it("should render Aufgabe component correctly",async () => {    

    const title = "title";
    const description = "description";
    const img = "https://link2Image.com";
    const link2project = "link2project"

    render(<Aufgabe title={title} description={description} img={img} link2project={link2project}/>);
    const impressumHeadline = await screen.findAllByText("title");
    const itemsResponsibility = await screen.findAllByText("description")
    expect(impressumHeadline).toHaveLength(1)
    expect(itemsResponsibility).toHaveLength(1)
  });
});