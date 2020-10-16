import initialState from "../initialState";
import { START_DATA } from "../constants/index";

const startData = (state = initialState, action) => {
  switch (action.type) {
    case START_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default startData;