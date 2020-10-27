import initialState from "../initialState";
import { LOAD_STARSHIPS_TILES_DATA_SUCCESS } from "../constants";

const starshipsTilesData = (state = initialState.tilesData, action) => {
  switch (action.type) {
    case LOAD_STARSHIPS_TILES_DATA_SUCCESS:
      return { ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default starshipsTilesData;