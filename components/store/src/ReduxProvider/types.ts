import { ComponentType } from 'react';
import { Store } from 'redux';

export type ReduxProviderProps = {
  App: ComponentType;
  store: Store;
};
