import initialState from "../initialState";
import { LOAD_PLANETS_DATA_SUCCESS } from "../constants";

const planets = (state = initialState.planets, action) => {
  switch (action.type) {
    case LOAD_PLANETS_DATA_SUCCESS:
      return { ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default planets;