import { API_URL } from "../../../constants";
import { LOAD_MORE_PLANETS_DATA } from "../../constants";

let pageNumber = 1;

const loadMorePlanetsData = () => ({
  type: LOAD_MORE_PLANETS_DATA,
  page: `${API_URL}/planets/?page=${++pageNumber}`,
});  

export default loadMorePlanetsData;