import initialState from "../initialState";
import { LOAD_MORE_PLANETS_DATA_SUCCESS } from "../constants";

const morePlanets = (state = initialState.morePlanets, action) => {
  switch (action.type) {
    case LOAD_MORE_PLANETS_DATA_SUCCESS:
      return { ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default morePlanets;