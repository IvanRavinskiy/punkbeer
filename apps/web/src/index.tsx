import { ProvideredStore } from "@iwann/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ProvideredStore>
      <App />
    </ProvideredStore>
  </React.StrictMode>,
  document.getElementById("root")
);
