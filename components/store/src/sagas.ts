import { takeEvery, call, put } from 'redux-saga/effects';
import { BeerType, createAPI } from '@iwann/api';
import { getBeersAllSuccess, getBeerSuccess } from './appReducer';

const api = createAPI(process.env.REACT_APP_BASE_URL);

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
function* getBeersAll(apiProp: any): any {
  try {
    const res = yield call(apiProp.getBeer);
    const beers: BeerType[] = res.data;
    yield put(getBeersAllSuccess(beers));
  } catch {
    console.log('ERROR workGetBeerFetch');
  }
  // finally {
  //     yield put(getBeerFinally)
  // }
}

export function* RootSaga() {
  yield takeEvery('appReducer/getBeerFetch', workGetBeerFetch, api);
  yield takeEvery('appReducer/getBeerAllFetch', getBeersAll, api);
}
