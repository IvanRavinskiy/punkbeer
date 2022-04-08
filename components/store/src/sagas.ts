import {takeEvery, call, put} from "redux-saga/effects"
import {BeerType, createAPI} from "@iwann/api";
import {getBeerSuccess} from "./appReducer";

export function* RootSaga(){
    yield takeEvery('appReducer/getBeerFetch', workGetBeerFetch)
}

function* workGetBeerFetch() {
    const beers: BeerType[] = yield call(()=>createAPI(`${process.env.REACT_APP_BASE_URL}`).getBeerRandom
        .then(res => res.data))
    yield put (getBeerSuccess(beers))
}