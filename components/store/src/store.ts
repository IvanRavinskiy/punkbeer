import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import appReducer from './appReducer';
import { RootSaga } from './sagas';

const rootReducer = combineReducers({
  app: appReducer,
});
export const createGlobalStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: false,
      }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(RootSaga);
  return { store };
};
