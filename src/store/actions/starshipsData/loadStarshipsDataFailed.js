import { LOAD_STARSHIPS_DATA_FAILED } from '../../constants';

const loadStarshipsDataFailed = (error) => ({
	type: LOAD_STARSHIPS_DATA_FAILED,
	payload: error,
});

export default loadStarshipsDataFailed;
