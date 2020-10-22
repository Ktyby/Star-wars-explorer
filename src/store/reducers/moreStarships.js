import initialState from "../initialState";
import { LOAD_MORE_STARSHIPS_DATA_SUCCESS } from "../constants";

const moreStarships = (state = initialState.moreStarships, action) => {
  switch (action.type) {
    case LOAD_MORE_STARSHIPS_DATA_SUCCESS:
      return { ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default moreStarships;