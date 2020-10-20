import initialState from "../initialState";
import { LOAD_STARSHIPS_DATA } from "../constants";

const starships = (state = initialState.starships, action) => {
  switch (action.type) {
    case LOAD_STARSHIPS_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default starships;