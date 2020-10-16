import initialState from "../initialState";
import { START_DATA } from "../constants/index";

const people = (state = initialState, action) => {
  switch (action.type) {
    case START_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default people;