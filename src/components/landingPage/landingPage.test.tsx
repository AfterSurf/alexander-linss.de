import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import { BrowserRouter } from "react-router-dom";

describe("LandingPage component",  () => {
  it("should render LandingPage component correctly", async () => {
    render(<BrowserRouter><LandingPage/></BrowserRouter>);
    const header = await screen.findAllByText("Alexander Linß");
    const techButton = await screen.findAllByText("TECH")
    const privatButton = await screen.findAllByText("PRIVAT")
    expect(header).toHaveLength(1)
    expect(techButton).toHaveLength(1)
    expect(privatButton).toHaveLength(1)
    
    // toDo test onClick
  });
});