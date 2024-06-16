import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ViewReview from "./ViewReview";

test("Some Issues Please come back again...", () => {
  render(<ViewReview />);

  const issues = screen.getByText("Some Issues Please come back again...");
  expect(issues).toBeInTheDocument();
});

test("Check if span tag is present", () => {
  render(<ViewReview />);

  const spanElement = screen.getByRole("generic");
  expect(spanElement).toBeInTheDocument();
});
