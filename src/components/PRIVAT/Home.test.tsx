import { render, screen } from "@testing-library/react";
import Home from "./Home";

import { IntersectionObserverMock } from "../../__mocks__/intersectionObserver";

beforeEach(IntersectionObserverMock);

describe("Home component", () => {
  it("should render Home component correctly",async () => {
    render(<Home />);
    const quote1 = await screen.findAllByText('"Learn the rules like a pro,');
    const quote2 = await screen.findAllByText('so you can break them like an artist."');
    const finalThought = await screen.findAllByText("Frontend bedeutet für mich Technik plus Design.")
    expect(quote1).toHaveLength(1)
    expect(quote2).toHaveLength(1)
    expect(finalThought).toHaveLength(1)
  });
});