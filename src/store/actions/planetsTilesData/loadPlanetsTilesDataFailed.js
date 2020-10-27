import { LOAD_PLANETS_TILES_DATA_FAILED } from "../../constants";

const loadPlanetsTilesDataFailed = (error) => ({
  type: LOAD_PLANETS_TILES_DATA_FAILED,
  payload: error,
});

export default loadPlanetsTilesDataFailed;