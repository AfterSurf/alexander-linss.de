import { render, screen } from "@testing-library/react";
import Vita from "./Vita";

// mock
import { IntersectionObserverMock } from "../../__mocks__/intersectionObserver";

beforeEach(IntersectionObserverMock);

describe("Vita component", () => {
  it("should render Vita component correctly", async () => {
    render(<Vita />);
    const title = await screen.findAllByText('Vita');
    const anno2024 = await screen.findAllByText('2024 immer noch verliebt in JavaScript und das Web');
    const anno2023 = await screen.findAllByText("2023 Frontend in e-commerce")
    expect(title).toHaveLength(1)
    expect(anno2024).toHaveLength(1)
    expect(anno2023).toHaveLength(1)
  });
});