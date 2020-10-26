import { LOAD_PEOPLE_TILES_DATA_FAILED } from "../../constants";

const loadPeopleTilesDataFailed = (error) => ({
  type: LOAD_PEOPLE_TILES_DATA_FAILED,
  payload: error,
});

export default loadPeopleTilesDataFailed;