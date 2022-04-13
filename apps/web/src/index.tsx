import { createGlobalStore, ReduxProvider } from "@iwann/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const { store } = createGlobalStore();

ReactDOM.render(
  <React.StrictMode>{ReduxProvider(App, store)()}</React.StrictMode>,
  document.getElementById("root")
);
