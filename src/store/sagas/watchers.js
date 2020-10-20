import { takeEvery } from "redux-saga/effects";
import { 
  LOAD_PEOPLE_DATA,
  LOAD_PLANETS_DATA,
  LOAD_STARSHIPS_DATA
} from "../constants/index";

import {
  loadPeopleData,
  loadPlanetsData,
  loadStarshipsData
} from "./worker";

export function* mainSaga() {
  yield takeEvery(LOAD_PEOPLE_DATA, loadPeopleData);
  yield takeEvery(LOAD_PLANETS_DATA, loadPlanetsData);
  yield takeEvery(LOAD_STARSHIPS_DATA, loadStarshipsData);
}