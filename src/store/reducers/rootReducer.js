import { combineReducers } from 'redux';
import people from './people';
import planets from './planets';
import starships from './starships';
import peopleTilesData from './peopleTilesData';
import planetsTilesData from './planetsTilesData';
import starshipsTilesData from './starshipsTilesData';

const rootReducer = combineReducers({
	people,
	planets,
	starships,
	peopleTilesData,
	planetsTilesData,
	starshipsTilesData,
});

export default rootReducer;
