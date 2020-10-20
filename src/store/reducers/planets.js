import initialState from "../initialState";
import { LOAD_PLANETS_DATA } from "../constants";

const planets = (state = initialState.planets, action) => {
  switch (action.type) {
    case LOAD_PLANETS_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default planets;