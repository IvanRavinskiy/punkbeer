import React from "react";
import { Provider } from "react-redux";

export const ProvideredStore = (props) => {
  const { children, store } = props;

  return <Provider store={store}>{children}</Provider>;
};
