import { greeting } from "@iwann/greeting";
import { AppRootStateType } from "@iwann/store";
import { getBeerFetch } from "@iwann/store/src/appReducer";
import { useAppDispatch, useAppSelector } from "@iwann/store/src/hooks";
import React from "react";
import "./App.css";

// const { store } = createGlobalStore(storage);

// export const ProvideredApp = () => {
//   ReduxProvider(App, store)();
// };
// not working by this way

export function App() {
  const beerRandom = useAppSelector(
    (state: AppRootStateType) => state.app.beerRandom
  );
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
          {beerRandom.map(({ id, name, image_url }) => {
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
}
