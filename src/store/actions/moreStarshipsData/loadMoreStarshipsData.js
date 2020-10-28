import { LOAD_MORE_STARSHIPS_DATA } from '../../constants';

const loadMoreStarshipsData = (page) => ({
	type: LOAD_MORE_STARSHIPS_DATA,
	page,
});

export default loadMoreStarshipsData;
