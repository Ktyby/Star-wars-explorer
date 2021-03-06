import initialState from '../initialState';
import { LOAD_STARSHIPS_DATA_SUCCESS, LOAD_MORE_STARSHIPS_DATA_SUCCESS } from '../constants';

const starships = (state = initialState.starships, action) => {
	switch (action.type) {
		case LOAD_STARSHIPS_DATA_SUCCESS:
			return {
				...state,
				data: action.payload,
				nextPage: action.nextPage,
			};
		case LOAD_MORE_STARSHIPS_DATA_SUCCESS:
			return {
				...state,
				data: state.data.concat(action.payload),
				nextPage: action.nextPage,
			};
		default:
			return state;
	}
};

export default starships;
