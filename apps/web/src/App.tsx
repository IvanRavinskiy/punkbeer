import { greeting } from "@iwann/greeting";
import { createAPI } from "@iwann/api";
import { AppRootStateType } from "@iwann/store";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "@iwann/store/src/appReducer";


function App() {

    console.log(createAPI(`${process.env.REACT_APP_BASE_URL}`).getBeerRandom.then(res => res.data))

    const value = useSelector((state: AppRootStateType) => state.app.value)
    const dispatch = useDispatch()

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
