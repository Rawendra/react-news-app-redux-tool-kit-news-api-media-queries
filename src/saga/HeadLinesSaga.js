import { put, takeEvery, call,  delay, select } from "redux-saga/effects";
import { getData } from "../communication/api";
import { GET_HEADLINES } from "../constants/sagaEventTypes";
import { setArticles} from "../store/querySlice";
import {updateIsLoading} from '../store/counterSlice'
import { selectQuery } from "../constants/selectors";
import { APIKEY } from "../constants/projectConfig";
const URL_ROOT = "https://newsapi.org/v2/top-headlines?country=";

export function* handleHeadLines() {
  yield put(updateIsLoading(true))
  yield delay(1000);
  try {
    const queryState = yield select(selectQuery);
    console.log('queryState',queryState)
    const { countrycode, value } = queryState;
    let URL = `${URL_ROOT}${countrycode}&apiKey=${APIKEY}`;
    if (value) {
      //handle it
      //'https://newsapi.org/v2/everything?q=bitcoin&apiKey=9fcfc604453f4a7695fb3e4b6e875c83'
      URL= `https://newsapi.org/v2/everything?q=${value}&apiKey=${APIKEY}`
    } else {
      URL = `${URL_ROOT}${countrycode}&apiKey=${APIKEY}`;
    }


    const response = yield call(getData, URL);

    const {
      data: { articles },
    } = response;
    yield put(setArticles(articles));   
    yield put(updateIsLoading(false))
  } catch (err) {
    console.log(err);
    yield put(updateIsLoading(false))
  }
}

function* watchGetHeadLines() {
  yield takeEvery(GET_HEADLINES, handleHeadLines);
}

export default watchGetHeadLines;
