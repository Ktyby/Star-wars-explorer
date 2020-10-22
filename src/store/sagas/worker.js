import axios from "axios";
import { put, call } from "redux-saga/effects";
import loadPeopleDataFailed from "../actions/peopleData/loadPeopleDataFailed";
import loadPeopleDataSuccess from "../actions/peopleData/loadPeopleDataSuccess";
import loadPlanetsDataFailed from "../actions/planetsData/loadPlanetsDataFailed";
import loadPlanetsDataSuccess from "../actions/planetsData/loadPlanetsDataSuccess";
import loadStarshipsDataFailed from "../actions/starshipsData/loadStarshipsDataFailed";
import loadStarshipsDataSuccess from "../actions/starshipsData/loadStarshipsDataSuccess";
import loadMorePeopleDataFailed from "../actions/morePeopleData/loadMorePeopleDataFailed";
import loadMorePeopleDataSuccess from "../actions/morePeopleData/loadMorePeopleDataSuccess";
import loadMorePlanetsDataFailed from "../actions/morePlanetsData/loadMorePlanetsDataFailed";
import loadMorePlanetsDataSuccess from "../actions/morePlanetsData/loadMorePlanetsDataSuccess";
import loadMoreStarshipsDataFailed from "../actions/moreStarshipsData/loadMoreStarshipsDataFailed";
import loadMoreStarshipsDataSuccess from "../actions/moreStarshipsData/loadMoreStarshipsDataSuccess";

export function* loadPeopleData() {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/people/?page=1`).then((response) => response.data.results));
    yield put(loadPeopleDataSuccess(data)); 
  } catch (error) {
    yield put(loadPeopleDataFailed(error))
  }
} 

export function* loadPlanetsData() {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/planets/?page=1`).then((response) => response.data.results));
    yield put(loadPlanetsDataSuccess(data)); 
  } catch (error) {
    yield put(loadPlanetsDataFailed(error))
  }
} 

export function* loadStarshipsData() {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/starships/?page=1`).then((response) => response.data.results));
    yield put(loadStarshipsDataSuccess(data)); 
  } catch (error) {
    yield put(loadStarshipsDataFailed(error))
  }
} 

export function* loadMorePeopleData(action) {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/people/?page=${action.page || 1}`).then((response) => response.data.results));
    yield put(loadMorePeopleDataSuccess(data)); 
  } catch (error) {
    yield put(loadMorePeopleDataFailed(error))
  }
} 

export function* loadMorePlanetsData(action) {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/planets/?page=${action.page}`).then((response) => response.data.results));
    yield put(loadMorePlanetsDataSuccess(data)); 
  } catch (error) {
    yield put(loadMorePlanetsDataFailed(error))
  }
} 

export function* loadMoreStarshipsData(action) {
  try {
    const data = yield call(() => axios.get(`https://swapi.dev/api/starships/?page=${action.page}`).then((response) => response.data.results));
    yield put(loadMoreStarshipsDataSuccess(data)); 
  } catch (error) {
    yield put(loadMoreStarshipsDataFailed(error))
  }
}