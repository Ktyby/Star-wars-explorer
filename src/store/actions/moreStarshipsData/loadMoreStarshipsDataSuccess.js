import { LOAD_MORE_STARSHIPS_DATA_SUCCESS } from '../../constants';

const loadMoreStarshipsDataSuccess = (data, nextPage) => ({
	type: LOAD_MORE_STARSHIPS_DATA_SUCCESS,
	payload: data,
	nextPage,
});

export default loadMoreStarshipsDataSuccess;
