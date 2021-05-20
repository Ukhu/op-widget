import { render } from "@testing-library/react";
import Results from "../Results";
import { IPoll, IResults } from "../../types";

const results: IResults = {
  choice1: 50,
  choice2: 25,
  choice3: 25,
};

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

test("Displays the correct results passed in", () => {
  const { getByTestId } = render(
    <Results results={results} options={options} />
  );
  expect(getByTestId("choice1")).toHaveTextContent("50%");
  expect(getByTestId("choice2")).toHaveTextContent("25%");
  expect(getByTestId("choice3")).toHaveTextContent("25%");
});
