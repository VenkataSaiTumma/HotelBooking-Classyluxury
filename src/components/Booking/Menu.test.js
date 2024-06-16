import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Menu";

describe("Menu", () => {
  test("renders h2 tag when no room is booked", () => {
    render(<Menu item={[]} />);

    const noRoomElement = screen.getByText(
      /You haven't booked any room yet.../i
    );
    expect(noRoomElement).toBeInTheDocument();
  });

  test("renders all span tags", () => {
    render(<Menu item={[]} />);

    const spanElements = screen.getAllByRole("heading");
    expect(spanElements.length).toBeGreaterThan(0);
  });
});
