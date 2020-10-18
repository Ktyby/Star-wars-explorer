import initialState from "../initialState";
import { SET_DATA } from "../constants/index";

const people = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default people;