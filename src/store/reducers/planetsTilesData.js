import initialState from '../initialState';
import { LOAD_PLANETS_TILES_DATA_SUCCESS } from '../constants';

const planetsTilesData = (state = initialState.tilesData, action) => {
	switch (action.type) {
		case LOAD_PLANETS_TILES_DATA_SUCCESS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default planetsTilesData;
