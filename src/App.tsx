import React from "react";
import Poll from "./components/Poll";
import { IPoll } from "./components/types";
import "./App.css";

interface IAppProps {
  poll: IPoll;
}

function App({ poll }: IAppProps) {
  return (
    <div className="App">
      <Poll
        pollId={poll.pollId}
        question={poll.question}
        options={poll.options}
      />
    </div>
  );
}

export default App;
