import * as React from 'react';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { ReduxProviderProps } from './types';

export const ReduxProvider: FC<ReduxProviderProps> = (props) => {
  const { App, store } = props;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
