import React from "react";
import { IResultsProps } from "../types";
import "./Results.css";

const Results = ({ options, results }: IResultsProps) => {
  const total = Object.values(results).reduce((acc, num) => acc + num, 0);

  const calculatePercentage = (score: number) => {
    return Math.floor((score / total) * 100);
  };

  return (
    <div className="Results">
      {options.slice(0, 3).map((opt) => (
        <div className="Results__Option" key={opt.id}>
          {opt.choice}:
          <span className="Results__Percent" data-testid={opt.id}>
            {calculatePercentage(results?.[opt.id])}%
          </span>
        </div>
      ))}
    </div>
  );
};

export default Results;
