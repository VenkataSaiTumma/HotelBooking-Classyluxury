import { render, screen } from "@testing-library/react";
import AddReview from "./AddReview";
import "@testing-library/jest-dom";

test("renders 'Your Reviews Means a Lot For Us'", () => {
  render(<AddReview />);
  const reviewText = screen.getByText("Your Reviews Means a Lot For Us");
  expect(reviewText).toBeInTheDocument();
});

test("renders 'Add your Review'", () => {
  render(<AddReview />);
  const addReview = screen.getByText("Add your Review");
  expect(addReview).toBeInTheDocument();
});

test("renders 'Add Review' button", () => {
  render(<AddReview />);
  const addReviewButton = screen.getByText("Add Review");
  expect(addReviewButton).toBeInTheDocument();
});
