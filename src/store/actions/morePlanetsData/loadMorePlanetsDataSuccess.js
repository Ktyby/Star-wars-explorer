import { LOAD_MORE_PLANETS_DATA_SUCCESS } from '../../constants';

const loadMorePlanetsDataSuccess = (data, nextPage) => ({
	type: LOAD_MORE_PLANETS_DATA_SUCCESS,
	payload: data,
	nextPage,
});

export default loadMorePlanetsDataSuccess;
