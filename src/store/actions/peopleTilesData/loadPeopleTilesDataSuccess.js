import { LOAD_PEOPLE_TILES_DATA_SUCCESS } from '../../constants';

const loadPeopleTilesDataSuccess = (data) => ({
	type: LOAD_PEOPLE_TILES_DATA_SUCCESS,
	payload: data,
});

export default loadPeopleTilesDataSuccess;
