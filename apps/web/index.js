import { createGlobalStore, ReduxProvider } from "@iwann/store";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./src/index.css";
import { App } from "./src/App";
import storage from "redux-persist/lib/storage";

const { store } = createGlobalStore(storage);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider App={App} store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
