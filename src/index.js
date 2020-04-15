import React from "react";
import ReactDOM from "react-dom";
import {MyContextProvider} from "./MyContext";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <MyContextProvider>
    <Router> 
      <App />
    </Router>
  </MyContextProvider>,
  document.getElementById("root")
);
