import { LOAD_STARSHIPS_TILES_DATA } from "../../constants";

const loadStarshipsTilesData = (url) => ({
  type: LOAD_STARSHIPS_TILES_DATA,
  url,
});  

export default loadStarshipsTilesData;