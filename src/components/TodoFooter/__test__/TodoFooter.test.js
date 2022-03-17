import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";
const { render, screen } = require("@testing-library/react");

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test("should render the correct amount of incomplete task", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);

  const paragraphElem = screen.getByText(/5 tasks left/i);
  expect(paragraphElem).toBeInTheDocument();
});

test("should render the correct amount of incomplete task is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  const paragraphElem = screen.getByText(/1 task left/i);
  expect(paragraphElem).toBeInTheDocument();
});

test("should render the correct amount of incomplete task is truthy", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  const paragraphElem = screen.getByText(/1 task left/i);
  expect(paragraphElem).toBeTruthy();
});

test("should render the correct amount of incomplete task is p tag", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  const paragraphElem = screen.getByText(/1 task left/i);
  expect(paragraphElem).toContainHTML("p");
});

test("should render the correct amount of incomplete task is text content", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  const paragraphElem = screen.getByTestId("text");
  expect(paragraphElem).toHaveTextContent("1 task left");
});

test("should render the correct amount of incomplete task is not falsy", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  const paragraphElem = screen.getByTestId("text");
  expect(paragraphElem).not.toBeFalsy();
});

test("should render the correct amount of incomplete task by id is text content", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);

  const paragraphElem = screen.getByTestId("text");
  expect(paragraphElem.textContent).toBe("1 task left");
});
