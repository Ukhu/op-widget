export type TChoiceId = "choice1" | "choice2" | "choice3";

export interface IPoll {
  pollId: string;
  question: string;
  options: IOption[];
}

export interface IOption {
  id: TChoiceId;
  choice: string;
}

export interface IResults {
  choice1: number;
  choice2: number;
  choice3: number;
}

export interface IPollProps extends IPoll {}

export interface IChoicesProps {
  options: IOption[];
  selectChoice: (id: TChoiceId) => void;
}

export interface IResultsProps {
  options: IOption[];
  results: IResults;
}
