import { fireEvent, render } from "@testing-library/react";
import Poll from "../Poll";
import { IPoll } from "../../types";

const poll: IPoll = {
  pollId: "test_poll",
  question: "Who is the best footballer?",
  options: [
    {
      id: "choice1",
      choice: "Cristiano Ronaldo",
    },
    {
      id: "choice2",
      choice: "Leo Messi",
    },
    {
      id: "choice3",
      choice: "Robert Lewandowski",
    },
  ],
};

test("Displays the title and question correctly", () => {
  const { getByText } = render(
    <Poll
      pollId={poll.pollId}
      question={poll.question}
      options={poll.options}
    />
  );
  expect(getByText("Welcome to the OP Poll")).toBeInTheDocument();
  expect(getByText("Who is the best footballer?")).toBeInTheDocument();
});

test("Display the correct results after a choice has been selected", () => {
  const { getByText, getByTestId } = render(
    <Poll
      pollId={poll.pollId}
      question={poll.question}
      options={poll.options}
    />
  );
  fireEvent.click(getByText("Cristiano Ronaldo"));
  expect(getByTestId("choice1")).toHaveTextContent("100%");
  expect(getByTestId("choice2")).toHaveTextContent("0%");
  expect(getByTestId("choice3")).toHaveTextContent("0%");
});
