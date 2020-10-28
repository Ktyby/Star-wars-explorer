import { LOAD_PEOPLE_TILES_DATA } from '../../constants';

const loadPeopleTilesData = (url) => ({
	type: LOAD_PEOPLE_TILES_DATA,
	url,
});

export default loadPeopleTilesData;
