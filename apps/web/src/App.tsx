import { greeting } from "@iwann/greeting";
import { createAPI } from "@iwann/api";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    console.log(createAPI().getBeerRandom.then(res => res.data))
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo"/>
                { greeting() }
            </header>
        </div>
    );
}

export default App;
