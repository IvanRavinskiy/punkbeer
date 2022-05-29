import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import appReducer from "./appReducer";
import { RootSaga } from "./sagas";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import type { PersistConfig, Storage } from "redux-persist";

const rootReducer = combineReducers({
  app: appReducer,
});
export type AppRootStateType = ReturnType<typeof rootReducer>;

export const createGlobalStore = (PersistStorage: Storage) => {
  const persistConfig: PersistConfig<AppRootStateType> = {
    key: "root",
    storage: PersistStorage,
  };
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        thunk: false,
      }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(RootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};
