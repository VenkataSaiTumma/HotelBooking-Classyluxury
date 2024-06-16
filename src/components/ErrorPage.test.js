import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorPage from "./ErrorPage";
import { MemoryRouter } from "react-router-dom";

describe("ErrorPage", () => {
  test("Check if 'Oops! Something WentWrong' text is present", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    const errorText = screen.getByText("Oops! Something WentWrong");
    expect(errorText).toBeInTheDocument();
  });
  test("Check if 'Back To HomePage' link is present", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    const linkText = screen.getByText("Back To HomePage");
    expect(linkText).toBeInTheDocument();
  });
});
