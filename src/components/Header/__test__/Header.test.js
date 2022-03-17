import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("see if header text exists", () => {
  render(<Header title="My Header" />);

  const headerElement = screen.getByText(/my header/i);

  expect(headerElement).toBeInTheDocument();
});

// test("see if heading tag exists", () => {
//   render(<Header title="My Header" />);

//   const headerElement = screen.getByRole("heading", { name: "My Header" });

//   expect(headerElement).toBeInTheDocument();
// });

// test("see if header text exists in components by test id", () => {
//   render(<Header title="My Header" />);

//   const headerElement = screen.getByTestId("header-1");

//   expect(headerElement).toBeInTheDocument();
// });

// test("see if header text exists in components find by", async () => {
//   render(<Header title="My Header" />);

//   const headerElement = await screen.findByText(/my header/i);

//   expect(headerElement).toBeInTheDocument();
// });

// test("see if header text exists in components query by", () => {
//   render(<Header title="My Header" />);

//   const headerElement = screen.queryByText(/my cats/i);

//   expect(headerElement).not.toBeInTheDocument();
// });

// test("see if header text exists in components all by role", () => {
//   render(<Header title="My Header" />);

//   const headerElements = screen.getAllByRole(/heading/i);

//   expect(headerElements.length).toBe(2);
// });
