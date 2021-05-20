import React from "react";
import { IChoicesProps } from "../types";
import "./Choices.css";

const Choices = ({ options, selectChoice }: IChoicesProps) => {
  return (
    <div className="Choices">
      {options.slice(0, 3).map((opt) => (
        <button
          className="Choices__Option"
          key={opt.id}
          onClick={() => selectChoice(opt.id)}
        >
          {opt.choice}
        </button>
      ))}
    </div>
  );
};

export default Choices;
