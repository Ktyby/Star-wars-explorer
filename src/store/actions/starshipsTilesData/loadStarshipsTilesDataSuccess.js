import { LOAD_STARSHIPS_TILES_DATA_SUCCESS } from "../../constants";

const loadStarshipsTilesDataSuccess = (data) => ({
  type: LOAD_STARSHIPS_TILES_DATA_SUCCESS,
  payload: data,
});  

export default loadStarshipsTilesDataSuccess;