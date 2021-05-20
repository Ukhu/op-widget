import { IPoll } from "../components/types";

export const defaultPoll: IPoll = {
  pollId: "defaultPoll",
  question: "How are you feeling today?",
  options: [
    {
      id: "choice1",
      choice: "Brilliant, I have so much energy",
    },
    {
      id: "choice2",
      choice: "Always can be worse",
    },
    {
      id: "choice3",
      choice: "Please end my misery",
    },
  ],
};
