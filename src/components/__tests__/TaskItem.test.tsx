import { render, screen, fireEvent } from "@testing-library/react";
import { TaskItem } from "../TaskItem";

test("renders task item and handles edit and delete", () => {
  const task = { id: "1", title: "Sample Task" };
  const deleteTask = jest.fn();
  const updateTask = jest.fn();

  render(
    <TaskItem
      task={task}
      deleteTask={deleteTask}
      updateTask={updateTask}
    />
  );

  // Check if task is rendered
  expect(screen.getByText("Sample Task")).toBeInTheDocument();

  // Simulate edit button click
  fireEvent.click(screen.getByText("Edit"));
  expect(screen.getByDisplayValue("Sample Task")).toBeInTheDocument();

  // Simulate save button click
  fireEvent.change(screen.getByDisplayValue("Sample Task"), {
    target: { value: "Updated Task" },
  });
  fireEvent.click(screen.getByText("Save"));
  expect(updateTask).toHaveBeenCalledWith("1", "Updated Task");

  // Simulate delete button click
  fireEvent.click(screen.getByText("Delete"));
  expect(deleteTask).toHaveBeenCalledWith("1");
});
