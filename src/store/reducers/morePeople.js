import initialState from "../initialState";
import { LOAD_MORE_PEOPLE_DATA_SUCCESS } from "../constants";

const morePeople = (state = initialState.morePeople, action) => {
  switch (action.type) {
    case LOAD_MORE_PEOPLE_DATA_SUCCESS:
      return { ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default morePeople;