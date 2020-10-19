import initialState from "../initialState";
import { SET_PEOPLE_DATA } from "../constants";

const people = (state = initialState.people, action) => {
  switch (action.type) {
    case SET_PEOPLE_DATA:
      console.log('reorjwgjirewo');
      return action.payload;
    default:
      console.log("1111111111111");
      return state;
  }
}

export default people;