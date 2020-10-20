import { LOAD_PLANETS_DATA } from "../../constants";

const loadPlanetsData = (data) => ({
  type: LOAD_PLANETS_DATA,
  payload: data,
});  

export default loadPlanetsData;