import React, { useEffect, useState } from "react";
import Results from "../Results";
import Choices from "../Choices";
import { IPollProps, IResults, TChoiceId } from "../types";
import "./Poll.css";

const initialResults = {
  choice1: 0,
  choice2: 0,
  choice3: 0,
};

const Poll = ({ pollId, question, options }: IPollProps) => {
  const [hasSelected, setHasSelected] = useState(false);
  const [results, setResults] = useState<IResults>(initialResults);

  useEffect(() => {
    const prevResults = localStorage.getItem(pollId);
    const storedResults = JSON.parse(prevResults as string);
    setResults(storedResults || initialResults);
  }, [pollId]);

  useEffect(() => {
    localStorage.setItem(pollId, JSON.stringify(results));
  }, [results, pollId]);

  const selectChoice = (choiceId: TChoiceId) => {
    setResults((res) => ({
      ...res,
      [choiceId]: res[choiceId] + 1,
    }));
    setHasSelected(true);
  };

  return (
    <div className="Poll">
      <h1 className="Poll__Title">Welcome to the OP Poll</h1>
      <p className="Poll__Question">{question}</p>

      {hasSelected ? (
        <Results options={options} results={results} />
      ) : (
        <Choices options={options} selectChoice={selectChoice} />
      )}
    </div>
  );
};

export default Poll;
