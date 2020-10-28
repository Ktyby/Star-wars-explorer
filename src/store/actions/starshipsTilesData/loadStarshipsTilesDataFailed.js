import { LOAD_STARSHIPS_TILES_DATA_FAILED } from '../../constants';

const loadStarshipsTilesDataFailed = (error) => ({
	type: LOAD_STARSHIPS_TILES_DATA_FAILED,
	payload: error,
});

export default loadStarshipsTilesDataFailed;
