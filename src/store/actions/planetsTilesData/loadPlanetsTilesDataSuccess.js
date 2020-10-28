import { LOAD_PLANETS_TILES_DATA_SUCCESS } from '../../constants';

const loadPlanetsTilesDataSuccess = (data) => ({
	type: LOAD_PLANETS_TILES_DATA_SUCCESS,
	payload: data,
});

export default loadPlanetsTilesDataSuccess;
