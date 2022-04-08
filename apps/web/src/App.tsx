import { greeting } from "@iwann/greeting";
import { AppRootStateType } from "@iwann/store";
import { decrease, getBeerFetch, increase } from "@iwann/store/src/appReducer";
import { useAppDispatch, useAppSelector } from "@iwann/store/src/hooks";
import React from "react";
import "./App.css";


function App() {

    const value = useAppSelector((state: AppRootStateType) => state.app.value);
    const beers = useAppSelector((state: AppRootStateType) => state.app.beers);
    const dispatch = useAppDispatch();

    const onGetBeerHandler = () => {
        dispatch(getBeerFetch());
    };
    const onIncreaseClick = () => {
        dispatch(increase(value));
    };
    const onDecreaseClick = () => {
        dispatch(decrease(value));
    };
    return (
        <div className="App">
            <header className="App-header">
                { greeting() }
                <div>
                    <h2>RANDOM BEER</h2>
                    {
                        beers.map((beer)=>{
                            return (
                                <div key={ beer.id }>
                                    <div>Beer title: { beer.name }</div>
                                    <img alt={'beer pic'} style={ { "width": "50px" } } src={ beer.image_url }/>
                                </div>
                            );
                        })
                    }
                    <button onClick={ onGetBeerHandler }>get random beer</button>
                </div>
                <div>
                    value: { value }
                    <button onClick={ onIncreaseClick }>+</button>
                    <button onClick={ onDecreaseClick }>-</button>
                </div>
            </header>
        </div>
    );
}

export default App;
