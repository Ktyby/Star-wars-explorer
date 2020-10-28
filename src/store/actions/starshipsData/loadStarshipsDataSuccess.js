import { LOAD_STARSHIPS_DATA_SUCCESS } from '../../constants';

const loadStarshipsDataSuccess = (data, nextPage) => ({
	type: LOAD_STARSHIPS_DATA_SUCCESS,
	payload: data,
	nextPage,
});

export default loadStarshipsDataSuccess;
