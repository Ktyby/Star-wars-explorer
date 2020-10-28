import initialState from '../initialState';
import { LOAD_PEOPLE_TILES_DATA_SUCCESS } from '../constants';

const peopleTilesData = (state = initialState.tilesData, action) => {
	switch (action.type) {
		case LOAD_PEOPLE_TILES_DATA_SUCCESS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default peopleTilesData;
