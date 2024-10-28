import { render } from "@testing-library/react";
import Vita from "./Vita";

// mock
import { IntersectionObserverMock } from "../../__mocks__/intersectionObserver";

beforeEach(IntersectionObserverMock);

describe("Vita component", () => {
  it("should render Vita component correctly", () => {
    render(<Vita />);
    // add more!
  });
});