import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import { defaultPoll } from './utils/constants'
import { IPoll } from "./components/types";

export const init = (poll: IPoll = defaultPoll) => {
  ReactDOM.render(
    <React.StrictMode>
      <App poll={poll}     />
    </React.StrictMode>,
    document.getElementById("op-widget")
  );
};

if (process.env.NODE_ENV === 'development') {
  init()
}
