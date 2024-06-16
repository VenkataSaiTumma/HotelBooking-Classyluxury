import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "./Homepage";
import { MemoryRouter } from "react-router-dom";

describe("Homepage", () => {
  test("Check if h2 element is present", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    const h2Element = screen.getByRole("heading");
    expect(h2Element).toBeInTheDocument();
  });

  test("Check if Link is present", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
  });
});
