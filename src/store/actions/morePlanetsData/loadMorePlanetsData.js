import { LOAD_MORE_PLANETS_DATA } from '../../constants';

const loadMorePlanetsData = (page) => ({
	type: LOAD_MORE_PLANETS_DATA,
	page,
});

export default loadMorePlanetsData;
