import { LOAD_PLANETS_DATA_SUCCESS } from '../../constants';

const loadPlanetsDataSuccess = (data, nextPage) => ({
	type: LOAD_PLANETS_DATA_SUCCESS,
	payload: data,
	nextPage,
});

export default loadPlanetsDataSuccess;
