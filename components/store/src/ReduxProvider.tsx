import React, { ComponentType } from "react";

import { Provider } from "react-redux";
import { Store } from "redux";

export const ReduxProvider = (App: ComponentType, store: Store) => {
  return () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
window.React1 = React;
