import { takeLatest, call, put, select } from 'redux-saga/effects';
import { API, AxiosResponse, BeerType, createAPI } from '@iwann/api';
import {
  getBeersAllSuccess,
  getBeersSortSuccess,
  getBeerSuccess,
  InitialStateType,
} from './appReducer';
import { SelectAlcohol } from './selectors';
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
}
function* getBeersAll(apiProp: API) {
  try {
    const res: AxiosResponse<BeerType[]> = yield call(apiProp.getBeer);
    yield put(getBeersAllSuccess(res.data));
  } catch {
    yield call(console.log, 'ERROR getBeersAll');
  }
}
function* getBeersSort(apiProp: API) {
  try {
    const value: InitialStateType['alcohol'] = yield select(SelectAlcohol);
    const res: AxiosResponse<BeerType[]> = yield call(
      apiProp.getBeerSort,
      value,
    );
    yield put(getBeersSortSuccess(res.data));
  } catch {
    yield call(console.log, 'ERROR getBeersSort');
  }
}

export function* RootSaga() {
  yield takeLatest(SagaPattern.GetBeer, workGetBeerFetch, api);
  yield takeLatest(SagaPattern.GetBeerALl, getBeersAll, api);
  yield takeLatest(SagaPattern.GetBeerSort, getBeersSort, api);
}
