import { combineReducers, createStore } from "redux";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers ({
    app: appReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

