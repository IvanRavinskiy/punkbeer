import { greeting } from "@iwann/greeting";
import { createAPI } from "@iwann/api";
import { AppRootStateType } from "@iwann/store";
import {decrease, increase} from "@iwann/store/src/appReducer";
import {useAppSelector, useAppDispatch} from "@iwann/store/src/hooks";
import React from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {

    console.log(createAPI(`${process.env.REACT_APP_BASE_URL}`).getBeerRandom.then(res => res.data))

    const value = useAppSelector((state: AppRootStateType) => state.app.value)
    const dispatch = useAppDispatch()

    const onIncreaseClick = () => {
        dispatch(increase(value))
    }
    const onDecreaseClick = () => {
        dispatch(decrease(value))
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo"/>
                { greeting() }
                <div>
                    value: {value}
                    <button onClick={onIncreaseClick}>+</button>
                    <button onClick={onDecreaseClick}>-</button>
                </div>
            </header>
        </div>
    );
}

export default App;
