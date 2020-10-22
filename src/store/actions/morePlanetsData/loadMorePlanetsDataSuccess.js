import { LOAD_MORE_PLANETS_DATA_SUCCESS } from "../../constants";

const loadMorePlanetsDataSuccess = (data) => ({
  type: LOAD_MORE_PLANETS_DATA_SUCCESS,
  payload: data,
});  

export default loadMorePlanetsDataSuccess;