import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddInput from "./AddInput";

test("check if placeholder is correct", () => {
  render(<AddInput setTodos={() => {}} todos={[]} />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  //   screen.getByRole("");
  const placeholder = screen.getByPlaceholderText("Add a new task here...");

  expect(placeholder).toBeVisible();
});

test("check add button works as expected", () => {
  render(<AddInput setTodos={() => {}} todos={[]} />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  //   screen.getByRole("");
  const addBtn = screen.getByText("Add");
  const placeholder = screen.getByPlaceholderText("Add a new task here...");

  //   userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  expect(placeholder).toBeVisible();

  expect(addBtn).toBeVisible();

  userEvent.type(placeholder, "learning RTL");
  userEvent.click(addBtn);

  const todoItem = screen.getByText(/learning RTL/i);

  expect(todoItem).toBeVisible();
});
