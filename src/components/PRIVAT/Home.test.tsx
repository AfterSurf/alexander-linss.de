import { render } from "@testing-library/react";
import Home from "./Home";

// mock
import { IntersectionObserverMock } from "../../__mocks__/intersectionObserver";

beforeEach(IntersectionObserverMock);

describe("Home component", () => {
  it("should render Home component correctly", () => {
    render(<Home />);
    // add more!
  });
});