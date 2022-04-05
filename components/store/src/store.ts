// import { combineReducers, createStore } from "redux";
import appReducer from "./appReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    app: appReducer
})
export const store = configureStore({
    reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


// const rootReducer = combineReducers ({
//     app: appReducer,
// })

// export const store = createStore(rootReducer)

// export type AppRootStateType = ReturnType<typeof rootReducer>

