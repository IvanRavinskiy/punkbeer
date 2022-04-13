import { takeEvery, call, put } from 'redux-saga/effects';
import { BeerType, createAPI } from '@iwann/api';
import { getBeerSuccess } from './appReducer';

const api = createAPI(`https://api.punkapi.com/v2/`);

function* workGetBeerFetch(apiProp: any): any {
  try {
    const res = yield call(apiProp.getBeerRandom);
    const beers: BeerType[] = res.data;
    yield put(getBeerSuccess(beers));
  } catch {
    console.log('ERROR workGetBeerFetch');
  }
  // finally {
  //     yield put(getBeerFinally)
  // }
}

export function* RootSaga() {
  yield takeEvery('appReducer/getBeerFetch', workGetBeerFetch, api);
}
