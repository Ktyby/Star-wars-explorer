import { LOAD_PLANETS_DATA_FAILED } from '../../constants';

const loadPlanetsDataFailed = (error) => ({
	type: LOAD_PLANETS_DATA_FAILED,
	payload: error,
});

export default loadPlanetsDataFailed;
