import axios from "axios";
import { put, call } from "redux-saga/effects";
import loadPeopleDataFailed from "../actions/peopleData/loadPeopleDataFailed";
import loadPeopleDataSuccess from "../actions/peopleData/loadPeopleDataSuccess";

export function* loadPeopleData() {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/people/`).then((response) => response.data.results));
    yield put(loadPeopleDataSuccess(data)); 
  } catch (error) {
    yield put(loadPeopleDataFailed(error))
  }
} 

export function* loadPlanetsData() {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/planets/`).then((response) => response.data.results));
    yield put(loadPlanetsDataSuccess(data)); 
  } catch (error) {
    yield put(loadPlanetsDataFailed(error))
  }
} 

export function* loadStarshipsData() {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/starships/`).then((response) => response.data.results));
    yield put(loadStarshipsDataSuccess(data)); 
  } catch (error) {
    yield put(loadStarshipsDataFailed(error))
  }
} 