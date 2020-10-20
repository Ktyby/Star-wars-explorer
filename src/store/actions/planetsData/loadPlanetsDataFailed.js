import { LOAD_PLANETS_DATA_FAILED } from "../../constants";

const loadPlanetsDataFailed = (data) => ({
  type: LOAD_PLANETS_DATA_FAILED,
  payload: data,
});  

export default loadPlanetsDataFailed;