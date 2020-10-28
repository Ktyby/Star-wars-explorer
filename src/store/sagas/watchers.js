import { takeEvery } from 'redux-saga/effects';
import {
	LOAD_PEOPLE_DATA,
	LOAD_PLANETS_DATA,
	LOAD_STARSHIPS_DATA,
	LOAD_MORE_PEOPLE_DATA,
	LOAD_MORE_PLANETS_DATA,
	LOAD_MORE_STARSHIPS_DATA,
	LOAD_PEOPLE_TILES_DATA,
	LOAD_PLANETS_TILES_DATA,
	LOAD_STARSHIPS_TILES_DATA,
} from '../constants/index';

import {
	loadPeopleData,
	loadPlanetsData,
	loadStarshipsData,
	loadMorePeopleData,
	loadMorePlanetsData,
	loadMoreStarshipsData,
	loadPeopleTilesData,
	loadPlanetsTilesData,
	loadStarshipsTilesData,
} from './worker';

export default function* mainSaga() {
	yield takeEvery(LOAD_PEOPLE_DATA, loadPeopleData);
	yield takeEvery(LOAD_PLANETS_DATA, loadPlanetsData);
	yield takeEvery(LOAD_STARSHIPS_DATA, loadStarshipsData);
	yield takeEvery(LOAD_MORE_PEOPLE_DATA, loadMorePeopleData);
	yield takeEvery(LOAD_MORE_PLANETS_DATA, loadMorePlanetsData);
	yield takeEvery(LOAD_MORE_STARSHIPS_DATA, loadMoreStarshipsData);
	yield takeEvery(LOAD_PEOPLE_TILES_DATA, loadPeopleTilesData);
	yield takeEvery(LOAD_PLANETS_TILES_DATA, loadPlanetsTilesData);
	yield takeEvery(LOAD_STARSHIPS_TILES_DATA, loadStarshipsTilesData);
}
