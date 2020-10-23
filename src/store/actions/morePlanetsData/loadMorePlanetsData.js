import { LOAD_MORE_PLANETS_DATA } from "../../constants";

let pageNumber = 1;

const loadMorePlanetsData = () => ({
  type: LOAD_MORE_PLANETS_DATA,
  page: `https://swapi.dev/api/planets/?page=${++pageNumber}`,
});  

export default loadMorePlanetsData;