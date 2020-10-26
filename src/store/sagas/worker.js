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
import loadPeopleTilesDataFailed from "../actions/peopleTilesData/loadPeopleTilesDataFailed";
import loadPeopleTilesDataSuccess from "../actions/peopleTilesData/loadPeopleTilesDataSuccess";
import { API_URL } from "../../constants";

export function* loadPeopleData() {
  try {
    const data = yield call(() => axios.get(`${API_URL}/people/?page=1`).then((response) => response.data.results));
    yield put(loadPeopleDataSuccess(data)); 
  } catch (error) {
    yield put(loadPeopleDataFailed(error))
  }
} 

export function* loadPlanetsData() {
  try {
    const data = yield call(() => axios.get(`${API_URL}/planets/?page=1`).then((response) => response.data.results));
    yield put(loadPlanetsDataSuccess(data)); 
  } catch (error) {
    yield put(loadPlanetsDataFailed(error))
  }
} 

export function* loadStarshipsData() {
  try {
    const data = yield call(() => axios.get(`${API_URL}/starships/?page=1`).then((response) => response.data.results));
    yield put(loadStarshipsDataSuccess(data)); 
  } catch (error) {
    yield put(loadStarshipsDataFailed(error))
  }
} 

export function* loadMorePeopleData(action) {
  try {
    const data = yield call(() => axios.get(action.page).then((response) => response.data.results));
    const nextPage = yield call(() => axios.get(action.page).then((response) => response.data.next));
    yield put(loadMorePeopleDataSuccess(data, nextPage)); 
  } catch (error) {
    yield put(loadMorePeopleDataFailed(error))
  }
} 

export function* loadMorePlanetsData(action) {
  try {
    const data = yield call(() => axios.get(action.page).then((response) => response.data.results));
    const nextPage = yield call(() => axios.get(action.page).then((response) => response.data.next));
    yield put(loadMorePlanetsDataSuccess(data, nextPage)); 
  } catch (error) {
    yield put(loadMorePlanetsDataFailed(error))
  }
} 

export function* loadMoreStarshipsData(action) {
  console.log(action.page);
  try {
    const data = yield call(() => axios.get(action.page).then((response) => response.data.results));  
    const nextPage = yield call(() => axios.get(action.page).then((response) => response.data.next));
    yield put(loadMoreStarshipsDataSuccess(data, nextPage)); 
  } catch (error) {
    yield put(loadMoreStarshipsDataFailed(error))
  }
}

export function* loadPeopleTilesData(action) {
  try {
    const data = yield call(() => axios.get(action.url).then((response) => response.data))
    .then((data) => {
      console.log("function*loadPeopleTilesData -> data", data)
      return data.films.map((element) => {
        return axios.get(element)
      });
    })
    .then((data) => {
      console.log("function*loadPeopleTilesData -> data", data)
      return data.species.map((element) => {
        return axios.get(element)
      });
    })
    .then((data) => {
      console.log("function*loadPeopleTilesData -> data", data)
      return data.vehicles.map((element) => {
        return axios.get(element)
      });
    });
    yield put(loadPeopleTilesDataSuccess(data)); 
  } catch (error) {
    yield put(loadPeopleTilesDataFailed(error))
  }
}