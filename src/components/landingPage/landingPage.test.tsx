import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("LandingPage component",  () => {
  it("should render LandingPage component correctly", async () => {
    render(<LandingPage/>);
    const header = await screen.findAllByText("Alexander Linß");
    const techButton = await screen.findAllByText("TECH")
    const privatButton = await screen.findAllByText("PRIVAT")
    expect(header).toHaveLength(1)
    expect(techButton).toHaveLength(1)
    expect(privatButton).toHaveLength(1)
    
    // toDo test onClick
  });
});