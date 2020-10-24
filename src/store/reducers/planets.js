import initialState from "../initialState";
import { LOAD_PLANETS_DATA_SUCCESS, LOAD_MORE_PLANETS_DATA_SUCCESS } from "../constants";

const planets = (state = initialState.planets, action) => {
  switch (action.type) {
    case LOAD_PLANETS_DATA_SUCCESS:
      return { ...state,
        data: action.payload
      };
    case LOAD_MORE_PLANETS_DATA_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload),
        nextPage: action.nextPage
      };
    default:
      return state;
  }
}

export default planets;