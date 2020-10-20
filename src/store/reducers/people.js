import initialState from "../initialState";
import { LOAD_PEOPLE_DATA_SUCCESS } from "../constants";

const people = (state = initialState.people, action) => {
  switch (action.type) {
    case LOAD_PEOPLE_DATA_SUCCESS:
      return { ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default people;