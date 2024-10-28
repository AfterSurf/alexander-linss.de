import { render, screen } from "@testing-library/react";
import Footer from "./Footer";



describe("Footer component",  () => {
  it("should render Footer component correctly", async () => {
    // where to put?
    const setShowImpressum = jest.fn()
    const showImpressumTrue = true
    
    render(<Footer setShowImpressum={setShowImpressum} showImpressum={showImpressumTrue} />);
    // add more!
    const impressumButton = await screen.findAllByText("Impressum");
    const items = await screen.findAllByText("© 2024 Alexander Linß")
    expect(impressumButton).toHaveLength(1)
    expect(items).toHaveLength(1)
  });

  // toDo: implement impressum logic
});