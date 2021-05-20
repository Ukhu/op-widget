import { fireEvent, render } from "@testing-library/react";
import Choices from "../Choices";
import { IPoll } from "../../types";

const options: IPoll["options"] = [
  {
    id: "choice1",
    choice: "Choice1",
  },
  {
    id: "choice2",
    choice: "Choice2",
  },
  {
    id: "choice3",
    choice: "Choice3",
  },
];

test("Displays the correct choices", () => {
  const selectChoice = jest.fn();

  const { getByText } = render(
    <Choices options={options} selectChoice={selectChoice} />
  );
  expect(getByText("Choice1")).toBeInTheDocument();
  expect(getByText("Choice2")).toBeInTheDocument();
  expect(getByText("Choice3")).toBeInTheDocument();
});

test("Calls the correct method", () => {
  const selectChoice = jest.fn();

  const { getByText } = render(
    <Choices options={options} selectChoice={selectChoice} />
  );

  fireEvent.click(getByText("Choice1"));

  expect(selectChoice).toHaveBeenCalled();
});

test("Calls the correct method with the right argument", () => {
  const selectChoice = jest.fn();

  const { getByText } = render(
    <Choices options={options} selectChoice={selectChoice} />
  );

  fireEvent.click(getByText("Choice3"));

  expect(selectChoice).toHaveBeenCalledWith("choice3");
});
