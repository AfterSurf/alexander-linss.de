import { fireEvent, render, screen } from "@testing-library/react";
import Points from "./Points";
import Why from "./Why";



describe("Points component",  () => {
  it("should render Aufgabe component correctly", async () => {    

    const title = "titleClosed";
    const alternativtitle = "titleOpen"; 
    

    render(<Points title={title} Component={<Why/>} alternativTitle={alternativtitle}/>);
    
    const Button2 = await screen.findByText(title+"?");
    fireEvent.click(Button2)
    const TextElement2 = await screen.findByText(alternativtitle+":");
    expect(TextElement2).toBe
  });
});