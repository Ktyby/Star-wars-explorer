import initialState from "../initialState";
import { LOAD_STARSHIPS_DATA_SUCCESS } from "../constants";

const starships = (state = initialState.starships, action) => {
  switch (action.type) {
    case LOAD_STARSHIPS_DATA_SUCCESS:
      return { ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default starships;