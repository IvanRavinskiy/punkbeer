import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store";


export const ProvideredStore = ({children}: any) => {
    return <Provider store={store}> {children} </Provider>
}