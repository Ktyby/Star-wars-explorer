import { LOAD_MORE_PLANETS_DATA_FAILED } from '../../constants';

const loadMorePlanetsDataFailed = (error) => ({
	type: LOAD_MORE_PLANETS_DATA_FAILED,
	payload: error,
});

export default loadMorePlanetsDataFailed;
