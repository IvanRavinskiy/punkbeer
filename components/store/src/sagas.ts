import { takeEvery, call, put, select } from 'redux-saga/effects';
import { API, AxiosResponse, BeerType, createAPI } from '@iwann/api';
import {
  getBeersAllSuccess,
  getBeersSortSuccess,
  getBeerSuccess,
  initialStateType,
} from './appReducer';
import { SelectAlcohol } from './selectors/SelectAlcohol';
import { SagaPattern } from './enums/SagaPattern';

// const api = createAPI(process.env.REACT_APP_BASE_URL); //DONT WORK IN MOBILE, ONLY WEB
const api = createAPI('https://api.punkapi.com/v2/');

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
    yield put(getBeersAllSuccess(res.data));
  } catch {
    yield call(console.log, 'ERROR getBeersAll');
  }
  // finally {
  //     yield put(getBeerFinally)
  // }
}
function* getBeersSort(apiProp: API) {
  try {
    const value: initialStateType['alcohol'] = yield select(SelectAlcohol);
    const res: AxiosResponse<BeerType[]> = yield call(
      apiProp.getBeerSort,
      value,
    );
    yield put(getBeersSortSuccess(res.data));
  } catch {
    yield call(console.log, 'ERROR getBeersSort');
  }
  // finally {
  //     yield put(getBeerFinally)
  // }
}

export function* RootSaga() {
  yield takeEvery(SagaPattern.GetBeer, workGetBeerFetch, api);
  yield takeEvery(SagaPattern.GetBeerALl, getBeersAll, api);
  yield takeEvery(SagaPattern.GetBeerSort, getBeersSort, api);
}
