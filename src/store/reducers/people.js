import initialState from "../initialState";
import { SET_PEOPLE_DATA } from "../constants";

const people = (state = initialState.people, action) => {
  switch (action.type) {
    case SET_PEOPLE_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default people;