import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";

// mock
import { IntersectionObserverMock } from "../../__mocks__/intersectionObserver";

beforeEach(IntersectionObserverMock);

describe("Home component", () => {
  it("should render Home component correctly", async () => {    
    render(<Home/>);
    const Button1 = await screen.findAllByText("Warum diese Seite?");
    expect(Button1).toHaveLength(1)

    const Button2 = await screen.findAllByText("Wo bin ich zu Hause?");
    expect(Button2).toHaveLength(1)
  });

  it("Buttons should be clickable + text", async () => {    
    render(<Home/>);
    const Button1 = await screen.getByText("Warum diese Seite?");
    fireEvent.click(Button1)
    const TextElement1 = await screen.findAllByText("Diese Seite ist ein Ort, an dem man sich austoben und Technologien entdecken kann.");
    expect(TextElement1).toHaveLength(1)

    const Button2 = await screen.getByText("Wo bin ich zu Hause?");
    fireEvent.click(Button2)
    const TextElement2 = await screen.findAllByText("Am liebsten arbeite ich aktuell mit:");
    expect(TextElement2).toHaveLength(1)
  });

});

