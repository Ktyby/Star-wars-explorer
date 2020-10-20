import { LOAD_PLANETS_DATA_SUCCESS } from "../../constants";

const loadPlanetsDataSuccess = (data) => ({
  type: LOAD_PLANETS_DATA_SUCCESS,
  payload: data,
});  

export default loadPlanetsDataSuccess;