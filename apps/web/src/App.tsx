import { greeting } from "@iwann/greeting";
import { createGlobalStore, ReduxProvider } from "@iwann/store";
import { getBeerFetch } from "@iwann/store/src/appReducer";
import { useAppDispatch, useAppSelector } from "@iwann/store/src/hooks";
import { SelectRandomBeer } from "@iwann/store/src/selectors";
import React from "react";
import storage from "redux-persist/lib/storage";
import "./App.css";

const App = () => {
  const beerRandom = useAppSelector(SelectRandomBeer);
  const dispatch = useAppDispatch();

  const onGetBeerHandler = () => {
    dispatch(getBeerFetch());
  };

  return (
    <div className={"App"}>
      <header className={"App-header"}>
        {greeting()}
        <div>
          <h2>{"RANDOM BEER"}</h2>
          {beerRandom.map((props) => {
            const { id, name, image_url } = props;
            return (
              <div key={id}>
                <div>
                  {"Beer title: "} {name}
                </div>
                <img alt={"beer pic"} className={"image"} src={image_url} />
              </div>
            );
          })}
          <button onClick={onGetBeerHandler}>{"get random beer"}</button>
        </div>
      </header>
    </div>
  );
};

const { store } = createGlobalStore(storage);

export const AppWeb = () => {
  return <ReduxProvider App={App} store={store} />;
};
