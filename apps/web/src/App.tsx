import { greeting } from "@iwann/greeting";
import env from "@iwann/envconfig"
// import { createAPI } from "@iwann/api";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    // console.log(createAPI('https://api.punkapi.com/v2/').getBeerRandom.then(res => res.data))
    // console.log(createAPI(`${process.env.REACT_APP_BASE_URL}`).getBeerRandom.then(res => res.data))
    console.log(env)
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
