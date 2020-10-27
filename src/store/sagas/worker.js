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
import loadPlanetsTilesDataFailed from "../actions/planetsTilesData/loadPlanetsTilesDataFailed";
import loadPlanetsTilesDataSuccess from "../actions/planetsTilesData/loadPlanetsTilesDataSuccess";
import loadStarshipsTilesDataFailed from "../actions/starshipsTilesData/loadStarshipsTilesDataFailed";
import loadStarshipsTilesDataSuccess from "../actions/starshipsTilesData/loadStarshipsTilesDataSuccess";
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
    const peopleData = yield call(() => axios.get(action.url).then((response) => response.data));

    const filmsRequests = peopleData.films.map((element) => {
      return axios.get(element).then((response) => response.data);
    });

    const speciesRequests = peopleData.species.map((element) => {
      return axios.get(element).then((response) => response.data);
    });

    const vehiclesRequests = peopleData.vehicles.map((element) => {
      return axios.get(element).then((response) => response.data);
    });

    peopleData.homeworld = yield call(() => axios.get(peopleData.homeworld).then((response) => response.data));

    peopleData.films = yield call(() => Promise.all(filmsRequests).then((data) => data));

    peopleData.species = yield call(() => Promise.all(speciesRequests).then((data) => data));

    peopleData.vehicles = yield call(() => Promise.all(vehiclesRequests).then((data) => data));

    yield put(loadPeopleTilesDataSuccess(peopleData)); 
  } catch (error) {
    yield put(loadPeopleTilesDataFailed(error))
  }
}

export function* loadPlanetsTilesData(action) {
  try {
    const planetsData = yield call(() => axios.get(action.url).then((response) => response.data));

    const filmsRequests = planetsData.films.map((element) => {
      return axios.get(element).then((response) => response.data);
    });

    const residentsRequests = planetsData.residents.map((element) => {
      return axios.get(element).then((response) => response.data);
    });

    planetsData.films = yield call(() => Promise.all(filmsRequests).then((data) => data));

    planetsData.residents = yield call(() => Promise.all(residentsRequests).then((data) => data));

    yield put(loadPlanetsTilesDataSuccess(planetsData)); 
  } catch (error) {
    yield put(loadPlanetsTilesDataFailed(error))
  }
}

export function* loadStarshipsTilesData(action) {
  try {
    const starshipsData = yield call(() => axios.get(action.url).then((response) => response.data));

    const filmsRequests = starshipsData.films.map((element) => {
      return axios.get(element).then((response) => response.data);
    });

    const pilotsRequests = starshipsData.pilots.map((element) => {
      return axios.get(element).then((response) => response.data);
    });

    starshipsData.films = yield call(() => Promise.all(filmsRequests).then((data) => data));

    starshipsData.pilots = yield call(() => Promise.all(pilotsRequests).then((data) => data));

    yield put(loadStarshipsTilesDataSuccess(starshipsData)); 
  } catch (error) {
    yield put(loadStarshipsTilesDataFailed(error))
  }
}