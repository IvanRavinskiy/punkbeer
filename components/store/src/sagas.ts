import {takeEvery, call, put} from "redux-saga/effects"
import {BeerType, createAPI} from "@iwann/api";
import {getBeerFinally, getBeerSuccess} from "./appReducer";

const api = createAPI(`https://api.punkapi.com/v2/`)

export function* RootSaga(){
    yield takeEvery('appReducer/getBeerFetch', workGetBeerFetch, api)
}

function* workGetBeerFetch(api: any): any {
    try {
        const res = yield call(api.getBeerRandom)
        const beers: BeerType[] = res.data
        yield put (getBeerSuccess(beers))
    }
    catch {
        console.log('ERROR workGetBeerFetch')
    }
    finally {
        yield put(getBeerFinally)
    }
}