import { takeEvery, call, put } from 'redux-saga/effects';
import { API, AxiosResponse, BeerType, createAPI } from '@iwann/api';
import { getBeersAllSuccess, getBeerSuccess } from './appReducer';

const api = createAPI(process.env.REACT_APP_BASE_URL);

function* workGetBeerFetch(apiProp: API) {
  try {
    const res: AxiosResponse<BeerType[]> = yield call(apiProp.getBeerRandom);
    yield put(getBeerSuccess(res.data));
  } catch {
    yield call(console.log, 'ERROR workGetBeerFetch');
  }
  // finally {
  //     yield put(getBeerFinally)
  // }
}
function* getBeersAll(apiProp: API) {
  try {
    const res: AxiosResponse<BeerType[]> = yield call(apiProp.getBeer);
    const beers: BeerType[] = res.data;
    yield put(getBeersAllSuccess(beers));
  } catch {
    yield call(console.log, 'ERROR workGetBeerFetch');
  }
  // finally {
  //     yield put(getBeerFinally)
  // }
}

export function* RootSaga() {
  yield takeEvery('appReducer/getBeerFetch', workGetBeerFetch, api);
  yield takeEvery('appReducer/getBeerAllFetch', getBeersAll, api);
}
