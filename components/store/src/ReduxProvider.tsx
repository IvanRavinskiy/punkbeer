import * as React from 'react';

import { Provider } from 'react-redux';
import { Store } from 'redux';

export const ReduxProvider = (App: any, store: Store) => {
  return () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
