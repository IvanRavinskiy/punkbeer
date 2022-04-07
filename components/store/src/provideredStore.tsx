import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export const ProvideredStore = (props: any) => {
  return <Provider store={store}>{props.children}</Provider>;
};
