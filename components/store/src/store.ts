// import { combineReducers, createStore } from "redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import appReducer from './appReducer';
import { RootSaga } from './sagas';

// export type AppRootStateType = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

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

// const rootReducer = combineReducers ({
//     app: appReducer,
// })

// export const store = createStore(rootReducer)

// export type AppRootStateType = ReturnType<typeof rootReducer>
